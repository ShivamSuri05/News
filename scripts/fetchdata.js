

fetch('https://api.rootnet.in/covid19-in/stats/history')
.then(apidata=>apidata.json())
.then(actualdata =>{
    let dataset = actualdata.data;
    let last = dataset.length-1;
    document.getElementById('showDate').innerHTML = 'Showing data for '+ dataset[last-1]["day"];
    let cases = parseInt(dataset[last-1]["summary"].total);
    let deaths = parseInt(dataset[last-1]["summary"].deaths);
    let ddeaths = deaths - parseInt(dataset[last-2]["summary"].deaths);
    let recovered = parseInt(dataset[last-1]["summary"].discharged);
    let dcases = cases - parseInt(dataset[last-2]["summary"].total);
    let pactive = cases-recovered-deaths;
    let pcases = parseInt(dataset[last-2]["summary"].total);
    let pdeaths = parseInt(dataset[last-2]["summary"].deaths);
    let precovered = parseInt(dataset[last-2]["summary"].discharged);
    let ppactive = pcases-precovered-pdeaths ;
    let active = pactive;
    let dactive = active - ppactive;
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
        datta.push(dataset[last-1-i]["summary"].total - dataset[last-1-i]["summary"].discharged - dataset[last-1-i]["summary"].deaths)
        labbels.push(dataset[last-1-i]["day"]);
    }

    //make graph
    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'bar',
data: {
labels: labbels,
datasets: [{
    label: 'No. of Active Cases',
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
    for(let i=1;i<37;i++)
    {
        rowarray = dataset[last-1];
        let prevrowarray = dataset[last-2];
        let row = table.insertRow(i);
        let cell = row.insertCell(0);
        cell.innerHTML = i;
        let cel = row.insertCell(1);
        cel.innerHTML = rowarray.regional[i-1].loc.replace("***","");
        cel = row.insertCell(2);
        cel.innerHTML = parseInt(rowarray.regional[i-1].totalConfirmed - prevrowarray.regional[i-1].totalConfirmed).toLocaleString("hi-IN");
        cel = row.insertCell(3);
        cel.innerHTML = parseInt(rowarray.regional[i-1].deaths - prevrowarray.regional[i-1].deaths).toLocaleString("hi-IN");
        cel = row.insertCell(4);
        cel.innerHTML = parseInt(rowarray.regional[i-1].totalConfirmed).toLocaleString("hi-IN");
        cel = row.insertCell(5);
        cel.innerHTML = parseInt(rowarray.regional[i-1].deaths).toLocaleString("hi-IN");
        cel = row.insertCell(6);
    }


})

        