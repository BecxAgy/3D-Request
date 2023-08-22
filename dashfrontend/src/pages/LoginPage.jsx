import Header from "../components/Auth/Header"
import Login from '../components/Login'
import {  useSelector } from 'react-redux';
import AlertsMessage from "../components/AlertsMessage"

function LoginPage() {
  const { error} = useSelector((state) => state.auth)
  return (
    <div className="py-5">
      <div className="flex justify-end">
      {error && <AlertsMessage message={error} type="error" />}
      </div>
       
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