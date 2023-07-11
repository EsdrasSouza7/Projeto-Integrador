import Home from "./pages/home.vue";
import Inicio from "./pages/inicio.vue"

export default [
    {
        path: '/home',
        componete: Home,
    },
    {
        path: '/inicio',
        componete: Inicio,
    },
    {
        path: '*',
        componete: '/',
    },
];