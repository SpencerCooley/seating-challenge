<template>
 <q-page class="page-wrapper">
  <div class="container"> 
    <q-spinner-dots color="primary" size="4em" />
  </div>
 </q-page>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter();

// send back to seating page if there is no guest data 
// we can't show itinerary if guests have not been generated yet.
router.push('/seating');


</script>


