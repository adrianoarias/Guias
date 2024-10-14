<template>
  <main>
    <h2>{{ category }}</h2>
    <div class="filter-controls">
      <label for="filter">Filtrar por:</label>
      <select id="filter" v-model="selectedFilter" @change="applyFilter">
        <option value="all">Todos</option>
        <option value="Entretenimiento">Entretenimiento</option>
        <option value="Tecnología">Tecnología</option>
        <option value="Cultura">Cultura</option>
      </select>
    </div>
    <div class="image-gallery">
      <div v-for="item in filteredItems" :key="item.id" class="item">
        <img :src="'https://picsum.photos/300/200?random=' + item.id" :alt="item.name">
        <p>{{ item.name }} - {{ item.category }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    category: {
      type: String,
      default: 'Todos'
    }
  },
  data() {
    return {
      selectedFilter: 'all',
      items: [
        { id: 1, name: 'Producto 1', category: 'Entretenimiento' },
        { id: 2, name: 'Producto 2', category: 'Tecnología' },
        { id: 3, name: 'Producto 3', category: 'Cultura' },
        { id: 4, name: 'Producto 4', category: 'Entretenimiento' },
        { id: 5, name: 'Producto 5', category: 'Tecnología' },
        { id: 6, name: 'Producto 6', category: 'Cultura' },
        { id: 7, name: 'Producto 7', category: 'Entretenimiento' },
        { id: 8, name: 'Producto 8', category: 'Tecnología' },
        { id: 9, name: 'Producto 9', category: 'Cultura' },
      ]
    };
  },
  computed: {
    filteredItems() {
      if (this.selectedFilter === 'all') {
        return this.items;
      }
      return this.items.filter(item => item.category === this.selectedFilter);
    }
  },
  methods: {
    applyFilter() {
      // El filtro se actualiza automáticamente
    }
  }
}
</script>

<style scoped>
.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  text-align: center;
}

img {
  max-width: 300px;
}

.filter-controls {
  margin-bottom: 20px;
}
</style>
