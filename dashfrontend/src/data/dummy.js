
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
  

  export const loginFields=[
    {
        labelText:"Email address",
        labelFor:"email-address",
        id:"email-address",
        name:"email",
        type:"email",
        autoComplete:"email",
        isRequired:true,
        placeholder:"Email address"   
    },
    {
        labelText:"Password",
        labelFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autoComplete:"current-password",
        isRequired:true,
        placeholder:"Password"   
    }
]