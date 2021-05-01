google.charts.load('current', {'packages':['bar', 'corechart']});
google.charts.setOnLoadCallback(drawChart1);

      function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Расходы', 'Доходы', 'Разница'],
          ['2014', 1000, 400, 200],
          ['2015', 1170, 460, 250],
          ['2016', 660, 1120, 300],
          ['2017', 1030, 540, 350]
        ]);

        var options = {
          chart: {
            title: 'График расходов и доходов',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

google.charts.setOnLoadCallback(drawChart2);

      function drawChart2() {
        var data = google.visualization.arrayToDataTable([
          ['Расходы', '%'],
          ['Бензин',     11],
          ['Другое',      2],
          ['Интернет',  2],
          ['TV', 2],
          ['Еда',    7]
        ]);

        var options = {
          title: 'Виды расходов'
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

