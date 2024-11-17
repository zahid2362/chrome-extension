<template>
    <div>
      <h1>Home Page</h1>
      <p>Welcome to the Home Page of the extension!</p>
      {{  getStorageData() }}
    </div>
  </template>
  
<script setup>

  const getStorageData = () =>{
    console.log("asdf")
    return "test"
  }

</script>
  