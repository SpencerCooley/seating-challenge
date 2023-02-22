<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>        
        <q-toolbar-title>
        Care Validate Code Challenge
        </q-toolbar-title>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
</script>
<style lang="scss">
.page-wrapper {
    background-color:#f1f1f1;
    height:100%;
    margin-left:40px;
    margin-right: 40px;
    padding-top:40px;
    padding-left:20px;
    padding-right: 20px;

    h1, h2, h3, h4, h5 {
      margin-top:0px;
    }
  }
</style>
