import Vue from 'vue';
import Router from 'vue-router';
import routes from 'router/routes';
import { getSession } from 'utils';
Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    const token = getSession('token');
    if (!token && to.path !== '/login' && to.meta.authorization) {
        next('/login');
    }
    next();
});
export default router;