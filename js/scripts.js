
const valorTicket = 200;
function calcular() {
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var categoria = document.getElementById('categoria').value;
    var bruto = cantidad * valorTicket;
    var descuento = 0;

    switch (categoria) {
        case 'estudiante':
            descuento = 0.8;
            break;
        case 'trainee':
            descuento = 0.5;
            break;
        case 'junior':
            descuento = 0.15;
            break;
    }
    var total = bruto - (bruto * descuento);
    document.getElementById('resumen').value = (total);
}