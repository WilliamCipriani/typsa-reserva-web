import HeaderPage from '../../components/header';
import Image from 'next/image';
import Link from 'next/link';


export default function Home() {
  return (
    <>
    <HeaderPage />
    <div class="gradient-form" >
      <div class="container py-2 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
    
                    <div class="text-center">
                      <Image  src="/img/logo-grupo-Typsa-1.png" width={110} height={150} alt="logo" />
                      
                    </div>
    
                    <form>
                      <h2 class="mt-1 mb-4 pb-1 text-center">Bienvenido(a)</h2>
                      <h5 class="mt-1 mb-4 pb-1 text-center">Porfavor Ingresa tu cuenta</h5>
    
                      <div class="form-outline mb-4">
                        <input type="email" id="form2Example11" class="form-control"
                          placeholder="Email address" />
                        <label class="form-label" for="form2Example11">Username</label>
                      </div>
    
                      <div class="form-outline mb-4">
                        <input type="password" id="form2Example22" class="form-control" />
                        <label class="form-label" for="form2Example22">Password</label>
                      </div>

                      <div class="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="button" class="btn btn-outline-dark" >Iniciar Sesion</button>
                      </div>
    
                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">¿No tienes cuenta?</p>
                        <button type="button" class="btn btn-outline-danger">
                          <Link class="link-danger" href="/Registro">
                            Create new
                          </Link>
                          
                        </button>
                      </div>
    
                    </form>
    
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    
                  </div>
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
