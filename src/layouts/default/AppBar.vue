<template>
  <v-app-bar elevation="5" flat>
    <v-app-bar-title>
     <v-icon icon="mdi-circle-slice-4" />
    </v-app-bar-title>
      <v-btn to="/" exact>Home</v-btn>
      <v-btn to="/about">About</v-btn>
      <v-btn to="/products">products</v-btn>
      <v-btn>Ar</v-btn>
      <v-btn @click="toggleTheme"><v-icon>mdi mdi-theme-light-dark</v-icon></v-btn>
      <v-btn to="/cart" icon="mdi-cart"></v-btn>
  </v-app-bar>
</template>

<script setup>
import { useTheme } from 'vuetify'
// console.log(useTheme);
const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
