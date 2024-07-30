<script setup>
  import Dashboard from '../../components/sqadmin/Dashboard.vue'
  import UserTable from '../../components/sqadmin/UserTable.vue'
  
   definePageMeta({
    layout: 'admin'
   })
</script>
<template>
  <Dashboard />
   <UserTable />
</template>