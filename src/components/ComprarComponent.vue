<template>
    <div>
        <h1>COMPRAR</h1>
        <h2>Elige un cubo para comprar</h2>
        <form v-on:submit.prevent="comprar">
            <select @change="mostrarCubo" v-model="idCubo">
                <option v-for="cubo in cubos" :key="cubo">
                    {{ cubo.idCubo }}
                </option>   
            </select>
            <button class="btn btn-info">Comprar</button>
        </form>
        <div v-if="cubo">
            <img :src="cubo.imagen"/>
        </div>
    </div>
</template>

<script>
    import ServiceCubos from './../services/serviceCubos';
    const service = new ServiceCubos();

    export default 
    {
        data()
        {
            return{
                token:localStorage.getItem('token'),
                cubos:[],
                cubo:{},
                idCubo:0
            }
        },
        mounted()
        {
            if (!this.token)
            {
                this.$router.push("/login");
            }
            else
            {
                service.getCubos().then(result =>
            {
                this.cubos = result;
            })
            }
        },
        methods:
        {
            mostrarCubo()
            {
                service.findCubo(this.idCubo).then(result =>
                {
                    this.cubo = result;
                })
            },
            comprar()
            {
                let idUsuario;
                service.getPerfil(this.token).then(result =>
                {
                    idUsuario = result.idUsuario;

                    let compra =
                    {
                        idCubo:this.idCubo,
                        idPedido:0,
                        idUsuario:idUsuario,
                        fechaPedido:"hoy"
                    };
                    console.log(compra);
                    service.comprar(this.token, this.idCubo, compra).then(result =>
                    {
                        console.log(result);
                        this.$router.push("/comprasusuario");
                    })
                })

            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>