import React, { useEffect, useState, useRef } from 'react';
import VideoHp from '../../../public/assets/videos/harryPotterTheme.mp4';
import HogwartsFondo from '../../../public/assets/imgs/merodeador.png';''
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MainPage = () =>{

    const videoRef = useRef(null);
    const [ open, setOpen ]= useState(false);

    useEffect( ()=>{

        Swal.fire({
            html:`
                <p class = "text-2xl text-white cinzel-decorative-bold " > Carta de aceptacion </p>
                <p class = "text-white cinzel-decorative-regular " > Que tal muggle, te damos la bienvenida al mundo magico </p>
                <p class = "text-white cinzel-decorative-regular " > de harry potter, donde para ingresas tendras que jurar </p>
                <p class = "text-white cinzel-decorative-regular " > que tus intenciones no son buenas </p>
            `,
            background:'rgba(0,0,0,0.4)',
            showClass: {
              popup: ` animate__animated animate__fadeInUp animate__faster`
            },
            hideClass: {
              popup: ` animate__animated animate__fadeOutDown animate__faster`
            },
            confirmButtonText: 'CONFIRMAR!',
            allowOutsideClick: false, // Desactiva el cierre al hacer clic fuera del popup
            allowEscapeKey: false,   // Desactiva el cierre con la tecla "Escape"
            allowEnterKey: false,

          }).then( (result)=>{

            if (result.isConfirmed) {
                
                setOpen( true );
                if (videoRef.current) {
                    videoRef.current.muted = false; // Desactiva el mute
                    videoRef.current.play();       // Reproduce el video
                    setIsPlaying(true);            // Actualiza el estado
                }
            }

          } );

    },[] );

    return( 
        <>
            {
                open ?
                    <>
                        <div className="w-full h-screen relative flex-1 justify-center items-center" >

                            <video autoPlay loop className='absolute inset-0 w-full h-full object-cover md:h-full md:w-full ' ref={videoRef}>
                                <source src= { VideoHp } />
                            </video>

                            <div class="p-4 lg:w-2/4 rounded-lg shadow-lg text-gray-800 md:w-4/5 cinzel-decorative-regular sub-background ">
                                <h1 class="w-full text-3xl font-bold text-blue-600">Bienvenido a "El Rincón Mágico de los Juegos"✨⚡</h1>
                                <p class="mt-4 text-white">
                                    ¡Prepárate para sumergirte en un mundo lleno de diversión y magia! Aquí encontrarás los mejores juegos de
                                    <strong>mímica</strong> y <strong>trivias</strong> inspirados en el universo de <strong>Harry Potter</strong>. 🪄
                                </p>
                                <h2 class="mt-4 text-lg font-semibold text-rose-700">🎭 Mímica mágica:</h2>
                                <p className="text-white">
                                    Demuestra tus habilidades interpretativas y haz que tus amigos adivinen escenas, personajes o hechizos sin decir una sola palabra.
                                    ¿Podrán descifrar tu encantamiento gestual?
                                </p>
                                <h2 class="mt-4 text-lg font-semibold text-green-600">🧙‍♂️ Trivias desafiantes:</h2>
                                <p className="text-white">
                                    Pon a prueba tus conocimientos del mundo mágico, desde los detalles más curiosos de Hogwarts hasta los hechizos más complicados.
                                    ¿Crees que eres digno de ganar la Copa de las Casas?
                                </p>
                                <p class="mt-6 text-white" >
                                    👉 ¡Invita a tus amigos, elige tu casa y que comience la magia! Tu aventura en este sitio está por comenzar...
                                    <strong>¿listo para mostrar tu magia y sabiduría?</strong> 🌟
                                </p>
                                <p className="mt-6 text-center" >
                                    <Link to = "/home/guias" className="bg-blue-600 pt-3 pb-3 pl-6 pr-6 rounded-full text-white" > Guia de juego! </Link>
                                </p>
                            </div>

                        </div>

                    </>
                :
                <div className="hogwarts-background" style={{ backgroundImage: `url(${HogwartsFondo})` }}></div>
            }
        </> 
    )
}

export default MainPage;