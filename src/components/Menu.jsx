import { LogoHarrtPotter } from '../../public/assets/imgs';
import { Link } from "react-router-dom";

export const Menu = () =>{
    return(
        <>
            <nav className="bg-[#00001b] h-24 pl-4 lg:flex lg:flex-row md:flex-col md:h-40" >
                <div className='lg:w-1/5 md:w-full md:flex md:items-center md:justify-center' >
                    <img src={ LogoHarrtPotter } alt="logo" className='h-full md:h-20 ' />
                </div>
                <ul className=' w-4/5 flex justify-between md:p-2 md:w-full' > 
                    <li className='text-white w-1/4 flex justify-center items-center text-3xl cinzel-decorative-regular hover:underline cursor-pointer' > 
                        <Link to='/harryNew' > Principal </Link>
                    </li>
                    <li className='text-white w-1/4 flex justify-center items-center text-3xl cinzel-decorative-regular hover:underline cursor-pointer' >
                        <Link to='/harryNew/singles' > Individual </Link>
                    </li>
                    <li className='text-white w-1/4 flex justify-center items-center text-3xl cinzel-decorative-regular hover:underline cursor-pointer' >
                        <Link to='/harryNew/teams' > Equipos </Link>
                    </li>
                    <li className='text-white w-1/4 flex justify-center items-center text-3xl cinzel-decorative-regular hover:underline cursor-pointer' >
                        <Link to='/harryNew/guias' > Guias </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}