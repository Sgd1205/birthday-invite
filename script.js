function saveName() {
  const name = document.getElementById('nameInput').value.trim();
  if (name) {
    localStorage.setItem('guestName', name);
    window.location.href = 'invite.html';
  } else {
    alert("Please enter your name 😊");
  }
}

window.onload = function () {
  const greeting = document.getElementById('greeting');
  const name = localStorage.getItem('guestName');
  if (greeting && name) {
    greeting.innerText = `Hey ${name}! 🌼`;
  }

  // Countdown to May 12th
  const eventDate = new Date("2025-05-12T00:00:00").getTime();
  const countdown = document.getElementById('countdown');
  if (countdown) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      if (distance < 0) {
        countdown.innerHTML = "🎉 It's today!";
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        countdown.innerHTML = `Only ${days} day(s) to go!`;
      }
    }, 1000);
  }
};


const audio = document.querySelector('audio');
const musicToggle = document.getElementById('musicToggle');

musicToggle.addEventListener('change', function () {
  if (musicToggle.checked) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Ensure audio plays on page load if toggle is checked
window.onload = function () {
  const greeting = document.getElementById('greeting');
  const name = localStorage.getItem('guestName');
  if (greeting && name) {
    greeting.innerText = `Hey ${name}! 🌼`;
  }

  //countdown to 12th may 
  const eventDate = new Date("2025-05-12T18:30:00").getTime(); // 6:30pm
  const countdown = document.getElementById('countdown');

  if (countdown) {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        countdown.innerHTML = "🎉 It's today!";
        clearInterval(interval);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        countdown.innerHTML = `Only ${days} day(s), ${hours} hour(s), and ${minutes} minute(s) to go!`;
      }
    }, 1000);
  }


  // Start music if toggle is checked
  if (musicToggle.checked) {
    audio.play();
  }
};
