<template>
  <section class="text-center gradient-background">
    <div class="container py-4">
      <!-- Título principal -->
      <h2 class="fw-bold mb-5 text-light">Consultar Información del Paciente</h2>

      <!-- Imagen decorativa -->
      <div class="image-container mb-5">
        <img src="@/assets/lis2.jpeg" alt="Consulta médica" class="img-fluid rounded-circle shadow">
      </div>

      <!-- Campo de entrada para el número de documento -->
      <div class="form-outline mb-4">
        <i class="fas fa-id-card icon"></i> <!-- Icono de documento -->
        <input
          type="tel"
          id="documentInput"
          class="form-control"
          v-model="documentId"
          placeholder="Número de Documento de Identidad"
          required
        />
        <label class="form-label text-light" for="documentInput">Número de Documento de Identidad</label>
      </div>

      <!-- Botón de consulta -->
      <button type="button" class="btn btn-primary" @click="fetchPatientData">
        <i class="fas fa-search"></i> Consultar
      </button>

      <!-- Mostrar datos del paciente -->
      <div v-if="patientData" class="mt-4 text-light">
        <h3 class="section-title">Datos del Paciente:</h3>
        <p><strong><i class="fas fa-user"></i> Nombres:</strong> {{ patientData.name }}</p>
        <p><strong><i class="fas fa-user"></i> Apellidos:</strong> {{ patientData.lastname }}</p>
        <p><strong><i class="fas fa-birthday-cake"></i> Edad:</strong> {{ patientData.age }}</p>
        <p><strong><i class="fas fa-venus-mars"></i> Género:</strong> {{ patientData.gender }}</p>
        <p><strong><i class="fas fa-hospital"></i> EPS:</strong> {{ patientData.epsName }}</p>

        <h3 class="section-title">Resultados del Perfil Lipídico:</h3>
        <p><strong><i class="fas fa-vial"></i> HDL:</strong> {{ lipidProfile.hdl }}</p>
        <p><strong><i class="fas fa-vial"></i> LDL:</strong> {{ lipidProfile.ldl }}</p>
        <p><strong><i class="fas fa-vial"></i> Triglicéridos:</strong> {{ lipidProfile.trig }}</p>
        <p><strong><i class="fas fa-vial"></i> Colesterol Total:</strong> {{ lipidProfile.cholt }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      documentId: '',
      patientData: null,
      lipidProfile: {},
    };
  },
  methods: {
    fetchPatientData() {
      // Reemplaza la URL con tu API real
      fetch(`https://localhost/lisapi/?consultarPaciente&document=${this.documentId}`)
        .then((response) => response.json())
        .then((data) => {
          
          this.patientData = data.patient; 
          this.lipidProfile = data.lipidProfile; // Asegúrate de que la estructura coincida con tu respuesta
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Error al obtener los datos del paciente.");
        });
    },
  },
};
</script>

<style scoped>

.gradient-background {
  background: linear-gradient(to right, #011438, #2464d4); /* Degradado azul oscuro */
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
}


h2 {
  color: #ffffff;
  font-size: 2rem;
  margin-bottom: 30px;
}

.image-container img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}


.form-control {
  padding-left: 2.5rem; /* Espacio para el ícono */
  border-radius: 20px;
}


.icon {
  position: absolute;
  margin-left: 10px;
  margin-top: 10px;
  color: #6c757d;
  font-size: 1.5rem;
}

h3.section-title {
  color: #ffffff;
  margin-top: 30px;
  font-size: 1.5rem;
}


p {
  margin-bottom: 10px;
}

.btn-primary {
  background-color: #e52c1f;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 1.1rem;
}


@media (max-width: 576px) {
  .image-container img {
    width: 200px;
    height: 200px;
  }

  h2 {
    font-size: 1.5rem;
  }

  h3.section-title {
    font-size: 1.2rem;
  }

  .btn-primary {
    font-size: 1rem;
    padding: 8px 16px;
  }
}
</style>