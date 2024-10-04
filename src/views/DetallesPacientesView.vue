<template>
  <div class="container">
    <h1 class="text-center my-4">{{ paciente.name }} {{ paciente.lastname }}</h1>
    <div class="accordion" id="accordionPanelsStayOpenExample" style="max-width: 1000px; margin: auto;">
      <div v-for="(item, index) in pacientePrueba" :key="index" class="accordion-item">
        <h2 class="accordion-header" :id="'panelsStayOpen-heading' + index">
          <button class="accordion-button" type="button"
                  :data-bs-toggle="'collapse'"
                  :data-bs-target="'#panelsStayOpen-collapse' + index"
                  aria-expanded="true"
                  :aria-controls="'panelsStayOpen-collapse' + index">
            Registro Número: {{ index + 1 }}
          </button>
        </h2>
        <div :id="'panelsStayOpen-collapse' + index"
             class="accordion-collapse collapse show"
             :aria-labelledby="'panelsStayOpen-heading' + index">
          <div class="accordion-body">
            <h2>Perfil Lipídico</h2>
            <div class="perfil-lipidico">
              <table>
                <thead>
                  <tr>
                    <th>Prueba</th>
                    <th>Descripción</th>
                    <th>Valor</th>
                    <th>Unidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Colesterol Total (CHOLT)</strong></td>
                    <td>Mide la cantidad total de colesterol en la sangre.</td>
                    <td>{{ item.CHOLT }}</td>
                    <td>mg/dL</td>
                  </tr>
                  <tr>
                    <td><strong>Lipoproteínas de Alta Densidad (HDL)</strong></td>
                    <td>Conocido como el colesterol bueno, ayuda a eliminar el colesterol de las arterias.</td>
                    <td>{{ item.HDL }}</td>
                    <td>mg/dL</td>
                  </tr>
                  <tr>
                    <td><strong>Lipoproteínas de Baja Densidad (LDL)</strong></td>
                    <td>Conocido como el colesterol malo, puede acumularse en las arterias.</td>
                    <td>{{ item.LDL }}</td>
                    <td>mg/dL</td>
                  </tr>
                  <tr>
                    <td><strong>Triglicéridos (TRIG)</strong></td>
                    <td>Representa un tipo de grasa en la sangre.</td>
                    <td>{{ item.TRIG }}</td>
                    <td>mg/dL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="btn-group mt-3" role="group" aria-label="">
              <router-link :to="{ name: 'ActualizarPacientes', params: { id: paciente.id } }" class="btn btn-success">
                <i class="fas fa-edit"></i> Editar
              </router-link>
              <button type="button" v-on:click="borrarPaciente(paciente.id)" class="btn btn-danger">
                <i class="fas fa-trash-alt"></i> Borrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin: 20px auto;
}

.perfil-lipidico table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.perfil-lipidico th,
.perfil-lipidico td {
  border: 1px solid #ddd;
  padding: 10px;
  text-align: left;
}

.perfil-lipidico th {
  background-color: #f2f2f2;
}

.accordion-button {
  background-color: #6aa9e9;
  color: #fff;
}

.accordion-button:hover {
  background-color: #5795d6;
}

.accordion-body {
  background-color: #f9f9f9;
}

.btn {
  font-size: 16px;
  padding: 10px 15px;
}

.btn i {
  margin-right: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      paciente: {},
      pacientePrueba: [],
    };
  },
  created() {
    this.obtenerPacienteID();
  },
  methods: {
    obtenerPacienteID() {
      fetch('http://localhost/lisapi/?consultar=' + this.$route.params.id)
        .then(response => response.json())
        .then(data => {
          console.log(data);
          this.paciente = data[0];

          fetch('http://localhost/lisapi/?consultarpruebas=' + this.paciente.doc)
            .then(response => response.json())
            .then(datap => {
              console.log(datap);
              this.pacientePrueba = datap; // Asignar la lista completa
            });
        })
        .catch(console.log);
    },
    borrarPaciente(id) {
      // Aquí puedes implementar la lógica para borrar el paciente
      console.log("Borrando paciente con ID:", id);
      // Añade tu lógica de API para borrar aquí
    },
  },
};
</script>
