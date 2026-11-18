import { createVuetify } from 'vuetify';

export const mainTheme = {
  colors: {
    primary: '#C52BFF',
    secondary: '#151124',
    accent: '#B8FF27',
    error: '#B3261E',
    background: '#080711',
  },
};

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'myTheme',
      themes: {
        myTheme: {
          colors: mainTheme.colors,
        },
      },
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
