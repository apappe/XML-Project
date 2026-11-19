<template>
  <v-card
      v-for="event in events"
      :key="event.id"
      class="event-tile ma-2 rounded-xl"
      variant="flat"
      color="secondary"
      width="350"
      hover>
    <div class="d-flex flex-row align-end justify-space-between pa-4 ga-2">
      <p class="font-weight-bold">{{ event.date }}</p>
      <div>
        <p>{{ event.title }}</p>
        <p>{{ event.location }}</p>
      </div>
      <p>
        {{ event.price }} {{ event.currency }}
      </p>
      <v-card-actions>
        <v-btn
          color="accent"
          variant="outlined"
          size="small"
          density="comfortable"
          icon>
          <v-icon color="accent">
            mdi-arrow-right
          </v-icon>
        </v-btn>
      </v-card-actions>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
const events = [
  {
    title: 'Event 1',
    subtitle: 'Opis eventu 1',
    id: 1234,
    date: '06/01',
    location: 'Warszawa',
    price: '25',
    currency: '€',
  },
  {
    title: 'Event 2',
    subtitle: 'Opis eventu 2',
    id: 5678,
    date: '06/15',
    location: 'Kraków',
    price: '30',
    currency: '€',
  },
  {
    title: 'Event 3',
    subtitle: 'Opis eventu 3',
    id: 9101,
    date: '07/01',
    location: 'Gdańsk',
    price: '20',
    currency: '€',
  },
];
</script>

<style lang="css" scoped>
.event-tile {
  border: 1px solid rgb(var(--v-theme-primary));
  box-shadow: 0px 0px 0px rgb(var(--v-theme-primary));
  transition: box-shadow 0.3s ease, border-color 0.3s ease;

  &:hover {
    border-color: rgb(var(--v-theme-accent));
    box-shadow: 0px 0px 4px rgb(var(--v-theme-accent));
  }
}
</style>