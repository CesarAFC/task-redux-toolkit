import { Typography, Box, IconButton, Button } from '@mui/material';
import './Modal.css';
import CloseIcon from '@mui/icons-material/Close';
import { useModal } from '../hooks/useModal';

export const ModalConfirmation = ({ handleDelete, isOpen, closeModal}) => {

    const handleModalContainerClick = (e) => {e.stopPropagation()}

    // const [isOpenModal1, openModal1, closeModal1] = useModal(false);

    const handleActionButton = () => {
        handleDelete();
        closeModal();
    }

  return (
    <article 
    onClick={closeModal} 
    className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <IconButton onClick={closeModal}
          //className="modal-close"
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          variant="contained"
        >
          <CloseIcon />
        </IconButton>
        
        
        <Typography variant="h6" gutterBottom>Are you sure?</Typography>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', height: '100px'}}>
            <Button onClick={handleActionButton} variant="text">Delete</Button>
            <Button onClick={closeModal} variant="contained">Cancel</Button>
            </Box>
      </div>
    </article>
  );
}