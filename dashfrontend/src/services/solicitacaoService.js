import { api, requestConfig } from "../utils/config"

//get method
 const getSolicitacoes = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      debugger;
      const res = await fetch(api + "/solicitacao", config)
      .then((res) => res.json())
      .catch(err => err);

      console.log(res);
      return res;

   }catch(error){
         console.log(error);
   }
 }


  //post method
 const createSolicitacao = async (data, token) => {
   const config = requestConfig("POST", data, token);

   try {
      const res = await fetch(api + "/solicitacao", config)
      .then((res) => res.json())
      .catch((err) => err);

      return res;
   } catch (error) {
      console.log(error);
   }
 } 


 const solicitacaoService = {
    getSolicitacoes,
    createSolicitacao
 }



 export default solicitacaoService;
