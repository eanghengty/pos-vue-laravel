let login = require('./components/login.vue').default;
let register = require('./components/register.vue').default;
let forgetpassword = require('./components/forgetpassword.vue').default;
let homepage = require('./components/homepage.vue').default
let logout = require('./components/logout.vue').default
let create=require('./components/employee/create.vue').default
let employee =require('./components/employee/index.vue').default
export const routes = [
    {path:'/',component:login,name:'/'},
    {path:'/register',component:register,name:'register'},
    {path:'/forgetpassword',component:forgetpassword,name:'forgetpassword'},
    {path:'/homepage',component:homepage,name:'homepage'},
    {path:'/logout',component:logout,name:'logout'},
    {path:'/store-employee',component:create,name:'storeEmployee'},
    {path:'/employee',component:employee,name:'employee'}
]
