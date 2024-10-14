<template>
  <div>
    <h1>Cultura</h1>
    <MainContent category="Cultura" />
  </div>
</template>

<script>
import MainContent from '../components/MainContent.vue'

export default {
  name: 'VistaCultura',  // Cambia a un nombre multi-palabra
  components: {
    MainContent
  }
}
</script>
