// const formatDate = (date) => {
//   date = new Date(date);
//   const monthNames = [
//     "Enero", "Febrero", "Marzo",
//     "Abril", "Mayo", "Junio", "Julio",
//     "Agosto", "Septiembre", "Octubre",
//     "Noviembre", "Diciembre"
//   ];

//   const day = date.getDate();
//   const monthIndex = date.getMonth();
//   const year = date.getFullYear();

//   return day + ' de ' + monthNames[monthIndex] + ' de ' + year;
// }

// export default formatDate;

const months = {
  1: 'Enero',
  2: 'Febrero',
  3: 'Marzo',
  4: 'Abril',
  5: 'Mayo',
  6: 'Junio',
  7: 'Julio',
  8: 'Agosto',
  9: 'Septiembre',
  10: 'Octubre',
  11: 'Noviembre',
  12: 'Diciembre',
}

const formatDate = (date, natural = false) => {
  const dateFormat = new Date(date);
  const dd = dateFormat.getDate();
  const mm = dateFormat.getMonth() + 1; //January is 0!
  const yyyy = dateFormat.getFullYear();

  if (natural) return `${dd} de ${months[mm]} del ${yyyy}`;
  return `${dd}/${mm}/${yyyy}`;
}

export default formatDate;