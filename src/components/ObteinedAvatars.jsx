import { Avatar, Dialog, DialogTitle, Button, DialogContent } from "@mui/material";

export const ObteinedAvatars = ({open, handleClose, cards}) =>{
    return(
        <>
        <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-describedby="alert-dialog-slide-description" 
                fullWidth={true}
                maxWidth="md" // Opciones: 'xs', 'sm', 'md', 'lg', 'xl'
            >
                <DialogTitle>Personajes Ganados</DialogTitle>
                <DialogContent>
                    <div className='flex flex-wrap' >
                        {
                            cards.length > 0 
                            ?
                                <>
                                    {
                                        cards.map( (ava, index)=>(
                                            <div className='flex p-2 flex-col justify-center items-center' key = {index} >
                                                <Avatar 
                                                    alt ={ ava.name } 
                                                    src={ ava.img }  
                                                    sx={{ width: 80, height: 80, cursor: "pointer", border:"2px solid #3f51b5" }}
                                                />
                                                <span className='cinzel-decorative-regular' > { ava.name } </span>
                                            </div>
                                        ) )
                                    }
                                </>
                            :
                            <>
                                <p className="text-center" > Ponte pilas! aun no adivinas cartas </p>
                            </>
                        }
                    </div>
                </DialogContent>
                <Button 
                    type="button" 
                    className="ml-2 bg-red-900 hover:bg-red-900 px-6 py-2 text-white rounded rounded-lg cinzel-decorative-regular"
                    onClick={handleClose} sx={{ margin: 2 }} variant="contained"
                >
                    Cancelar
                </Button>
            </Dialog>
        </>
    )
}