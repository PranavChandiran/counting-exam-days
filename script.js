document.addEventListener('DOMContentLoaded', function () {
  // Target date: 12.11.23
  const targetDate = new Date('2023-11-12').getTime();

  // Update the countdown every second
  setInterval(function () {
    const currentDate = new Date().getTime();
    const timeDifference = currentDate - targetDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML = `Days since 12.11.23: ${days}`;
  }, 1000);
});
