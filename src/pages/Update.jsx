import React from "react"
import LabelInput from "../components/LabelInput"
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'

function Login() {
  return(
   
   <div>
    <Navigator/>
      <p> hola moco</p>
    < LabelInput 
        etiqueta= "nombre"/>
    < LabelInput 
        etiqueta= "apellido"/>





    <Footer/>    
    </div>
  )
}

export default Login;