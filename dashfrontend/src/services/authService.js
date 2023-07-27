import { api, requestConfig } from "../utils/config";

//login user
const login = async(user) =>{
    const config = requestConfig("POST", user);

    try{
        
        const res = await fetch(api + "/user/login", config)
        .then((res) => res.json())
        .catch((err)=> err)

        console.log(res)

        if(res.user){
            localStorage.setItem("user", JSON.stringify(res.user));
        }
        return res;

    }catch(error){
        console.log(error)
    }
    

    

    
}

const authService = {
    login
}

export default authService;