function calcular() {
    var a = parseInt(document.getElementById("numeroA").value);
    var b = parseInt(document.getElementById("numeroB").value);
    var operacion = document.querySelector('input[name="operacion"]:checked').value;
    var resultado;
    
    if (operacion === "cuadrado") {
    resultado = Math.pow(a, 2) + 2 * a * b + Math.pow(b, 2);
    } else if (operacion === "cubo") {
    resultado = Math.pow(a, 3) + 3 * Math.pow(a, 2) * b + 3 * a * Math.pow(b, 2) + Math.pow(b, 3);
    }

    document.getElementById("resultado").textContent = resultado;
}