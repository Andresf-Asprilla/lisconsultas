<template>
  <div class="home">
    <div class="container text-center mt-5">
      <div class="row align-items-center">
        <!-- Carrusel de Bootstrap reemplazando la imagen estática -->
        <div class="col-md-8">
          <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src="@/assets/lab1.jpeg" class="d-block w-100 " alt="KFC">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/IMG-20241010-WA0009.jpg" class="d-block w-100 " alt="KFC">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/IMG-20241010-WA0008.jpg" class="d-block w-100" alt="La Panadería">
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src="@/assets/IMG-20241010-WA0013.jpg" class="d-block w-100 " alt="Pizzería">
              </div>
              

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <!-- Texto descriptivo en un cuadro -->
        <div class="col-md-4" style="background-color: #2a6db5;">
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

.carousel-item img {
  height: 500px; /* Puedes ajustar la altura según tus necesidades */
  width: 100%; /* La imagen ocupará todo el ancho del carrusel */
  object-fit: contain; /* Ajusta la imagen dentro del contenedor sin recortar */
  padding: 0; /* Elimina cualquier padding innecesario */
  border-radius: 0; /* Sin bordes redondeados */
  background-color: #2a6db5;
}

#carouselExampleInterval {
  max-width: 800px; /* Ancho máximo del carrusel */
  margin: auto; /* Centra el carrusel horizontalmente */
  border-radius: 10px; /* Bordes redondeados del carrusel */
  overflow: hidden; /* Esconde cualquier contenido que sobresalga */
  box-shadow: 0 0 50px rgba(0, 0, 0, 0.2); /* Sombra para darle profundidad al carrusel */
  border-color: #ffffff;
}

.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: #3b0fec80; /* Fondo semitransparente para los controles */
  border-radius: 50%; /* Controles redondeados */
}

.carousel-control-prev-icon:hover,
.carousel-control-next-icon:hover {
  background-color: #3b0fec80; /* Cambia el color de los controles al pasar el mouse */
}

</style>