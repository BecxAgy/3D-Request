import { api, requestConfig } from "../utils/config";

//login user
const login = async(user) =>{
    const config = requestConfig("POST", user);


    const res = await fetch(api + "/user/login", config)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

    if(res){
        localStorage.setItem(user, JSON.stringify(res))
    }

    return res;
}

const authService = {
    login
}

export default authService;