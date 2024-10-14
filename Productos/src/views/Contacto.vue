<template>
  <div class="contacto">
    <h1>Contacto</h1>
    <p>Si tienes alguna pregunta, no dudes en contactarnos.</p>
    <form @submit.prevent="enviarFormulario">
      <input type="text" placeholder="Tu nombre" v-model="nombre" required />
      <input type="email" placeholder="Tu email" v-model="email" required />
      <textarea placeholder="Tu mensaje" v-model="mensaje" required></textarea>
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'VistaContacto',
  data() {
    return {
      nombre: '',
      email: '',
      mensaje: ''
    };
  },
  methods: {
    enviarFormulario() {
      // Aquí puedes agregar lógica para enviar el formulario
      alert(`Mensaje enviado por ${this.nombre}`);
      this.nombre = '';
      this.email = '';
      this.mensaje = '';
    }
  }
}
</script>

<style scoped>
.contacto {
  padding: 20px;
  max-width: 600px;
  margin: auto;
  text-align: center;
}
input, textarea {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
