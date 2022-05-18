<template>
<div class="container">
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card shadow-sm my-5">
          <div class="card-body p-0">
            <div class="row">
              <div class="col-lg-12">
                <div class="login-form">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">All Employees</h1>
                  </div>
                  <div class="col-lg-12 mb-4">
                    <div class="card">
                 <div class="card">
                   <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                     <h6 class="m-0 font-weight-bold text-primary">Employee list</h6>
                     </div>
                     <div class="table-responsive">
                       <table class="table align-items-center table-flush">
                         <thead class="thead-light">
                           <tr>
                             
                             <th>Name</th>
                             <th>Photo</th>
                             <th>Phone</th>
                             <th>Salary</th>
                             <th>Joining Date</th>
                             <th>Action</th>
                           </tr>
                         </thead>
                          <tbody>
                            <tr v-for="employee in employees" :key="employee.id"> 
                            <td>{{employee.name}}</td>
                            <td><img :src="employee.photo" id="em_photo"></td>
                            <td>{{employee.phone}}</td>
                            <td>{{employee.salary}}</td>
                            <td>{{employee.joining_date}}</td>
                            <td><a href="#" class="btn btn-primary btn-sm">Edit</a></td>
                            <td><a href="#" class="btn btn-danger btn-sm">Delete</a></td>

                            </tr>
                          </tbody>
                       </table>
                     </div>
                   </div>
                   </div>
                   </div>

                 </div> 
                  <hr>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  </div>
</template>
<script>
import axios from 'axios'
import User from '../helper/User'
export default{
  created(){
    if(!User.loggedIn()){
      this.$router.push({name:'/'})
    }
  },
  data(){

    return{
      employees:[],
    }
  },
  methods:{
    allEmployee(){
      axios.get('/api/employee')
      .then(({data})=>(this.employees=data))
      .catch()
    }
  },
  created(){
    this.allEmployee();
  }
  

}
</script>
<style>

#em_photo{
  height:40px;
  width:40px;
}
</style>