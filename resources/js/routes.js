let login = require('./components/login.vue').default;
let register = require('./components/register.vue').default;
let forgetpassword = require('./components/forgetpassword.vue').default;
let homepage = require('./components/homepage.vue').default
export const routes = [
    {path:'/',component:login,name:'login'},
    {path:'/register',component:register,name:'register'},
    {path:'/forgetpassword',component:forgetpassword,name:'forgetpassword'},
    {path:'/homepage',component:homepage,name:'homepage'}]
