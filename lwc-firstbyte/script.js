document.addEventListener("DOMContentLoaded", function () {
  updateTime();
  setInterval(updateTime, 1000); // Update time every second
});

function updateTime() {
  const now = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
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

  const dayOfWeek = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = ("0" + now.getMinutes()).slice(-2);

  const currentTimeString = `${dayOfWeek}, ${month} ${date}, ${year}, ${hour}:${minute}`;
  const openStatusElement = document.getElementById("open-status");

  const openTime = new Date();
  openTime.setHours(8, 0, 0); // 8:00 a.m.
  const closeTime = new Date();
  closeTime.setHours(17, 0, 0); // 5:00 p.m.

  const isOpen =
    now.getDay() >= 1 &&
    now.getDay() <= 5 &&
    now >= openTime &&
    now <= closeTime;

  openStatusElement.textContent = isOpen ? "Open" : "Closed";

  const currentTimeElement = document.getElementById("current-time");
  currentTimeElement.textContent = `${dayOfWeek}, ${month} ${date}, ${year}, ${hour}:${minute} ${
    isOpen ? "Open" : "Closed"
  }`;
}
