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
                    <h1 class="h4 text-gray-900 mb-4">Add Employee</h1>
                  </div>
                  <form @submit.prevent="employeeInsert" enctype="multipart/form-data">
                    <div class="form-group">
                      <label>Name</label>
                      <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter  Name" v-model="form.name">
                     
                    </div>
                    
                    <div class="form-group">
                      <label>Email</label>
                      <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp"
                        placeholder="Enter Email Address" v-model="form.email">
                       
                    </div>
                    <div class="form-group">
                      <label>Phone</label>
                      <input type="text" class="form-control" id="exampleInputPassword" placeholder="Enter phone number"
                      v-model="form.phone">
                      
                      
                    </div>
                    <div class="form-group">
                      <label>Salary</label>
                      <input type="text" class="form-control" id="exampleInputPasswordRepeat"
                        placeholder="Enter salary" v-model="form.salary">
                   
                    </div>
                    
                    <div class="form-group">
                      <label>Joining Date</label>
                      <input type="date" class="form-control" id="exampleInputPasswordRepeat"
                        placeholder="Enter joining date" v-model="form.joining_date">
                       
                    </div>
                    <div class="form-group">
                      <label>NID</label>
                      <input type="text" class="form-control" id="exampleInputPasswordRepeat"
                        placeholder="Enter NID" v-model="form.nid">
                        
                    </div>
                    <div class="form-group">
                      <label>Address</label>
                      <input type="text" class="form-control" id="exampleInputPasswordRepeat"
                        placeholder="Enter address" v-model="form.address">
                        
                    </div>
                    <div class="form-group">
                      <label  for='myfile'>Photo</label>
                      <input type="file"  id="myfile" placeholder="select image" @change="onFileSelected">
                     
                    </div>
                    <div class="md-col-6">
                    <img :src="form.photo" style="height:40px;width:40px">
                    </div>
                    <div class="form-group">
                      <button type="submit" class="btn btn-primary btn-block">Create</button>
                    </div>

                    
                  </form>
                  <hr>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import User from '../helper/User'
export default{
  created(){
    if(!User.loggedIn()){
      this.$router.push({name:'/'})
      
    }
  },
  data(){
  return{
    form:{
      email:null,
      salary:null,
      name:null,
      phone:null,
      nid:null,
      address:null,
      photo:null,
      joining_date:null 
    },
    errors:{

    }
  }
  
  },
  methods:{
    employeeInsert(){
      axios.post('/api/employee',this.form)
      .then(()=>{
        this.$router.push({name: 'employee'})
        Notification.success()
      })
      .catch(error=>this.errors=error.response.data.errors);
    },
    onFileSelected(event ){
     let file = event.target.files[0];
     if(file.size > 1048770){
       notification.image_validation()
     } else{
     let reader = new FileReader();
     reader.onload=event=>{
       this.form.photo = event.target.result;
       console.log(event.target.result)
     } 
     reader.readAsDataURL(file);
     }
    }
  
  
  
}
}
</script>
<style></style>