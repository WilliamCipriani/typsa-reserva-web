
import { set } from "date-fns";
import { useEffect, useState } from "react";
import Calendar from "../../components/calendar/calendar";

function getData () {
  return localStorage.getItem('email')
}

export default function Reserva() {

  const [email, setEmail] = useState('');

  useEffect(() => {
    setEmail(getData())
    console.log(getData());
    }, [])

    return( 
      <>
        <h2 className="text-end fs-5 fw-bolder m-4"> Bienvenido(a), {email}</h2>
        
        <div >
          
          <Calendar />

        </div>

        
      </>
    );
}


  
 
  