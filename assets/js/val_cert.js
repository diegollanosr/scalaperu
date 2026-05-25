// 1. Importas Supabase al inicio de tu archivo
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';
// 2. Configuras tus credenciales (reemplaza con las tuyas)
const supabaseUrl = 'https://spwlwdqsztocrozkprju.supabase.co';
const supabaseKey = 'sb_publishable_IOwZQ3SkvXdH0ky1cwBIIg_MAwZlhLl';
const supabase = createClient(supabaseUrl, supabaseKey);

function enmascararNombre(nombreCompleto) {
    if (!nombreCompleto) return "";

    // Dividimos el nombre por espacios
    const partes = nombreCompleto.split(' ');

    // Usamos .map para procesar cada parte
    return partes.map((parte, index) => {
        // Si es la primera parte (índice 0), la dejamos intacta
        if (index === 0) return parte;

        // Si la parte es muy corta, la dejamos igual
        if (parte.length <= 2) return parte;

        // Aplicamos la máscara al resto
        return parte[0]  + parte[1]  + "****" + parte.slice(-1);
    }).join(' ');
}

// Ejemplo: "Juan Pérez Sánchez" -> "Juan P****z S****z"

function enmascararDni(dni) {
    if (!dni) return "";
    // Muestra los primeros 2 y los últimos 2, enmascara el resto
    if (dni.length <= 4) return dni;
    return dni.substring(0, 2) + "****" + dni.substring(dni.length - 2);
}

// 4. Validación conectada a la Base de Datos (Ahora es ASYNC)
async function validarCertificado(id) {
  const resultado = document.getElementById("resultado");
  if (!resultado) return;

  // Como la consulta toma unos milisegundos, mostramos un mensaje de carga
  resultado.innerHTML = `<h3>⏳ Verificando certificado de forma segura...</h3>`;

  try {
    // Hacemos la consulta a Supabase
    const { data, error } = await supabase
      .from('certificados')
      .select('*') // Trae todas las columnas configuradas
      .eq('id', id)
      .single();

    // Si hay un error (ej. código inventado) o no hay datos
    if (error || !data) {
      resultado.innerHTML = `<h3>❌ Certificado no válido o no encontrado</h3>`;
      return;
    }

    // Manejo inteligente de la "nota" opcional
    // Si la nota existe, creamos la etiqueta HTML, si es nula, queda vacío
    const notaHtml = data.nota
      ? `<p class="nota-alerta"><b>Nota:</b> ${data.nota}</p>`
      : '';

    // Manejo del PDF según lo que conversamos antes:
    // Si creaste una columna "pdf_id", la ruta sería: `./assets/doc/${data.pdf_id}.pdf`
    const nombreProtegido = enmascararNombre(data.nombre_completo);
    const dniProtegido = enmascararDni(data.dni);
    // Si vas a usar el ID principal para el nombre del archivo, lo dejamos así:
    const rutaPDF = `./assets/doc/${data.pdf_id}.pdf`;

    // Pintamos los datos reales extraídos de la base de datos
    resultado.innerHTML = `
      <div class="resultado_tit">
        <h3>✅ Certificado válido</h3>
        <div class="">
          <a href="#/validar" class="valCert_btn">Volver</a>
          <a href="#/contacto" class="valCert_btn">Contactar</a>
        </div>
      </div>
      <div class="resultado_cont">
        <div class="resultado_det">
          <p><b>Nombre:</b> ${nombreProtegido}</p>
          <p><b>DNI:</b> ${dniProtegido}</p>
          <p><b>Cargo:</b> ${data.cargo}</p>
          <p><b>Proyecto:</b> ${data.proyecto}</p>
          <p><b>Empresa:</b> ${data.empresa_emisora}</p>
          <p><b>Consorcio:</b> ${data.consorcio_emisor || 'N/A'}</p>
          <p><b>Período:</b> ${data.fecha_inicio} al ${data.fecha_fin}</p>
          <p><b>Emitido el:</b> ${data.fecha_emis}</p>
          ${notaHtml}
          <button class="valCert_btn" onclick="verPDF('${rutaPDF}')">Ver documento</button>
        </div>
        <img class="valCert_img" src="./assets/imagenes/masc_scala_1.png" alt="">
      </div>
    `;

  } catch (err) {
    // Por si el usuario se queda sin internet en el momento de validar
    console.error("Error de conexión:", err);
    resultado.innerHTML = `<h3>❌ Error de conexión al validar. Intente de nuevo.</h3>`;
  }
}

// 5. Validación manual (Se mantiene casi igual)
function validarManual() {
  // Añadimos .trim() por si el usuario copió el código con un espacio en blanco al final
  const codigo = document.getElementById("codigo").value.trim();

  if(codigo) {
    window.location.hash = `#/validar?id=${codigo}`;
    // OJO: Asumo que tienes un enrutador (router) que detecta este cambio de hash
    // y ejecuta validarCertificado(codigo) automáticamente.
  }
}

// 6. Abrir PDF (Se mantiene igual)
function verPDF(url) {
  window.open(url, "_blank");
}

// Añade esto al final de tu JS para que el botón de HTML lo reconozca
window.validarCertificado = validarCertificado;
window.validarManual = validarManual;
window.verPDF = verPDF;