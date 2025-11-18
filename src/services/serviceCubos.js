import axios from "axios";
import Global from "./../Global";

export default class ServiceCubos
{
    getCubos()
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Cubos";

            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getCubosMarca(marca)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Cubos/CubosMarca/"+marca;

            axios.get(url+endPoint).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    iniciarSesion(usuario)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Manage/Login";

            axios.post(url+endPoint, usuario).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getPerfil(token)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Manage/PerfilUsuario";

            axios.get(url+endPoint, {headers: {'Authorization': `Bearer ${token}`}}).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    getComprasUsuario(token)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Compra/ComprasUsuario";

            axios.get(url+endPoint, {headers: {'Authorization': `Bearer ${token}`}}).then(response =>
            {
                resolve(response.data);
            })
        })
    }

    comprar(token, idCubo)
    {
        return new Promise(function(resolve)
        {
            var url = Global.api;
            var endPoint = "api/Compra/InsertarPedido"+idCubo;

            axios.post(url+endPoint, {headers: {'Authorization': `Bearer ${token}`}}).then(response =>
            {
                resolve(response.data);
            })
        })
    }
}