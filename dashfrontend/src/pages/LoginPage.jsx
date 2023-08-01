import Header from "../components/Auth/Header"
import Login from '../components/Login'

function LoginPage() {
  
  return (
    <div className="py-5">
       <Header
                heading="Entre em sua conta"
                paragraph="Não possui  ainda? "
                linkName="Crie Agora!"
                linkUrl="/register"
                />
               
     <Login/>
                
            
    </div>
  )
}

export default LoginPage