import Home from '../views/Home/index'
import Login from '../views/Login'
import Register from '../views/Register/index'
export default [
    {
        path:'/home',
        component:Home,
        meta:{isShow:true}

    },
    {
        path:'/login',
        component:Login,
        meta:{isShow:false}
    },
    {
        path:'/register',
        component: Register,
        meta:{isShow: false}
    }
    ,
    {
        path:'*',
        redirect:"/home"
    }
]