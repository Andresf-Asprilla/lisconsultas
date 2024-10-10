<template>
  <div class="home">
    <div class="container text-center mt-5">
      <div class="row align-items-center">
        <!-- Imagen de bienvenida -->
        <div class="col-md-8"> <!-- Columna más grande -->
          <img src="@/assets/lab1.jpeg" alt="Bienvenida a LisConsultas" class="img-fluid rounded" />
        </div>
        <!-- Texto descriptivo en un cuadro -->
        <div class="col-md-4"> <!-- Columna más pequeña -->
          <div class="custom-edit-card">
            <div class="card-body2">
              <p class="lead">
                LisConsultas es un sistema de gestión de laboratorio diseñado para facilitar la
                administración de pacientes y resultados de pruebas de laboratorio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Características Principales -->
      <div class="features mt-5">
        <div class="row">
          <div class="col-md-4">
            <div
              class="card text-center mb-4"
              @mouseenter="activeDescription = 'patients'"
              @mouseleave="activeDescription = null"
            >
              <div class="card-body">
                <font-awesome-icon :icon="['fas', 'book-medical']" class="icon large-icon" />
                <h5 class="card-title">Listado de pacientes</h5>
              </div>
            </div>
            <div v-if="activeDescription === 'patients'" class="description">
              <p>Accede al listado completo de pacientes, donde podrás visualizar y gestionar sus datos personales y resultados de pruebas.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card text-center mb-4"
              @mouseenter="activeDescription = 'edit'"
              @mouseleave="activeDescription = null"
            >
              <div class="card-body">
                <font-awesome-icon :icon="['fas', 'user-edit']" class="icon large-icon" />
                <h5 class="card-title">Ingreso y edición de datos</h5>
              </div>
            </div>
            <div v-if="activeDescription === 'edit'" class="description">
              <p>Permite ingresar nuevos datos de pacientes y editar la información existente de manera sencilla.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div
              class="card text-center mb-4"
              @mouseenter="activeDescription = 'results'"
              @mouseleave="activeDescription = null"
            >
              <div class="card-body">
                <font-awesome-icon :icon="['fas', 'clipboard-list']" class="icon large-icon" />
                <h5 class="card-title">Consulta de resultados</h5>
              </div>
            </div>
            <div v-if="activeDescription === 'results'" class="description">
              <p>Consulta y visualiza los resultados de pruebas de laboratorio de los pacientes de manera rápida y eficiente.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

export default {
  name: 'HomeView',
  components: {
    FontAwesomeIcon,
  },
  data() {
    return {
      activeDescription: null, // Almacena la opción activa
    };
  },
};
</script>

<style scoped>
.home {
  background-color: #44617a; /* Color de fondo general */
  color: #332;
  padding: 20px;
}

.img-fluid {
  max-height: 500px; /* Limitar la altura de la imagen */
  width: 100%; /* Asegúrate de que ocupe todo el ancho del contenedor */
  object-fit: cover; /* Mantiene la proporción de la imagen */
}

.icon {
  margin-right: 8px;
  color: #6aa9e9; /* Color de los iconos */
}

.large-icon {
  font-size: 3rem;
  margin-bottom: 10px; /* Espacio debajo del icono */
}

.card {
  border: 1px solid #dee2e6; /* Borde de las tarjetas */
  border-radius: 0.5rem; /* Bordes redondeados */
  padding: 20px;
  margin-top: 15px; /* Espacio superior para separar de la imagen */
  background-color: #0a0231; /* Color de fondo de la tarjeta */
  color: #ffffff;
}

.card-body {
  padding: 20px; /* Ajustar el padding del cuerpo de la tarjeta */
}
.card-body2 {
  padding: 10px; /* Ajustar el padding del cuerpo de la tarjeta */
  color: #ffffff; /* Cambia este color al que prefieras */
  font-size: 0.9rem; /* Ajusta el tamaño de la letra aquí si lo deseas */

}

.card:hover {
  transform: scale(1.05); /* Efecto de aumento al pasar el mouse */
}

.description {
  margin-top: 10px;
  font-size: 1rem;
  color: #030809; /* Color del texto de descripción */
}
.custom-edit-card {
  background-color: #44617a; /* Color de fondo específico para la tarjeta de edición */
  /* Puedes añadir más estilos si lo deseas */
}
</style>