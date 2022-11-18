import React from 'react'
import Navigator from '/src/components/Navigator'
import Footer from '/src/components/Footer'
import mapaSeguimiento from '/src/assets/mapaSeguimiento.jpg'


function View() {
  return (
    <div>
      <Navigator/>
             
      <form>
           <img src={mapaSeguimiento} alt="mapa seguimiento" 
            width="100%" height="180" style={{objectFit: "cover"}} />
          <p></p>
          <h1>Seguimiento  de ordenes</h1>
          <p></p>
           <label> Número de orden    
           <input type="text" placeholder='Search' className='form-control'/>  
 
           <p></p>
           <div className='table-responsive'>
            <table className='table table-sm table-bordered table-secondary'>
              <thead>
                <tr>
                  <th># Orden</th>
                  <th>Fecha</th>
                  <th>ciudad origen</th>
                  <th>direccion origen</th>
                  <th>ciudad destino</th>
                  <th>Direccion destino</th>
                  <th>Estado</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Tunja</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cumplido</td>
                </tr>
             
                <tr>
                  <td>21</td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cali</td>
                  <td>calle 1 carrera 1</td>
                  <td>Guardado</td>
                </tr>

                <tr>
                  <td>1</td>
                  <td>22-jun-20</td>
                  <td>Bogotá</td>
                  <td>calle 1 carrera 1</td>
                  <td>Villavicencio</td>
                  <td>calle 1 carrera 1</td>
                  <td>Cancelado</td>
                </tr>

              </tbody>
            </table>
           </div>
  </label>
       </form>
      <Footer/>
    </div>
  )
}

export default View