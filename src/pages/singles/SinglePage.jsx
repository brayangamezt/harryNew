import { useState} from 'react';
import { Avatar } from "@mui/material";
import { ModalAvatars } from '../../components/ModalAvatars';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { AvatarComponent } from '../../components/AvatarComponent';
import { Character } from './Character';
import Hogwarts from '../../../public/assets/imgs/hogwarts.jpg';

const SinglePage = () =>{

    const [newPlayer,setNewPLayer] = useState('');
    const [players, setPlayers] = useState([]);
    const [turn, setTurn] = useState(0);
    const [open, setOpen] = useState(false);
    const [selectedAvatar, setSelectedAvatar] = useState( null );
    const [obteined, setObteined] = useState([]);

    const handlePlayer = ({target}) =>{
        let player = target.value;
        setNewPLayer( player );
    }

    const addNewPlayer = () =>{
        if( !newPlayer ) return;
        setPlayers( [{name:newPlayer, image:selectedAvatar.img, puntos:0}, ...players] );
        setNewPLayer( '' );
        setSelectedAvatar( null );
    };

    const handleOpen = () => setOpen(true);

    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
           <div className="w-full h-screen flex lg:flex-row overflow-hidden players-side object-cover md:flex-col" 
                style={ {backgroundImage:`url(${Hogwarts})`} }
                >
                <div className="lg:w-2/4 p-10 md:w-full" >
                    <div className='p-2 players-container border-2' >

                        <div className="w-full flex" >
                            <div className='mr-2 p-2' >
                                {
                                    selectedAvatar ?
                                        <Avatar alt={ selectedAvatar.name } src={ selectedAvatar.img } sx={{ width: 60, height: 60, cursor: "pointer" }} onClick={ handleOpen } />
                                    :
                                        <Avatar sx={{ width: 60, height: 60, cursor: "pointer" }} onClick={ handleOpen } >
                                            <AddAPhotoIcon/>
                                        </Avatar>
                                }
                            </div>
                            <div className='w-3/4'> 
                                <label for="price" className="block text-xl font-medium text-gray-900 cinzel-decorative-bold text-white"> Agregar jugador </label>
                                <input 
                                    type="text" 
                                    className="mt-1 lg:w-3/5 px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                    focus:outline-none focus:border-sky-600 focus:ring-1 focus:ring-sky-600
                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500 
                                    md:w-3/5 "
                                    placeholder="Nuevo jugador"
                                    value={ newPlayer }
                                    onChange={ handlePlayer }
                                />
                                <button 
                                    type="button" 
                                    className="ml-2 bg-sky-700 hover:bg-sky-900 lg:px-6 lg:py-2 text-white rounded rounded-lg cinzel-decorative-regular md:px-4 md:py-1"
                                    onClick={ addNewPlayer }
                                > 
                                    Agregar 
                                </button>
                            </div>
                        </div>

                        <div className='w-full mt-6 text-xl font-medium text-gray-900' >
                            <h3 className='mb-6 cinzel-decorative-bold text-white text-center cinzel-decorative-regular' > Jugadores </h3>
                            <p className='mb-6 cinzel-decorative-bold text-white' > Jugador en turno: { players.length > 0 && players[turn].name } </p>
                            {
                                players.length <= 0 
                                ? 
                                <p className='text-white text-center cinzel-decorative-regular' > Aun no existen jugadores registrado </p>
                                :
                                <ul className='w-full' >
                                    {
                                        players.map( (player, index)=>(
                                            <AvatarComponent player = { player } setPlayers = { setPlayers } players = { players } obteined = { obteined }  key={index}/>
                                        ) )
                                    }
                                </ul>
                            }
                        </div>

                    </div>
                </div>
                <div className="lg:w-2/4 flex justify-center items-center md:w-full" >
                        <Character players = { players } setPlayers = { setPlayers } setObteined = { setObteined } obteined={obteined} turn = {turn} setTurn = { setTurn } />
                </div>
           </div>
           { open && <ModalAvatars handleClose = { handleClose } open = { open } setSelectedAvatar = { setSelectedAvatar } /> }
        </>
    )

}

export default SinglePage;