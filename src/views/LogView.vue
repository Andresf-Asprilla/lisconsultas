<template>
 <section class="h-100 gradient-form" style="background-color: #000080;">
  <div class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                
                <div class="text-center">
                  <img src="@/assets/logo2.jpg" style="width: 185px;" alt="logo"> <!-- Asegúrate de que la extensión del archivo sea correcta -->
                    <h4 class="mt-1 mb-5 pb-1">Somos Lis Consultas</h4>
                </div>

                <form>
                  <p>Ingresa a tu cuenta</p>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                    <label class="form-label" for="form2Example11">Usuario</label>
                  </div>

                  <div data-mdb-input-init class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" />
                    <label class="form-label" for="form2Example22">Contraseña</label>
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Log
                      in</button>
                    <a class="text-muted" href="#!">¿Olvidaste tu contraseña?</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">¿No tienes una cuenta?</p>
                    <button  type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger">Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">Lideres en gestión de información</h4>
                <p class="small mb-0"> Nuestro sistema aporta exactitud y accesibilidad a los flujos de tus muestras y datos del laboratorio clínico..</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>

export default {
  name: 'LogView',
}
</script>

<style scoped>
.gradient-custom-2 {
  /* Fallback para navegadores antiguos */
  background: #6aa9e9; /* Color sólido de respaldo */

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to right, #6aa9e9, #4a7c99); /* Degradado azul */

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #6aa9e9, #4a7c99); /* Degradado azul */
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}

@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: .3rem;
    border-bottom-right-radius: .3rem;
  }
}
</style>