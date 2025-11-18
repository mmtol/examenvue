<template>
    <div>
        <h1>PERFIL</h1>
        <div>
            <h2>ID: {{ perfil.idUsuario }}</h2>
            <h3>Nombre: {{ perfil.nombre }}</h3>
            <h3>Email: {{ perfil.email }}</h3>
            <p>{{ perfil.pass }}</p>
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
                perfil:{}
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
                service.getPerfil(this.token).then(result =>
                {
                    this.perfil = result;
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>