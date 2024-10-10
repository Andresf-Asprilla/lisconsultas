<template>
  <section class="text-center">
    <div class="container py-4">
      <h2 class="fw-bold mb-5">Consultar Información del Paciente</h2>
      <div class="form-outline mb-4">
        <input
          type="tel"
          id="documentInput"
          class="form-control"
          v-model="documentId"
          placeholder="Número de Documento de Identidad"
          required
        />
        <label class="form-label" for="documentInput">Número de Documento de Identidad</label>
      </div>
      <button type="button" class="btn btn-primary" @click="fetchPatientData">
        Consultar
      </button>

      <div v-if="patientData" class="mt-4">
        <h3>Datos del Paciente:</h3>
        <p><strong>Nombres:</strong> {{ patientData.name }}</p>
        <p><strong>Apellidos:</strong> {{ patientData.lastname }}</p>
        <p><strong>Edad:</strong> {{ patientData.age }}</p>
        <p><strong>Género:</strong> {{ patientData.gender }}</p>
        <p><strong>EPS:</strong> {{ patientData.epsName }}</p>

        <h3>Resultados del Perfil Lipídico:</h3>
        <p><strong>HDL:</strong> {{ lipidProfile.hdl }}</p>
        <p><strong>LDL:</strong> {{ lipidProfile.ldl }}</p>
        <p><strong>TRIG:</strong> {{ lipidProfile.trig }}</p>
        <p><strong>CHOLT:</strong> {{ lipidProfile.cholt }}</p>
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
          // Asumimos que la respuesta contiene los datos del paciente y el perfil lipídico
          this.patientData = data.patient; // Asegúrate de que la estructura coincida con tu respuesta
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
.container {
  max-width: 600px;
  margin: auto;
}

.form-outline {
  margin-bottom: 20px;
}
</style>