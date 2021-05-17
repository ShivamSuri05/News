let time,seconds,timestr,datestr,date,day,daystr,minutes,hours;
        let monthNames = [ "January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December" ];
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        time = new Date();
            seconds = (time.getSeconds()>=10)? time.getSeconds():"0"+time.getSeconds();
            minutes = (time.getMinutes()>=10)? time.getMinutes():"0"+time.getMinutes();
            hours = (time.getHours()>=10)? time.getHours():"0"+time.getHours();
            timestr = hours + " : " + minutes + " : " + seconds;
        document.getElementById('writetime').innerHTML = timestr;
        date = new Date();
            datestr = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear();
        document.getElementById('writedate').innerHTML = datestr;
        day = new Date();
        daystr = days[day.getDay()];
        document.getElementById('writeday').innerHTML = daystr;
        setInterval(function(){
            time = new Date();
            seconds = (time.getSeconds()>=10)? time.getSeconds():"0"+time.getSeconds();
            minutes = (time.getMinutes()>=10)? time.getMinutes():"0"+time.getMinutes();
            hours = (time.getHours()>=10)? time.getHours():"0"+time.getHours();
            timestr = hours + " : " + minutes + " : " + seconds;
        document.getElementById('writetime').innerHTML = timestr;
        },1000);
        setInterval(function(){
            date = new Date();
            datestr = date.getDate()+" "+monthNames[date.getMonth()]+" "+date.getFullYear();
        document.getElementById('writedate').innerHTML = datestr;
        },1000);
        setInterval(function(){
            day = new Date();
            daystr = days[day.getDay()];
        document.getElementById('writeday').innerHTML = daystr;
        },1000);
