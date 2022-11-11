window.Apex = {
    chart: {
      foreColor: "#fff",
      toolbar: {
        show: false
      }
    },
    colors: ["#FCCF31", "#17ead9", "#f02fc2"],
    stroke: {
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: "#40475D"
    },
    xaxis: {
      axisTicks: {
        color: "#333"
      },
      axisBorder: {
        color: "#333"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#F55555", "#6078ea", "#6094ea"]
      }
    },
    tooltip: {
      theme: "dark",
      x: {
        formatter: function (val) {
          return moment(new Date(val)).format("HH:mm:ss");
        }
      }
    },
    yaxis: {
      decimalsInFloat: 2,
      opposite: true,
      labels: {
        offsetX: -10
      }
    }
  };
  
  var trigoStrength = 3;
  var iteration = 11;
  
  function getRandom() {
    var i = iteration;
    return (
      (Math.sin(i / trigoStrength) * (i / trigoStrength) +
        i / trigoStrength +
        1) *
      (trigoStrength * 2)
    );
  }
  
  function getRangeRandom(yrange) {
    return Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  }
  
  function generateMinuteWiseTimeSeries(baseval, count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
      var x = baseval;
      var y =
        (Math.sin(i / trigoStrength) * (i / trigoStrength) +
          i / trigoStrength +
          1) *
        (trigoStrength * 2);
  
      series.push([x, y]);
      baseval += 300000;
      i++;
    }
    return series;
  }
  
  function getNewData(baseval, yrange) {
    var newTime = baseval + 300000;
    return {
      x: newTime,
      y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
    };
  }
  
  var optionsColumn = {
    chart: {
      height: 350,
      type: "bar",
      animations: {
        enabled: false
      },
      events: {
        animationEnd: function (chartCtx) {
          const newData = chartCtx.w.config.series[0].data.slice();
          newData.shift();
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData
                  }
                ],
                xaxis: {
                  min: chartCtx.minX,
                  max: chartCtx.maxX
                },
                subtitle: {
                  text:
                    parseInt(getRangeRandom({ min: 1, max: 20 })).toString() + "%"
                }
              },
              false,
              false
            );
          }, 300);
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Load Average",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 10,
            max: 110
          }
        )
      }
    ],
    title: {
      text: "Tickets",
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    subtitle: {
      text: "20%",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "22px"
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "vertical",
        shadeIntensity: 0.5,
        inverseColors: false,
        opacityFrom: 1,
        opacityTo: 0.8,
        stops: [0, 100]
      }
    },
    xaxis: {
      type: "datetime",
      range: 2700000
    },
    legend: {
      show: true
    }
  };
  
  var chartColumn = new ApexCharts(
    document.querySelector("#columnchart"),
    optionsColumn
  );
  chartColumn.render();
  
  var optionsLine = {
    chart: {
      height: 350,
      type: "line",
      stacked: true,
      animations: {
        enabled: true,
        easing: "linear",
        dynamicAnimation: {
          speed: 1000
        }
      },
      dropShadow: {
        enabled: true,
        opacity: 0.3,
        blur: 5,
        left: -7,
        top: 22
      },
      events: {
        animationEnd: function (chartCtx) {
          const newData1 = chartCtx.w.config.series[0].data.slice();
          newData1.shift();
          const newData2 = chartCtx.w.config.series[1].data.slice();
          newData2.shift();
          window.setTimeout(function () {
            chartCtx.updateOptions(
              {
                series: [
                  {
                    data: newData1
                  },
                  {
                    data: newData2
                  }
                ],
                subtitle: {
                  text: parseInt(getRandom() * Math.random()).toString()
                }
              },
              false,
              false
            );
          }, 300);
        }
      },
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: 5
    },
    grid: {
      padding: {
        left: 0,
        right: 0
      }
    },
    markers: {
      size: 0,
      hover: {
        size: 0
      }
    },
    series: [
      {
        name: "Telefone",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 30,
            max: 110
          }
        )
      },
      {
        name: "Whatsapp",
        data: generateMinuteWiseTimeSeries(
          new Date("12/12/2016 00:20:00").getTime(),
          12,
          {
            min: 30,
            max: 110
          }
        )
      }
    ],
    xaxis: {
      type: "datetime",
      range: 2700000
    },
    title: {
      text: "Processos",
      align: "left",
      style: {
        fontSize: "12px"
      }
    },
    subtitle: {
      text: "20",
      floating: true,
      align: "right",
      offsetY: 0,
      style: {
        fontSize: "22px"
      }
    },
    legend: {
      show: true,
      floating: true,
      horizontalAlign: "left",
      onItemClick: {
        toggleDataSeries: false
      },
      position: "top",
      offsetY: -33,
      offsetX: 60
    }
  };
  
  var chartLine = new ApexCharts(
    document.querySelector("#linechart"),
    optionsLine
  );
  chartLine.render();
  
  var optionsCircle = {
    chart: {
      type: "radialBar",
      height: 250,
      offsetX: 0
    },
    plotOptions: {
      radialBar: {
        inverseOrder: false,
        hollow: {
          margin: 5,
          size: "48%",
          background: "transparent"
        },
        track: {
          show: true,
          background: "#40475D",
          strokeWidth: "10%",
          opacity: 1,
          margin: 3 // margin is in pixels
        }
      }
    },
    series: [71, 63],
    labels: ["Finalizados", "Andamentos"],
    legend: {
      show: true,
      position: "left",
      offsetX: -30,
      offsetY: -10,
      formatter: function (val, opts) {
        return val + " - " + opts.w.globals.series[opts.seriesIndex] + "%";
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    }
  };
  
  var chartCircle = new ApexCharts(
    document.querySelector("#circlechart"),
    optionsCircle
  );
  chartCircle.render();
  
  var optionsProgress1 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 1",
        data: [44]
      }
    ],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Tickets"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "44%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 1"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      opacity: 1
    }
  };
  
  var chartProgress1 = new ApexCharts(
    document.querySelector("#progress1"),
    optionsProgress1
  );
  chartProgress1.render();
  
  var optionsProgress2 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#17ead9"],
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 2",
        data: [80]
      }
    ],
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Ligações"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "80%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 2"]
    },
    yaxis: {
      max: 100
    },
    fill: {
      type: "gradient",
      gradient: {
        inverseColors: false,
        gradientToColors: ["#6078ea"]
      }
    }
  };
  
  var chartProgress2 = new ApexCharts(
    document.querySelector("#progress2"),
    optionsProgress2
  );
  chartProgress2.render();
  
  var optionsProgress3 = {
    chart: {
      height: 70,
      type: "bar",
      stacked: true,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "20%",
        colors: {
          backgroundBarColors: ["#40475D"]
        }
      }
    },
    colors: ["#f02fc2"],
    stroke: {
      width: 0
    },
    series: [
      {
        name: "Process 3",
        data: [74]
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: ["#6094ea"]
      }
    },
    title: {
      floating: true,
      offsetX: -10,
      offsetY: 5,
      text: "Whatsapp"
    },
    subtitle: {
      floating: true,
      align: "right",
      offsetY: 0,
      text: "74%",
      style: {
        fontSize: "20px"
      }
    },
    tooltip: {
      enabled: false
    },
    xaxis: {
      categories: ["Process 3"]
    },
    yaxis: {
      max: 100
    }
  };
  
  var chartProgress3 = new ApexCharts(
    document.querySelector("#progress3"),
    optionsProgress3
  );
  chartProgress3.render();
  
  window.setInterval(function () {
    iteration++;
  
    chartColumn.updateSeries([
      {
        data: [
          ...chartColumn.w.config.series[0].data,
          [chartColumn.w.globals.maxX + 300000, getRandom()]
        ]
      }
    ]);
  
    chartLine.updateSeries([
      {
        data: [
          ...chartLine.w.config.series[0].data,
          [chartLine.w.globals.maxX + 300000, getRandom()]
        ]
      },
      {
        data: [
          ...chartLine.w.config.series[1].data,
          [chartLine.w.globals.maxX + 300000, getRandom()]
        ]
      }
    ]);
  
    chartCircle.updateSeries([
      getRangeRandom({ min: 10, max: 100 }),
      getRangeRandom({ min: 10, max: 100 })
    ]);
  
    var p1Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress1.updateOptions({
      series: [
        {
          data: [p1Data]
        }
      ],
      subtitle: {
        text: p1Data + "%"
      }
    });
  
    var p2Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress2.updateOptions({
      series: [
        {
          data: [p2Data]
        }
      ],
      subtitle: {
        text: p2Data + "%"
      }
    });
  
    var p3Data = getRangeRandom({ min: 10, max: 100 });
    chartProgress3.updateOptions({
      series: [
        {
          data: [p3Data]
        }
      ],
      subtitle: {
        text: p3Data + "%"
      }
    });
  }, 3000);
  

  // Medsoft-Dashboard

  var options = {
    series: [{
    name: 'Problema',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
  }, {
    name: 'Quantidade de aluno',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
  }],
    chart: {
    height: 390,
    width: 850,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  title: {
    text: 'Problemas Medsoft'
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime'
  },
  yaxis: [{
    title: {
      text: 'Problemas medsoft',
    },
  
  }, {
    opposite: true,
    title: {
      text: 'Alunos afetados'
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#medsoft-problema-Dashboard"), options);
  chart.render();

  // Medsoft pizza

  var options = {
    series: [44, 55, 13, 43, 22],
    chart: {
    width: 400,
    type: 'pie',
  },
  labels: ['Problema aulas', 'Problemas questões ', 'Medsmart indisponivel', 'lentidão', 'Pie char'],
  responsive: [{
    breakpoint: 480,
    options: {
      chart: {
        width: 300
      },
      legend: {
        position: 'bottom'
      }
    }
  }]
  };

  var chart = new ApexCharts(document.querySelector("#medsoft-problema-pizza"), options);
  chart.render();
