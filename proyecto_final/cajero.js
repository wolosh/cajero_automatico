const montoInput = document.getElementById("monto-input");
const botonRetirar = document.getElementById("retirar");
const botonBorrar = document.getElementById('borrar');
const botonCancelar = document.getElementById('cancelar');
const botonDepositar = document.getElementById('depositar');
const botonesTeclado = document.querySelectorAll("#teclado button");

botonesTeclado.forEach((boton) => {
  boton.addEventListener("click", () => {
    montoInput.value += boton.textContent;
  });
});

class clientes{
  constructor(nombre, saldo){
      this.nombre = nombre;
      this.saldo = saldo;
  }

  salAct (SaldoActual) {
  return `${this.nombre} tu saldo actual es de ${this.saldo}`;
  }
  retirar(monto) {
    if (monto > this.saldo) {
      document.getElementById("render").innerHTML= `${this.nombre}, no tienes suficiente saldo para retirar ${monto}. Tu saldo actual es de ${this.saldo}`
      return `${this.nombre}, no tienes suficiente saldo para retirar ${monto}. Tu saldo actual es de ${this.saldo}`;
    } else {
      this.saldo -= monto;
      return `${this.nombre}, has retirado ${monto}. Tu saldo actual es de ${this.saldo}`;
    }
}
  depositar(monto) {
    if (monto > 0) {
      this.saldo += monto;
      return `${this.nombre}, has depositado ${monto}. Tu saldo actual es de ${this.saldo}`;
    } else {
      return `${this.nombre}, no insertaste dinero tu saldo actual es de ${this.saldo}`;
    } 
  }
}

let eder = new clientes("Eder", 1000000);
console.log(eder)

console.log(eder.salAct());

botonRetirar.addEventListener("click", () => {
  const monto = parseInt(montoInput.value);
  const mensaje = eder.retirar(monto);
  console.log(mensaje);
  montoInput.value = "";
});

// Agregar un evento click al botón de borrar
botonBorrar.addEventListener('click', () => {
  // Obtener una referencia a la caja de texto de monto
  const montoInput = document.getElementById('monto-input');
  
  // Establecer el valor de la caja de texto a una cadena vacía
  montoInput.value = '';
});

// Agregar un evento click al botón de cancelar
botonCancelar.addEventListener('click', () => {
  // Redirigir a la página "index.html"
  window.location.href = 'index.html';
});

botonDepositar.addEventListener("click", () => {
  const monto = parseInt(montoInput.value);
  const mensaje = eder.depositar(monto);
  console.log(mensaje);
  montoInput.value = "";
});