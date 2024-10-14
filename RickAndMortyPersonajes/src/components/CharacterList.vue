<template>
  <div class="skibidi-container">
    <h1 class="title">Rick and Morty Characters</h1>
    
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Search by name..."
        @input="fetchCharacters"
        class="search-input"
      />
      
      <select v-model="selectedStatus" @change="fetchCharacters" class="status-filter">
        <option value="">All</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </div>

    <div v-if="characters.length === 0" class="loading">
      Loading characters...
    </div>
    
    <div class="character-list">
      <div v-for="character in filteredCharacters" :key="character.id" class="character-card">
        <img :src="character.image" :alt="character.name" />
        <h3>{{ character.name }}</h3>
        <p>Status: <span :class="character.status.toLowerCase()">{{ character.status }}</span></p>
      </div>
    </div>

    <div class="pagination">
      <button @click="prevPage" :disabled="!prevUrl" class="pagination-button">Previous</button>
      <button @click="nextPage" :disabled="!nextUrl" class="pagination-button">Next</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      characters: [],
      currentPage: 1,
      nextUrl: null,
      prevUrl: null,
      searchQuery: '',
      selectedStatus: '',
    };
  },
  mounted() {
    this.fetchCharacters();
  },
  computed: {
    filteredCharacters() {
      return this.characters.filter(character => {
        const matchesName = character.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const matchesStatus = this.selectedStatus ? character.status.toLowerCase() === this.selectedStatus : true;
        return matchesName && matchesStatus;
      });
    }
  },
  methods: {
    async fetchCharacters() {
      try {
        // Realizar la solicitud directamente a la API externa
        const response = await axios.get(`https://rickandmortyapi.com/api/character`, {
          params: {
            page: this.currentPage,
            name: this.searchQuery || undefined,
            status: this.selectedStatus || undefined,
          },
        });
        
        this.characters = response.data.results;
        this.nextUrl = response.data.info.next;
        this.prevUrl = response.data.info.prev;
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    },
    nextPage() {
      if (this.nextUrl) {
        this.currentPage++;
        this.fetchCharacters();
      }
    },
    prevPage() {
      if (this.prevUrl) {
        this.currentPage--;
        this.fetchCharacters();
      }
    }
  },
};
</script>

<style scoped>
.skibidi-container {
  background-color: #f5f5f5; /* Fondo claro */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;
}

.title {
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Comic Sans MS', cursive, sans-serif; /* Fuente divertida */
  color: #ff007f; /* Color vibrante */
  font-size: 2.5rem;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-input {
  padding: 10px;
  width: 250px;
  border: 2px solid #ff007f; /* Color de borde */
  border-radius: 5px;
  margin-right: 10px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.search-input:focus {
  border-color: #ff5e3a; /* Cambio de color al enfocarse */
}

.status-filter {
  padding: 10px;
  border: 2px solid #ff007f; /* Color de borde */
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.status-filter:focus {
  border-color: #ff5e3a; /* Cambio de color al enfocarse */
}

.character-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.character-card {
  display: inline-block;
  margin: 15px;
  padding: 15px;
  text-align: center;
  border: 2px solid #eaeaea;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #ffffff; /* Fondo blanco para tarjetas */
  width: 200px;
}

.character-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
}

.character-card img {
  width: 100%;
  border-radius: 10px;
}

.character-card h3 {
  margin: 10px 0;
  font-size: 1.5rem;
  color: #ff007f; /* Color vibrante */
}

.character-card p {
  margin: 5px 0;
  font-size: 1rem;
}

.character-card .alive {
  color: green;
}

.character-card .dead {
  color: red;
}

.character-card .unknown {
  color: gray;
}

.pagination {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.pagination-button {
  margin: 0 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #ff007f; /* Color de fondo vibrante */
  color: white;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.pagination-button:hover:not(:disabled) {
  background-color: #ff5e3a; /* Cambio de color al pasar el mouse */
}
</style>
