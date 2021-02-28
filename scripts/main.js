const clock = document.getElementById('watchTime');


function updateTime() {
  const now = moment();
  const humanRead = now.format('hh:mm:ssA');

  clock.textContent = humanRead;
}

setInterval(updateTime, 1000);


var ctx = document.getElementById('doughnutChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Audiowide';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#FFFFFF';

var chart = new Chart(ctx, {

    type: 'doughnut',

    data: {
        labels: ['Left', 'Used'],
        datasets: [{
            label: 'Fuel Level',
            data: [75, 25],
            backgroundColor: ['rgb(127, 255, 0)', 'rgb(143, 188, 143)'],
        }]
    },

    options: {
      title: {
        display: true,
        text: 'Fuel Tank',
        fontSize: 25
      },

      legend: {
        display: true,
      },
    }
});

var ctx = document.getElementById('pieChart').getContext('2d');

Chart.defaults.global.defaultFontFamily = 'Audiowide';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#FFFFFF';

var chart = new Chart(ctx, {

    type: 'pie',

    data: {
        labels: ['To Go', 'Travelled'],
        datasets: [{
            label: 'Distance',
            data: [60, 40],
            backgroundColor: ['rgb(225, 127, 80)', 'rgb(255, 228, 225)'],
        }]
    },

    options: {
      title: {
        display: true,
        text: 'Travelled Distance',
        fontSize: 25
      },

      legend: {
        display: true,
      },
    }
});



