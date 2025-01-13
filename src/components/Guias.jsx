import { guideInformation } from '../constants/guideConstans';
import Swal from 'sweetalert2';
import HorizontVillage from '../../public/assets/imgs/horizons_village.png';
import Stars from '../../public/assets/imgs/stars.png';

export const Guias = () =>{

    const handleInformation = (info) =>{
        Swal.fire({
            title: info.buttonTitle,
            text: info.text,
            imageUrl: info.imagenPop,
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
        });
    }
 
    return(
        <>

            <div 
                className="w-full flex flex-col pt-10 items-center guides" 
                style={ {backgroundImage:`url(${HorizontVillage}), url(${Stars}), linear-gradient(rgb(21, 17, 29), rgb(50, 54, 87) 121.35%)`} } >
                <div className="w-full p-4 flex justify-center items-center">
                    <h2 className=" w-2/3 text-3xl p-4 text-white cinzel-decorative-regular guias-title"> 
                        Guias para juegos 
                    </h2>
                </div>

                <section className='w-full flex flex-row justify-center mt-10' >

                    {
                        guideInformation.map( (info, index)=>(
                            <div key={index} className="lg:w-1/5 lg:h-4/5 m-2 p-4 flex flex-col justify-center items-center rounded-lg overlay-container md:w-1/3 " >
                                <img src={ info.imagen }  className='w-4/5 h-2/3'/>
                                <br />
                                <button 
                                    type='button' 
                                    className={ `w-4/5 text-white text-center cinzel-decorative-bold ${info.clase} p-2 rounded-full` }
                                    onClick={ ()=>  handleInformation( info ) }
                                    > 
                                        { info.buttonTitle }
                                    </button>
                            </div>
                        ) )
                    }

                </section>

            </div>
        </>
    )
}