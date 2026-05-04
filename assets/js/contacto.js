const conctactoForm = `
        <section id="contacto" class="contacto">
            <h2 class="subt">
                Contacto
            </h2>
            <div class="targetContacto">
                <div class="informacionContacto">
                    <p class="subtitulo">¡Hablemos!</p>
                     <img src="./assets/imagenes/contacto.svg" class="imgContacto" alt="">
                    <p class="contactoIcons">
                        <a href="https://www.facebook.com/sscalaperu" target="_blank">
                            <i class="fa-brands fa-facebook contactoIcon"></i>
                        </a>
                        <a id="mailto" href="mailto:administracion@scala-peru.com">
                            <i class="fa-solid fa-envelope contactoIcon"></i>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank">
                            <i class="fa-brands fa-linkedin contactoIcon"></i>
                        </a>
                    </p>
                    <p class="textocontacto">@sscalaperu</p>
                </div>
                <form id="formularioContacto" class="formularioContacto" action="https://formsubmit.co/administracion@scala-peru.com" method="POST">
                    <p>
                        <label class="formularioLabel" for="fullName">Nombre <span class="textResaltado">*</span></label>
                        <input class="formularioInput " type="text" id="fullName" name="name" placeholder=" Nombre y Apellido">
                    </p>
                    <p>
                        <label class="formularioLabel" for="email">Email <span class="textResaltado">*</span></label>
                        <input class="formularioInput " type="email" id="email" name="email" placeholder="administracion@scala-peru.com">
                    </p>
                    <p>
                        <label class="formularioLabel" for="phone">Teléfono</label>
                        <input class="formularioInput" type="tel" name="phone" id="phone" placeholder="+51 999 999 999">
                    </p>
                    <p>
                        <label for="affair" class="formularioLabel">Asunto<span class="textResaltado">*</span></label>
                        <input class="formularioInput " type="affair" id="affair" name="affair" placeholder="Asunto: Validacion de Certificado...">
                    </p>
                    <p>

                        <label for="archivo" class="formularioLabel">Adjuntar archivo</label>
                        <input type="file" class="formularioInput " accept=".pdf,.jpg,.png" id="archivo" name="archivo">
                    </p>
                    <textarea class="formularioInput " id="message" name="message" rows="4" placeholder="* Mensaje... "></textarea>
                    <button type="submit" class="formularioBoton ">Enviar</button>
                    <input type="hidden" name="_captcha" value="false">
                    <p id="mensajeError" class="mensajeError"></p>
                </form>
            </div>   
            <a href="#/validar" class="botonValidar">
            VALIDAR CERTIFICADO
            </a>
        </section>
        `