<template>
  <main>
    <h2>Bienvenido a Nuestro Sitio</h2>
    <p>Aquí puedes explorar nuestros productos destacados.</p>

    <div class="filtro">
      <label for="categoria">Filtrar por categoría:</label>
      <select id="categoria" v-model="categoriaSeleccionada">
        <option value="">Todas</option>
        <option v-for="categoria in categorias" :key="categoria" :value="categoria">{{ categoria }}</option>
      </select>
    </div>

    <div class="image-gallery">
      <div class="product-card" 
           v-for="(producto, index) in productosFiltrados" 
           :key="index">
        <img :src="'https://picsum.photos/300/200?random=' + index" :alt="'Imagen ' + index">
        <h3>{{ producto.nombre }}</h3>
        <p class="categoria">{{ producto.categoria }}</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'VistaInicio',
  data() {
    return {
      // Nombres de productos y sus categorías
      productos: [
        { nombre: 'Cámara Digital', categoria: 'Tecnología' },
        { nombre: 'Coche de Juguete', categoria: 'Entretenimiento' },
        { nombre: 'Libro de Historia', categoria: 'Cultura' },
        { nombre: 'Teléfono Inteligente', categoria: 'Tecnología' },
        { nombre: 'Puzzles', categoria: 'Entretenimiento' },
        { nombre: 'Documental sobre Naturaleza', categoria: 'Cultura' },
        { nombre: 'Auriculares', categoria: 'Tecnología' },
        { nombre: 'Juego de Mesa', categoria: 'Entretenimiento' },
        { nombre: 'Novela Clásica', categoria: 'Cultura' },
        { nombre: 'Consola de Videojuegos', categoria: 'Entretenimiento' },
        { nombre: 'Laptop', categoria: 'Tecnología' },
        { nombre: 'Plato de Cerámica', categoria: 'Cultura' },
      ],
      categorias: ['Entretenimiento', 'Tecnología', 'Cultura'],
      categoriaSeleccionada: '',
    };
  },
  computed: {
    productosFiltrados() {
      if (this.categoriaSeleccionada) {
        return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
      }
      return this.productos;
    }
  },
}
</script>

<style scoped>
main {
  padding: 20px;
  margin: 0;
  text-align: center;
}

.filtro {
  margin-bottom: 20px;
}

.filtro label {
  margin-right: 10px;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
}

.product-card:hover {
  transform: scale(1.05);
}

.product-card img {
  width: 100%;
  height: auto;
}

.product-card h3 {
  margin: 10px 0;
  font-size: 1.5em;
}

.categoria {
  color: #666;
  font-style: italic;
}
</style>
