import { useEffect, useState } from 'react';
import  { Houses } from '../../constants/house';
import { Teams } from '../../components/Team';
import { CharactersTeam } from './CharactersTeam';
import Stars from '../../../public/assets/imgs/stars.png';

const TeamsPage = () =>{

    const [teams, setTeams] = useState([]);
    const [turn, setTurn] = useState(0);
    const [obteined, setObteined] = useState([]);

    useEffect( ()=>{
        console.log( 'obteined: ', obteined );
    },[obteined] );

    const handleTeam = ( house ) =>{
        if( teams.length >=2 ) return;
        setTeams([house,...teams]);
    }

    return(
        <>
            <main className="w-full h-screen overflow-hidden" style={ {backgroundImage:`url(${Stars}), linear-gradient(rgb(18, 11, 14), rgb(71, 64, 131) 121.35%)`} } >

                <header className="flex flex-col justify-center items-center" >

                    <div className="w-2/3 text-2xl p-4 text-white cinzel-decorative-regular select-team" > 
                        <p className="py-4 px-4 border-2 rounded rounded-lg shadow" >
                            <span className="py-1 px-1 rounded rounded-lg" > Selecciona tu equipo </span>
                        </p>    
                    </div>

                    <div className="mt-4 lg:w-2/3 lg:h-52 flex justify-around items-center md:w-full" >
                        {
                            Houses.map( (house, index)=>(
                                
                                <div className={ `w-1/5 h-full flex flex-col justify-center items-center rounded rounded-lg ${house.color} house` } 
                                    key={index} 
                                    onClick={ ()=> handleTeam( house ) }
                                >
                                    <img src={ house.img } alt={ house.name } className='w-3/5 h-3/5' />
                                    <span className='cinzel-decorative-bold' > { house.name } </span>
                                </div>
                                
                            ) )
                        }
                    </div>

                </header>

                <div className='w-4/5 h-auto teams-container text-white ' >
                        <h4 className='text-center text-lg p-2 cinzel-decorative-regular ' > Equipos </h4>
                        { teams.length <=0 ? 
                            <h1 className='text-white text-center mt-2 cinzel-decorative-regular' > Aun no hay equipos seleccionados </h1> 
                            :
                            <h1 className='text-white text-center mt-2 mb-2 cinzel-decorative-regular' > Turno del equipo  </h1> 
                        }
                        <div className='w-full flex lg:flex-row md:flex-col' >
                            <div className='lg:w-3/5 md:w-full' >
                                {
                                    teams.length > 0 && 
                                    teams.map( (team,index)=>(
                                        <Teams team = { team } setTeams = { setTeams } teams = { teams } obteined = {obteined} key={index}/>
                                    ) )
                                }
                            </div>
                            {
                                teams.length > 0 && (
                                    <div className='lg:w-2/5 h-80 flex flex-col justify-center items-center lg:border-l-2 md:w-full' >
                                        <CharactersTeam teams = { teams } setTeams = { setTeams } turn = {turn} setTurn = {setTurn} obteined = { obteined } setObteined = { setObteined } />
                                    </div>
                                )
                            }
                        </div>
                </div>

            </main>
        </>
    )

}

export default TeamsPage;