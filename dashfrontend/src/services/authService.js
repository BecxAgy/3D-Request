import { api, requestConfig } from "../utils/config";

//login user
const login = async(user) =>{
    const config = requestConfig("POST", user);

    try{
        debugger;
        const res = await fetch(api + "/user/login", config)
        .then((res) => res.json())
        .catch((err)=> err)

        console.log(res)

        if(res.token){
            localStorage.setItem("user", JSON.stringify(res.resUser));
        }
        return res;

    }catch(error){
        console.log(error)
    }
     
}

//logout
const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    login,
    logout
}

export default authService;