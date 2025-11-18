<template>
    <div>
        <h1>COMPRAS USUARIO</h1>
        <table class="table table-form">
            <thead>
                <tr>
                    <th>Id Cubo</th>
                    <th>Id Pedido</th>
                    <th>Id Usuario</th>
                    <th>Fecha Pedido</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="compra in compras" :key="compra">
                    <td>{{compra.idCubo}}</td>
                    <td>{{compra.idPedido}}</td>
                    <td>{{compra.idUsuario}}</td>
                    <td>{{compra.fechaPedido}}</td>
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
                token:localStorage.getItem('token'),
                compras:[]
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
                service.getComprasUsuario(this.token).then(result =>
                {
                    this.compras = result;
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>