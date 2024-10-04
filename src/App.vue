<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #6aa9e9;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">LIS</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <i class="fas fa-heart"></i>
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/home">
                <i class="fas fa-home"></i> Home
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ListarPacientes">
                <i class="fas fa-users"></i> Listar Pacientes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/IngresarPacientes">
                <i class="fas fa-user-plus"></i> Ingresar Pacientes
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ConsultaResultados">
                <i class="fas fa-file-medical-alt"></i> Consulta Resultados de Pruebas
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="col text-center">
            <h5>Contacto</h5>
            <p>Email: contacto@lisconsultas.com</p>
            <p>Teléfono: +57 123 456 7890</p>
          </div>
          <div class="col text-center">
            <h5>Redes Sociales</h5>
            <a href="https://facebook.com" target="_blank">
              <i class="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://twitter.com" target="_blank">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank">
              <i class="fab fa-instagram fa-lg"></i>
            </a>
          </div>
          <div class="col text-center">
            <h5>Más información</h5>
            <a href="/politicas" class="footer-link">
              <i class="fas fa-user-shield"></i> Políticas de Privacidad
            </a><br>
            <a href="/terminos" class="footer-link">
              <i class="fas fa-file-contract"></i> Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 20px 30px;
}

.navbar-brand {
  font-weight: bold;
  font-size: 1.8rem;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  transition: color 0.3s;
}

nav a:hover {
  color: #42b983;
}

nav a.router-link-exact-active {
  color: #42b983;
}

/* Estilos para el footer */
.footer {
  background-color: #6aa9e9;
  color: white;
  padding: 20px 0;
}

.footer h5 {
  margin-bottom: 10px;
}

.footer a {
  color: white;
  margin: 0 10px;
}

.footer a:hover {
  text-decoration: underline;
}
</style>