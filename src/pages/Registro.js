import axios from 'axios';
import { HtmlContext } from 'next/dist/shared/lib/html-context';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Registro() {

  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const[repitPassword, setRepitPassword] = useState(null);


  const handOnSubmit = async () => {
    try{
      console.log(email,password,repitPassword);
      const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
      const falla = document.getElementById('falla').innerHTML='Ingresa correo';

      

      if (!email) {
        document.write(falla);
        return;
      } else if(!password){
        alert('Ingrese la contraseña')
        return
      }else if(!validEmail.test(email))
      {
        alert("Email invalido");
        return;
      }else if(password !== repitPassword)
      {
        alert("Contraseñas no coinciden")
        return
      }

      const {status,data} = await axios.post("http://localhost:3030/register", {email,password});

      if(status !== 200){
          alert("Tuvimos problemas")
          return
      }

      alert("Registro exitoso");
    }
    catch(error){
      alert(error.response.data.msj);
    }

  }
    return (
      <div class="vh-100 gradient-form" >
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-lg-12 col-xl-11">
              <div class=" card text-black" >
                <div class="gradient-custom-2 card-body p-md-5">
                  <div class=" row justify-content-center">
                    <div class="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                      <p class="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Regístrate</p>

                      <form class="mx-1 mx-md-4" >


                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="email" id="email" class="form-control"  title="Ingrese correo" onChange={e => setEmail(e.target.value)} />
                            <label class="form-label" for="form3Example3c">Your Email</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4c" class="form-control" required onChange={e => setPassword(e.target.value)} />
                            <label class="form-label" for="form3Example4c">Password</label>
                          </div>
                        </div>

                        <div class="d-flex flex-row align-items-center mb-4">
                          <i class="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div class="form-outline flex-fill mb-0">
                            <input type="password" id="form3Example4cd" class="form-control" required onChange={e => setRepitPassword(e.target.value)}/>
                            <label class="form-label" for="form3Example4cd">Repeat your password</label>
                          </div>
                        </div>

                        <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" class="btn btn-outline-dark" onClick={handOnSubmit}>Registrarse</button>
                          
                        </div>
                        <hr />
                        <p>Listo!! ¿Tienes una cuenta? <Link href="/">Login</Link></p>
                        <p id='falla'>hola</p>
                      </form>

                    </div>
                    <div class="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                      <Image src="/img/logo-grupo-Typsa-2.png" width={550} height={550}
                        class="img-fluid" alt="logo-typsa" />
                  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }