import Vue from "vue";
import Router from "vue-router";
import Inicio from "./components/inicio";
// import Usuario from "./components/usuario/Usuario";
// import UsuarioLista from "./components/usuario/UsuarioLista";
// import UsuarioDetalhe from "./components/usuario/UsuarioDetalhe";
// import UsuarioEditar from "./components/usuario/UsuarioEditar";
import Menu from "./template/Menu";

// Lazy load of components
// This components will be loaded just when used, improving your site performance
const Usuario = () =>
  import(/* webPackChunkName: "usuario" */ "./components/usuario/Usuario");
const UsuarioLista = () =>
  import(/* webPackChunkName: "usuario" */ "./components/usuario/UsuarioLista");
const UsuarioDetalhe = () =>
  import(/* webPackChunkName: "usuario" */ "./components/usuario/UsuarioDetalhe");
const UsuarioEditar = () =>
  import(/* webPackChunkName: "usuario" */ "./components/usuario/UsuarioEditar");

Vue.use(Router);

const router = new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "inicio",
      components: {
        default: Inicio,
        menu: Menu,
      },
    },
    {
      path: "/usuario",
      component: Usuario,
      props: true,
      children: [
        {
          path: "",
          // name: "editarUsuario",
          component: UsuarioLista,
        },
        {
          path: ":id",
          name: "visualizarUsuario",
          component: UsuarioDetalhe,
          props: true,
          beforeEnter: (to, from, next) => {
            console.log("antes da rota -> visualizarUsuario");
            next();
          },
        },
        {
          path: ":id/editar",
          name: "editarUsuario",
          component: UsuarioEditar,
          props: true,
        },
      ],
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});

router.beforeEach((to, from, next) => {
  console.log("antes das rotas -> global");
  next();
});

export default router;
