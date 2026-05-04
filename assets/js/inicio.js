const inicioHtml = `
<a href="http://" target="_blank"></a>
        <section id="/inicio" class="inicio">
            <h1 class="text_inicio">
                Supervisión que garantiza <br>
                Calidad, Seguridad y Cumplimiento
            </h1>
        </section>
        <section id="nosotros" class="nosotros">
            <div id="val_inc" class="val">
            </div>
            <div class="nos_res">
                <h2 class="subt">Quienes Somos</h2>
                <span>Experiencia y  Compromiso  en Supervisión de Obras</span>
                <p>
                    Somos una empresa consultora especializada   en supervisión y control de proyectos, comprometida con asegurar que cada obra se ejecute conforme a los estándares técnicos, normativos y contractuales vigentes.
                </p>
            </div>
            <div class="nost_cont_targ">
                <div class="nost_targ">
                    <img class="nost_img" src="./assets/imagenes/resenia.png" alt="">
                    <div class="nost_desc">
                        <h3 class="nost_targ_subt">Nuestra Historia</h3>
                        <p>
                            Scala Perú fue fundada el 01 de agosto de 2019, en un contexto en el que el sector de la construcción e infraestructura demandaba empresas capaces de responder con eficiencia, criterio técnico y una gestión responsable de los proyectos.
                            <br>
                            <br>
                            Desde su creación, la empresa se ha enfocado en participar activamente en el desarrollo y supervisión de obras, consolidando una forma de trabajo basada en la organización, el seguimiento riguroso y la atención a los detalles en cada etapa del proyecto. 
                            <br>
                            <br>
                            Con el paso del tiempo, Scala Perú ha venido fortaleciendo su presencia en el sector, incorporando mejoras en sus procesos y promoviendo soluciones técnicas que no solo respondan a las necesidades inmediatas, sino que también consideren el impacto a largo plazo de cada intervención.
                            <br>
                            <br>
                            La empresa ha construido su trayectoria sobre una cultura de trabajo orientada a la responsabilidad, la claridad en la gestión y el respeto por las disposiciones técnicas y legales, lo que le ha permitido desenvolverse con solidez en cada proyecto asumido.
                            <br>
                            <br>
                            Actualmente, Scala Perú continúa su proceso de crecimiento, proyectándose como una empresa que busca aportar al desarrollo de infraestructura de calidad, contribuyendo de manera sostenible al entorno y generando valor en cada uno de los proyectos en los que participa
                        </p>
                    </div>
                </div>
                <div class="nost_targ">
                    <img class="nost_img" src="./assets/imagenes/mision.png" alt="">
                    <div class="nost_desc">
                        <h3 class="nost_targ_subt">
                            Misión y Visión 
                        </h3>
                        <p>
                            Brindar soluciones integrales y personalizadas en el desarrollo y supervisión de proyectos de infraestructura, con un firme compromiso con la excelencia técnica, la innovación y la sostenibilidad, generando valor real y confiable para nuestros clientes.
                            <br>
                            <br>
                            Aspiramos a ser líderes inspiradores del sector, impulsando el progreso y el bienestar social a través de proyectos de alta calidad, creciendo junto a nuestros clientes y colaboradores y dejando un legado de confianza y desarrollo sostenible.
                        </p>
                    </div>
                </div>
                <div class="nost_targ">
                    <img class="nost_img" src="./assets/imagenes/compromiso.png" alt="">
                    <div class="nost_desc">
                        <h3 class="nost_targ_subt">
                            Nuestro Compromiso 
                        </h3>
                        <p>
                            Nos distingue un enfoque institucional basado en tres pilares fundamentales:
                            <br>
                            <br>
                            - Compromiso con la calidad: cada proyecto se ejecuta bajo estándares internacionales, asegurando resultados confiables y duraderos. 
                            <br>
                            <br>
                            - Transparencia: mantenemos una comunicación clara y abierta con nuestros clientes, garantizando confianza en cada etapa del proceso.
                            <br>
                            <br>
                            - Cumplimiento normativo: respetamos rigurosamente la legislación y las normativas técnicas, asegurando responsabilidad y seguridad en cada obra.
                        </p>
                    </div>
                </div>
            </div>
            <h2 class="nost_subt">
                Nuestro propósito es aportar soluciones técnicas eficientes y sostenibles que impulsen <br> el progreso de las comunidades donde trabajamos.
            </h2>
            <div class="servis">
                <h2 class="subt">Nuestros Servicios</h2>
                <div class="serv_cont_targ">
                    <div class="serv_targ">
                        <img src="./assets/imagenes/form_proy.png" alt="Imagen de Estudios de Preinversión y Formulación de Proyectos">
                        <h3 class="serv_targ_subt">Estudios de Preinversión y Formulación de Proyectos</h3>
                    </div>
                    <div class="serv_targ">
                        <img src="./assets/imagenes/super_exp_tec.png" alt="Imagen de Elaboración y Supervisión de Expedientes Técnicos">
                        <h3 class="serv_targ_subt">Elaboración y Supervisión de Expedientes Técnicos</h3>
                    </div>
                    <div class="serv_targ">
                        <img src="./assets/imagenes/super_obr.png" alt="Imagen de Supervisión de Ejecución de Obras">
                        <h3 class="serv_targ_subt">Supervisión de Ejecución de Obras</h3>
                    </div>
                    
                </div>
            </div>
            <div class="cert">
                <div class="sub_cont">
                    <h2 class="subt">Certificaciones</h2>
                    <div class="line"></div>
                </div>
                <div id="certificaciones" class="cert_cont_icon">
                </div>
                <a class="cert_a_button" href="https://www.iafcertsearch.org/certified-entity/NEREm4EAHO9jAAi7yRWP7nKx" target="_blank">
                    <button class="cert_button">
                        General
                    </button>
                </a>
            </div>
        </section>
        <section id="proyectos" class="proyectos">
            <h2 class="subt">Proyectos</h2>
            <div id="proy_cont" class="proy_cont"></div>
        </section>
        <section id="clientes" class="clientes">
            <h2 class="subt">Clientes y Alianzas</h2>
            <div class="prueba_client">
                <div class="clien_cont" id="clien_cont">
                </div>
            </div>
        </section>
`