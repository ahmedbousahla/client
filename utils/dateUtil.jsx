// export const getCurrentDate = () => {
//   const now = new Date();
//   const month = now.getMonth() + 1;
//   const year = now.getFullYear();

//   return `${month}-${year}`;
// };

export const formatCurrentMonth = (currentMonth) => {
  const [ year ,month , day] = currentMonth.split("-"); 
  
  const months = [
    "January",
     "February",
     "March",
     "April",
     "May",
     "June",
     "July",
     "August",
     "September",
     "October",
     "November",
     "December",
  ];

  return `${day.slice(0,2)} - ${months[parseInt(month) - 1]} - ${year}`;
};
