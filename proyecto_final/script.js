const usuarioDB = "eder"
const passwordDB = "0412"

const formulario = document.getElementById("cajasDeTexto")

function mostrarError(tipo){
  let error = document.getElementById(`error${tipo}`)
    error.classList.remove("hide")
    error.classList.add("error")
  setTimeout(()=>{
    error.classList.remove("error")
    error.classList.add("hide")
  }, 3000)
}

function validar(us, pass){
    if(us === usuarioDB && pass === passwordDB){
      window.location.href = "cajero.html";
    } else if(us != usuarioDB){
      console.log("Usuario incorrecto");
      mostrarError("Usuario")
    } else if(pass != passwordDB){
      console.log("Contraseña incorrecta");
      mostrarError("Password")
    } else {
      console.log("Llena tus datos");
    }
  }

  formulario.addEventListener("submit", function(evento){
    evento.preventDefault()
    //console.log("Hola Mundo")
    let usuario = document.getElementById("user").value
    let password = document.getElementById("nip").value
  validar(usuario, password);
    console.log(usuario, password)
  })