const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const seconds = document.getElementById("seconds");

const clock = setInterval(function time() {
  const date_now = new Date();
  const hr = date_now.getHours();
  const min = date_now.getMinutes();
  const sec = date_now.getSeconds();

    // if (hr < 10) {
    //   hr = "0" + hr;
    // }
    // if (min < 10) {
    //   hr = "0" + min;
    // }
    // if (sec < 10) {
    //   sec = "0" + sec;
    // }

  hour.textContent = hr;
  minute.textContent = min;
  seconds.textContent = sec;
}, 1000);
