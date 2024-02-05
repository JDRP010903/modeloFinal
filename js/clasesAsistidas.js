document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('graficaClasesAsistidas').getContext('2d');
    var graficaClasesAsistidas = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Yoga', 'Pilates', 'Baile', 'Zumba'],
            datasets: [{
                data: [10, 20, 30, 40],
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Clases Asistidas'
                }
            }
        },
    });
});
