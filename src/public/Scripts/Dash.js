
document.getElementById('dashpadrao').click()

function AbrirDash(iddash) {

  var conteudos = document.getElementsByClassName('dash_content')
  
  for (var i = 0; i < conteudos.length; i++) {
      conteudos[i].style.display = 'none'
  }
  
  document.getElementById(iddash).style.display = 'block'
  }
  


// Dashboards


google.charts.load('current', {'packages':['annotationchart']});
google.charts.load("current", {'packages':["corechart"]});
google.charts.load("current", {packages:["timeline"]});

google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(dashpizza);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", '/all', false);
xhttp.send();//Utilizando esse carinha legal para inserir logo mais tarde no dashboard



var texto = xhttp.responseText;

texto = JSON.parse(texto)
console.log(texto)
var trocaprincipal = 0;
var secundario = 0;
var callcenter =0;
var email=0;
var whatszap=0;
var conflito=0;
var demanda=0;
texto.forEach(element => {
  switch(element.aluno_Atendimentos
   )
  {
   case "Callcenter":
     callcenter = callcenter+1
     break
   case "Email" :
     email = email+1
     break
     case "Whatszap" :
      whatszap = whatszap+1
      break
    
     default :
  }
 });
 console.log("Email"+email)
 console.log("Central"+callcenter);
 console.log("Viazap"+whatszap);




  
  
 

      function drawChart() {
        
        
              
         
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        console.log(data);
        data.addColumn('number', 'Registro de sugestões ou dúvidas');
        data.addColumn('string', 'Plantão de recursos');
        data.addColumn('string', 'Informação em tempo real');
        data.addColumn('number', 'Problemas ou bugs sondados nas ferramentas');
        data.addColumn('string', 'Dúvidas acadêmica');
        data.addColumn('string', 'Sugestões');
        data.addRows([
          [new Date("January 09, 2023 03:24:00"), , 'Conflito', 'de dados',
                                  400, 'Bug de inadimplência', 'Bloqueio'],
          [new Date("February 09, 2023,  "), 700, 'Login code', 'Liberação ou trocar', 
                                  , 'Bug de liberação de secundário', 'Bug Troca de principal'],
          [new Date(" March 09, 2023 03:24:00"), 700, 'Dúvidas academicas', 'aulas bônus',
                                  555, 'Sugestões', 'sugestões e pontos de vistas'],
          [new Date("April 09, 2023 03:24:00"), 800, 'Conflito de dados', 'atualizações',
                                  555, 'Medsoft', 'Bugs não sondados'],
          [new Date("May 09, 2023 03:24:00"), 555, 'Area restrita', 'Heavy casualties',
                                  200, 'Concursos', 'Problemas'],
          [new Date("June 09, 2023 03:24:00"), 400, 'Medeletro', 'Problemas de login',
                                  200, 'Plantão de recursos', 'bug plantão de recursos']
        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

        var options = {
          displayAnnotations: true
        };

        chart.draw(data, options);
      };
      

      
      
      function dashpizza() {
        
        texto.forEach(element => {
          switch(element.Aluno_Problema
           )
          {
           case "Troca de principal":
             trocaprincipal = trocaprincipal+1
             break
           case "Liberação de secundário" :
             secundario = secundario+1
             break
            
             default :
          }
         });
         texto.forEach(element => {
          switch(element.aluno_Processos
           )
          {
           case "Conflito-de-dados":
             conflito = conflito+1
             break
            case "Demanda":
            demanda = demanda+1
            break
           
            
             default :
          }
         });
         console.log("conflitos de dados"+conflito)
         console.log("demandas"+demanda)
        var data = google.visualization.arrayToDataTable([
          ['Login code', 'Problemas do medsoft'],
          ['Conflito de dados',     conflito],
          ['Troca de principal',     trocaprincipal],
          ['Demandas',  demanda],
          ['Liberação de secundário', secundario],
          ['monta provas',    7]
        ]);

        var options = {
          title: 'Medsoft',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
        console.log("Troca de principal"+trocaprincipal)
        console.log("Liberação de secundário"+secundario)
      };

      
     /* function graficofuncionario() {
        var container = document.getElementById('example5.4');
        var chart = new google.visualization.Timeline(container);
        var dataTable = new google.visualization.DataTable();
        dataTable.addColumn({ type: 'string', id: 'Room' });
        dataTable.addColumn({ type: 'string', id: 'Name' });
        dataTable.addColumn({ type: 'date', id: 'Começo' });
        dataTable.addColumn({ type: 'date', id: 'Fim' });
        dataTable.addRows([
          [ 'Elias da costa gaes Assunção ',  'Estágiario',    new Date(0,0,0,13,30,0),  new Date(0,0,0,20,0,0) ],
          [ 'Rennan Pessanha da Silva',  'Analista help desk',    new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Maria Jessica Gomes de Souza',  'Analista help desk', new Date(0,0,0,16,30,0), new Date(0,0,0,19,0,0) ],
          [ 'Leonardo Henrique de almeida', 'Atedente Help desk',   new Date(0,0,0,12,30,0), new Date(0,0,0,14,0,0) ],
          [ 'João Gabriel Lima proença', 'Atendente Help desk',       new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Felipe Satiro do Carmo de Souza', 'Atendente Help desk',        new Date(0,0,0,16,30,0), new Date(0,0,0,18,0,0) ],
          [ 'Eduardo de Almeida Serpa ',   'Estágiario',       new Date(0,0,0,08,0,0), new Date(0,0,0,14,30,0) ],
          [ 'Carlos Eduardo Farias Rocha ',   'Atendente Help desk',             new Date(0,0,0,14,30,0), new Date(0,0,0,16,0,0) ],
          [ 'Juan Nascimento Mesquita do  Rosario ',   'Atendente Help desk',          new Date(0,0,0,16,30,0), new Date(0,0,0,18,30,0) ]]);
    
        var options = {
          timeline: { colorByRowLabel: true },
          alternatingRowStyle: false
        };
    
        chart.draw(dataTable, options);
      };*/


      
      
    
     
      
      const go = (elem) => {
        window.scroll({       // 1
          top: document
          .querySelector( elem )
            .offsetTop,       // 2
          left: 0,
          behavior: 'smooth'// 3
         });
      };
      
      var options = {// aqui está sendo mapeado sobre os atendmimentos
  series: [{
  name: 'Callcenter',
  type: 'column',
  data: [callcenter]
}, {
  name: 'Email',
  type: 'area',
  data: [email]
}, {
  name: 'Blip',
  type: 'line',
  data: [whatszap]
}],
  chart: {
  height: 350,
  type: 'line',
  stacked: false,
},
stroke: {
  width: [0, 2, 5],
  curve: 'smooth'
},
plotOptions: {
  bar: {
    columnWidth: '50%'
  }
},

fill: {
  opacity: [0.85, 0.25, 1],
  gradient: {
    inverseColors: false,
    shade: 'light',
    type: "vertical",
    opacityFrom: 0.85,
    opacityTo: 0.55,
    stops: [0, 100, 100, 100]
  }
},
labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
  '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
],
markers: {
  size: 0
},
xaxis: {
  type: 'datetime'
},
yaxis: {
  title: {
    text: 'Monitoria de atendimentos',
  },
  min: 0
},
tooltip: {
  shared: true,
  intersect: false,
  y: {
    formatter: function (y) {
      if (typeof y !== "undefined") {
        return y.toFixed(0) + " atendimentos";
      }
      return y;

    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();