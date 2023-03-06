import { useState, useEffect } from "react";
import Modal from "react-modal";
import { CalendarApi } from "fullcalendar";
import styles from "../../styles/calendarForm.module.css";


export const CalendarForm = ({ isOpen, onSubmit, closeModal}) => {

  const [title, setTitle] = useState("");
  const [sala, setSala] = useState("");
  const [salas, setSalas] = useState([]);

  
  useEffect(() => {
    async function fetchSalas() {
      try {
        const response = await fetch("http://localhost:3030/sala"); // Hacer una solicitud GET a tu API
        const data = await response.json(); // Convertir la respuesta en formato JSON
        setSalas(data.sala); // Actualizar el estado de "salas" con los datos obtenidos de la tabla
      } catch (error) {
        console.error(error);
      }
    }
    fetchSalas();
  }, []);


  const handOnSubmit = async (e) => {
    e.preventDefault();
    onSubmit({ title, sala });
    closeModal();
    
  };

  const handleSalaChange = (e) => {
    setSala(e.target.value);
  };

  return (
    <Modal className={`${styles.container-1}`} id="myModal" isOpen={isOpen} onRequestClose={closeModal}>
      <form className={`form ${styles.form}`}>
        <div className="modal-title" >
          <h5 className="mt-1 pb-1 text-center">Nueva Reserva</h5>
        </div >
        <div className={`form-outline mb-2 ${styles.formOutline}`}>
        <label htmlFor="title">Title: </label>
        <input
          type="text"
          id="title"
          name="title"
          className={`form-control ${styles.formControl}`}
          onChange={(e) => setTitle(e.target.value)}
                  />
        </div>
        <div>
        <label htmlFor="title">Sala: </label>
        <select
        className={`form-select ${styles["form-select"]}`}
        onChange={handleSalaChange}>
          {salas.map((sala) => (
            <option key={sala.numeroSala} value={sala.numeroSala}>
              {sala.nombre} - Capacidad: {sala.capacidad}
            </option>
          ))}
        </select>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            onClick={handOnSubmit}
            className={`btn btn-primary ${styles.button}`}
          >
            Agregar Reunion
          </button>
          <button
            type="button"
            className={`btn btn-danger ${styles.button}`}
            onClick={() => closeModal()}
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};
