import validatetoken from "./validatetoken"
import storage from "./storage"


class validateuser{
    responseafterlogin(res){
        const access_token = res.data.access_token
        const name = res.data.name
        if(validatetoken.isvalid(access_token)){
            storage.Store(access_token,name)
        }
    }
    hastoken(){
        const storetoken = localStorage.getItem('token')
        if(storetoken){
            return validatetoken.isvalid(storetoken)? true : false
        }
        false
    }
    
    loggedin(){
        return this.hastoken()
    }
    name(){
        if(this.loggedin()){
            
            return localStorage.getItem('user')
        }
    }
    id(){
        if(this.loggedin()){
            const payload = validatetoken.payload(localStorage.getItem('token'));
            return payload.sub
        }
        return false
    }
}
export default validateuser = new validateuser()