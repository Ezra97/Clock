function suffix(number) {
    const rules = new Intl.PluralRules("en", { type: "ordinal"});
    const suffixes = {
      one: "st",
      two: "nd",
      few: "rd",
      other: "th"
    }
    const suffix = suffixes[rules.select(number)];
    return (number + suffix);
  };

  function updateTime(){
    var dateInfo = new Date();
    /*time*/
    var hr,
    _min=(dateInfo.getMinutes() < 10)? "0" + dateInfo.getMinutes() : dateInfo.getMinutes(),
     sec = (dateInfo.getSeconds() < 10)? "0" + dateInfo.getSeconds() : dateInfo.getSeconds(),
     ampm = (dateInfo.getHours() >= 12)? "PM" : "AM";
     /*Replace 0 with 12 after, subject 12 form hour if 13 - 23*/
     if(dateInfo.getHours() == 0){
       hr = 12;
     }else if(dateInfo.getHours() > 12){
       hr = dateInfo.getHours() - 12;
     }else{
       hr = dateInfo.getHours();
     }
     /*current time*/
     var currentTime = hr + ":" + _min + ":" + sec;
     /*print time*/
     document.getElementsByClassName("hms")[0].innerHTML = currentTime;
     document.getElementsByClassName("ampm")[0].innerHTML = ampm;
     /*date*/
     var dateOfWeek = ["Sunday", "Monday", "Teusday", "Wednesday", "Thursday", "Friday", "Saturday"],
     month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
     day = dateInfo.getDate();
     /*Store date*/
     var currentDate = dateOfWeek[dateInfo.getDay()] + ", " + month[dateInfo.getMonth()] + " " + suffix(day);
     document.getElementsByClassName('date')[0].innerHTML = currentDate;
   };

   /*print time and date once then update them every second */
   updateTime();
   setInterval(function(){
     updateTime();
   },1000);
