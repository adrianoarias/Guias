<template>
  <div>
    <h1>Entretenimiento</h1>
    <MainContent category="Entretenimiento" />
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'

export default {
  name: 'VistaEntretenimiento',  // Cambia a un nombre multi-palabra
  components: {
    MainContent
  }
}
</script>
