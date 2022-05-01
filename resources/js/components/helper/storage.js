class storage{

    Token(token){
        localStorage.setItem('token',token)
    }
    User(user){
        localStorage.setItem('user',user)
    }
    Store(token,user){
        this.Token(token)
        this.User(user)
    }

    clear(){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    }
    
    gettoken(){
        localStorage.getItem(token)
    }
    getuser(){
        localStorage.getItem(user)
    }
}
export default storage = new storage(); 