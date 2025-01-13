import { TresMagos, Teams, Single, Tribia, Adivina, Equipos } from '../../public/assets/imgs';

export const guideInformation = [
    {
        buttonTitle:'Uno contra Uno',
        text:`
            En esta modalidad se te mostrara un personaje, objecto, criatura magica en la pantalla y tendras que realizar pregutas sobre la saga de harry potter
            con el fin de adivinar tu carta. Cabe resaltar que la persona solo puede responder con un SI o NO a tus preguntas. Si logras adivinar el personaje antes
            de que el tiempo acabe la carta es tuya obteniendo a si un punto.
        `,
        imagen: Single,
        imagenPop:Adivina,
        clase:' bg-rose-800',
        clave:1
    },
    {
        buttonTitle:'Equipo vs Equipo',
        text:`
            En esta modalidad se enfrenta dos equipos de minimo 3 personas y se utilizara la mimica. Los integrantes del equipo deben estar formados en fila siendo la
            ultima persona de la fila la que empezara el juego. Al momento de dar click he iniciar el tiempo aparecera un personaje en la pantalla, por lo que la persona
            que se encuentre al final de la fila tocara la espalda del siguiente participante y mediante mimica tratara de indicar de que personaje se trata. Una vez
            entendido la informacion se ira pasando de participante en participante hasta llegar al ultimo y tratar de adivinar antes de que el tiempo acabe. 
        `,
        imagen: Teams,
        imagenPop:Equipos,
        clase:'bg-yellow-600',
        clave:2
    },
    {
        buttonTitle:'Tribias',
        text:`
            En esta modalidad de juego se pondran a prubea tus conocimientos sobre la saga. Contaras con una cantidad de tiempo para respondes ciertas y obtener puntuacion
        `,
        imagen: TresMagos,
        imagenPop:Tribia,
        clase:'bg-sky-700',
        clave:3
    }
]