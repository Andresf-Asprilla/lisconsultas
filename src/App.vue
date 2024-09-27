<template>
 <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #6aa9e9;">
  <div class="container-fluid">
    
    <a class="navbar-brand" href="#">LisConsultas</a>
  
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        
        <li class="nav-item">
          <router-link class="nav-link" to="/ListarPacientes" >Listar Pacientes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/IngresarPacientes">Ingresar Pacientes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/ConsultaResultados">Consulta Resultados de Pruebas</router-link>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


<router-view/>
</template>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
