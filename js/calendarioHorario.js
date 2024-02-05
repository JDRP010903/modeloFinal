// calendario.js
$(document).ready(function() {
    $('#calendarioClases').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        navLinks: true, // permite navegar por día/semana al hacer clic en los nombres
        editable: true, // permite arrastrar y soltar eventos
        eventLimit: true, // permite enlaces "más" para eventos superpuestos
        events: [
            {
                title: 'Clase de Yoga',
                start: '2024-02-10T10:00:00',
                end: '2024-02-10T11:00:00'
            },
            {
                title: 'Clase de Pilates',
                start: '2024-02-12T14:00:00',
                end: '2024-02-12T15:00:00'
            },
            // Agrega más eventos según sea necesario
        ]
    });
});
