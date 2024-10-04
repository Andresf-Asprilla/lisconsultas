
<template> 

    <div class="card text-center border border-dark" style="background-color: #fff; margin: 50px; padding: 50px;">
    <div class="card-header border border-danger" style="background:#6aa9e9;">
        
        <h1 class="fw-bolder" style="color: #fff;"> Lista de Pacientes </h1>
        <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
    <div class="card-body">
                <table class="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Documento</th>
                            <th>Nombre y apellidos</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="paciente in pacientes" v-bind:key="paciente.id">
                            <td scope="row">{{paciente.id}}</td>
                            <td>{{paciente.doc}}</td>
                            <td>{{paciente.name}} {{paciente.lastname}}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="">
                                    <router-link :to="{name:'DetallesPacientes' , params:{id:paciente.id}}" class="btn btn-success">Detalle</router-link>
                                    <router-link :to="{name:'ActualizarPacientes' , params:{id:paciente.id}}" class="btn btn-info">Editar</router-link>
                                    <button type="button" v-on:click="borrarPaciente(paciente.id,paciente.doc)" class="btn btn-danger">Borrar</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    <div class="card-footer text-body-secondary">
        LisConsultas
    </div>
    </div>
</template>



<script>
export default {
    data(){
        return{
            pacientes:[]
        }
    },
    created:function(){
        this.consultarPacientes();
    },
    methods:{
        consultarPacientes(){
            fetch('http://localhost/lisapi/')
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                this.pacientes = [];
                if(typeof data[0].success === 'undefined'){
                    this.pacientes = data
                }
                })
                .catch(console.log)
        },
        
        borrarPaciente(id,doc){
            console.log(id);
            fetch('http://localhost/lisapi/?Usuariosborrar='+id) 
            .then(response=>response.json())
            .then((data)=>{
                console.log(data);
                

                fetch('http://localhost/lisapi/?Pruebasborrar='+doc)
                .then(response => response.json())
                .then(datap => {
                    console.log(datap);
                    window.location.href='ListarPacientes'
                });
            })
            .catch(console.log)
            }
    
        

        

        
    }
}
</script>