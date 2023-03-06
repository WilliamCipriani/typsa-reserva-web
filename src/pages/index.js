import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/index.module.css";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [saveData, setSaveData] = useState(false);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(prevState => !prevState);
  const handOnSubmit = async (e) => {
    //console.log(email, password);


    const response = await fetch("http://localhost:3030/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    localStorage.setItem('email',email);
    localStorage.setItem('password',password);

    setSaveData(true);


    const data = await response.json();
    console.log(data);
    if (email.length === 0) {
      alert("Digite su Correo y Contraseña");
    }
    if (data.ok) {
      localStorage.setItem('id',data.id)
      router.push("/reserva");
      
      return;
    } else {
      alert("Usuario y/o Contraseña Incorrecta");
      return;
    }

    
    e.preventDefault();
  };

  return (
    <>
      <div className={`py-2 h-100`}>
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className={`card rounded-3 text-black ${styles['gradient-custom-1']}`}>
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4" >
                    <div className="text-center">
                      <Image
                        src="/img/logo-grupo-Typsa-1.png"
                        width={150}
                        height={150}
                        alt="logo"
                      />
                    </div>

                    <form id="form">
                      <h2 className="mt-1 mb-4 pb-1 text-center">
                        Bienvenido(a)
                      </h2>
                      <h5 className="mt-1 mb-4 pb-1 text-center">
                        Porfavor Ingresa tu cuenta
                      </h5>

                      <div
                        className={`form-outline mb-4 ${styles.formOutline}`}
                      >
                        <input
                          type="email"
                          value={email}
                          className={`form-control ${styles.formControl}`}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ejemplo@typsa.es"
                        />
                        <label
                          className={`form-label ${styles.formLabel}`}
                          htmlFor="form2Example11"
                        >
                          Correo Electronico
                        </label>
                      </div>

                      <div
                        className={`${styles.formOutline} mb-4 password-input`}
                      >
                        <input
                          type={passwordVisible ? 'text' : 'password'}
                          value={password}
                          className={`${styles.formControl} form-control`}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <button
                          type="button"
                          className={`password-toggle ${styles.passwordToggle}`}
                          onClick={togglePasswordVisibility}
                        >
                          {passwordVisible ? <i className="material-icons">visibility_off</i> : <i className="material-icons">visibility</i>}
                      </button>
                        <label
                          className={`${styles.formLabel} form-label`}
                          htmlFor="form2Example22"
                        >
                          Contraseña
                        </label>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          className="btn btn-outline-dark"
                          onClick={handOnSubmit}
                        >
                          Iniciar Sesion
                        </button>
                      </div>

                      <div className="d-flex align-items-center justify-content-center pb-4">
                        <p className="mb-0 me-2">¿No tienes cuenta?</p>
                        <button
                          type="submit"
                          className="btn btn-outline-danger"
                        >
                          <Link
                            className={`link-danger ${styles.linkDanger}`}
                            href="/registro"
                          >
                            Create new
                          </Link>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className={`col-lg-6 d-flex align-items-center ${styles["gradient-custom-2"]}`}>
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">Somos más que una sola compañía</h4>
                  <p className="small mb-0">La actividad TYPSA y de su Grupo de empresas, a lo largo de su trayectoria, ha estado siempre dirigida a la prestación de servicios de consultoría e ingeniería de excelencia, buscando optimizar el valor obtenido por sus clientes, pero sin perder de vista su compromiso con el desarrollo social, con la sostenibilidad y con la mejora de la calidad de vida de los ciudadanos.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
}
