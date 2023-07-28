import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { useStateContext } from '../contexts/ContextProvider';

export const useAuth = () => {
    const  { user } = useSelector ((state =>state.auth));
    const {setIsAuth, setActiveMenu} = useStateContext();
    const [auth, setAuth] = useState (false);
    const [loading, setLoading] = useState(true);
    

    //toda vez que o user recarregar, essa verificação será feita
    useEffect(() => {
        if(user) {
            setAuth(true)
            setIsAuth(true)
            

        }else{
            setAuth(false)
            setIsAuth(false)
            setActiveMenu(false);
        }

        setLoading(false);
    }, [user])

    return {auth, loading}
}