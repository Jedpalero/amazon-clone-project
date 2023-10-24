import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
import { isWeekend as isSatSun} from "./index.js";

let date = dayjs().add(5, 'days');
console.log(date.format('dddd, MMMM D'));
console.log(isSatSun(date));