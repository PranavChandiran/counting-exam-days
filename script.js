document.addEventListener('DOMContentLoaded', function () {
  // Target dates
  const hostelLifeDate = new Date('2023-06-14').getTime();
  const tenthDate = new Date('2023-02-24').getTime();

  // Function to update countdown
  function updateCountdown(targetDate, elementId) {
    setInterval(function () {
      const currentDate = new Date().getTime();
      const timeDifference = targetDate - currentDate;

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

      document.getElementById(elementId).innerHTML = `Days remaining: ${days}`;
    }, 1000);
  }

  // Update countdown for hostel life
  updateCountdown(hostelLifeDate, 'hostelCountdown');

  // Update countdown for 10th
  updateCountdown(tenthDate, 'tenthCountdown');
});
