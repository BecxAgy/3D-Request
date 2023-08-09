import { api, requestConfig } from "../utils/config"


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

 const solicitacaoService = {
    getSolicitacoes
 }

 export default solicitacaoService;
