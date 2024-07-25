import { google } from 'googleapis';

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    event.node.res.statusCode = 405;
    return { status: 405, message: 'Method Not Allowed' };
  }

  const body = await readBody(event);
  const { selectTraining, fullName, userEmail, noWa } = body;

  //const config = useRuntimeConfig().public;
  //const { SPREAD_SHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY } = config;
  const SPREAD_SHEET_ID = process.env.SQILE_SPREADSHEET_ID
  const GOOGLE_CLIENT_EMAIL = process.env.SQILE_GOOGLE_CLIENT_EMAIL
  const GOOGLE_PRIVATE_KEY = process.env.SQILE_GOOGLE_PRIVATE_KEY

  if (!SPREAD_SHEET_ID || !GOOGLE_CLIENT_EMAIL || !GOOGLE_PRIVATE_KEY) {
    console.error('Missing configuration for Google Sheets API');
    event.node.res.statusCode = 500;
    return { status: 500, message: 'Missing configuration for Google Sheets API' };
  }

  const auth = new google.auth.JWT(
    GOOGLE_CLIENT_EMAIL,
    null,
    GOOGLE_PRIVATE_KEY,
    ['https://www.googleapis.com/auth/spreadsheets']
  );
  
  const sheets = google.sheets({ version: 'v4', auth });

  console.log("sheets: ", sheets)
  
  const range = 'Sheet1!A2:D2'; // Adjust this range as necessary
  const resource = {
    values: [[selectTraining, fullName, userEmail, noWa]],
  };

  try {
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREAD_SHEET_ID,
      range: range,
      valueInputOption: 'RAW',
      resource: resource,
    });
    return response.data;
  } catch (error) {
    console.error('Error writing to Google Sheet:', error);
    event.node.res.statusCode = 500;
    return { status: 500, message: 'Unable to write data to Google Sheet' };
  }
});
