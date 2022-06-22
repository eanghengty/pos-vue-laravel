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
                    <h1 class="h4 text-gray-900 mb-4">Category</h1>
                  </div>
                  <form @submit.prevent="categoryInsert">
                    <div class="form-group">
                      <label>Category Name</label>
                      <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Enter  Name" v-model="form.categoryname">
                     
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
      categoryname:''
    },
    errors:{

    }
  }
  
  },
  methods:{
    categoryInsert(){
      axios.post('/api/cateogry',this.form)
      .then(()=>{
        this.$router.push({name: 'category'})
        Notification.success()
      })
      .catch(error=>this.errors=error.response.data.errors);
    },
    
  
  
  
}
}
</script>
<style></style>