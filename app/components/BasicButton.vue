<template>
  <v-btn :color="color" class="basic-btn">
    <v-icon v-if="icon" :icon="icon" class="mr-2"/>
    {{ text }}
  </v-btn>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useTheme } from 'vuetify';

const props = withDefaults(defineProps<{
  text?: string;
  icon?: string;
  color?: string;
}>(), {
  text: '',
  icon: '',
  color: 'accent',
});

const color = props.color || 'accent';
const theme = useTheme();

const shadowColor = computed(() => (
  theme.current.value.colors[color]
  || color
));
</script>

<style lang="css" scoped>
.basic-btn {
  border-radius: 50px;

  &:hover {
    box-shadow: 0px 0px 12px v-bind(shadowColor);
  }
}
</style>