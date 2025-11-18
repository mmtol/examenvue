<template>
    <div>
        <h1>CUBOS POR MARCA</h1>
        <table class="table table-form">
            <thead>
                <tr>
                    <th>Id Cubo</th>
                    <th>Nombre</th>
                    <th>Modelo</th>
                    <th>Marca</th>
                    <th>Color</th>
                    <th>Imagen</th>
                    <th>Precio</th>
                    <th>Valoracion</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="cubo in cubos" :key="cubo">
                    <td>{{cubo.idCubo}}</td>
                    <td>{{cubo.nombre}}</td>
                    <td>{{cubo.modelo}}</td>
                    <td>{{cubo.marca}}</td>
                    <td>{{cubo.color}}</td>
                    <td><img :src="cubo.imagen"/></td>
                    <td>{{cubo.precio}}</td>
                    <td>{{cubo.valoracion}}</td>
                </tr>
            </tbody>
        </table>
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
                cubos:[],
                marca:""
            }
        },
        mounted()
        {
            this.marca = this.$route.params.marca;

            service.getCubosMarca(this.marca).then(result =>
            {
                this.cubos = result;
            })
        },
        watch:
        {
            '$route.params.marca' (nextVal, oldVal)
            {
                if (nextVal != oldVal)
                {
                    this.marca = this.$route.params.marca;
                }
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>