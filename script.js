// Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
  type: 'pie',
  data: {
    labels: ['PDF', 'MP3', 'WebP'],
    datasets: [{
      label: 'Конвертации',
      data: [100, 150, 80],
      backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'Процентное соотношение типов конвертаций'
      }
    },
    animation: {
      animateRotate: true,
      duration: 1000
    }
  }
});

// Doughnut Chart
const doughnutCtx = document.getElementById('doughnutChart').getContext('2d');
new Chart(doughnutCtx, {
  type: 'doughnut',
  data: {
    labels: ['PDF', 'MP3', 'WebP'],
    datasets: [{
      label: 'Конвертации',
      data: [70, 100, 50],
      backgroundColor: [
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(75, 192, 192, 0.6)'
      ],
      borderColor: [
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(75, 192, 192, 1)'
      ],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'Доля использования каждого конвертера'
      }
    },
    animation: {
      animateScale: true,
      duration: 1000
    }
  }
});

// Radar Chart
const radarCtx = document.getElementById('radarChart').getContext('2d');
new Chart(radarCtx, {
  type: 'radar',
  data: {
    labels: ['Скорость', 'Удобство', 'Точность', 'Надежность', 'Гибкость'],
    datasets: [{
      label: 'PDF конвертер',
      data: [4, 5, 4, 3, 4],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      pointBackgroundColor: 'rgba(255, 99, 132, 1)'
    }, {
      label: 'MP3 конвертер',
      data: [5, 4, 4, 4, 3],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      pointBackgroundColor: 'rgba(54, 162, 235, 1)'
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: { enabled: true },
      title: {
        display: true,
        text: 'Оценка функциональности по критериям'
      }
    },
    animation: {
      duration: 1000
    }
  }
});
