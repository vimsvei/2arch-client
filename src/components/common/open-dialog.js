import React from "react";
import Button from "@material-ui/core/Button";
import ApplicationComponentCard from "../application-component-card";

const OpenDialog = () => {
  const [open, setOpen] = React.useState(false);
  
  const handleClickOpen = () => {
	setOpen(true);
  };
  
  const handleClose = () => {
	setOpen(false);
  };
  
  return(
    <div>
	  <Button variant="outlined" color="primary" onClick={handleClickOpen}>
		Open form dialog
	  </Button>
	  <ApplicationComponentCard open={open} handleClose={handleClose} />
	</div>
  );
};

export default OpenDialog;
