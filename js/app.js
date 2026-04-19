// миш, какие () =>
window.onload = function() {
  var yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  var startTime = Date.now();
  
  var hoursEl = document.getElementById('counter-hours');
  var minutesEl = document.getElementById('counter-minutes');
  var secondsEl = document.getElementById('counter-seconds');
  var msEl = document.getElementById('counter-ms');

  function updateCounter() {
    var diff = Date.now() - startTime;
    
    var hours = Math.floor(diff / (1000 * 60 * 60));
    var minutes = Math.floor((diff / (1000 * 60)) % 60);
    var seconds = Math.floor((diff / 1000) % 60);
    var ms = diff % 1000;

    var hoursContent = (hours < 10 ? '0' : '') + hours;
    var minutesContent = (minutes < 10 ? '0' : '') + minutes;
    var secondsContent = (seconds < 10 ? '0' : '') + seconds;

    // зачем всё перерисовывать
    if (hoursEl.textContent != hoursContent) 
      hoursEl.textContent = hoursContent;
    if (minutesEl.textContent != minutesContent) 
      minutesEl.textContent = minutesContent;
    if (secondsEl.textContent != secondsContent)
      secondsEl.textContent = secondsContent;

    if (msEl) {
      var str = '00' + ms;
      msEl.textContent = str.slice(-3);
    }
    // оно зато плавное
    setTimeout(updateCounter, 1);
  }
  updateCounter();
};