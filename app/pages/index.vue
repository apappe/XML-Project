<template>
  <div class="container">
    Cześć Wika, to są testowe kafelki:
    <div class="d-flex flex-row mb-4">
      <EventTiles/>
    </div>
    <BasicButton text="Przycisk testowy" icon="mdi-arrow-right"/>
  </div>
</template>

<script>
definePageMeta({
  layout: 'default',
});
</script>

<style lang="css" scoped>
.container {
  display: block;
  width: 100%;
  gap: 16px;
  margin: 16px;
}
</style>
