function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
  let sec = document.getElementById("seconds")
  let min = document.getElementById("minutes")
  let hour = document.getElementById("hour")

  function trasSec(seg) {
    seg %= 60; 
    return ((6 * seg) + 180) % 360;
  }
  function trasMinutes(seg) {
    seg %= 3600; 
    return ((6 * seg / 60) + 180) % 360;

  }
  function trasHour(seg) {
    seg %= 43200; 
    return ((360 * seg / 43200) + 180) % 360;

  }
  setInterval( function() {
      var time = getSecondsSinceStartOfDay();
/*       console.log(time); */
      
      var newtime = trasSec(time)
      var newtimemin = trasMinutes(time)
      var newtimehour = trasHour(time)
      
     
    sec.style.transform = `rotate(${newtime}deg)`;
    min.style.transform = `rotate(${newtimemin}deg)`;
    hour.style.transform = `rotate(${newtimehour}deg)`;
  }, 1000);
  