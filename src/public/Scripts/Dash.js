google.charts.load('current', {'packages':['annotationchart']});
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
          [new Date(1000, 2, 30), 7000, 'Inadimplência', 'undefined',
                                  400, 'Bug de inadimplência', 'Bloqueio'],
          [new Date(2000, 2, 16), 700, 'Login code', 'Liberação ou trocar', 
                                  , 'Bug de liberação de secundário', 'Bug Troca de principal'],
          [new Date(3000, 2, 17), 700, 'Dúvidas academicas', 'They are very tall',
                                  555, 'Sugestões', 'First Encounter'],
          [new Date(4000, 2, 18), 800, 'Conflito de dados', 'Attack on our crew!',
                                  555, 'Medsoft', 'Bugs não sondados'],
          [new Date(5000, 2, 19), 555, 'Area restrita', 'Heavy casualties',
                                  200, 'Concursos', 'Problemas'],
          [new Date(6000, 2, 20), 400, 'Medeletro', 'Problemas de login',
                                  200, 'Plantão de recursos', 'bug plantão de recursos']
        ]);

        var chart = new google.visualization.AnnotationChart(document.getElementById('chart_div'));

        var options = {
          displayAnnotations: true
        };

        chart.draw(data, options);
      }