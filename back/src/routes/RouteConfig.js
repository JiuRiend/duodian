import Home from "@/containers/home/Index";
import ShowBanner from '@/containers/home/banner/showBanner';

const route = [{
    path: '/home',
    component: Home,
    children: [{
        path: '/home/Banner',
        component: ShowBanner
    },{
        from:'/home',
        to:'/home/Banner'
    }]
}, {
    from: "/",
    to: "/home"
}]

export default route;
