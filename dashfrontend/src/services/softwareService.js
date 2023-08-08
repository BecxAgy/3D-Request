import { api, requestConfig } from "../utils/config"


 const getSoftwares = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      debugger;
      const res = await fetch(api + "/software", config)
      .then((res) => res.json())
      .catch(err => err);
      
      return res;


   }catch(error){
         console.log(error);
   }
 }

 const softwareService = {
    getSoftwares
 }

 export default softwareService;