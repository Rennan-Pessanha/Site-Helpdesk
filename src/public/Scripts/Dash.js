google.charts.load('current', {'packages':['annotationchart']});
google.charts.load("current", {'packages':["corechart"]});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Date');
        data.addColumn('number', 'Registro de sugestões ou dúvidas');
        data.addColumn('string', 'Kepler title');
        data.addColumn('string', 'Informação em tempo real');
        data.addColumn('number', 'Problemas ou bugs sondados nas ferramentas');
        data.addColumn('string', 'Gliese title');
        data.addColumn('string', 'Gliese text');
        data.addRows([
          [new Date(15, 2, 30), 1000, 'Inadimplência', 'undefined',
                                  400, 'Bug de inadimplência', 'Bloqueio'],
          [new Date(30, 2, 16), 700, 'Login code', 'Liberação ou trocar', 
                                  , 'Bug de liberação de secundário', 'Bug Troca de principal'],
          [new Date(45, 2, 17), 700, 'Dúvidas academicas', 'aulas bônus',
                                  555, 'Sugestões', 'sugestões e pontos de vistas'],
          [new Date(70, 2, 18), 800, 'Conflito de dados', 'Attack on our crew!',
                                  555, 'Medsoft', 'Bugs não sondados'],
          [new Date(95, 2, 19), 555, 'Area restrita', 'Heavy casualties',
                                  200, 'Concursos', 'Problemas'],
          [new Date(120, 2, 20), 400, 'Medeletro', 'Problemas de login',
                                  200, 'Plantão de recursos', 'bug plantão de recursos']
        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

        var options = {
          displayAnnotations: true
        };

        chart.draw(data, options);
      };

      
      google.charts.setOnLoadCallback(putão);
      function putão() {
        var data = google.visualization.arrayToDataTable([
          ['Login code', 'Problemas do medsoft'],
          ['Login code',     11],
          ['Plantão de recursos',      2],
          ['Dúvidas acadêmicas',  2],
          ['Login code', 2],
          ['Limpeza de dados',    7]
        ]);

        var options = {
          title: 'Medsoft',
          is3D: true,
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    


      