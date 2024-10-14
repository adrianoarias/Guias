<template>
  <nav>
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/sobre-nosotros">Sobre Nosotros</router-link></li>
      <li><router-link to="/contacto">Contacto</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: #333;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  margin: 0 15px;
}

a {
  color: white;
  text-decoration: none;
  padding: 14px 20px;
  display: block;
  transition: background-color 0.3s;
}

a:hover {
  background-color: #575757;
}
</style>
