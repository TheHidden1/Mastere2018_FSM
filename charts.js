// FSM-ALL Repartition Chart Type Diplome
let BorderColor = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];
let BackgroundColor =  [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
]




let ctx = document.getElementById("fsm-all-pie").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: DiplomaLabels,
        datasets: [{
            label:"Tous",
            data: diplomaData_all,
            borderColor:BorderColor,
            backgroundColor:BackgroundColor,
            borderWidth: 1
        },
        {
            label: 'Choix 1 :MPISI',
            data: diplomaDataMPISI,
            borderColor: BorderColor,
            backgroundColor: BackgroundColor,
            borderWidth: 1
        },
        {
            label: 'Choix 1 :MRMSRA',
            data: diplomaDataMRMSRA,
            borderColor: BorderColor,
            backgroundColor: BackgroundColor,
            borderWidth: 1
        },
    ]
    },
    options :{
        legend :{
            position : "top"
        },

        tooltips: {
            callbacks: {
            label: function(tooltipItem, data) {
                  var dslabels = data.labels[tooltipItem.index];
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var dslabelamt = dataset.data[tooltipItem.index];
                  return data.datasets[tooltipItem.datasetIndex].label + '   '   + dslabels + ': ' + dslabelamt;
                  }
              }
         },
         title: {
            display: true,
            text: 'Nombre des Condidats de MPISI et MRMSRA  par rapport  a chaque Nature diplome'
        }
    }
});






//////////////////////////////////////////////////////////////////////////////
console.log(choixData_all)
let ctx1 = document.getElementById("fsm-all-choix").getContext('2d');
let myChart_1 = new Chart(ctx1, {
    type: 'horizontalBar',
    data: {
        labels: ChoiceLabels,
        datasets: [{
            label : 'Tous',
            stack: 'Stack 0',
            data: choixData_all,
            borderColor: BorderColor[0],
            backgroundColor:BackgroundColor[0], 
            borderWidth: 1
        },
        {
            label : 'Licence fondamentale',
            stack: 'Stack 1',
            data: choixData_LF,
            borderColor: BorderColor[1],
            backgroundColor: BackgroundColor[1],
            borderWidth: 1
        },
        {
            label : 'Licence appliquée',
            stack: 'Stack 1',
            data: choixData_LA,
            borderColor:  BorderColor[2],
            backgroundColor:  BackgroundColor[2],
            borderWidth: 1
        },
        {
            label : 'Ingénierie',
            stack: 'Stack 1',
            data: choixData_GENIE,
            borderColor: BorderColor[3],
            backgroundColor: BackgroundColor[3],
            borderWidth: 1
        },
        {
            label : 'Mastère de recherche',
            stack: 'Stack 1',
            data: choixData_MASRE,
            borderColor:  BorderColor[4],
            backgroundColor:  BackgroundColor[4],
            borderWidth: 1
        }, {
            label : 'Mastère professionnel',
            stack: 'Stack 1',
            data: choixData_MASPRO,
            borderColor: BorderColor[0],
            backgroundColor: BackgroundColor[0],
            borderWidth: 1
        },
        {
            label : 'Maîtrise',
            stack: 'Stack 1',
            data: choixData_MET,
            borderColor:  BorderColor[5],
            backgroundColor:  BackgroundColor[5],
            borderWidth: 1
        }
    ]

    },
    options :{
        legend :{
            position : "top"
        },
        tooltips: {
            callbacks: {
            label: function(tooltipItem, data) {
                  var dslabels = data.labels[tooltipItem.index];
                  var dataset = data.datasets[tooltipItem.datasetIndex];
                  var dslabelamt = dataset.data[tooltipItem.index];
                  return data.datasets[tooltipItem.datasetIndex].label + '   ' + ': ' + dslabelamt;
                  }
              }
         },
         title: {
            display: true,
            text: 'distribution des condidats selon chaque type de mastére'
        },
        scales: {
            xAxes: [{
                stacked: true,
            }],
            yAxes: [{
                stacked: true
            }]
        }
    }
});