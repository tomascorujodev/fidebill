export function convertirFecha(fecha) {
    const date = new Date(fecha); 
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const anio = date.getFullYear();

    return `${dia}-${mes}-${anio}`;
}

export function convertirFechaArgentina(fechaISO) {
  if(fechaISO === null) return;
    const fecha = new Date(fechaISO);
  
    const opciones = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      hour12: false,
    };
  
    const fechaFormateada = new Intl.DateTimeFormat('es-AR', opciones).format(fecha);
    return fechaFormateada;
}
  