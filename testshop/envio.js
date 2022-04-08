
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "51939054685";

  let ENombre = document.querySelector("#nombre").value;
  let EApellido = document.querySelector("#apellido").value;
  let EEmail = document.querySelector("#email").value;
 // let empleado = document.querySelector("#empleado").value;
 // let servicio = document.querySelector("#servicio").value;
 // let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_MI NEGOCIO_*%0A
		*Reservas*%0A%0A
		*Nombres:*%0A
		${ENombre}%0A
		*Apellidos:*%0A
		${EApellido}%0A
		*Email:*%0A
		${EEmail}`;

  if (ENombre === "" || EApellido === "" || EEmail === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${ENombre}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu reserva, ${ENombre}`;

  window.open(url);
});
