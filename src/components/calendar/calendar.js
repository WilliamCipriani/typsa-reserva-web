
import { useEffect, useState, useRef } from 'react';
import FullCalendar from '@fullcalendar/react';
import daygrid from "@fullcalendar/daygrid";
import timegrid from "@fullcalendar/timegrid";
import interaction from "@fullcalendar/interaction";
import list from '@fullcalendar/list';
import * as bootstrap from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { CalendarForm } from "../calendarForm/calendarForm";
import axios from 'axios';


function MyCalendar() {

  const [events, setEvents] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const calendarRef = useRef(null);
 

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3030/reserva'); // Usa axios en lugar de fetch
        const eventsData = response.data; 
        setEvents(eventsData.reserva);
        
      } catch (error) {
        console.error('Error al cargar las reservas existentes:', error);
      }
    }
    fetchEvents();
  }, []);

  const handOnSubmit = async(param) => {
    if (!param) {
      return; // no hay objeto para desestructurar
    }
    const { title, sala} = param; // desestructurar sólo si param no es null/undefined
    const userId = localStorage.getItem("id");
    const start = event.start;
    const end = event.end;

  // Verificar si la sala ya está reservada en este rango de fechas y horas
    const overlappingEvent = events.find(
      (event) =>
        event.sala === sala &&
        event.fechaInicio < end &&
        event.fechaFin > start
    );
    if (overlappingEvent) {
      alert("Esta sala ya está reservada en este rango de fechas y horas.");
      return;
    }
    
    const newEvent = { ...event,titulo:title,title, sala, fechaInicio:event.start, fechaFin:event.end, usuarioId:userId};
    setModalIsOpen(false);
    setEvents([...events, newEvent]);
 
    calendarRef.current.getApi().addEventSource({
      events: [newEvent]
    });

    const response = await fetch("http://localhost:3030/reservar", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify( newEvent),
    });   
  };

  const eventsToShow = events.map(event => ({
    title: event.titulo,
    sala: event.sala,
    start: new Date(event.fechaInicio),
    end: new Date(event.fechaFin)
  }));


  const closeModal = () => {
    setModalIsOpen(false);
  }

  const handleDateSelect = (arg) => {
    setEvent({
      title: "",
      sala: "",
      start: arg.startStr,
      end: arg.endStr,
      allDay: arg.allDay,
    });
    setModalIsOpen(true);
  };

  const handleEventChange = ({ title }) => {
    setEvent({ ...event, title });
    console.log(event,title,sala);
  };

  const handleEventDelete = () => {
    setEvents((prevEvents) =>
      prevEvents.filter((e) => e.id !== event.id)
    );
    setEvent(null);
    setModalIsOpen(false);
  };

  const handleEventSave = () => {
    if (event.id) {
      setEvents((prevEvents) =>
        prevEvents.map((e) => (e.id === event.id ? event : e))
      );
    } else {
      setEvents((prevEvents) => [
        ...prevEvents,
        { ...event, id: prevEvents.length + 1 },
      ]);
    }
    setEvent(null);
    setModalIsOpen(false);
  };
  return (
    <>
      
      <div className="container mb-3">
      <FullCalendar
        ref={calendarRef}
        plugins={[daygrid,timegrid,interaction,list]}
        initialView="timeGridWeek"
        headerToolbar={{
          start: 'today prev,next',
          center: 'title',
          end: 'dayGridMonth,timeGridWeek,timeGridDay,list',
        }}
        views={{
          list:{
            buttonText: 'Agenda'
          }
        }}
        selectable={true}
        editable={true}
        select={handleDateSelect}
        events={eventsToShow}
        height={'90vh'}
        eventDidMount={(info) => {
         
          return new bootstrap.Popover(info.el, {
            list: 'Agenda',
            title: info.event.title,
            placement: 'auto',
            trigger: 'hover',
            customClass: 'popoverStyle',
            eventColor: '#378006',
            content:"",
            html: true,
          });
        }}
      />
    </div>
    <CalendarForm  isOpen={modalIsOpen}
        event={event}
        onSubmit={handOnSubmit}
        closeModal={closeModal}
        />

  </>

  );


}

export default MyCalendar;


