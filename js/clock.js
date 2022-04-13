const getClock = () => {
  const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const MONTHS = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

  const time = new Date();
  const clock = document.querySelector('#clock');
  const date = `${DAYS[time.getDay()]}, ${MONTHS[time.getMonth()]} ${time.getDate()} ${time.getFullYear()}`;

  let meridiem = '';
  let hours = 0;
  let minutes = String(time.getMinutes()).padStart(2, '0');
  let seconds = String(time.getSeconds()).padStart(2, '0');

  if (time.getHours() > 12) {
    meridiem = 'PM';
    hours = time.getHours() - 12;
  } else {
    meridiem = 'AM';
    hours = time.getHours();
  }

  hours = String(hours).padStart(2, '0');

  clock.innerText = `${date} | ${meridiem} ${hours}:${minutes}:${seconds}`;
};

getClock;
setInterval(getClock, 1000);
