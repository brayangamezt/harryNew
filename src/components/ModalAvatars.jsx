
import { Avatar, Dialog, DialogTitle, Button, DialogContent } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { infoAvatars } from '../constants/avatarsInformation';

export const ModalAvatars = ({open, handleClose, setSelectedAvatar}) =>{

    // <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />

    const handleSelected = (avatar) =>{
        const {name, img} = avatar;
        setSelectedAvatar({name, img});
        handleClose();
    }

    return(
        <>
            <Dialog 
                open={open} 
                onClose={handleClose} 
                aria-describedby="alert-dialog-slide-description" 
                fullWidth={true}
                maxWidth="md" // Opciones: 'xs', 'sm', 'md', 'lg', 'xl'
            >
                <DialogTitle>Elige un avatar</DialogTitle>
                <DialogContent>
                    <div className='flex flex-wrap' >
                        {
                            infoAvatars.map( (ava, index)=>(
                                <div className='flex p-2 flex-col justify-center items-center' key = {index} >
                                    <Avatar 
                                        alt ={ ava.name } 
                                        src={ ava.img }  
                                        sx={{ width: 80, height: 80, cursor: "pointer", border:"2px solid #3f51b5" }}
                                        onClick ={ ()=> handleSelected( ava ) }
                                    />
                                    <span className='cinzel-decorative-regular' > { ava.name } </span>
                                </div>
                            ) )
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
    );

}