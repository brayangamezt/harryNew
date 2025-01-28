import { useState, useEffect } from "react";
import HogwartLogo from '../../avatars/Hogwarts-Logo.jpg';
import { cardsCharacters } from '../../constants/cards';
import Swal from "sweetalert2";
import Tiking from '../../../public/assets/audios/ticking.mp3';
import ErrorAudio from '../../../public/assets/audios/incorrect.mp3'
import Correct from '../../../public/assets/audios/correct.mp3'

export const Character = ({players, setPlayers,setObteined, obteined, turn,setTurn}) =>{

    const [startGame, setStartGame] = useState(false);
    const [next, setNext] = useState( false );
    const [seconds, setSeconds] = useState(25);
    const [cards, setCards] = useState( cardsCharacters );
    const [selectedCard, setSelectedCard] = useState(null);
    const [deletedNumber, setDeletedNumber] = useState([]);

    let tik = new Audio( Tiking );
    let correct = new Audio( Correct );
    let incorrect = new Audio( ErrorAudio );

    //useEffect para iniciar el juego
    useEffect( ()=>{
        if( players.length <= 0 && startGame ){
            setStartGame(false);
            setTurn(0);
            setObteined([]);
            setSelectedCard( null );
            setDeletedNumber([]);
            setSeconds(25);
            setPlayers([]);
        }
    },[players] );

    //Use effect para iniciar el contador
    useEffect( ()=>{
        let intervall;

        if( startGame && next ){
            intervall = setInterval( ()=>{
                if( seconds > 0 ){
                    setSeconds( seconds - 1 );
                    tik.play();
                }else if( seconds === 0 ){
                    clearInterval( intervall );
                    setNext(false);
                    Swal.fire({
                        title: " Lograste adivinar el personaje ",
                        icon:'question',
                        confirmButtonText: "Adivinado",
                        denyButtonText: `A la fila`,
                        showDenyButton: true,
                        confirmButtonColor: "#036997",
                        allowOutsideClick: false, // Desactiva el cierre al hacer clic fuera del popup
                        allowEscapeKey: false,   // Desactiva el cierre con la tecla "Escape"
                        allowEnterKey: false,
                      }).then((result) => {
                        if (result.isConfirmed) {
                          Swal.fire("50 puntos grifyndor!", "", "success");
                          correct.play();

                          handlePlayers( turn );
                          setObteined([...obteined, {namePlayer:players[turn].name , ...selectedCard}]);

                          if( turn < players.length - 1  ){
                            setTurn( turn + 1 );
                          }else if( turn === players.length - 1 ){
                            setTurn( 0 );
                          }

                        } else if (result.isDenied) {
                          Swal.fire("Sangre sucia maldito", "", "error");
                          incorrect.play();
                          if( turn < players.length - 1  ){
                            setTurn( turn + 1 );
                          }else if( turn === players.length - 1 ){
                            setTurn( 0 );
                          }
                        }
                      });
                }
            },1000 );
        }

        return ()=>{clearInterval(intervall)}

    }, [startGame, seconds] );

    //Funcion para obtener un numero random
    const getRandomInt = (min, max) => {
        min = Math.ceil(min); 
        max = Math.floor(max); 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const handlePlayers = (index) =>{
        const editPlayers = players.map( (player)=>{
            if( player.name === players[turn].name ){
                return { ...player, puntos: player.puntos + 1 }
            }
            return player
        } );
        setPlayers( editPlayers );
    }

    //Iniciar juego
    const handleStartGame = () =>{
        setStartGame( true );
        setNext( true );
        const maxNumber = cards.length;

        let number = 0;

        //Asegurando que no se repitan las cartas
        do{
            number = getRandomInt( 1, maxNumber );
        }while( deletedNumber.includes( number ) );

        setDeletedNumber([...deletedNumber,number]);
        
        //Seleccionar una carta
        let choosenCard = cards.filter( car =>(
            car.key === number
        ) );

        setSelectedCard( {...choosenCard[0]} )
    }

    const handleNext = () =>{
        setSeconds( 25 );
        setNext( true );
        const maxNumber = cards.length;
        let number = 0;

        //Asegurando que no se repitan las cartas
        do{
            number = getRandomInt( 1, maxNumber );
        }while( deletedNumber.includes( number ) );

        setDeletedNumber([...deletedNumber,number]);
        
        //Seleccionar una carta
        let choosenCard = cards.filter( car =>(
            car.key === number
        ) );

        setSelectedCard( {...choosenCard[0]} )
    }

    const handleReset = () =>{
        setStartGame( false );
        setTurn(0);
        setObteined([]);
        setSelectedCard( null );
        setDeletedNumber([]);
        setSeconds(25);
        setPlayers([]);
    }

    return(
        <>
            <div className="lg:w-3/4 lg:h-4/5 p-6 flex flex-col justify-center items-center md:w-3/5 md:h-96 card-container" >
                <p className="mb-6 text-3xl text-white text-center cinzel-decorative-bold" > Tiempo restante: {seconds} </p>
                {
                    startGame ?
                        <>
                            <img src={ selectedCard.img } alt={ selectedCard.name } className="lg:w-3/5 lg:h-2/4 rounded rounded-lg block md:h-3/4" />
                            <span className="mt-2 text-white cinzel-decorative-regular" > { selectedCard.name } </span>
                            <div className="mt-6 flex justify-center" >
                                <button 
                                    className="bg-green-800 px-6 py-2 text-white rounded rounded-lg cinzel-decorative-regular disabled:opacity-30" 
                                    onClick={ handleNext }
                                    disabled = { next ? true : false }
                                >
                                    Siguiente
                                </button>
                                <button 
                                    className="ml-4 bg-yellow-600 px-6 py-2 text-white rounded rounded-lg cinzel-decorative-regular disabled:opacity-30 " 
                                    disabled = { next ? true : false }
                                    onClick={ handleReset }
                                > 
                                    Reiniciar juego 
                                </button>
                            </div>
                        </>

                    :
                    <>
                        <img src={ HogwartLogo } alt="hogwartslogo" className="w-4/5 h-2/4 rounded rounded-lg" />
                        <button 
                            className="ml-2 mt-6 bg-yellow-600 px-6 py-2 text-white rounded rounded-lg cinzel-decorative-regular disabled:opacity-30" 
                            disabled = { players.length <= 0 ? true : false }
                            onClick={ handleStartGame }
                        > 
                            Empezar juego 
                        </button>
                    </>
                }
                {
                    players.length <= 0 && <span className="mt- 4 text-white" > Agregar jugadores </span>
                }
            </div>
        </>
    )
}
