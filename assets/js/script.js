const $body = document.getElementById('body');
// const $listaNav = document.querySelectorAll('.nav_ul a[href^="#"]');
// const $btnDarkMode = document.getElementById('botonModoOscuro');

const header = document.getElementById("header");
const footer = document.getElementById("footer");
header.innerHTML = headerHtml;
footer.innerHTML = footerHtml;

// MAQUETACION
const certVal = `
  <section id="valCert" class="valCert">
    <h2 class="subt">Validar certificado</h2>
    <div class="valCert_inp">
      <input id="codigo" class="valCert_inp_ph" placeholder="Ingrese código">
      <button class="valCert_btn" onclick="validarManual()">Validar</button>
    </div>
     <div id="resultado"></div>
  </section>
`;


const main = document.getElementById("main");

// 1. Agregamos 'async' aquí
async function router() {
    const hash = window.location.hash || "#/";
    const [rutaCompleta, query] = hash.replace("#/", "").split("?");
    const ruta = rutaCompleta;

    const params = new URLSearchParams(query);
    const id = params.get("id");

    if (
        ruta === "" ||
        ruta === "inicio" ||
        ruta === "clientes" ||
        ruta === "nosotros" ||
        ruta === "proyectos"
    ) {
        main.innerHTML = inicioHtml;
        $body.classList.remove("movC")
        renderValores();
        renderCert();
        renderProy();
        actAnio();
        scrollASeccion(ruta);
    } else if (ruta === "contacto") {
        main.innerHTML = conctactoForm;
        $body.classList.add("movC")
        
    } else if (ruta === "validar") {
        // Primero pintamos el recuadro en la pantalla
        main.innerHTML = certVal;
        $body.classList.add("movC")
        
        // VALIDACIÓN AUTOMÁTICA
        if (id) {
            // 2. Agregamos 'await' aquí para que espere la respuesta de Supabase
            try {
              await window.validarCertificado(id);;
            } catch (error) {
                console.error("Error al ejecutar la validación:", error);
            }
        }
    } else {
        main.innerHTML = error404;
        $body.classList.add("movC")
    }
}

// Añade esto al final de tu JS si no lo tienes
window.addEventListener("hashchange", router);
window.addEventListener("load", router);



function scrollASeccion(id) {
    if (!id || id === "") return;

    // espera a que el DOM renderice
    setTimeout(() => {
        const elemento = document.getElementById(id);

        if (elemento) {
            elemento.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }, 50); // pequeño delay necesario
}
/* cambio de visualizacion*/
window.addEventListener('scroll', ()=>{
	$body.classList.toggle('scroll', window.scrollY > 20)
})

function renderValores() {
  const valInc = document.getElementById("val_inc");

  if (!valInc) return; // seguridad

  valInc.innerHTML = ""; // limpia antes (opcional)

  listaVal.forEach(val => {
    const svg = `
      <div class="val_card">
        <svg class="nos_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path fill="currentColor" d="${val.path}"></path>
        </svg>
        <span>${val.nombre}</span>
      </div>
    `;

    valInc.insertAdjacentHTML("beforeend", svg);
  });
}
function renderCert() {

const contenedor = document.getElementById("certificaciones");

listaCert.forEach(cert => {
    const svg = `
        <a href="${cert.enlace}" target="_blank">
        <svg class="cert_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path fill="currentColor" d="${cert.path}"></path>
        </svg>
        </a>
    `;
    contenedor.insertAdjacentHTML("beforeend", svg);
  });
}

function renderProy(){
    const clientTrack = document.getElementById("clien_cont");

    imgClientes.forEach(img => {
      clientTrack.innerHTML += `<img src="./assets/imagenes/clientes/${img}" class="clien_img">`;
    });

    clientTrack.innerHTML += clientTrack.innerHTML;


    const pryctrack = document.getElementById("proy_cont");

    listaProy1.forEach(proy=>{
      pryctrack.innerHTML += `
      <div class="pryctrack_proy">
        <div class="pryctrack_targ">
            <p>${proy.titulo}</p>
            <img class="pryctrack_img" src="./assets/imagenes/PROYECTOS/${proy.img}">
            <div class="pryctrack_ubi"><span>${proy.ubicacion}</span><span>${proy.anio}</span></div>
            <p>Obra ${proy.tipo}</p>
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
}
function verMas(btn) {
  const contenedor = btn.closest('.pryctrack_proy');
  contenedor.classList.toggle('mostrar');
  btn.textContent = contenedor.classList.contains('mostrar') ? 'Ocultar' : 'Ver Más';
}



// // const temaGuardado = localStorage.getItem("theme");

// // /* modo oscuro*/
// // const modClaro =()=>{
// // 	localStorage.setItem("theme", "light")
// // 	$btnDarkMode.classList.add("fa-regular")
// // 	$btnDarkMode.classList.add("fa-moon")
// // 	$btnDarkMode.classList.remove("fa-solid")
// // 	$btnDarkMode.classList.remove("fa-sun")
// // 	$body.classList.remove("dark")
// // }
// // const modOscuro =()=>{
// // 	localStorage.setItem("theme", "dark")
// // 	$btnDarkMode.classList.remove("fa-regular")
// // 	$btnDarkMode.classList.remove("fa-moon")
// // 	$btnDarkMode.classList.add("fa-solid")
// // 	$btnDarkMode.classList.add("fa-sun")
// // 	$body.classList.add("dark")
// // }

// // Recordar preferencia de modo
// // if (temaGuardado === "dark") {
// //   modOscuro();
// // } else if (temaGuardado === "light") {
// //   modClaro();
// // } else {
// //   Si no hay preferencia guardada, usar la del sistema
// //   if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
// //     modOscuro();
// //   } else {
// //     modClaro();
// //   }
// // }
// // Escuchar cambios del sistema
// // window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {e.matches ? modOscuro() : modClaro();});
// // Alternar manualmente
// // $btnDarkMode.addEventListener('click', ()=> {if($body.classList.contains("dark")){modClaro()}else{ modOscuro()}})

// // Actualizar Año
function actAnio(){

  const $anhoActual = document.getElementById('anhoActual');
  
  $anhoActual.innerHTML = new Date().getFullYear();
}

/*barra navegacion*/
  // const observer = new IntersectionObserver(
  //   (entries) => {
  //     entries.forEach(entry => {
  //       const id = entry.target.getAttribute("id");
  //       const menuLink = document.querySelector(`.nav_ul a[href="#${id}"]`);
        
  //       if (entry.isIntersecting) {
  //         menuLink.classList.add("active");
  //       }
  //       else {
  //         menuLink.classList.remove("active");
  //       }
  //     })
  //   },
  //   { rootMargin: "-30% 0px -70% 0px" }
  // );
  // $listaNav.forEach(menuLink => {
  //   const hash = menuLink.getAttribute("href");
  //   const target = document.querySelector(hash);
  //   if (target) {
  //     observer.observe(target);
  //   }
  // });
  