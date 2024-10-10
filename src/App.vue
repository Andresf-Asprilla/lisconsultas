<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg" style="background-color: #2a6db5; color: white;">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/assets/LIS.jpeg" alt="Logo del Lab" class="logo" style="width: 100px; height: auto;" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
            <li class="nav-item">
              <router-link class="nav-link" to="/login">
                <i class="fas fa-file-medical-alt"></i> Login
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
            </a><br />
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
  color: #ffffff; /* Cambiar color del texto */
}

nav {
  padding: 5px 15px; /* Ajustar padding de la barra */
}

.navbar-brand {
  font-weight: bold;
  font-size: 2rem; /* Aumentar tamaño de la fuente del logo */
}

.logo {
  width: 80px; /* Ajustar el tamaño del logo */
  margin-right: 10px; /* Espaciado entre el logo y el texto */
}

.brand-text {
  color: #ffffff; /* Color del texto del logo */
}

nav a {
  font-weight: bold;
  color: #ffffff; /* Color de las letras en la barra de navegación */
  transition: color 0.3s;
  margin-right: 20px; /* Espaciado entre los elementos */
}

nav a:hover {
  color: #ffcc00; /* Color de texto al pasar el mouse */
}

nav a.router-link-exact-active {
  color: #ffcc00; /* Color activo */
}

/* Estilos para el footer */
.footer {
  background-color: #2a6db5; /* Cambiar el color de la barra inferior */
  color: white;
  padding: 20px 0; /* Aumentar padding para mayor espacio */
}

.footer h5 {
  margin-bottom: 10px;
}

.footer a {
  color: white;
  margin: 0 5px;
}

.footer a:hover {
  text-decoration: underline;
}
</style>