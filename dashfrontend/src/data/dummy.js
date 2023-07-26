
import { FiDownloadCloud, FiList, FiUser, FiLogOut, FiHome} from "react-icons/fi";

  export const links = [
    {
      title: 'Principal',
      links: [
        {
          name: 'Home',
          icon: <FiHome />,
          link: "/"
        },
        {
            name: 'Histórico',
            icon: <FiDownloadCloud />,
            link:"/historic"
        },
        {
            name: 'Minhas Solicitações',
            icon: <FiList/>,
            link: "/historic/"
        },
      ],
    },

  
    {
      title: 'Usuário',
      links: [
        {
          name: 'Perfil',
          icon: <FiUser />,
          link:"/user-profile"
        },
       
        {
          name: 'Logout',
          icon: <FiLogOut/>,
          link: "/login"
        },
      ],
    },
    
   
  ];
  

