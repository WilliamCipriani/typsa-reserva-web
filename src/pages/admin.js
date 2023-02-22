import { useState } from 'react';

export default function SalasAdmin() {
  const [salas, setSalas] = useState([
    { nombre: 'Sala 1', capacidad: 10 , Fecha: '2023-02-21', horaIncial:'9:00', horaFinal:'10:00'},
    { nombre: 'Sala 2', capacidad: 15 , Fecha: '2023-02-21', horaIncial:'12:00', horaFinal:'13:00'},
    { nombre: 'Sala 3', capacidad: 20 , Fecha: '2023-02-21', horaIncial:'16:00', horaFinal:'17:00'},
  ]);

  const [nuevaSala, setNuevaSala] = useState({
    nombre: '',
    capacidad: 0,
    Fecha:'',
    horaIncial:'',
    horaFinal:''
  });

  const agregarSala = () => {
    const nuevaId = salas.length + 1;
    const nuevaSalaConId = { ...nuevaSala, id: nuevaId };
    setSalas([...salas, nuevaSalaConId]);
    setNuevaSala({ nombre: '', capacidad: 0, Fecha:'',horaIncial:'',horaFinal:'' });
  };

  const eliminarSala = (nombre) => {
    const nuevasSalas = salas.filter((sala) => sala.nombre !== nombre);
    setSalas(nuevasSalas);
  };

  return (
    <div className="container mt-3">
      <h2 className="mb-3">Administración de salas</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Sala A</h5>
              <p className="card-text">Capacidad: 10 personas</p>
              <p className="card-text">Fecha: 2023-02-21 </p>
              <p className="card-text">Hora Incial: 9:00</p>
              <p className="card-text">Hora Final: 10:00</p>
              <button className="btn btn-primary me-2">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Sala B</h5>
              <p className="card-text">Capacidad: 8 personas</p>
              <p className="card-text">Fecha: 2023-02-21 </p>
              <p className="card-text">Hora Incial: 12:00</p>
              <p className="card-text">Hora Final: 13:00</p>
              <button className="btn btn-primary me-2">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">Sala C</h5>
              <p className="card-text">Capacidad: 12 personas</p>
              <p className="card-text">Fecha: 2023-02-21 </p>
              <p className="card-text">Hora Incial: 16:00</p>
              <p className="card-text">Hora Final: 17:00</p>
              <button className="btn btn-primary me-2">Editar</button>
              <button className="btn btn-danger">Eliminar</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
