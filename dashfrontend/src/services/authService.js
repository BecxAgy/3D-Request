import { api, requestConfig } from "../utils/config";

//register user
const register = async(user) => {
    const config = requestConfig("POST", user);

    try{
        debugger;
        const res = await fetch(api + "/user/", config)
        .then((res) => res.json())
        .catch((err)=> err)

        if(res.success){
            localStorage.setItem("user", JSON.stringify(res.data));
            
        }
        return res;

    }catch(error){
        console.log(error)
    }
}


//login user
const login = async(user) =>{
    const config = requestConfig("POST", user);

    try{
        debugger;
        const res = await fetch(api + "/user/login", config)
        .then((res) => res.json())
        .catch((err)=> err);

        if(res.token){
            localStorage.setItem("user", JSON.stringify(res.resUser));
            localStorage.setItem("token", JSON.stringify(res.token));
        }
        return res;

    }catch(error){
        console.log(error)
    }
     
}

//logout
const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
}

const authService = {
    register,
    login,
    logout
}

export default authService;