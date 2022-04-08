
document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  let telefono = "51939054685";

  let ENombre = document.querySelector("#nombre").value;
  let EApellido = document.querySelector("#apellido").value;
  let EEmail = document.querySelector("#email").value;
  let price = document.querySelector('#cart-details').textContent
      let hola = price.replace(/ProductoPrecioCantSub Total/g,' ')
	    let hola2 = hola.replace(/-/g,'  Cantidad: ')   
	      var hola3 = hola2.replace(/Remove/g,'  --- ');
		var buscar="S/" 
		 var hola4=hola3.replace(new RegExp(buscar,"g") ," S/");
	
	
	
	
  let resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  let url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_Formulario de Pedido*%0A
-----------------------------%0A%0A
Hola, ${ENombre}  ${EApellido}%0A
Tu Email para contacto es:%0A
${EEmail}%0A-------------------------------%0A%0A
*_Tu Lista de Pedido_*%0A${hola4}`;

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
