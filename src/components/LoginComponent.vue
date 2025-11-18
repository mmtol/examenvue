<template>
    <div>
        <h1>LOGIN</h1>
        <form v-on:submit.prevent="iniciarSesion">
            <label>Email</label>
            <br/>
            <input type="text" v-model="email"/>
            <br/><br/>
            <label>Contraseña</label>
            <br/>
            <input type="text" v-model="passwd"/>
            <br/><br/>
            <button>Iniciar sesión</button>
        </form>
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
                passwd:""
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
                })
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>