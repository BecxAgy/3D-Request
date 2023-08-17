import { api, requestConfig } from "../utils/config"


 const getStatus = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      
      const res = await fetch(api + "/status", config)
      .then((res) => res.json())
      .catch(err => err);
      
      return res.status;


   }catch(error){
         console.log(error);
   }
 }

 const statusService = {
    getStatus
 }

 export default statusService;