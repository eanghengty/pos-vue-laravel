let login = require('./components/login.vue').default;
let register = require('./components/register.vue').default;
let forgetpassword = require('./components/forgetpassword.vue').default;
let homepage = require('./components/homepage.vue').default
let logout = require('./components/logout.vue').default
let storeemployee=require('./components/employee/create.vue').default
let employee =require('./components/employee/index.vue').default
let editemployee=require('./components/employee/edit.vue').default
let supplier = require('./components/supplier/index.vue').default
let editsupplier=require('./components/supplier/edit.vue').default
let storesupplier=require('./components/supplier/create.vue').default
let category = require('./components/category/index.vue').default
let editcategory=require('./components/category/edit.vue').default
let storecategory=require('./components/category/create.vue').default
export const routes = [
    {path:'/',component:login,name:'/'},
    {path:'/register',component:register,name:'register'},
    {path:'/forgetpassword',component:forgetpassword,name:'forgetpassword'},
    {path:'/homepage',component:homepage,name:'homepage'},
    {path:'/logout',component:logout,name:'logout'},
    {path:'/store-employee',component:storeemployee,name:'store-employee'},
    {path:'/employee',component:employee,name:'employee'},
    {path:'/edit-employee/:id',component:editemployee,name:'edit-employee'},
    
    {path:'/edit-supplier/:id',component:editsupplier,name:'edit-supplier'},
    {path:'/store-supplier',component:storesupplier,name:'store-supplier'},
    {path:'/supplier',component:supplier,name:'supplier'},

    {path:'/edit-category/:id',component:editcategory,name:'edit-category'},
    {path:'/store-category',component:storecategory,name:'store-category'},
    {path:'/category',component:category,name:'category'},
    
]
