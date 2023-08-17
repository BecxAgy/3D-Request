import { api, requestConfig } from "../utils/config"


 const getProjetos = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      
      const res = await fetch(api + "/projeto", config)
      .then((res) => res.json())
      .catch(err => err);

      return res.projetos;


   }catch(error){
         console.log(error);
   }
 }

 const projetoService = {
   getProjetos
 }

 export default projetoService;