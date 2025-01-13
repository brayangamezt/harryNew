import { useState, useEffect } from "react";
import HogwartLogo from '../../avatars/Hogwarts-Logo.jpg';
import { cardsCharacters } from '../../constants/cards';
import Swal from "sweetalert2";
import Tiking from '../../../public/assets/audios/ticking.mp3';
import ErrorAudio from '../../../public/assets/audios/incorrect.mp3'
import Correct from '../../../public/assets/audios/correct.mp3'

export const CharactersTeam = ({teams, setTeams, turn, setTurn, obteined, setObteined}) =>{
    const [startGame, setStartGame] = useState(false);
    const [seconds, setSeconds] = useState(25);
    const [selectedCard, setSelectedCard] = useState(null);
    const [deletedNumber, setDeletedNumber] = useState([]);
    const [next, setNext] = useState( false );
    const [cards, setCards] = useState( cardsCharacters );

    let tik = new Audio( Tiking );
    let correct = new Audio( Correct );
    let incorrect = new Audio( ErrorAudio );

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
                              handleTeams( turn );
                              setObteined([...obteined, {namePlayer:teams[turn].name , ...selectedCard}]);
    
                              if( turn === 0  ){
                                setTurn( 1 );
                              }else if( turn === 1 ){
                                setTurn( 0 );
                              }
    
                            } else if (result.isDenied) {
                              Swal.fire("Sangre sucia maldito", "", "error");
                              incorrect.play();
                              if( turn === 0  ){
                                setTurn(  1 );
                              }else if( turn === 1 ){
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

    //funcion para agregar puntos a los equipos
    const handleTeams = (index) =>{
        const editPlayers = teams.map( (team)=>{
            if( team.name === teams[turn].name ){
                return { ...team, puntos: team.puntos + 1 }
            }
            return team
        } );
        setTeams( editPlayers );
    }

    //funcion para obtener la siguiente carta
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


    //Funcion para obtener la siguiente 
    const handleReset = () =>{
        setStartGame( false );
        setSelectedCard( null );
        setDeletedNumber([]);
        setSeconds(25);
        setTeams( [] );
    }

    return(
        <>
            <p className="text-white cinzel-decorative-regular" > Tiempo restante: { seconds } </p>
            {
                startGame ?
                <>
                    <img src={ selectedCard.img } alt={ selectedCard.name } className="w-2/5 h-2/4 rounded rounded-lg" />
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
                    <img src={ HogwartLogo } alt="hogwartslogo" className="w-2/5 h-2/4 rounded rounded-lg" />
                    <button
                        className="ml-2 mt-6 bg-yellow-600 px-6 py-2 text-white rounded rounded-lg cinzel-decorative-regular disabled:opacity-30" 
                        disabled = { teams.length <= 0 ? true : false }
                        onClick={ handleStartGame }
                    > 
                        Empezar juego 
                    </button>
                </>
            }
            
        </>
    )

}