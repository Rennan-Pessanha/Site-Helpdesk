

google.charts.load('current', {'packages':['annotationchart']});
google.charts.load("current", {'packages':["corechart"]});
google.charts.load("current", {packages:["timeline"]});
google.charts.setOnLoadCallback(ohbrabo);
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(putão);

var xhttp = new XMLHttpRequest();
xhttp.open("GET", '/all', false);
xhttp.send();//Utilizando esse carinha legal para inserir logo mais tarde no dashboard



var texto = xhttp.responseText;

texto = JSON.parse(texto)
console.log(texto)
var conflitoDdadosQtd = 0;
var logincodeQtd = 0;
var academicoQtd = 0;

texto.forEach(element => {
   switch(element.aluno_Processos, element.aluno_app
    )
   {
    case "Conflito-de-dados":
      conflitoDdadosQtd = conflitoDdadosQtd+1
      break
    case "Login-code" :
      logincodeQtd = logincodeQtd+1
      break
      case "Medsoft-Pro" :
        logincodeQtd = logincodeQtd+1
        break
      default : academicoQtd = academicoQtd+1
   }
  });

  console.log("Conflito de dados"+conflitoDdadosQtd)
  console.log("Troca de principal"+logincodeQtd)
  console.log(""+academicoQtd)
 

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
          [new Date("January 09, 2023 03:24:00"), conflitoDdadosQtd, 'Conflito', 'de dados',
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
      

      
      
      function putão() {
        var data = google.visualization.arrayToDataTable([
          ['Login code', 'Problemas do medsoft'],
          ['Conflito de dados',     conflitoDdadosQtd],
          ['Troca de principal',      logincodeQtd],
          ['Dúvidas acadêmicas',  2],
          ['Liberação de secundário', 2],
          ['monta provas',    7]
        ]);

        var options = {
          title: 'Medsoft',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      };

      
      function ohbrabo() {
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
      }
      
    
     
      
      const go = (elem) => {
        window.scroll({       // 1
          top: document
          .querySelector( elem )
            .offsetTop,       // 2
          left: 0,
          behavior: 'smooth'// 3
         });
      };
      
      