import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



export function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

/* let date = dayjs();
      console.log(date.format('dddd, MMMM D'));
      console.log(isWeekend(date)); */

     
      /*let today = dayjs();
      let deliveryDate = today.add(deliveryOption.deliveryDays, 'days');
      dateString = deliveryDate.format ('dddd');

      while (dateString === 'Saturday' || dateString === 'Sunday') {
        x += 3;
        console.log(dateStirng);
      } */
