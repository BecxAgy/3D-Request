import { api, requestConfig } from "../utils/config"
import authService from "./authService";

//get method
 const getSolicitacoes = async(token) =>{
    
    const config = requestConfig("GET", null, token);

   try{
      debugger;
      const res = await fetch(api + "/solicitacao", config)
      .then((res) => res.json())
      .catch(err => err);


      if(res.message === 'Token não encontrado' || res.message === 'Token inválido'){
         authService.logout();
         window.location.href = '/login';
      }
      return res;



   }catch(error){
      console.log(error);
   }
 }

 //GET BY ID
 const getSolicitacaoById = async (id, token) => {
   const config = requestConfig("GET", null, token);
   debugger
   try {
      const res  = await fetch(api + '/solicitacao/'+ id , config)
      .then((res) => res.json())
      .catch((err)=> err);
     
      if(res.message === 'Token não encontrado' || res.message === 'Token inválido'){
         authService.logout();
         window.location.href = '/login';
      }

      return res;
   } catch (error) {
      console.log(error);
   }
 }

  //post method
 const createSolicitacao = async (data, token) => {
   const config = requestConfig("POST", data, token);

   try {
      debugger;
      const res = await fetch(api + "/solicitacao", config)
      .then((res) => res.json())
      .catch((err) => err);

      if(res.message === 'Token não encontrado' || res.message === 'Token inválido'){
         authService.logout();
         window.location.href = '/login';
      }

      return res;
   } catch (error) {
      console.log(error);
   }
 } 

 //delete method
 const deleteSolicitacao = async (id, token) => {
   const config = requestConfig("DELETE" , null, token);

   try{
      const res = await fetch(api + "/solicitacao/" + id, config)
         .then((res) => res.json())
         .catch((err) => err);

         if(res.message === 'Token não encontrado' || res.message === 'Token inválido'){
            authService.logout();
            window.location.href = '/login';
         }
      return res;
   }catch(error){
      console.log(error); 
   }
 }

//edit method
const updateSolictacao = async (id, data, token) => {
   const config = requestConfig("PUT", data, token)

   try{
      debugger
      const res = await fetch(api + "/solicitacao/" + id, config)
         .then((res) => res.json())
         .catch((err)=> err);

         if(res.message === "Token não encontrado" || res.message === "Token Inválido"){
            authService.logout();
            window.location.href = '/login';
         }

      return res;

   }catch(error){
      console.log(error);
   }
}

 const solicitacaoService = {
    getSolicitacoes,
    createSolicitacao, 
    deleteSolicitacao,
    updateSolictacao, 
    getSolicitacaoById
 }



 export default solicitacaoService;
