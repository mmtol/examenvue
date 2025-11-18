<template>
    <div>
        <h1>LOGIN</h1>
        <h2>Rellene los datos para iniciar sesión</h2>
        <form v-on:submit.prevent="iniciarSesion">
            <label>Email</label>
            <br/>
            <input type="text" v-model="email"/>
            <br/><br/>
            <label>Contraseña</label>
            <br/>
            <input type="text" v-model="passwd"/>
            <br/><br/>
            <button class="btn btn-info">Iniciar sesión</button>
        </form>
        <br/>
        <br/>
        <h2>Pulse el botón para cerrar sesión</h2>
        <form v-on:submit.prevent="cerrarSesion">
            <button class="btn btn-danger">Cerrar sesión</button>
        </form>
        <br/>
        <br/>
        <h3 v-if="mensaje">{{ mensaje }}</h3>
    </div>
</template>

<script>
    import ServiceCubos from './../services/serviceCubos';
    const service = new ServiceCubos();

    export default 
    {
        data()
        {
            return {
                email:"",
                passwd:"",
                mensaje:""
            }
        },
        methods:
        {
            iniciarSesion()
            {
                var usuario = 
                {
                    email:this.email,
                    password:this.passwd
                };

                service.iniciarSesion(usuario).then(result =>
                {
                    localStorage.setItem('token', result.response);
                    this.$router.push("/perfil");
                })
            },
            cerrarSesion()
            {
                if (localStorage.getItem('token'))
                {
                    localStorage.removeItem('token');
                    this.mensaje="Sesión cerrada, para acceder a todas las pestañas, vuelva a iniciarla"
                }
                else
                {
                    this.mensaje="Sesión ya cerrada"
                }

            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>