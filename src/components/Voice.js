import React, {useState} from 'react'

import  '../App.css'
import { Button, Dialog, DialogTitle, DialogContent,DialogActions} from 'react-mdl'


function Voice() {
        
    const [openDialog, setDialog] = useState(false)


    
    const  handleOpenDialog=()=> {
       setDialog(true)
  }

 const handleCloseDialog =()=> {
   setDialog(false)
  }


  
    
    return (
        <div>
            <h1>Voice</h1>
            <div>
        <Button colored onClick={handleOpenDialog} raised ripple>Show Dialog</Button>
        <Dialog open={openDialog} onCancel={handleCloseDialog}>
          <DialogTitle>Allow data collection?</DialogTitle>
          <DialogContent>
            <p>Allowing us to collect data will let us get you the information you want faster.</p>
          </DialogContent>
          <DialogActions>
            <Button type='button'>Agree</Button>
            <Button type='button' onClick={handleCloseDialog}>Disagree</Button>
          </DialogActions>
        </Dialog>
      </div>
         
        </div>
    )
}

export default Voice
