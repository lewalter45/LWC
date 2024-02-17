"use strict"; // Added 'use strict' directive

// Update date, time, and status every second
function updateDateTime() {
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
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${hours}:${minutes}:${seconds}`;
  const formattedDate = `${dayOfWeek}, ${month} ${now.getDate()}, ${year}`;
  document.getElementById(
    "datetime"
  ).textContent = `${formattedTime} | ${formattedDate}`;

  const isOpen = isBusinessHours(now);
  document.getElementById("status").textContent = isOpen ? "Open:" : "Closed:";
}

function isBusinessHours(date) {
  const day = date.getDay();
  const hour = date.getHours();

  // Monday to Friday, 8:00 a.m. to 5:00 p.m.
  const isWeekday = day >= 1 && day <= 5;
  const isWorkingHours = hour >= 8 && hour < 17;

  return isWeekday && isWorkingHours;
}

setInterval(updateDateTime, 1000);

// Initial update
updateDateTime();
const statusElement = document.getElementById("status");

function updateStatusDisplay() {
  const isOpen = isBusinessHours(new Date());
  statusElement.textContent = isOpen ? "Open" : "Closed";
  statusElement.style.color = isOpen ? "#00ff00" : "#f83207";
}

// Call updateStatusDisplay initially and then set interval
updateStatusDisplay();
setInterval(updateStatusDisplay, 1000 * 60); // Update every minute
// Code scan for errors - No syntax errors detected in provided snippets
