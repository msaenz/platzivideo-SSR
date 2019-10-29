import Home from "../containers/Home";
import Player from '../containers/Players';
import Login from "../containers/Login";
import Register from "../containers/Register";
import NotFound from "../containers/NotFound";

// const serverRoutes = [
const routes = [
  {
    path: '/',
    component: Home,
    exact: true,
  },
  {
    path: '/player:id',
    component: Player,
    exact: true,
  },
  {
    path: '/login',
    component: Login,
    exact: true,
  },
  {
    path: '/register',
    component: Register,
    exact: true,
  },
  {
    name: 'NotFound',
    component: NotFound,
  }
]

export default routes
