<template>
  <q-page class="page-wrapper itinerary-wrap">
    <q-card flat bordered class="my-card" v-if="guest">
      <q-card-section>
        <div class="text-h5">Your Itinerary</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <div class="text-h6">Guest Name: {{ guest.name }}</div>
        <div class="text-h7" v-if="guest.companions">
          + {{ guest.companions }} companions
        </div>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div class="text-h6">Package Name: {{ packageName }}</div>
        <div class="text-h6">
          Seating:
          <q-chip
            size="18px"
            style="margin-right: 5px"
            v-for="seat in seatingArrangement"
            v-bind:key="seat"
            class="seat"
            >{{ seat }}</q-chip
          >
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { useGuestStore } from '../stores/guest';
import { ref, computed, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const store = useGuestStore();
const route = useRoute();
const router = useRouter();

// send back to seating page if there is no guest data
// we can't show itinerary if guests have not been generated yet.
if (!store.guestList.length) {
  router.push('/seating');
}

const guests = ref(store.guestList);
const seating = ref(store.seatingChart);
const packages = ref(store.packages);

const guest = computed(() => {
  return guests.value[route.params.id];
});

const packageName = computed(() => {
  return packages.value[guest.value.packageID];
});

// returns an array with seat numbers for the guest and their companions
const seatingArrangement = computed(() => {
  const seats = [];
  // loop through
  for (let row in seating.value) {
    // check each seat in the row
    for (let seat in seating.value[row]) {
      if (seating.value[row][seat] === guest.value.id) {
        let seatNumber = parseInt(seat) + 1;
        seats.push(row + seatNumber);
      }
    }
    // stop looping after it finds all the seats.
    if (guest.value.companions + 1 === seats.length) {
      break;
    }
  }
  return seats;
});

onMounted(() => {
  guests.value = store.guestList;
  seating.value = store.seatingChart;
});
</script>
