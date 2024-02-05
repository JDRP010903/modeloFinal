// Gráfica de histograma para las calorías quemadas
var ctxCalorias = document.getElementById('graficaCaloriasQuemadas').getContext('2d');
var graficaCaloriasQuemadas = new Chart(ctxCalorias, {
    type: 'bar',
    data: {
        labels: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'], // Ejemplo de días
        datasets: [{
            label: 'Calorías Quemadas',
            data: [300, 400, 500, 200, 450], // Ejemplo de calorías quemadas
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
});