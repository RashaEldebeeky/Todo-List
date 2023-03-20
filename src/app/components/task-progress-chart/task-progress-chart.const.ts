export const chartOptions = {
  series: [],
  chart: {
    height: 350,
    type: 'donut',
  },
  labels: ['Completed', 'Not Completed'],
  colors: ['#00E396', '#ccc'],
  legend: {
    show: false,
    position: 'bottom',
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            show: true,
            showAlways: true,
            color: '#000',
            label: 'Completed',
            fontSize: '25px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            formatter: function (w: any) {
              const totals = w.globals.seriesTotals.reduce((a: any, b: any) => {
                return a + b;
              }, 0);
              return (
                ((w.globals.seriesTotals[0] * 100) / totals).toFixed(2) + '%'
              );
            },
          },
        },
      },
    },
  },
};
