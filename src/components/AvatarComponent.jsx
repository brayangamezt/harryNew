import { useState } from "react";
import { Avatar } from "@mui/material";
import RecentActorsIcon from '@mui/icons-material/RecentActors';
import { ObteinedAvatars } from '../components/ObteinedAvatars';


export const AvatarComponent = ({player, setPlayers, players, obteined, disabledButton}) =>{

    const [open, setOpen] = useState(false);
    const [cards, setCards] = useState([]);

    const handleClose = () => setOpen(false);

    const handleDelete = () =>{
        const newPlayers = players.filter( (play)=>( play.name !== player.name ) );
        setPlayers( newPlayers );
    };

    const showObteined = () => {
        setOpen(true)
        const wonCards = obteined.filter( (won)=>(
            won.namePlayer === player.name
        ) );
        setCards( wonCards );
    }

    return(
        <>
            <li className="w-full pb-2 pl-4 flex hover:cursor-pointer" >
                <div className="w-3/5 flex personal-avatar" >
                    <Avatar alt={player.name} src = {player.image} sx={{ width: 50, height: 50 }}/>
                    <p className="w-full pl-2 flex items-end text-white cinzel-decorative-regular "> { player.name } </p>
                </div>
                <div className="w-2/5 flex" >
                    <button 
                        type="button" 
                        className="ml-2 px-6 py-2 rounded rounded-lg bg-red-800 text-white p-0 disabled:opacity-30"
                        onClick={ handleDelete }
                        disabled = { disabledButton }
                    >
                        Eliminar
                    </button> 
                    <button type="button" className="ml-2 text-white bg-sky-700 px-6 py-2 rounded rounded-lg" onClick={ showObteined }>
                        <RecentActorsIcon/>
                    </button>
                    <p className="ml-4 w-full flex justify-center items-center text-white "> Pts { player.puntos } </p>
                </div>
            </li>
            <ObteinedAvatars open={open} handleClose={handleClose} cards = { cards } />
        </>
    )
}