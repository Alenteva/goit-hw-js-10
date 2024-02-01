import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const datetimePicker = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    // Отримуємо поточну дату
    const currentDate = new Date();
    if (userSelectedDate.getTime() <= currentDate.getTime()) {
      startBtn.disabled = true;
      iziToast.error({
        title: 'Error',
        message: 'Please choose a date in the future!',
        position: 'topRight',
      });
    } else {
      startBtn.disabled = false;
      iziToast.success({
        title: 'OK!',
        message: 'You can press Start!',
        position: 'center',
      });
    }
  },
};
flatpickr(datetimePicker, options);
