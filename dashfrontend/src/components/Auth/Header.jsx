import {Link} from 'react-router-dom';

export default function Header({
    heading,
    paragraph,
    linkName,
    linkUrl="#"
}){
    return(
        <div className="my-10">
            <div className="flex justify-center">
                <img 
                    alt=""
                    className="h-14 w-14"
                    src="https://th.bing.com/th/id/OIP.Wq80JLTxErM3XcgpSkoRaAHaHa?pid=ImgDet&rs=1"/>
            </div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                {heading}
            </h2>
            <p className=" text-center text-sm text-gray-600 mt-5">
            {paragraph} {' '}
            <Link to={linkUrl} className="font-medium text-orange-600 hover:text-orange-500">
                {linkName}
            </Link>
            </p>
        </div>
    )
}