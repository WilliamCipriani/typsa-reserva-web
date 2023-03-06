
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../../styles/registro.module.css';


export default function Registro() {

  const[email,setEmail] = useState(null);
  const[password,setPassword] = useState(null);
  const[repitPassword, setRepitPassword] = useState(null);



  const handOnSubmit = async () => {
    try{
      console.log(email,password,repitPassword);
      const validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; 
      

      if(!email){
        alert("Ingrese su correo")
        return;
      }
      if(!password){
        alert("Ingrese su  email");
        return;
      }
      if(!validEmail.test(email))
      {
        alert("Ingresa un correo valido");
        return;
      }
      if(password !== repitPassword)
      {
        alert("Constraseñas no coninciden");
        
        return;
      }
      

      const {status,data} = await axios.post("http://localhost:3030/registro", {email,password});

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
      <>
        <div className={`py-2 h-100`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className={`card rounded-3 text-black ${styles['gradient-custom-1']}`}>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4" >
                    
                    <form id="form">
                      <h2 className="mt-1 mb-4 pb-1 text-center">
                      Regístrate
                      </h2>
                      <div className={`form-outline mb-4 ${styles.formOutline}`}>
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" name='email' className={`form-control ${styles.formControl}`}  title="Ingrese correo"  onChange={e => setEmail(e.target.value)}  required />
                            <label className="form-label" htmlFor='form3Example3c'>Your Email</label>
                          </div>
                        </div>

                        <div className={`form-outline mb-4 ${styles.formOutline}`}>
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name='password'  id="form3Example4c" className={`form-control ${styles.formControl}`}  onChange={e => setPassword(e.target.value)} required />
                            <label className="form-label" htmlFor='form3Example4c'>Password</label>
                          </div>
                        </div>

                        <div className={`form-outline mb-4 ${styles.formOutline}`}>
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" name='repitPassword' id="form3Example4cd" className={`form-control ${styles.formControl}`}  onChange={e => setRepitPassword(e.target.value)} required />
                            <label className="form-label" htmlFor='form3Example4cd'>Repeat your password</label>
                          </div>
                        </div>

                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-outline-danger" onClick={handOnSubmit} >Registrarse</button>
                          
                        </div>
                        <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">Listo!! ¿Tienes una cuenta?</p>
                        
                          <Link
                            className={`link-danger ${styles.linkDanger}`}
                            href="/"
                          >
                            Iniciar Sesion
                          </Link>
                        
                      </div>
                    </form>
                  </div>
                </div>
                <div className={`col-lg-6 d-flex align-items-center ${styles["gradient-custom-2"]}`}>
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Somos más que una sola compañía</h4>
                    <Image 
                     src="/img/logo-grupo-Typsa-2.png" width={500} height={300} alt="logo"/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }