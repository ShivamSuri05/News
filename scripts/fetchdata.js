

fetch('https://api.covid19india.org/data.json')
        .then((apidata)=>{
            return apidata.json();
        }).then((actualdata)=>{
            let last = Object.keys(actualdata.cases_time_series)[Object.keys(actualdata.cases_time_series).length-1];
            // document.getElementById('showDate').innerHTML = 'Showing data for '+actualdata.cases_time_series[last].date;
            // let cases = parseInt(actualdata.cases_time_series[last].totalconfirmed);
            // let pcases = parseInt(actualdata.cases_time_series[last-1].totalconfirmed);
            // let dcases = parseInt(actualdata.cases_time_series[last].dailyconfirmed);
            // let deaths = parseInt(actualdata.cases_time_series[last].totaldeceased);
            // let pdeaths = parseInt(actualdata.cases_time_series[last-1].totaldeceased);
            // let ddeaths = parseInt(actualdata.cases_time_series[last].dailydeceased);
            // let recovered = parseInt(actualdata.cases_time_series[last].totalrecovered);
            // let precovered = parseInt(actualdata.cases_time_series[last-1].totalrecovered);
            // let dactive = (cases-recovered-deaths) - (pcases-precovered-pdeaths);

            let datta = [];
            let labbels = [];
            for(let i=0;i<90;i++)
            {
                datta.push(actualdata.cases_time_series[last-i].dailyconfirmed);
                labbels.push(actualdata.cases_time_series[last-i].date);
            }
            //make graph
            var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labbels,
        datasets: [{
            label: 'No. of Daily Cases',
            data: datta,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            },
            x:{
                reverse: true
            }
        }
    }
});













            //make table

            let date = actualdata.statewise[0].lastupdatedtime;
            let datestr = "";
            let index=0;
            let monthNames = [ "January", "February", "March", "April", "May", "June",
                            "July", "August", "September", "October", "November", "December" ];
            for(let i=0;i<date.length;i++)
            {
                if(date[i]==" ")
                {
                    break;
                }
                if(date[i]=="/" && index==0)
                {
                    index = i;
                    datestr += " ";
                }
                else if(date[i]=="/")
                {
                    datestr += " ";
                }
                else
                {
                    datestr += date[i];
                }
            }
            
            let month = monthNames[parseInt(datestr[index+1])-1];
            datestr = "";
            for(let i=0;i<date.length;i++)
            {
                // if(date[i]==" ")
                // {
                //     break;
                // }
                if(date[i]=="/")
                {
                    datestr += " ";
                }
                else if(i==index+1)
                {
                    datestr += month;
                }
                else
                {
                    datestr += date[i];
                }
            }
            document.getElementById('showDate').innerHTML = 'Last Updated on '+ datestr;
            let cases = parseInt(actualdata.statewise[0].confirmed);
            let dcases = parseInt(actualdata.statewise[0].deltaconfirmed);
            let deaths = parseInt(actualdata.statewise[0].deaths);
            let ddeaths = parseInt(actualdata.statewise[0].deltadeaths);
            let recovered = parseInt(actualdata.statewise[0].recovered);
            let drecovered = parseInt(actualdata.statewise[0].deltarecovered);
            let pactive = (cases-dcases) - (deaths-ddeaths) - (recovered-drecovered);
            //console.log(cases-deaths-recovered);
            //console.log(pactive);
            let active = parseInt(actualdata.statewise[0].active);

            let dactive = active - pactive;
            if(dactive<0)
            {
                dactive = -dactive;
                document.getElementById('show1').style.display = "none";
            }
            else{
                document.getElementById('show2').style.display = "none";
            }
            
            document.getElementById('tcases').innerHTML = cases.toLocaleString("hi-IN");
            document.getElementById('dcases').innerHTML = dcases.toLocaleString("hi-IN");
            document.getElementById('tdeaths').innerHTML = deaths.toLocaleString("hi-IN");
            document.getElementById('ddeaths').innerHTML = ddeaths.toLocaleString("hi-IN");
            document.getElementById('tactive').innerHTML = active.toLocaleString("hi-IN");
            document.getElementById('dactive').innerHTML = dactive.toLocaleString("hi-IN");
            
            let table = document.getElementById('statestable');
            let dict = [0,'state','deltaconfirmed','deltadeaths','confirmed','active','deaths','lastupdatedtime'];
            for(let i=1;i<38;i++)
            {
                if(i<31)
                {
                    let row = table.insertRow(i);
                    let cell = row.insertCell(0);
                    cell.innerHTML = i;
                    for(let j=1;j<8;j++)
                  {
                    let cel = row.insertCell(j);
                    let str = dict[j];
                    for (key in actualdata.statewise[i])
                    {
                        if(key==str)
                        {
                            if(j==1 || j==7)
                            {
                                cel.innerHTML = actualdata.statewise[i][key];
                            }
                            else
                            {
                                cel.innerHTML = parseInt(actualdata.statewise[i][key]).toLocaleString("hi-IN");
                            }
                        }
                    }      
                    
                  }
                }
                else if(i>31)
                {
                    let row = table.insertRow(i-1);
                    let cell = row.insertCell(0);
                    cell.innerHTML = i-1;
                    for(let j=1;j<8;j++)
                  {
                    let cel = row.insertCell(j);
                    let str = dict[j];
                    for (key in actualdata.statewise[i])
                    {
                        if(key==str)
                        {
                            if(j==1 || j==7)
                            {
                                cel.innerHTML = actualdata.statewise[i][key];
                            }
                            else
                            {
                                cel.innerHTML = parseInt(actualdata.statewise[i][key]).toLocaleString("hi-IN");
                            }
                        }
                    } 
                  }
                }
                
            }
        })

        