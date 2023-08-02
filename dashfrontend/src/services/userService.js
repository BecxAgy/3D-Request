import { api, requestConfig } from "../utils/config";

//GET USER DETAILS
const getUser = async (id) => {

    const config = requestConfig("GET");

    try{
        debugger;
        const res = await fetch(api + `user/${id}`, config)
        .then((res) => res.json())
        .catch((err) => err);

        console.log(res.json());

        return res;

    }catch (error){

    }
    
}

const userService = {
    getUser
}

export default userService;