const conctactoForm = `
<section id="contacto" class="contacto">
    <h2 class="subt">Contacto</h2>
    <div class="targetContacto">
        <div class="informacionContacto">
            <p class="subtitulo">¡Hablemos!</p>
            <img src="./assets/imagenes/contacto.svg" class="imgContacto" alt="">
            </div>
        <form id="formularioContacto" class="formularioContacto" enctype="multipart/form-data" action="https://api.web3forms.com/submit" method="POST" >
            <input type="hidden" name="access_key" value="4372314d-dab3-4f52-b0fc-2ed6c3c568d2">
            <p>
                <label class="formularioLabel" for="fullName">Nombre <span class="textResaltado">*</span></label>
                <input class="formularioInput" type="text" id="fullName" name="name" placeholder="Nombre y Apellido" required>
            </p>
            <p>
                <label class="formularioLabel" for="email">Email <span class="textResaltado">*</span></label>
                <input class="formularioInput" type="email" id="email" name="email" placeholder="administracion@scala-peru.com" required>
            </p>
            <p>
                <label class="formularioLabel" for="phone">Teléfono</label>
                <input class="formularioInput" type="tel" name="phone" id="phone" placeholder="+51 999 999 999">
            </p>
            <p>
                <label for="affair" class="formularioLabel">Asunto <span class="textResaltado">*</span></label>
                <input class="formularioInput" type="text" id="affair" name="affair" placeholder="Asunto..." required>
            </p>
            <textarea class="formularioInput" id="message" name="message" rows="4" placeholder="Mensaje..." required></textarea>
            
            <button type="submit" class="formularioBoton">Enviar</button>
            
            <input type="hidden" name="_captcha" value="false">
            <input type="hidden" name="_template" value="table">
            <input type="hidden" name="_next" value="/">
            
            <p id="mensajeError" class="mensajeError"></p>
            </form>
            </div>   
            <a href="#/validar" class="botonValidar">VALIDAR CERTIFICADO</a>
            </section>`;
            //<p>
            //    <label for="archivo" class="formularioLabel">Adjuntar archivo (PDF, Img)</label>
            //    <input type="file" class="formularioInput" id="archivo" name="attachment" accept=".pdf, .jpg, .jpeg, .png">
            //</p>