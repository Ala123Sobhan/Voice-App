import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ReactDOM from "react-dom"
import { Modal, Button } from "react-bootstrap"


const Dictaphone1 = () => {
 const [message, setMessage] = useState('');
 const [inputVal, setInput] = useState('');
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 

 
 const {
   transcript,
   interimTranscript,
   finalTranscript,
   resetTranscript,
   listening,
 } = useSpeechRecognition();

 useEffect(() => {
   if (finalTranscript !== '') {
     console.log('Got final result:', finalTranscript);
   }
 }, [interimTranscript, finalTranscript]);

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
     alert("not compatible")
   return null;
 }

 if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
     alert("not compatible")
   console.log('Your browser does not support speech recognition software! Try Chrome desktop, maybe?');
 }
 const listenContinuously = () => {
    
   SpeechRecognition.startListening({
     continuous: true,
     language: 'en-GB',
     language: 'hindi',
    
   });
    resetDone()
    handleShow()
  
 };

 const listeningDone = () =>{
    
    SpeechRecognition.stopListening()
    setInput(transcript)
    handleClose()
    
 }
  const resetDone =() =>{

    setInput('')
    resetTranscript()
      
  }

  const handleChange =(e)=>{
      setInput(e.target.value)
      console.log("in handle change "+e.target.value)
  }
 return (
  <div>
     <div>
       <span>
         listening:
         {' '}
         {listening ? 'on' : 'off'}
       </span>
       <div>
       <input style={{width:"100%"}} value={inputVal}onChange={handleChange}/>

       <br/><br/>
         <button type="button" onClick={resetDone}>Reset</button>
         <button type="button" onClick={listenContinuously}>Listen</button>
         <button type="button" onClick={listeningDone}>Stop</button>
        
         <br/><br/>
        
       </div>
     </div>
     <div>
       {message}
     </div>
     <div>
     {/* <span>{transcript}</span>*/}
     </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
       
      >
     
        <Modal.Title>Listenining...</Modal.Title>
        
        <Modal.Body>
        <span>{transcript}</span>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={listeningDone}>
            Close
          </Button>
           
        </Modal.Footer>
      </Modal>
   </div>
 );
};

export default Dictaphone1;