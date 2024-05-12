<script setup>
import { RouterView } from 'vue-router';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderComponent />
    <div class="flex">
      <SidebarComponent class="w-1/6" /> <!-- Modify the width here -->
      <div class="w-5/6"> <!-- Modify the width here -->
        <RouterView />
      </div>
    </div>
    <LayoutFooter />
  </div>
</template>
