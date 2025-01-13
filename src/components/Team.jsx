import { useEffect, useState } from "react";
import { Avatar } from "@mui/material";

export const Teams = ({team, setTeams, teams, obteined}) =>{
    const [cards, setCards] = useState([]);

    useEffect( ()=>{

        if(obteined.length > 0){
            const obtenidos = obteined.filter( obt =>(
                obt.namePlayer === team.name
            ) );
            setCards( obtenidos );
        }

    },[obteined] );

    const handleTeams = (team) =>{
        const newTeams = teams.filter( (te)=>(
            te.name !== team.name
        ) );
        setTeams( newTeams );
    }

    return(
        <div className="flex mb-2 pl-6" >
            <div className={ `w-36 h-auto ${team.color} flex flex-col justify-center items-center rounded rounded-lg` } >
                <Avatar alt={team.name} src = {team.img} sx={{ width: 80, height: 80 }} variant="square"/>
                <span className="mt-2 cinzel-decorative-regular " >{ team.name } </span>
            </div>
            <div className="w-1/5 h-36 ml-2 flex flex-col justify-center items-center" >
                <p className="cinzel-decorative-regular" > Puntos: { team.puntos } </p>
                <button 
                    type="button" 
                    className={`mt-2 ${team.color} rounded rounded-lg text-white cinzel-decorative-regular px-3 py-2`} 
                    onClick={ ()=> handleTeams( team ) }
                > 
                    Eliminar equipo 
                </button>
            </div>
            <div className="w-3/5 flex flex-col justify-center items-center ml-2 cards-team" >
                <p className="text-white cinzel-decorative-bold text-center" > Personajes adivinados </p>
                <div className="mt-2 w-full flex" >
                    {
                        cards.map( (card, index)=>{
                            return(
                                <>
                                    <Avatar alt={card.name} src = {card.img} sx={{ width: 70, height: 70, marginRight:1 }} variant="square" key={index}/>
                                </>
                            )
                        } )
                    }
                </div>
            </div>
        </div>
    )
}