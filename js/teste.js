google.charts.load('current', { 'packages': ['corechart'] });
google.charts.load('current', {'packages':['gauge']});
google.charts.load('current', {'packages':['bar']});
google.charts.load('current', {'packages':['table']});

google.charts.setOnLoadCallback(desenhaPizzaVisitas);
google.charts.setOnLoadCallback(desenhaLinhasFaturamento);
google.charts.setOnLoadCallback(desenhaAvaliacao);
google.charts.setOnLoadCallback(desenhaTicket);
google.charts.setOnLoadCallback(desenhaVendedores);
google.charts.setOnLoadCallback(desenhaMeta);
google.charts.setOnLoadCallback(desenhaComparativoAnos);
google.charts.setOnLoadCallback(desenhaProjecao);
google.charts.setOnLoadCallback(desenhaDevolucoes);
google.charts.setOnLoadCallback(rankProdutos);

function desenhaPizzaVisitas() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
        ['Visitas', 456],
        ['Compras', 135]
    ]);

    // Set chart options
    var options = {
        'title': 'Visitas X Compras',
        'backgroundColor': '#565659',
        titleTextStyle: {
          color: 'white'
        },
        legend: {
          textStyle: {
            color: 'white'
          } 
        }
    };

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('visitas-compras'));
    chart.draw(data, options);
}

function desenhaLinhasFaturamento() {
    var data = google.visualization.arrayToDataTable([
      ['Ano', 'Faturamento'],
      ['Janeiro',  1000],
      ['Fevereiro',  1170],
      ['Março',  660],
      ['Maio',  1030],
      ['Junho',  1490],
      ['Julho',  1200],
      ['Agosto',  1340],
      ['Setembro',  1760],
      ['Outubro',  1900]
    ]);

    var options = {
      title: 'Faturamento',
      curveType: 'function',
      'backgroundColor': '#565659',
      legend: { position: 'bottom' },
      hAxis: {
        textStyle: {
          color: 'white'
        },
        titleTextStyle: {
          color: 'white'
        }
      },
      vAxis: {
        textStyle: {
          color: 'white'
        },
        titleTextStyle: {
          color: 'white'
        }
      }
    };

    var chart = new google.visualization.LineChart(document.getElementById('receita-mensal'));

    chart.draw(data, options);
  }

  function desenhaAvaliacao() {
    var data = google.visualization.arrayToDataTable([
      ["Avaliação", "Quantidade", { role: "style" }],
      ["Ruim", 7, "red"],
      ["Razoável", 25, "gold"],
      ["Bom", 59, "color: #e5e4e2"],
      ["Muito Bom", 75, "color: green"]
    ]);

    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

    var options = {
      title: "Avaliações",
      bar: {groupWidth: "95%"},
      legend: { position: "none" },
      'backgroundColor': '#565659'
    };
    var chart = new google.visualization.ColumnChart(document.getElementById("avaliacoes"));
    chart.draw(view, options);
}

function desenhaTicket() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Ticket Médio', 450.04]
  ]);

  var options = {
    greenFrom: 400, greenTo: 500,
    yellowFrom:300, yellowTo: 400,
    redFrom: 0, redTo: 300,
    max: 500, minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('ticket-medio'));

  chart.draw(data, options);
}

function desenhaVendedores() {
  var data = google.visualization.arrayToDataTable([
    ["Element", "Density", { role: "style" } ],
    ["Roger P.", 7500, "color: #e5e4e2"],
    ["Fábio E.", 11200, "gold"],
    ["Ricardo T.", 12500, "silver"],
    ["João Roma", 15600, "#b87333"]
  ]);

  var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
                     { calc: "stringify",
                       sourceColumn: 1,
                       type: "string",
                       role: "annotation" },
                     2]);

  var options = {
    title: "Top Vendedores",
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
    'backgroundColor': '#565659'
  };
  var chart = new google.visualization.ColumnChart(document.getElementById("top-vendedores"));
  chart.draw(view, options);
}

function desenhaMeta() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Meta %', 90]
  ]);

  var options = {
    greenFrom: 90, greenTo: 100,
    yellowFrom: 60, yellowTo: 90,
    redFrom: 0, redTo: 60,
    max: 100, minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('meta'));

  chart.draw(data, options);
}

function desenhaComparativoAnos() {

  var data = google.visualization.arrayToDataTable([
    ['Year', 'Sales'],
    ['2022',  123000],
    ['2023',  135000],
    ['2024',  85000]
  ]);

  var options = {
    title: 'Comparativo Anos Anteriores',
    curveType: 'function',
    legend: { position: 'bottom' },
    'backgroundColor': '#565659'
  };

  var chart = new google.visualization.LineChart(document.getElementById('comparativo_anos'));

  chart.draw(data, options);
}

function desenhaProjecao() {
  var data = google.visualization.arrayToDataTable([
    ['Ano', 'Faturamento'],
    ['Novembro',  17600],
    ['Dezembro',  19000]
  ]);

  var options = {
    title: 'Projeção Faturamento',
    curveType: 'function',
    'backgroundColor': '#565659',
    legend: { position: 'bottom' },
    hAxis: {
      textStyle: {
        color: 'white'
      },
      titleTextStyle: {
        color: 'white'
      }
    },
    vAxis: {
      textStyle: {
        color: 'white'
      },
      titleTextStyle: {
        color: 'white'
      }
    }
  };

  var chart = new google.visualization.LineChart(document.getElementById('projecao'));

  chart.draw(data, options);
}

function desenhaDevolucoes() {
  var data = google.visualization.arrayToDataTable([
    ['Conteúdo', 'Valor'],
    ['Compras',     300],
    ['Devoluções',      25]
  ]);

  var options = {
    title: 'Compras vs Devoluções',
    pieHole: 0.4,
    'backgroundColor': '#565659'
  };

  var chart = new google.visualization.PieChart(document.getElementById('devolucoes'));
  chart.draw(data, options);
}

function rankProdutos() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Produto');
  data.addColumn('number', 'Total Vendas');
  data.addColumn('boolean', 'Ativo');
  data.addRows([
    ['Fone JBL',  {v: 16000, f: '$16,000'}, true],
    ['Aspirador de Pó Electrolux',   {v:12000,   f: '$12,000'},  false],
    ['Conjunto de Panelas', {v: 11500, f: '$11,500'}, true],
    ['Liquidificador Philips',   {v: 7000,  f: '$7,000'},  true]
  ]);

  var table = new google.visualization.Table(document.getElementById('rank-produtos'));

  table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}