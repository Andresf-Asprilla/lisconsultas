
<template>
  <div class="home">
    <h1>Bienvenido a LisConsultas</h1>
    <p>
      LisConsultas es un sistema de gestión de laboratorio diseñado para facilitar la
      administración de pacientes y resultados de pruebas de laboratorio.
    </p>

    <div class="features">
      <h2>Características Principales</h2>
      <ul>
        <li>
          <font-awesome-icon icon="check-circle" class="icon" /> Listado de pacientes
        </li>
        <li>
          <font-awesome-icon icon="check-circle" class="icon" /> Ingreso y edición de datos de pacientes
        </li>
        <li>
          <font-awesome-icon icon="check-circle" class="icon" /> Consulta de resultados de pruebas
        </li>
      </ul>
    </div>

    <div class="contact-info">
      <h2>Contacto</h2>
      <p>Si tienes alguna pregunta, no dudes en contactarnos:</p>
      <p>Email: info@lisconsultas.com</p>
    </div>
  </div>
</template>

<script>

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'; 

export default {
  name: 'HomeView',
  components: {
    FontAwesomeIcon 
  }
}
</script>

<style scoped>
.home {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  text-align: center;
}

.features {
  margin-top: 30px;
}

.features ul {
  list-style-type: none;
  padding: 0;
}

.icon {
  margin-right: 8px;
  color: #6aa9e9; /* Color de los iconos */
}
</style>