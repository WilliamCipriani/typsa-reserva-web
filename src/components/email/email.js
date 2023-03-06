import nodemailer from 'nodemailer';

const enviarCorreoReserva = (usuario, evento) => {
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'typsa.reserva@gmail.com',
      pass: 'Welcome2022'
    }
  });

  const mailOptions = {
    from: localStorage.getItem(getData()),
    to: usuario.getData,
    subject: 'Reserva de sala de reuniones',
    text: `!Hola.. ! Acabas de reservar el evento "${evento.titulo}" para el día ${evento.fecha}.`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Correo enviado: ' + info.response);
    }
  });
};

export default enviarCorreoReserva;
