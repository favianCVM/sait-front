const formatDate = (date) => {
  date = new Date(date);
  const monthNames = [
    "Enero", "Febrero", "Marzo",
    "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre",
    "Noviembre", "Diciembre"
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
}

export default formatDate;