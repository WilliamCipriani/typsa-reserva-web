
export default function HeaderPage() {
    return(
        <div class="header-blue">
            <nav class="navbar navbar-light navbar-expand-md">
                <div class="container-fluid "><a class="navbar-brand" href="#">TYPSA RESERVA</a>  
                    <ul class="nav navbar-nav">
                        <li  role="presentation"><a class="nav-link" href="#">Home</a></li>
                    </ul>
                </div>
                <div class="navbar-collapse w-50" id="navcol-1">
                        <a class="btn btn-light action-button" role="button" href="#">Cerrar Sesion</a>
                </div>
            </nav>
        </div>
    );
}