const $anhoActual = document.getElementById('anhoActual');
const $body = document.getElementById('body');
const contenedor = document.getElementById("certificaciones");
const valInc = document.getElementById("val_inc");
// const $listaNav = document.querySelectorAll('.nav_ul a[href^="#"]');
// const $btnDarkMode = document.getElementById('botonModoOscuro');

/* cambio de visualizacion*/
window.addEventListener('scroll', ()=>{
	$body.classList.toggle('scroll', window.scrollY > 20)
})


listaVal.forEach(val => {
  const svg = `
    <div class="val_card">
      <svg class="nos_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="${val.path}"></path>
      </svg>
	  <span>${val.nombre}</span
    </div>
  `;

  valInc.insertAdjacentHTML("beforeend", svg);
});

listaCert.forEach(cert => {
  const svg = `
      <svg class="cert_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="${cert.path}"></path>
      </svg>
  `;
  contenedor.insertAdjacentHTML("beforeend", svg);
});

const imagenes = [
  "ancash.png",
  "cachachi.png",
  "cajamarca.png",
  "castilla.png",
  "chota.png",
  "lambayeque.png",
  "sapalache.png",
];

const track = document.getElementById("clien_cont");

imagenes.forEach(img => {
  track.innerHTML += `<img src="./assets/imagenes/clientes/${img}" class="clien_img">`;
});

// duplicamos contenido
track.innerHTML += track.innerHTML;

const pryctrack = document.getElementById("proy_cont");

listaProy1.forEach(proy=>{
  pryctrack.innerHTML += `
  <div class="pryctrack_proy">
    <div class="pryctrack_targ">
        <p>${proy.titulo}</p>
        <img class="pryctrack_img" src="${proy.img}">
        <div class="pryctrack_ubi"><span>${proy.ubicacion}</span><span>${proy.anio}</span></div>
        <p>Obra ${proy.tipo}</p>
        <p>${proy.cliente}</p>
        <button class="pryctrack_verMas" onclick="verMas(this)">Ver Más</button>
    </div>
    <div class="pryctrack_det">
      <p>${proy.nombre}</p>
      <p> En este proyecto se realizó ${proy.descripcion}</p>
      <p>${proy.detalle}</p>
    </div>
  </div>
  `;
}
)
function verMas(btn) {
  const contenedor = btn.closest('.pryctrack_proy');
  contenedor.classList.toggle('mostrar');
  btn.textContent = contenedor.classList.contains('mostrar') ? 'Ocultar' : 'Ver Más';
}
const teamtrack = document.getElementById("team_cont");






// const temaGuardado = localStorage.getItem("theme");

/* modo oscuro*/
// const modClaro =()=>{
// 	localStorage.setItem("theme", "light")
// 	$btnDarkMode.classList.add("fa-regular")
// 	$btnDarkMode.classList.add("fa-moon")
// 	$btnDarkMode.classList.remove("fa-solid")
// 	$btnDarkMode.classList.remove("fa-sun")
// 	$body.classList.remove("dark")
// }
// const modOscuro =()=>{
// 	localStorage.setItem("theme", "dark")
// 	$btnDarkMode.classList.remove("fa-regular")
// 	$btnDarkMode.classList.remove("fa-moon")
// 	$btnDarkMode.classList.add("fa-solid")
// 	$btnDarkMode.classList.add("fa-sun")
// 	$body.classList.add("dark")
// }

// Recordar preferencia de modo
// if (temaGuardado === "dark") {
//   modOscuro();
// } else if (temaGuardado === "light") {
//   modClaro();
// } else {
//   // Si no hay preferencia guardada, usar la del sistema
//   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
//     modOscuro();
//   } else {
//     modClaro();
//   }
// }
// // Escuchar cambios del sistema
// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {e.matches ? modOscuro() : modClaro();});
// // Alternar manualmente
// $btnDarkMode.addEventListener('click', ()=> {if($body.classList.contains("dark")){modClaro()}else{ modOscuro()}})

//Actualizar Año
$anhoActual.innerHTML = new Date().getFullYear();

/*barra navegacion*/
// const observer = new IntersectionObserver(
// 	(entries) => {
// 		entries.forEach(entry => {
// 			const id = entry.target.getAttribute("id");
// 			const menuLink = document.querySelector(`.nav_ul a[href="#${id}"]`);

// 			if (entry.isIntersecting) {
// 				menuLink.classList.add("active");
// 			}
// 			else {
// 				menuLink.classList.remove("active");
// 			}
// 		})
// 	},
//     { rootMargin: "-30% 0px -70% 0px" }
// );
// $listaNav.forEach(menuLink => {
// 	const hash = menuLink.getAttribute("href");
// 	const target = document.querySelector(hash);
// 	if (target) {
// 		observer.observe(target);
// 	}
// });

