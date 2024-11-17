<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/settings">Settings</router-link>
    </nav>
    <router-view></router-view> <!-- Displays the page component based on the route -->
  </div>
</template>

<script setup>
// You can add logic for the app here
</script>
