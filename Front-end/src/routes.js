import Home from "./pages/home.vue";

export default [
    {
        path: '/home',
        componete: Home,
    },
    {
        path: '*',
        componete: '/',
    },
];