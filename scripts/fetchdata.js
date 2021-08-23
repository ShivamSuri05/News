

fetch('https://data.covid19india.org/v4/min/timeseries.min.json')
.then(apidata=>apidata.json())
.then(actualdata =>{
    let arr = Object.entries(actualdata);
    let array = Object.entries(arr[33][1].dates);
    let last = array.length;

    //console.log(array[last-1][0]);

    // document.getElementById('showDate').innerHTML = 'Showing data for '+array[last-1][0];
    //console.log(array[last-1][1].total['confirmed']);
    document.getElementById('showDate').innerHTML = 'Showing data for '+ array[last-1][0];
    let dcases = parseInt(array[last-1][1].delta['confirmed']);
    let cases = parseInt(array[last-1][1].total['confirmed']);
    //console.log(array[last-1][1]);
    let deaths = parseInt(array[last-1][1].total['deceased']);
    let ddeaths = parseInt(array[last-1][1].delta['deceased']);
    let recovered = parseInt(array[last-1][1].total['recovered']);
    //let drecovered = parseInt(array[last-1][1].delta['recovered']);
    let pactive = cases-recovered-deaths;
    //console.log(cases-recovered-deaths);
    //let pdcases = parseInt(array[last-2][1].delta['confirmed']);
    let pcases = parseInt(array[last-2][1].total['confirmed']);
    //console.log(array[last-2][1]);
    let pdeaths = parseInt(array[last-2][1].total['deceased']);
    //let pddeaths = parseInt(array[last-2][1].delta['deceased']);
    let precovered = parseInt(array[last-2][1].total['recovered']);
    //let pdrecovered = parseInt(array[last-2][1].delta['recovered']);
    let ppactive = pcases-precovered-pdeaths ;
    //console.log(pcases-precovered-pdeaths - (cases-recovered-deaths));
    //console.log(cases-deaths-recovered);
    //console.log(pactive);
    let active = pactive;
    let dactive = active - ppactive;
    //console.log(dactive);
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


    let datta = [];
    let labbels = [];
    for(let i=0;i<90;i++)
    {
        datta.push(array[last-1-i][1].delta['confirmed']);
        labbels.push(array[last-1-i][0]);
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



// table
    let table = document.getElementById('statestable');
    let dict = [0,'state','deltaconfirmed','deltadeaths','confirmed','deaths','vaccinated'];
    let states = ['Andaman and Nicobar Islands','Andhra Pradesh','Arunachal Pradesh','Assam',
    'Bihar','Chandigarh','Chhattisgarh','Dadra and Nagar Haveli and Daman and Diu','Delhi','Goa','Gujarat','Haryana',
    'Himachal Pradesh','Jammu and Kashmir','Jharkhand','Karnataka','Kerala','Ladakh','Lakshadweep','Madhya Pradesh',
    'Maharashtra','Manipur','Meghalaya','Mizoram','Nagaland','Odisha','Puducherry','Punjab','Rajasthan','Sikkim',
    'Tamil Nadu','Telangana','Tripura','Uttar Pradesh','Uttarakhand','West Bengal'];
    let rowarray;
    let end;
    for(let i=1;i<39;i++)
    {
        if(i<34)
        {
            rowarray = Object.entries(arr[i-1][1].dates);
            end = rowarray.length-1;
            let row = table.insertRow(i);
            let cell = row.insertCell(0);
            cell.innerHTML = i;
            let cel = row.insertCell(1);
            cel.innerHTML = states[i-1];
            cel = row.insertCell(2);
            if(i==1 || i==9 || i==11 || i==18 || i==28 || i==29 )
            {
                cel.innerHTML = parseInt(rowarray[end][1].delta7['confirmed']).toLocaleString("hi-IN");
            }
            else
            {
                cel.innerHTML = parseInt(rowarray[end][1].delta['confirmed']).toLocaleString("hi-IN");
            }
            cel = row.insertCell(3);
            if(i==1 || i== 5 ||i==9|| i==6 || i==8 || i==11 || i==14 || i==18 || i==19 || i==27 || i==28 || i==29)
            {
                if(typeof(rowarray[end][1].delta7['deceased'])=='undefined')
                {
                    cel.innerHTML = "Data not Available";
                }
                else
                {
                    cel.innerHTML = parseInt(rowarray[end][1].delta7['deceased']).toLocaleString("hi-IN");
                }
            }
            else
            {
                cel.innerHTML = parseInt(rowarray[end][1].delta['deceased']).toLocaleString("hi-IN");
            }
            cel = row.insertCell(4);
            cel.innerHTML = parseInt(rowarray[end][1].total['confirmed']).toLocaleString("hi-IN");
            cel = row.insertCell(5);
            cel.innerHTML = parseInt(rowarray[end][1].total['deceased']).toLocaleString("hi-IN");
            cel = row.insertCell(6);
            cel.innerHTML = parseInt(rowarray[end][1].total['vaccinated1']).toLocaleString("hi-IN");

        }    
        else if(i>35)
        {
            rowarray = Object.entries(arr[i-1][1].dates);
            end = rowarray.length-1;
            let row = table.insertRow(i-2);
            let cell = row.insertCell(0);
            cell.innerHTML = i-2;
            let cel = row.insertCell(1);
            cel.innerHTML = states[i-3];
            cel = row.insertCell(2);
            cel.innerHTML = parseInt(rowarray[end][1].delta7['confirmed']).toLocaleString("hi-IN");
            cel = row.insertCell(3);
            cel.innerHTML = parseInt(rowarray[end][1].delta7['deceased']).toLocaleString("hi-IN");
            cel = row.insertCell(4);
            cel.innerHTML = parseInt(rowarray[end][1].total['confirmed']).toLocaleString("hi-IN");
            cel = row.insertCell(5);
            cel.innerHTML = parseInt(rowarray[end][1].total['deceased']).toLocaleString("hi-IN");
            cel = row.insertCell(6);
            cel.innerHTML = parseInt(rowarray[end][1].total['vaccinated1']).toLocaleString("hi-IN");
        }
    }
            


//vaccine data

let firstdose = array[last-1][1].total['vaccinated1'];
let dailyfirstdose = array[last-1][1].delta['vaccinated1'];
let seconddose = array[last-1][1].total['vaccinated2'];
let dailyseconddose = array[last-1][1].delta['vaccinated2'];
if(typeof(firstdose)=='undefined'||typeof(dailyfirstdose)=='undefined'||typeof(seconddose)=='undefined'||typeof(dailyseconddose)=='undefined')
{
    firstdose = array[last-2][1].total['vaccinated1'];
    dailyfirstdose = array[last-2][1].delta['vaccinated1'];
    seconddose = array[last-2][1].total['vaccinated2'];
    dailyseconddose = array[last-2][1].delta['vaccinated2'];

}
let totaldoses = firstdose + seconddose;
let dailydoses = dailyfirstdose + dailyseconddose;
document.getElementById('tvac').innerHTML = totaldoses.toLocaleString("hi-IN");
document.getElementById('tfdose').innerHTML = firstdose.toLocaleString("hi-IN");
document.getElementById('dvac').innerHTML = dailydoses.toLocaleString("hi-IN");
document.getElementById('tsdose').innerHTML = seconddose.toLocaleString("hi-IN");
document.getElementById('dfdose').innerHTML = dailyfirstdose.toLocaleString("hi-IN");
document.getElementById('dsdose').innerHTML = dailyseconddose.toLocaleString("hi-IN");


})

        