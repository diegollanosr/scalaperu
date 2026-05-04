const certVal = `
    <section id="valCert" class="valCert">
    <h2 class="subt">Validar certificado</h2>
    <input id="codigo" placeholder="Ingrese código">
    <button onclick="validarManual()">Validar</button>
    <div id="resultado"></div>
    </section>
`;
const certificados = [
  {
    nombre: "Juan Pérez",
    empresa: "Scala Perú",
    fecha: "2026",
    id: "8f3a9c2dX7kL91pQ",
    pdf: "./assets/doc/prueba.pdf"
  }
]
// Validación automática
function validarCertificado(id) {
  const data = certificados.find(cert => cert.id === id);
  const resultado = document.getElementById("resultado");

  if (!resultado) return;

  if (data) {
    resultado.innerHTML = `
      <h3>✅ Certificado válido</h3>
      <p><b>Nombre:</b> ${data.nombre}</p>
      <p><b>Empresa:</b> ${data.empresa}</p>
      <p><b>Fecha:</b> ${data.fecha}</p>
      <button onclick="verPDF('${data.pdf}')">Ver documento</button>
    `;
  } else {
    resultado.innerHTML = `<h3>❌ Certificado no válido</h3>`;
  }
}
// Validación manual
function validarManual() {
  const codigo = document.getElementById("codigo").value;
  window.location.hash = `#/validar?id=${codigo}`;
}

// Abrir PDF
function verPDF(url) {
  window.open(url, "_blank");
}