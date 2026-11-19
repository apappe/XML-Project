<template>
  <v-app class="overflow-y-auto">
    <v-app-bar
      class="nav-bar w-100 px-4"
      color="background"
      density="compact"
    >
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="accent"
        align-tabs="center"
      >
        <v-tab value="0" to="/">
          <v-icon icon="mdi-home" class="mr-2"/>
          LOBBY
        </v-tab>
      </v-tabs>
    </v-app-bar>
    <v-navigation-drawer
      :rail="false"
      temporary
    >
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="LOBBY"
          to="/"
        />
      </v-list>
    </v-navigation-drawer>
    <v-main class="h-screen pt-12 overflow-x-auto">
      <v-container
        class="h-100"
        fluid
      >
        <slot />
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const tab = ref(0);
</script>

<style lang="css" scoped>
.nav-bar {

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: repeating-radial-gradient(rgba(197, 43, 255, 1) 0%, rgba(197, 43, 255, 0.5) 20%, rgba(197, 43, 255, 1) 50%);
    box-shadow: 0 0 2px rgba(197, 43, 255, 0.5);
  }
}
</style>
