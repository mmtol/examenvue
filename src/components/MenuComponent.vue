<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">MENÚ</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="dropdown-item" to="/cubos">Cubos</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="dropdown-item" to="/login">Login</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="dropdown-item" to="/perfil">Perfil</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="dropdown-item" to="/comprasusuario">Compras Usuario</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="dropdown-item" to="/comprar">Comprar</router-link>
                        </li>
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Marcas
                        </a>
                        <ul class="dropdown-menu" v-for="marca in marcas" :key="marca">
                            <li>
                                <router-link class="dropdown-item" :to="'/cubosmarca/'+marca">{{marca}}</router-link>
                            </li>
                        </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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
                marcas:[]
            }
        },
        mounted()
        {
            service.getMarcas().then(result =>
            {
                this.marcas = result;
            })
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>