document.addEventListener('DOMContentLoaded', function() {
    const chart1 = createPieChart('chart1', ['Seguindo', 'Não Seguindo'], [30, 70]);
    const chart2 = createPieChart('chart2', ['Peso Perdido', 'Peso Estável'], [50, 50]);
    const chart3 = createPieChart('chart3', ['Horas Dormidas', 'Horas Não Dormidas'], [70, 30]);
    const chart4 = createPieChart('chart4', ['Consumo Baixo', 'Consumo Médio', 'Consumo Alto'], [20, 30, 50]);
    const chart5 = createPieChart('chart5', ['Humor Bom', 'Humor Médio', 'Humor Ruim'], [50, 30, 20]);
    const chart6 = createPieChart('chart6', ['Corrida Curta', 'Corrida Média', 'Corrida Longa'], [30, 50, 20]);

    document.getElementById('file-input').addEventListener('change', function(event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                document.getElementById('profile-pic').src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });

    window.updateChart = function(chartId, newData) {
        if (newData.some(isNaN)) {
            alert('Por favor, insira valores válidos.');
            return;
        }

        const chart = Chart.getChart(chartId);
        chart.data.datasets[0].data = newData;
        chart.update();
        alert('Dados atualizados com sucesso!');
    };
});

function createPieChart(chartId, labels, data) {
    const ctx = document.getElementById(chartId).getContext('2d');
    return new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: ['#256aa5', '#36a2eb', '#4bc0c0']
            }]
        }
    });
}

