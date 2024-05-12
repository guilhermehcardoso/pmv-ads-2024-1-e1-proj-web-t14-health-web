// Gráfico de Pizza - Perda de Peso
var weightLossChart = new Chart(document.getElementById('weight-loss-chart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Perdido', 'Restante'],
        datasets: [{
            label: 'Perda de Peso',
            data: [10, 90],
            backgroundColor: ['#FF6384', '#36A2EB'],
        }]
    }
});

// Gráfico de Pizza - Corrida
var runningChart = new Chart(document.getElementById('running-chart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Corrido', 'Restante'],
        datasets: [{
            label: 'Corrida',
            data: [100, 900],
            backgroundColor: ['#FF6384', '#36A2EB'],
        }]
    }
});

// Gráfico de Pizza - Alimentação Saudável
var healthyEatingChart = new Chart(document.getElementById('healthy-eating-chart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Seguido', 'Restante'],
        datasets: [{
            label: 'Alimentação Saudável',
            data: [50, 50],
            backgroundColor: ['#FF6384', '#36A2EB'],
        }]
    }
});
