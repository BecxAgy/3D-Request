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

 const createProjeto = async(token, data) => {
    const config = requestConfig("POST", data, token);
    
    try {
      debugger;
      const res = await fetch(api + "/projeto", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;

    } catch (error) {
      console.log(error);
    }
 }

 const projetoService = {
   getProjetos, 
   createProjeto
 }

 export default projetoService;