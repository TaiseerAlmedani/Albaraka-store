<template>
  <v-app-bar elevation="5" flat>
    <v-app-bar-title>
     <v-icon icon="mdi-circle-slice-4" />
    </v-app-bar-title>
      <v-btn to="/" exact>{{ $t('appbar.home') }}</v-btn>
      <v-btn to="/about">{{ $t('appbar.about') }}</v-btn>
      <v-btn to="/products">products</v-btn>
      <v-btn @click="changeLocale"><v-icon>
        {{ i18n.global.locale === 'ar' ? 'mdi mdi-alpha-e' : 'mdi mdi-abjad-arabic' }}
      </v-icon></v-btn>
      <v-btn @click="toggleTheme"><v-icon>mdi mdi-theme-light-dark</v-icon></v-btn>
      <v-btn to="/cart">
         <v-badge :content="cart.items.length" color="primary" floating>
          <v-icon size="large">mdi-cart</v-icon>
        </v-badge>
      </v-btn>
  </v-app-bar>
</template>

<script setup>
import { useCartStore } from '@/stores/cart';
import { useTheme , useLocale } from 'vuetify'
import i18n from '@/plugins/i18n'

const cart  = useCartStore()
const theme = useTheme()
const { current } = useLocale()


function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}

function changeLocale() {
  current.value      = current.value      === 'ar' ? 'en' : 'ar'
  i18n.global.locale = i18n.global.locale === 'ar' ? 'en' :'ar'
}
</script>
