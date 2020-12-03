import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

const Whateva = () => {
    console.log("here")
    const { transcript, resetTranscript } = useSpeechRecognition()
   
    console.log(transcript)
  
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        console.log(transcript)
  
      return null

    }
    
   const handleChange=(e)=>{
    const v = e.target.value
    

    }
     const listenSpeech=()=>{
      SpeechRecognition.startListening()
      document.getElementById("inputs").value = transcript
      
      
   
     // SpeechRecognition.startListening()
      console.log( document.getElementById("inputs").value)
      
      
     }
    return (
      <div>
        <button onClick={listenSpeech}>Start</button>
        
       
        {/*<button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>*
    <p>{transcript}</p>*/}
      
        <input id="inputs" onChange={handleChange} />
       {/* <p>{transcript}</p>*/}
      </div>
    )
  }
  export default Whateva