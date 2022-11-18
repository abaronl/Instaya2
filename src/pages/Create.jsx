import React from "react"
import Card from '../components/Card'
import LabelInput from "../components/LabelInput";
import '../slyles/Create.css'
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'


function Login() {
  return(

    
    <div className = "contenedorPrincipalCreate">
      <div >
        <Navigator/>
        <div className="row justify-content-evenly">
          <div className="col-6">
            <h1>Creacion de orden </h1>
            <Card 
              cuerpo= {<><LabelInput etiqueta= "nombre" />
              <LabelInput etiqueta= "Apellido" /> </>}          
            />
          </div>

          <div className="col-4">
           fotos aqui
          </div>
          
        </div>

      </div>
      <footer/>
    </div>
     
  
  )
}

export default Login;