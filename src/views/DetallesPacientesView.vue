<template> 
    <h1> Detalle Pacientes </h1>
   


</template>
<script>
export default {
    data() {
        return {
            paciente: {}
        }
    },
    datap() {
        return {
            pacientePrueba: {}
        }
    },
    created:function(){
        this.obtenerPacienteID()
    },methods:{
        obtenerPacienteID(){
            fetch('http://localhost/lisapi/?consultar='+this.$route.params.id)
            .then(response=>response.json())
            .then((data)=>{
                console.log(data)
                
                this.paciente=data[0]

                fetch('http://localhost/lisapi/?consultarpruebas='+data[0].doc)
                .then(response=>response.json())
                .then((datap)=>{
                console.log(datap)
                this.pacientePrueba=datap[0]
                })
                
                })
                .catch(console.log)

            
                

          
        }
       

    }
    
  }
</script>



