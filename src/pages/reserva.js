import { headers } from "next.config";


export default function Reserva() {

    return(

        <main>
           
           <form className="vh-100">
           
            <div className="mb-3">
                <label htmlFor="sala" className="form-label">Sala</label>
                <select className="form-select" id="sala" name="sala">
                    <option value="">Seleccione una sala</option>
                    <option value="sala-a">Sala A</option>
                    <option value="sala-b">Sala B</option>
                    <option value="sala-c">Sala C</option>
                </select>
            </div>
            <div className="mb-3">
                <label htmlFor="fecha" className="form-label">Fecha</label>
                <input type="date" className="form-control" id="fecha" name="fecha" />
            </div>
            <div className="mb-3">
                <label htmlFor="horaInicial" className="form-label">Hora de inicio</label>
                <input type="time" className="form-control" id="horaInicial" name="horaInicial" />
            </div>
            <div className="mb-3">
                <label htmlFor="horaFinal" className="form-label">Hora final</label>
                <input type="time" className="form-control" id="horaFinal" name="horaFinal" />
            </div>
            
            <button type="submit" className="btn btn-primary">Reservar</button>
        </form> 
        </main>
        
    );
}
  
 
  