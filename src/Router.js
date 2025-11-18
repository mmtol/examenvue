import { createRouter } from "vue-router";
import { createWebHistory } from "vue-router";
import CubosComponent from "./components/CubosComponent.vue";
import CubosMarcaComponent from "./components/CubosMarcaComponent.vue";
import ComprarComponent from "./components/ComprarComponent.vue";
import ComprasUsuarioComponent from "./components/ComprasUsuarioComponent.vue";
import LoginComponent from "./components/LoginComponent.vue";
import PerfilComponent from "./components/PerfilComponent.vue";

const rutas =
[
    {
        path:"/cubos",
        component:CubosComponent
    },
    {
        path:"/cubosmarca/:marca",
        component:CubosMarcaComponent
    },
    {
        path:"/comprar",
        component:ComprarComponent
    },
    {
        path:"/comprasusuario",
        component:ComprasUsuarioComponent
    },
    {
        path:"/login",
        component:LoginComponent
    },
    {
        path:"/perfil",
        component:PerfilComponent
    }
]

const router = createRouter(
    {
        history:createWebHistory(),
        routes:rutas
    }
)

export default router;