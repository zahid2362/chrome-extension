<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/settings">Settings</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script setup></script>
<style>
#app {
    text-align: center;
    margin-top: 20px;
    min-width: 350px;
}
</style>
