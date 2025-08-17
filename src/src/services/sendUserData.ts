import type { Reservation } from '../types/index';


export const sendData = (reservation: Reservation) => {
  console.warn(reservation.userInfo)
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "timeSlot": reservation.appointment,
        "userInfo": reservation.userInfo,
        "services": reservation.selectedServices
      })
  };
  fetch('http://127.0.0.1:8000/v1/appointments/add', requestOptions).
    then((response) => { if (response.ok) {
    alert('Appointment scheduled successfully!')
    return response.json();
  }
  alert('Appointment scheduled Unsuccessfully!')
        throw new Error('Something went wrong');}).
  catch(() => alert('Appointment scheduled Unsuccessfully!'))
};