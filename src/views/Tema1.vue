<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Estudio del trabajo


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/img1.png', alt='')
      .col-lg-8(data-aos="fade-left")
        .cajon-b-editado
          .cajon-b.color-acento-contenido.p-3.mb-5.arriba-derecha
            p.mb-5 Implementar buenas prácticas de manufactura, sistémicas y amigables con el entorno, es la consideración para un análisis metódico de los procesos, procedimientos, actividades y tareas que los colaboradores realizan siempre para mejorar, en relación con la eficacia, productividad y economía de costos, a través de la aplicación de la ingeniería de métodos y la medición del trabajo.

            p #[strong Para ello, es clave el aporte de las entidades productivas, como se relaciona a continuación:]

    figure.mb-5
      img(src='@/assets/curso/temas/tema1/img2.svg', alt='Las entidades productivas en el estudio del trabajo.')


    p.mb-5 Además, se deben contemplar las buenas prácticas de manufactura orgánica en el lugar de trabajo, las cuales se cimentan en el acatamiento total de los derechos fundamentales y en la normativa que rige el trabajo sostenible a nivel internacional, para lograr una excelente comunicación entre el equipo de colaboradores y la autoridad administrativa, como canal relevante en el incremento de la producción amigable con el ambiente y la generación de empleos, principios que se llevan a replicar en todas las corporaciones.


    //TODO agregar el enlace ---------------------------------------------------------
    .tarjeta.bg-color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema1/10.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Introducción al estudio del trabajo:
              p.text-small.mb-0 Explore el contenido del siguiente material, céntrese en la información de las páginas 3 a la 56 y amplíe sus conocimientos sobre los elementos mencionados hasta este punto.
            .col-sm-auto
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=QqcjI-zZyb8" target="_blank")
                span Ver video
                i.fas.fa-video

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Estudio métodos de trabajo


    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-right")
        p(data-aos='fade-right') Con la implementación de infraestructuras emergentes, el ser humano ha tenido que coexistir bajo un incesante cambio tecnológico, científico, social, económico, etc. En este contexto, las empresas relacionadas con el sector de bienes y servicios no son la excepción. Es así como nace la necesidad de adaptar los diferentes procesos a las nuevas estrategias que surgen diariamente. Es preciso e indispensable revisar actividades que deben cambiar para lograr la perfección que la naturaleza empresarial exige, ya sea para aliviar costos, facilitar las tareas, mejorar la calidad de vida de los colaboradores o acelerar el ritmo de producción.

        p(data-aos='fade-right') Las mejoras a los métodos de trabajo, entonces, deberán ser permanentemente mejoradas y orientadas a la optimización de recursos, el aumento de la eficiencia y la eficacia, el bienestar de los colaboradores que hacen posible la cadena de productividad. Todo ello, implica la identificación y solución de falencias técnicas, el mejoramiento permanente, el estudio de lineamientos y métodos siempre innovadores.

        p #[strong Para seleccionar una acertada oferta de mejora del proceso, se debe:]

      .col-lg-4.d-none.d-flex(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/img3.png', alt='')


    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-3.mb-lg-0.mb-3
        div(style='background-color: #F0BD51').p-4.h-100
          img(src='@/assets/curso/temas/tema1/4.png', alt='' style='border-radius: 20px ').mb-3
          .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
            h4.mb-0.text-center Sobrecostos
          p Identificar los sobrecostos que intervienen, los cuales son el componente que incide mayormente.
      .col-lg-3.mb-lg-0.mb-3
        div(style='background-color:#FAEBCD ').p-4.h-100
          img(src='@/assets/curso/temas/tema1/5.png', alt='' style='border-radius: 20px ').mb-3
          .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
            h4.mb-0.text-center Costos fantasmas
          p Escudriñar con detenimiento, si son los colaboradores, las máquinas, los materiales e insumos, o la distribución del taller de producción, lo que genera más costos fantasmas, o que podrían estar restringiendo el proceso.
      .col-lg-3.mb-lg-0.mb-3
        div(style='background-color: #F0BD51').p-4.h-100
          img(src='@/assets/curso/temas/tema1/6.png', alt='' style='border-radius: 20px ').mb-3
          .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
            h4.mb-0.text-center Ley de Pareto
          p Aplicar la Ley de Pareto donde, usualmente, un porcentaje menor de factores es el que genera una gran cantidad de sobrecostos
      .col-lg-3.mb-lg-0.mb-3
        div(style='background-color: #FAEBCD').p-4.h-100
          img(src='@/assets/curso/temas/tema1/7.png', alt='' style='border-radius: 20px ').mb-3
          .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
            h4.mb-0.text-center Recolección de información
          p Utilizar distintas técnicas para definir si la mejora estará enfocada a la eliminación de algunos de estos elementos, la combinación de algunas actividades, la reorganización del lugar de trabajo o la simplificación del método propuesto inicialmente.

    p.mb-5 Es así como se actúa en el proceso de estudio del trabajo para observar el escenario actual, las insuficiencias que se comprueban y los cambios que hacen antesala para ser solucionados y cumplir con las directrices propuestas por la empresa.

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Conceptos generales sobre métodos de trabajo


    p Cuando a los procesos logísticos, y de acuerdo con las necesidades propias de cambio, se integran acciones efectivas en los sistemas de trabajo, se genera impacto sobre los modelos de integración que llevan a que los líderes cumplan con las expectativas del cliente y, además, se aprovisionan productos y servicios que aseguran la óptima calidad. Por tanto, cumplir con el diseño de métodos eficientes, responder a expectativas económicas sobre dichos métodos, según estrategias emergentes durante su aplicación, ayuda a flexibilizar los procesos y contribuye al confort en la ejecución de las tareas para los colaboradores.

    p.mb-5 #[strong Las siguientes son algunas acciones posibles y efectivas, frente a los métodos de trabajo:]

    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/S-1BiUW18kM" title="Nombre del video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Conceptos generales sobre métodos de trabajo     


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-8(data-aos="fade-right"): img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/8.png', alt='')
      .col-lg-8(data-aos="fade-left")
        p Por lo anterior, hay que tener en cuenta el análisis detallado frente al estudio del trabajo, considerando la observación de métodos actuales. Se debe proceder, en última instancia, a la generación de propuestas que sean realmente aplicables, ejecutables y con alto margen de estabilización del proceso, con un porcentaje significativo de trazabilidad, escalonando y documentando la información en archivos soporte para la toma de decisiones. Se emplearán, entonces, como herramienta clave, los porqués de cada respuesta, lo cual facilita llegar hasta la raíz del problema y caracterizar la naturaleza de la anomalía comprobada. Esto, a su vez, permite tener un enfoque mucho más preciso y detallado para calcular en números y monitorear los resultados.

        .bg-color-adicional-2.p-4
          p.mb-0 Un ejemplo de ello son las herramientas de fácil comprensión de la información obtenida, las cuales se relacionan con imágenes gráficas de cualquier naturaleza, que muestran visiblemente los resultados que se pretendían.

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Etapas para el estudio de métodos de trabajo.

    p.mb-5 En el cumplimiento de los protocolos del estudio del trabajo, para llevar a cabo un estudio de métodos, se determinan una serie de pasos a seguir estrictamente para lograr efectividad en la búsqueda de mejoras, partiendo de la observación crítica de los métodos usados actualmente. Para ello, según Kanawaty (1996), se han determinado las siguientes fases, las cuales se describirán más adelante:


    .margin-n(style='background-color: #FFF9ED').px-5.pt-4.mb-5

      .row.justify-content-center.align-items-end.mb-5
        .col-xxl-9.col-xl-12
          .row.justify-content-center.align-items-stretch
            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/11.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de selección del trabajo para el estudio.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/12.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.mb-lg-3.mb-xl-0.mb-xxl-3.lh-1 #[strong Fase de registro de los hechos.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/13.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de examen, de forma crítica, del trabajo.]


            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/14.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de establecimiento del método más práctico.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/15.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.mb-lg-3.mb-xl-0.mb-xxl-3.lh-1 #[strong Fase de evaluación del método actual.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/16.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de definición del nuevo método de trabajo.]


            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/17.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.mb-lg-3.mb-xl-0.mb-xxl-3.lh-1 #[strong Fase de registro del nuevo método.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/18.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de implantación del nuevo método de trabajo.]

            .col-xl-4.col-lg-6(data-aos="fade-right")
              .bg-color-primario.mb-4
                .row.align-items-center.gx-0
                  .col-auto
                    .px-3
                      img(src='@/assets/curso/temas/tema1/19.svg', alt='' style='width: 49px').mx-auto
                  .col
                    .bg-yellow-light.p-4
                      p.mb-0.lh-1 #[strong Fase de control del nuevo método de trabajo.]

        .col-xxl-3.d-none.d-xxl-block
          figure
            img(src='@/assets/curso/temas/tema1/9.svg', alt='')


    .row.justify-content-center.align-items-end.mb-5
      .col-xl-8
        p.mb-0 Es de precisar que, en el contexto de la realidad de los procesos logísticos, muchas veces, las distintas condiciones identifican que el nuevo método no es el más adecuado para implantar, puesto que los contextos dependen de diversos factores propios de los escenarios de estudio. Parámetros como la agilidad de la persona, su ritmo de trabajo, la tecnología de los equipos empleados, la calidad de las materias primas, entre otros, enrutan significativamente las condiciones para poner a punto, precisamente, el método en propuesta. El mundo empresarial es muy diverso en sus procesos: una técnica sugerida funcionará mejor para algunos proyectos que para otros.
      .col-xl-4
        figure
          img(src='@/assets/curso/temas/tema1/20.svg', alt='')

    .row.justify-content-center
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema1/21.svg', alt='', style="max-width: 75px" )
          .tarjeta.color-acento-contenido
            .pe-4.py-4
              p.mb-0 #[strong Ejemplo:] para el universo del vestuario, no es lo mismo construir una prenda en tecnología convencional que en tecnología emergente de punta, hay formas o métodos de trabajo para estos eventos que se consideran de ejecución muy manual o tecnificada dependiendo del entorno antes anotado.

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Selección del trabajo para su estudio

    p.mb-5 Dado que el objeto de estudio puede ser muy amplio, dentro del escenario productivo, se hace necesario definir ciertos aspectos para centrar la atención en elementos concretos que permitan llevar a cabo el estudio en un tiempo real y concreto. Para ello, se deben tener en cuenta las siguientes consideraciones:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/22.png')})`}")
              .texto-flip.p-3
                .titulo.d-inline-block.p-3.rounded-pill.bg-white
                  h5.mb-0 Consideraciones económicas
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Consideraciones económicas
              p.mb-0 Se identifican aquellas operaciones que generan beneficios, pero que podrían resultar costosas, elementos que entorpecen la velocidad del trabajo, actividades que demandan bastante mano de obra o que podrían resultar repetitivas teniendo en cuenta costos, precio de venta y valor intangible de la competitividad.

      .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/23.png')})`}")
              .texto-flip.p-3
                .titulo.d-inline-block.p-3.rounded-pill.bg-white
                  h5.mb-0 Consideraciones técnicas
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Consideraciones técnicas
              p Identificar la necesidad real y más importante de la organización con respecto a lo técnico. Hay que tener en cuenta que se está en la época de la Cuarta Revolución Industrial, y las industrias 4.0, donde el Internet de las cosas se ha vuelto muy común y necesario.

      .col-lg-4.col-md-8.col-10.mb-4.mb-lg-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/24.png')})`}")
              .texto-flip.p-3
                .titulo.d-inline-block.p-3.rounded-pill.bg-white
                  h5.mb-0 Consideraciones humanas
            .tarjeta-flip__contenido.p-4.p-xl-5
              h5 Consideraciones técnicas
              p Consisten en la practicidad de los métodos, en la estandarización de los tiempos y en mejorar el entorno del puesto de trabajo; se deben establecer en conjunto para hacer posible que el cambio de un proceso beneficie a toda la organización. Se debe aterrizar a la realidad el alcance que tendrá el estudio, favoreciendo resultados concretos y funcionales al establecer límites.

    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
          h4.mb-0 Registrar los hechos

        p A través de una postura de observación directa, se identifican los hechos relevantes relacionados con el trabajo que se ha definido anteriormente; el registro se convierte en un componente muy importante para desarrollar todo el proceso de estudio. Para ello, se procede a recolectar los datos apropiados de las fuentes de información principales. Las personas que realizan esta actividad son claves en esa área, son importantes por lo delicado del protocolo a la hora de recolectar la información.

        p.mb-0 #[strong Este registro se puede realizar en dos momentos:] el primero, con un gráfico convencional para establecer si los datos obtenidos tienen utilidad y pertinencia para el estudio y, el segundo, será un gráfico más detallado para socializar la información a modo de informe. Para la recolección de datos, existen diversas técnicas e instrumentos, desde la escritura en lápiz y papel, videos, estudios detallados, hasta elementos estandarizados. Los más utilizados son los diagramas o gráficos, que pueden presentarse de las siguientes maneras:
      .col-lg-4.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/tema1/25.png", alt="alt")

    .row.justify-content-center
      SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/26.svg' alt='')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Cursograma sinóptico del proceso
            p Registra datos secuenciales de operaciones, encadena puestos de trabajo para mostrar la ruta crítica óptima.

            a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/27.svg' alt='')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Cursograma analítico del operario
            p Grafica la ruta del recorrido que una persona realiza en una planta de producción y anexa, a sus registros, el tiempo de duración por cada una de las actividades que desempeña.

            a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/28.svg' alt='')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Cursograma analítico del material
            p Este se da desde el material mediante el mapa de procesos de la ruta que siguen materias primas e insumos y su participación en el ensamble del producto.

            a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/29.svg' alt='')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Cursograma de maquinaria
            p Denominado también Cursograma del equipo; registra las horas máquina que están en funcionamiento, trazabilidad relevante para el índice de productividad de la infraestructura tecnológica en la empresa.

            a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/30.svg' alt='')
          div(style='background-color: #EF8B53').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Diagrama bimanual
            p Ruta de micromovimientos de la mano derecha y la mano izquierda, en un lugar de trabajo, para desarrollar una operación.

            a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/27.svg' alt='')
          div(style='background-color: #F0BD51').p-5.h-100
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Cursograma administrativo
            p La ruta de trabajo del personal administrativo, se refleja en el liderazgo y solución de conflictos y problemas al interior de los procesos.

            a.boton.color-acento-botones.indicador__container(@click="modal6 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")  
      figure
        img(src="@/assets/curso/temas/tema1/32.jpg", alt="alt")

    ModalA(:abrir-modal.sync="modal2")  
      figure
        img(src="@/assets/curso/temas/tema1/33.jpg", alt="alt")

    ModalA(:abrir-modal.sync="modal3")  
      figure
        img(src="@/assets/curso/temas/tema1/34.jpg", alt="alt")

    ModalA(:abrir-modal.sync="modal4")  
      figure
        img(src="@/assets/curso/temas/tema1/35.jpg", alt="alt")

    ModalA(:abrir-modal.sync="modal5")  
      figure
        img(src="@/assets/curso/temas/tema1/36.jpg", alt="alt")

    ModalA(:abrir-modal.sync="modal6")  
      figure
        img(src="@/assets/curso/temas/tema1/37.jpg", alt="alt")
    

    .tarjeta.bg-color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.d-none.d-lg-block
          img(src="@/assets/curso/temas/tema1/38.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0              
              p.mb-0 #[strong Explore la información contenida en el documento que aquí se propone; allí encontrará algunos ejemplos orientadores.]

    p.mb-5 Otra de las maneras para registrar los hechos son los diagramas que hacen referencia al movimiento de los elementos que intervienen en los procesos, estos son:     

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-xl-flex(data-aos="fade-right")
        img(data-aos='zoom-in')(src='@/assets/curso/temas/tema1/39.svg', alt='')
      .col-xl-8(data-aos="fade-left")
        SlyderF.slyder-100(columnas="col-lg-6")          
          div(style='background-color: #FFF9ED').p-5.h-100
            h3 Diagrama de recorrido 
            p Diagrama de recorrido, de circuito o flujograma de hilos, ayuda al registro de la información documentada para reconocer e inspeccionar las operaciones o tareas de una forma  más visual. Es un prototipo en miniatura, diseñado siguiendo la trayectoria para mostrar el camino que sigue un colaborador en un espacio físico.

            a.boton.color-acento-botones.indicador__container(@click="modal7 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

          div(style='background-color: #FFF9ED').p-5.h-100
            h3 Diagrama de hilos
            p Se reconoce como de materiales de maquinaria de hombre. En condiciones similares a la definición anterior, lo utilizamos para estos factores o recursos.

            a.boton.color-acento-botones.indicador__container(@click="modal8 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

          div(style='background-color: #FFF9ED').p-5.h-100
            h3 Ciclograma
            p Imagen panorámica de espacios físicos, en los diferentes recorridos de los recursos que intervienen;, posiciones geográficas de elementos en el proceso, y disposición del lugar de trabajo., Anteriormente, fotografías aéreas;, en la actualidad emergente, el empleo de drones. 

            a.boton.color-acento-botones.indicador__container(@click="modal9 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

          div(style='background-color: #FFF9ED').p-5.h-100
            h3 Cronociclograma
            p Es una forma de ciclograma que emplea, en el esquema gráfico, una luz led intermitente, sincronizada, de tal forma que el recorrido quede grabado por una serie de trazos en representación de lágrimas, cuyo vértice marca la ruta y donde los espacios calculen la rapidez del movimiento. 

            a.boton.color-acento-botones.indicador__container(@click="modal10 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

          div(style='background-color: #FFF9ED').p-5.h-100
            h3 Gráfico de trayectoria
            p Es una matriz, para el registro de datos numéricos, sobre los recorridos de colaboradores, materias primas, piezas, insumos o infraestructura física, recorriendo distancias entre espacios físicos, generalmente, en el transcurso de jornadas laborales. Mide trazabilidad del recorrido para el diseño de indicadores de gestión.

            a.boton.color-acento-botones.indicador__container(@click="modal11 = true")
              span Abrir imagen
              i(class="fas fa-search")
              .indicador--click(v-if="mostrarIndicador")

    ModalA(:abrir-modal.sync="modal7")  
      figure
        img(src="@/assets/curso/temas/tema1/40.jpg", alt="alt")
    ModalA(:abrir-modal.sync="modal8")  
      figure
        img(src="@/assets/curso/temas/tema1/41.jpg", alt="alt")
    ModalA(:abrir-modal.sync="modal9")  
      figure
        img(src="@/assets/curso/temas/tema1/42.jpg", alt="alt")
    ModalA(:abrir-modal.sync="modal10")  
      figure
        img(src="@/assets/curso/temas/tema1/43.jpg", alt="alt")
    ModalA(:abrir-modal.sync="modal11")  
      figure
        img(src="@/assets/curso/temas/tema1/44.jpg", alt="alt")

    p.mb-5 A continuación, se presenta un ejemplo de diagrama de recorrido del proceso de un cinturón:

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Figura 1.
          span Diagrama de recorrido del proceso de un cinturón
        figure.mb-5
          img(src="@/assets/curso/temas/tema1/45.svg", alt="Esquema de diagrama que detalla el recorrido para el proceso de fabricación de un cinturón.")
          figcaption.mt-3 Nota. Tomado de Kanawaty (1996).

    .row.justify-content-center.mb-4(data-aos="fade-in")
      .col-lg-2.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/tema1/46.svg", alt="alt")
      .col-lg
        p Como se detalla e los ejemplos y en la figura inmediatamente anterior, se hace reconocimiento a las diferentes formas de diseñar gráficos y a la empleabilidad en diversos procesos de producción relacionados con el sector de manufactura y servicio, según sus diferentes propiedades; de allí se identifica la simbología que los acompaña y que cumple estándares internacionales empleados para reducir el tiempo de escritura.

        p.mb-0 Se constituyen en piezas claves y cómodas para determinar las distintas actividades existentes. Con la observación directa se generan los gráficos que permiten mayor agilidad de entendimiento de las actividades, lo cual reduce horas de lectura en escritos extensos; además, muestran con claridad lo que se desarrolla en cada proceso.

    p.mb-5 #[strong La tabla que se muestra enseguida, expone los elementos simbólicos usados, junto con su respectiva denominación y significado:]

    .titulo-sexto.color-acento-contenido(data-aos="fade-in")
      h5 Tabla 1.
      span Principales símbolos para usar en un diagrama de operaciones

    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        caption Nota. Tomado de Kanawaty (1996)
        thead          
          tr.text-center
            th(width="20%") SÍMBOLO
            th(width="30%") ACTIVIDAD
            th(width="50%") SIGNIFICADO
        tbody
          tr
            td 
              img(src="@/assets/curso/temas/tema1/47.svg", alt="alt").img85.x--center
            td.text-center #[strong Operación]
            td Hace referencia a las fases principales del proceso. Se puede decir que existe operación cuando se desarrolla una actividad para lograr el producto final.
          tr(style="background-color:#f7f7f7")
            td
              img(src="@/assets/curso/temas/tema1/48.svg", alt="alt").img85.x--center
            td.text-center #[strong Inspección]
            td Hace referencia a la comprobación de la calidad o verificación de la cantidad, lo cual permite identificar si la actividad se realizó de la manera adecuada.
          tr
            td
              img(src="@/assets/curso/temas/tema1/49.svg", alt="alt").img85.x--center
            td.text-center #[strong Transporte]
            td Hace referencia al desplazamiento que realizan los trabajadores, los productos o cualquier otro elemento.
          tr(style="background-color:#f7f7f7")
            td
              img(src="@/assets/curso/temas/tema1/50.svg", alt="alt").img85.x--center
            td.text-center #[strong Depósito provisional]
            td Hace referencia a la demora en la realización de una actividad, es decir, trabajo en pausa.
          tr
            td
              img(src="@/assets/curso/temas/tema1/51.svg", alt="alt").img85.x--center
            td.text-center #[strong Almacenamiento permanente]
            td Hace referencia al hecho de guardar un elemento y no moverlo sin previa autorización.
          tr(style="background-color:#f7f7f7")
            td
              img(src="@/assets/curso/temas/tema1/52.svg", alt="alt").img85.x--center
            td.text-center #[strong Actividades combinadas]
            td Hace referencia a varias actividades que se ejecutan al mismo tiempo o por el mismo operario.
           

    .titulo(style='background-color: #F7E9E1' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Examinar de forma crítica

    p(data-aos="fade-in") Para llevar a cabo un examen crítico, comúnmente se hace uso del interrogatorio donde, a través de diversas preguntas, se indaga acerca de cada actividad, con el fin de explorar el proceso que se está estudiando. La acción de escuchar a las personas involucradas en las actividades que se están evaluando, permite visualizar de mejor manera cómo se está desarrollando el método actual; adicionalmente, permite identificar las variaciones que sean necesarias, tanto en funcionalidad como en el impacto que estas desarrollan al proceso productivo.

    p(data-aos="fade-in").mb-5 #[strong A través de la inspección de una infraestructura física, tales actividades se clasifican en:]    

    figure.d-none.d-lg-flex.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/tema1/53.svg", alt="alt")

    figure.d-lg-none.d-flex.mb-5(data-aos="zoom-in")
      img(src="@/assets/curso/temas/tema1/54.svg", alt="alt")

    p(data-aos="fade-in").mb-5 El interrogatorio constituye un elemento clave para el examen crítico donde, a través de preguntas definidas como preliminares, se establecen: el propósito de la actividad, el lugar, los medios utilizados, el talento humano y demás, que se conectarán con el objetivo que se espera; así, se determinará qué acciones tomar frente a esto.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 2.
          span Principales símbolos para usar en un diagrama de operaciones
        figure
          img(src="@/assets/curso/temas/tema1/55.svg", alt="alt")
          figcaption Nota. Tomado de Kanawaty (1996).

    .cajon-b-editado(data-aos="zoom-in")
      .cajon-b.color-acento-contenido.p-3
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-1.col-4: img(src='@/assets/curso/temas/tema1/56.svg', alt='')
          .col-lg-11
            p.mb-0 Después de las preguntas preliminares, continuarán las preguntas de fondo, que permiten identificar, a partir de la información obtenida, qué se debería hacer para mejorar la actividad, lo cual facilita la profundización en las respuestas con relación a los temas definidos anteriormente; al combinar los dos tipos de preguntas se obtiene la totalidad de interrogantes que se hacen necesarios para el estudio.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-xl-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Combinación de preguntas preliminares y de fondo

        .tabla-a.color-acento-contenido.mb-5
          table
            caption Nota. Adaptado de Kanawaty (1996).
            thead(style="background-color:#583CB6")          
              tr.text-center.text-white
                th(width="25%") Lugar
                th(width="25%") Sucesión
                th(width="25%") Persona
                th(width="25%") Medios
            tbody
              tr(style="background-color:#f7f7f7")
                td ¿Qué debería hacerse?<br>¿Dónde se hace?<br>¿Qué otra cosa podría hacerse?<br>¿Por qué se hace allí?<br>¿En qué otro lugar podría hacerse?<br>¿Dónde debería hacerse?
                td ¿Cuándo se hace?<br>¿Por qué se hace entonces?<br>¿Cuándo podría hacerse?<br>¿Cuándo debería hacerse?
                td ¿Quién lo hace?<br>¿Por qué lo hace esa persona?<br>¿Qué otra persona podría hacerlo?<br>¿Quién debería hacerlo?
                td ¿Cómo se hace?<br>¿Por qué se hace de ese modo?<br>¿De qué otro modo podría hacerse?<br>¿Cómo debería hacerse?
      .col-lg-4.d-none.d-xl-flex
        figure
          img(src="@/assets/curso/temas/tema1/57.svg", alt="alt")

    p(data-aos="fade-in").mb-5 Desde las etapas para el estudio de los métodos de trabajo, cabe mencionar las siguientes cuatro que se desarrollan a continuación: 


    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
      .row(titulo="Establecer el método más práctico").px-4
        .col-lg
          p.mb-0 Con la información obtenida a través del interrogatorio, observación y examen de los aspectos establecidos, se procede a proponer el método que más se ajusta a las condiciones encontradas, teniendo en cuenta la practicidad, economía, eficiencia y eficacia. Es importante que el nuevo método se distinga fácilmente del antiguo, para identificar qué elementos fueron los que cambiaron y conocer su incidencia en todo el proceso.
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/58.svg", alt="alt")

      .row(titulo="Evaluar el método actual").px-4
        .col-lg
          p.mb-0 Se determina si el cambio se puede implantar en el mismo momento o si debe haber una preparación previa tanto del talento humano, como de los espacios. Asimismo, al tomar una decisión, se tienen en cuenta los diversos métodos propuestos y los resultados probables de estos, con lo cual se debe realizar un análisis de costos y beneficios, tanto cuantitativos como cualitativos.
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/59.svg", alt="alt")

      .row(titulo="Herramientas de análisis para la propuesta de mejoramiento").px-4
        .col-lg
          p.mb-0 Se identifican diversas técnicas que permiten realizar todo el proceso de investigación. Estas serán los apoyos necesarios para llevar a cabo cada fase, con el fin de generar una propuesta de mejoramiento aterrizada según el contexto de la empresa.
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/60.svg", alt="alt")

      .row(titulo="Definir el nuevo método de trabajo").px-4
        .col-lg
          p Después de definir el nuevo método, debe ser socializado con todas las personas sobre las que tiene incidencia, de una manera clara y entendible; es así como se establece la introducción de este. En este punto, se hace necesario el uso de la hoja de instrucciones, que es un documento donde se consigna toda la información que el trabajador debe conocer, así como los cambios instaurados y la perfección del método, lo cual permitirá una adaptación al cambio mucho más llevadera.          
        .col-auto.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/61.svg", alt="alt")

    p(data-aos="fade-in").mb-5 Según Kanawaty (1996), la hoja de ruta también debe contener las herramientas, el equipo que será usado, el método que se empleará y la ubicación y disposición del lugar de trabajo. Un ejemplo de hoja de ruta es el que se comparte a continuación:

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Figura 3.
          span Hoja de Instrucciones

        figure
          img(src="@/assets/curso/temas/tema1/62.svg", alt="Imagen de formato de hoja de ruta u hoja de instrucciones, con sus respectivos campos de diligenciamiento.")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Principios de economía de movimientos

    .lightPurple_bg.mb-5
      .row.justify-content-center
        .col-lg-4.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/63.svg", alt="alt")
        .col-lg-8
          p(data-aos="fade-in") Compilando datos sobre el estudio de métodos y según el libro de introducción al estudio del trabajo de la OIT (Kanawaty, 1996), existen unas herramientas básicas, que son fuente del conocimiento, obtenido por años de experiencia de los cuerpos dedicados a la ingeniería del estudio del trabajo y que ayudan en la estructuración completa y precisa de un método; se les denominan principios de economía de movimientos y se agrupan en tres bloques que los clasifican para su estudio:
          .row.justify-content-center 
            .col-auto.m-2(data-aos="zoom-in")        
              .row.align-items-stretch
                .col-auto.g-0
                  figure
                    img(src="@/assets/curso/temas/tema1/64.svg", alt="alt").img85
                .col.g-0
                  .paleYellow.h-100.p-3
                    p.mb-0.y--center #[strong Utilización del cuerpo humano.]

            .col-auto.m-2(data-aos="zoom-in")         
              .row.align-items-stretch
                .col-auto.g-0
                  figure
                    img(src="@/assets/curso/temas/tema1/65.svg", alt="alt").img85
                .col.g-0
                  .paleYellow.h-100.p-3
                    p.mb-0.y--center #[strong Disposición del lugar de trabajo.]

            .col-auto.m-2(data-aos="zoom-in")        
              .row.align-items-stretch
                .col-auto.g-0
                  figure
                    img(src="@/assets/curso/temas/tema1/66.svg", alt="alt").img85
                .col.g-0
                  .paleYellow.h-100.p-3
                    p.mb-0.y--center #[strong Diseño de herramientas y equipo.]

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris cstmYellow" data-aos="zoom-in")
      .row(titulo="Principios de economía de movimientos: Utilización del cuerpo humano").px-4
        .col-lg-3.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/68.png", alt="alt")
        .col-lg
          ul.fa-ul
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Ambas manos deben comenzar y terminar sus movimientos a la vez, no deben permanecer inactivas a la vez, excepto durante los periodos de descanso.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Los movimientos de los brazos deben hacerse de forma simultánea y en direcciones opuestas y simétricas.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Los movimientos de las manos deben restringirse a la clasificación más elemental. 
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Siempre que sea factible, utilizar el impulso como energía, y evitar un esfuerzo muscular adicional. 
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Son de mejor uso los movimientos suaves y continuos de las manos.  

      .row(titulo="Principios de economía de movimientos: Disposición del lugar de trabajo").px-4
        .col-lg-3.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/67.png", alt="alt")
        .col-lg
          ul.fa-ul
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Establecer un espacio específico y único para todos los elementos empleados en el lugar de trabajo.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Tener siempre todos los elementos disponibles cerca al sitio de trabajo.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Situar los materiales y las herramientas en el orden de uso.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Establecer condiciones de visibilidad apropiadas. 
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Condicionar la iluminación como requisito para una percepción visual satisfactoria.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | El sitio de trabajo debe contener condiciones ergonómicas adecuadas.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Las sillas deben diseñarse ergonómicamente para que se conserven posturas adecuadas.


      .row(titulo="Principios de economía de movimientos: Diseño de herramientas y equipo").px-4
        .col-lg-3.d-none.d-lg-flex
          figure
            img(src="@/assets/curso/temas/tema1/69.png", alt="alt")
        .col-lg
          ul.fa-ul
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Evitar que las manos realicen movimientos que puedan ser ejecutados por un dispositivo electrónico o mecánico.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Combinar el diseño de dos o más herramientas en una sola,  siempre y cuando sea posible. 
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Establecer sitios fijos para materiales y herramientas en el lugar de trabajo.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cuando cada dedo realiza un movimiento específico, debe distribuirse la carga de acuerdo con las capacidades inherentes a los dedos.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Las palancas, manivelas y volantes deben situarse de forma que el operario pueda manejarlos con un cambio mínimo. 

    p(data-aos="fade-in").mb-5 Estas reglas, si se emplean en el diseño óptimo de métodos de trabajo, facilitarán confort para la ejecución de las tareas del día a día de los colaboradores, elevando la productividad y haciendo más eficientes los procesos.

    .titulo(style='background-color: #F7E9E1' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Diagrama bimanual para el registro de actividades

    .margin-n.gradient_bg_01.p-5.mb-5   
      .row.justify-content-center.align-items-center.mb-5.mb-lg-0
        .col-lg-4.col-8.mb-4.mb-lg-0
          figure(data-aos="fade-in")
            img(src="@/assets/curso/temas/tema1/70.png", alt="alt")     
        .col-lg-8
          p.mb-0(data-aos="zoom-in") El registro de la información documentada por operación, es trascendental en la descripción y observación de los micromovimientos de las acciones imperceptibles; la relevancia en la utilización de este diagrama es la separación que se da cuando se muestran todos los movimientos realizados por la mano izquierda y por la mano derecha, mostrando la relación entre ellas. Los objetivos esenciales del diagrama bimanual son, principalmente, estandarizar movimientos repetitivos, tecnificar los métodos de trabajo y establecer el ciclo de ejecución de la operación, completo. El siguiente es un ejemplo de formato de diagrama bimanual:

      .row.justify-content-center.mb-3(data-aos="zoom-in")
        .col-lg-8
          .titulo-sexto.color-acento-contenido
            h5 Figura 4.
            span Diagrama Bimanual
          figure
            img(src="@/assets/curso/temas/tema1/71.svg", alt="Imagen de un formato de diagrama bimanual con sus respectivos campos de diligenciamiento.")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Implementar nuevos métodos de trabajo

    p(data-aos="fade-in") La implantación del nuevo método supone que, esta, es una de las fases más complejas, puesto que es el momento para llevar a la práctica los cambios pensados después de un minucioso estudio; además, no se puede dejar por fuera a ningún colaborador que haga parte de la organización. Asimismo, se debe propender por el entendimiento de todo el personal acerca de las nuevas disposiciones, según el método definido.

    p(data-aos="fade-in") Para ello, es importante generar una conexión directa con el Área de Comunicaciones, para determinar los medios y el lenguaje más adecuado con que se llevarán a cabo los procesos de comunicación interna y externa, teniendo en cuenta a cada colaborador o proveedor sobre quienes, estas nuevas disposiciones, puedan tener efecto directo.

    p(data-aos="fade-in").mb-5 #[strong Según Kanawaty (1996), la implantación del nuevo método de trabajo se lleva a cabo en cinco momentos, así:]

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.d-none.d-lg-flex(data-aos="fade-in")
        figure
          img(src="@/assets/curso/temas/tema1/72.svg", alt="alt")
      .col-lg-8(data-aos="zoom-in")
        LineaTiempoD.color-primario
          .row(numero="1" titulo="Aprobación de la dirección")
            .col-lg
              p.mb-0 Para que todo proyecto de mejoramiento funcione, debe estar acompañado de la gerencia o sus representantes.         
            .col-auto.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/temas/tema1/73.svg', alt='').img85

          .row(numero="2" titulo="Aceptar las nuevas disposiciones")
            .col-lg
              p.mb-0 Con toda la información presentada, se debe lograr que el jefe o coordinador inmediato del taller acepte las nuevas disposiciones: Es importante que la persona encargada de liderar el nuevo método realice el acompañamiento requerido para un éxito total.         
            .col-auto.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/temas/tema1/74.svg', alt='').img85

          .row(numero="3" titulo="Aceptar los cambios")
            .col-lg
              p.mb-0 Lograr que los empleados y operarios, sobre los que repercuten las decisiones, también acepten los cambios. Todas las socializaciones y capacitaciones enfocadas en lograr que el personal se informe para que el nuevo método salga adelante, son fundamentales para lograr obtener los beneficios con ese cambio.        
            .col-auto.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/temas/tema1/75.svg', alt='').img85

          .row(numero="4" titulo="Conocer los cambios")
            .col-lg
              p.mb-0 Dar a conocer el nuevo método de trabajo a todo el personal: la información deberá ser veraz, completa, puntual y ser entregada asertivamente a las personas implicadas en el proceso por comunicar.       
            .col-auto.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/temas/tema1/76.svg', alt='').img85

          .row(numero="5" titulo="Monitorear lo nuevo")
            .col-lg
              p.mb-0 Monitorear el nuevo método de trabajo favorecerá estar seguros de que se lleva a cabo del modo previsto: es clave un acompañamiento a la implementación del nuevo método.       
            .col-auto.d-none.d-lg-flex
              figure
                img(src='@/assets/curso/temas/tema1/77.svg', alt='').img85

    p(data-aos="fade-in").mb-5 Dentro de la implantación del nuevo método de trabajo, se debe llevar a cabo una fase previa de introducción, donde se explique el porqué de los cambios definidos, encaminados a mejorar los aspectos analizados anteriormente.

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10
        .purpleContainer
          p Esto es importante, puesto que puede existir una mayor resistencia al cambio por parte de los empleados al sentir que son tomados por sorpresa si no se evidencia una etapa introductoria. Igualmente, se debe generar un espacio de retroalimentación, para conocer las perspectivas de los operarios y escuchar las opiniones y sugerencias que puedan generarse, lo cual dará mejores resultados en el ambiente laboral al sentir que todos los puntos de vista están incluidos.
          .Icon01
            figure
              img(src="@/assets/curso/temas/tema3/img_40.svg", alt="alt")
          .Icon02
            figure
              img(src="@/assets/curso/temas/tema3/img_41.svg", alt="alt")

    
    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/5bnrh8n-6-0" title="Nombre del video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Control del nuevo método de trabajo

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Medición del trabajo  

    .row.justify-content-center.mb-5
      .col-lg-8
        p(data-aos="fade-in") En la realización de un estudio del trabajo, se deben utilizar técnicas documentadas del método actual para establecer el tiempo que invierte un colaborador idóneo en su actividad, en cumplir con una actividad definida, llevándola a cabo con soporte en la norma de ejecución prediseñada que se denomina Método.

        p(data-aos="fade-in") La intención del estudio de tiempos no es tan evidente si no se expresa, con especial detenimiento, cuál puede ser el objeto de realizarlo; interpretaciones completamente erróneas o falseadas del método de trabajo, con el consiguiente descontento del colaborador, desencadenarán en obtener errores en la trazabilidad de la eficiencia del proceso.

        .paleYellow.p-3(data-aos="zoom-in")
          .row.justify-content-center
            .col-auto
              figure
                img(src="@/assets/curso/temas/tema1/80.svg", alt="alt").img65
            .col-lg 
              p.mb-0 El analista de ingeniería debe comunicarse con el colaborador, en compañía del líder de proceso y, en lo posible, del líder del área de trabajo, si lo hay, para exponerle cuidadosamente el objeto del estudio y las acciones pertinentes, como estrategias para mejorar la productividad.
      .col-lg-4.d-none.d-lg-flex(data-aos="zoom-in")
        figure
          img(src="@/assets/curso/temas/tema1/79.png", alt="alt")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Conceptos generales de la medición del trabajo

    p(data-aos="fade-in") Estratégicamente, en la estructura jerárquica de la empresa, la posición del analista de ingeniería en los procesos es crucial para el logro de objetivos claros.

    p(data-aos="fade-in").mb-5 #[strong Algunos conceptos pertinentes para su función son:]

    .margin-n(style='background-color: #FFF9ED').px-5.pt-4.mb-5
      .row.justify-conten-center
        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/81.svg", alt="alt").img65
            p.pt-4 No debe estar ubicado en frente de la persona, tampoco por la espalda, no muy cerca, en una posición estratégica diagonal y con un campo de visión limpio del lugar de trabajo, un poco hacia atrás y a unos dos metros de distancia.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/82.svg", alt="alt").img65
            p.pt-4 La tabla de apoyo con las plantillas de estudio de tiempos, o equipos digitales, y el cronómetro, deben estar en la línea de visión.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/83.svg", alt="alt").img65
            p.pt-4 Los tableros de apoyo están diseñados de forma ergonómica.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/84.svg", alt="alt").img65
            p.pt-4 Las personas colaboradoras que sean muy tímidos y/o nerviosas, especialmente quienes cuentan con poco tiempo de experiencia, tienden a trabajar más rápido de lo acostumbrado, con los costos ocultos fatídicos para la trazabilidad del proceso.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/85.svg", alt="alt").img65
            p.pt-4 Personas colaboradoras con alta experiencia, suelen modificar su ritmo de trabajo, propician cambios en el método, vuelven lenta la operación o ejecutan movimientos extras para obtener tiempos con márgenes de error que los beneficia en los incentivos extras.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/86.svg", alt="alt").img65
            p.pt-4 En las operaciones clásicas y de constante repetición, se nota que los colaboradores trabajan a un ritmo que no es el propio, porque no pueden extrapolar tan detalladamente la duración de los ciclos de trabajo como cuando inician la tarea. 

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/87.svg", alt="alt").img65
            p.pt-4 Realizar el análisis de tiempos por observación directa garantizará el resultado positivo del trabajo realizado y la confianza en la información obtenida del ciclo, determinando con claridad cuándo empieza el primer elemento de la operación o actividad y que continúa hasta el mismo punto de origen en una repetición de la operación o actividad.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/88.svg", alt="alt").img65
            p.pt-4 El juicio de obtener la valoración del ritmo de los colaboradores, como suplemento asignado a las diferentes operaciones, sigue formando parte de una decisión personal y, en gran parte, cuestión de criterio del analista y de las empresas; esto es necesario para poder cualificar a los colaboradores y, de esta forma, encontrar los tiempos óptimos estándar de las tareas.

        .col-lg-4.mb-4
          .cstmCard_01(data-aos="zoom-in")
            figure
              img(src="@/assets/curso/temas/tema1/89.svg", alt="alt").img65
            p.pt-4 Finalmente, establecer, a partir del estudio del trabajo, el tiempo que invierte realmente el colaborador observado, cuál es el mejor método a establecer, determinar los modelos a seguir por el grueso de los colaboradores calificados. Estos, son todos medios pertinentes para cumplir con los criterios del cliente y soportar económicamente la empresa. 

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Usos prácticos de la medición del trabajo

    .row.mb-5
      .col-lg
        p(data-aos="fade-in") Establecer estrategias corporativas eficientes y eficaces, que puedan optimizar las infraestructuras procedimentales y de servicios, comenzando por tareas y operaciones donde se evidencie la necesidad de cambio, corrobora que el estudio de tiempos puede repercutir en el fortalecimiento de los procesos, en la disminución de costos operativos, en un aumento de los ingresos de los colaboradores y en el cumplimiento en fechas de entrega de las órdenes de pedido. Al interior de las estructuras logísticas, se pueden enlistar algunos usos prácticos de la medición:
      .col-auto.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/tema1/90.svg", alt="alt")

    .margin-n(style='background-color: #F1ECFF').px-5.pt-4.mb-5
      .row.justify-conten-center.align-items-center
        .col-lg-8(data-aos="fade-in")
          ul.fa-ul
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Comparativos entre las eficiencias y eficacias de varios métodos propuestos, incluyendo el actual.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Balancear líneas de trabajo con precisión y máximo aprovechamiento de la capacidad instalada operativa.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Establecer con precisión el total de máquinas y de colaboradores requeridos.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Planificar con mayor acierto la producción y aprovechar así la capacidad de los recursos de la empresa.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cumplir a cabalidad con los presupuestos diseñados de oferta y demanda, sin salirse de los parámetros en precios de venta y plazos de entrega.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Estructurar con precisión sistemas de incentivos en beneficio de los colaboradores y su calidad de vida.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Fiscalizar los costos operativos y de mano de obra.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Precisar el tiempo y los costos cuando se presentan tareas novedosas.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Precisar el tiempo y los costos cuando existe cambio de materiales e insumos.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cumplir con requerimientos cuando hay quejas de los colaboradores por métodos mal diseñados.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cumplir con requerimientos cuando se presentan cuellos de botella en el proceso.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cumplir con requerimientos cuando hay bajos rendimientos o excesivos tiempos muertos.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Establecer estudios en proyectos de cambio, en aras de comparar varios sistemas de producción.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Cumplir con requerimientos cuando hay costos aparentemente excesivos de alguna actividad al interior del proceso.
            li
              i.fa-li.fas.fa-chevron-right
              | Un estructurado análisis de medición del trabajo brinda la información básica necesaria para llegar a organizar y controlar las actividades de la empresa y fortalece el nivel de confianza en la toma de decisiones.

        .col-lg-4(data-aos="zoom-in")
          figure
            img(src="@/assets/curso/temas/tema1/91.svg", alt="alt")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Técnicas de medición

    p.mb-5(data-aos="fade-in") En el estudio de tiempos, se aplican diferentes técnicas de medición del trabajo utilizadas para documentar los estándares y valoración de ritmos de trabajo; se tiene presente la técnica del cronometraje y técnicas de mediciones, las cuales se explican a continuación:

    .margin-n(style='background-color: #FFF8E9').px-5.pt-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-8
          p Técnica del cronometraje es la estrategia estructurada de mayor relevancia, la cual cuenta, en la actualidad, con muchos adeptos para su práctica; la misma, es precisa y eficiente.

          p #[strong Para cumplir con sus protocolos, se requiere:]
          ul.fa-ul
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Utilizar una matriz digital o tablero manual de observaciones.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Presentar el diseño control digital o planillas manuales.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Utilizar herramienta de cálculo o software, o una calculadora manual.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Emplear un reloj digital exacto, con segundero.
            li.mb-3
              i.fa-li.fas.fa-chevron-right
              | Emplear elementos de medición manual, como cinta métrica, tabletas regladas, entre otros.
        .col-lg-4
          figure
            img(src="@/assets/curso/temas/tema1/92.png", alt="alt")

    p(data-aos="fade-in").mb-5 Para cumplir con la ejecución de esta técnica, básicamente se cumple con los protocolos que a continuación se describen:

    .row.justify-content-center.align-items-center
      .col-lg-7
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-in")
          .row(titulo="Preparación").px-4
            .col
              p #[strong Se realizan tareas como:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Seleccionar la operación, previo análisis diagnóstico, por parte de los líderes del proceso.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Seleccionar el colaborador calificado que cumple con las condiciones técnicas para ejecutar la tarea.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Valorar la actitud frente a la ejecución de la tarea asignada que el colaborador calificado asume.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | El analista de ingeniería realiza análisis de comprobación de los datos obtenidos del método a evaluar.

          .row(titulo="Ejecución").px-4
            .col
              p #[strong Poner en marcha el estudio documental, lo cual supone:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Compilar y obtener el registro de la información.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Realizar, con precisión, la descomposición de las tareas en elementos.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Realizar la operación de cronometrar.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Registrar, en cuadros de control digital o manual, los tiempos observados.

          .row(titulo="Cronómetro").px-4
            .col
              p #[strong Es un estudio de tiempos que se realiza cuando:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se lleva a cabo una nueva operación o tarea.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se registran reclamos y se presentan quejas de los trabajadores.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se hallan demoras injustificadas, causadas por la ejecución de una operación.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se estandariza un proceso para fijar los tiempos y crear un sistema de incentivos.    
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se tiene un sistema de producción bajo en rendimiento o exagerados tiempos muertos.

          .row(titulo="Cronómetro").px-4
            .col
              p #[strong División del trabajo en elementos:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Define un elemento, como la división de la actividad, que se pueda medir con equipo cronométrico y tiene puntos terminales fácilmente identificables.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Facilita la labor de toma de tiempos por parte del analista.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Identifica tiempos productivos e improductivos.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Identifica a cuáles movimientos se les dedicará más tiempo y por qué.  
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Observa la operación para separar los movimientos de aparición constante, de los movimientos de aparición variable.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Identifica movimientos puramente manuales, de los ejecutados por máquinas y equipos.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Indica, claramente, el inicio y el fin de cada elemento.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | En el inicio o fin de un elemento, no deberán aparecer los movimientos expresados de ambas manos cuando estas están sosteniendo.

      .col-lg-5.d-none.d-lg-flex(data-aos="zoom-in")
        figure
            img(src="@/assets/curso/temas/tema1/93.svg", alt="alt")

    p(data-aos="fade-in").mb-5 También se relacionan las técnicas y normas que se emplean, como se describe a continuación:       

    .row.justify-content-center
      SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/94.png' alt='')
          div(style='background-color: #EF8B53').p-5.h-100.brd-rad
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Técnica de la estimación estructurada
            p Denominada, también, muestreo de actividades. Se configura para elegir por separación estadística y al azar, puestos de trabajo y registrar metódicamente el tiempo que dura la realización de una operación.  

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/95.png' alt='')
          div(style='background-color: #F0BD51').p-5.h-100.brd-rad
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Estructura de la técnica de datos históricos
            p Representa los compilados durante periodos estimados de tiempo.  

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/96.png' alt='')
          div(style='background-color: #EF8B53').p-5.h-100.brd-rad
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Técnica del muestreo del trabajo
            p Es el empleo de datos estadísticos y documentados. 
            
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/97.png' alt='')
          div(style='background-color: #F0BD51').p-5.h-100.brd-rad
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Técnica estructurada de datos tipo
            p Es la técnica que se utiliza para investigar las proporciones del tiempo total, dedicadas a diversas actividades que componen un trabajo; consiste en muestrear ocurrencias de diversos tipos de eventos, que pueden ser demoras o tareas.

        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema1/98.png' alt='')
          div(style='background-color: #EF8B53').p-5.h-100.brd-rad
            .titutlo.rounded-pill.d-inline-block.p-3.bg-white.mt-5.d-flex.justify-content-center.mb-3
              h4.mb-0.text-center Normas estructuradas de tiempos predeterminados
            p Es la técnica de registro de cualquier operación manual o método, por los movimientos básicos necesarios para ejecutarlo, asignando a cada movimiento un tiempo tipo predeterminado, según las condiciones en que se efectúa.

    p(data-aos="fade-in").mb-4 Finalmente, estos elementos antes mencionados se consideran a partir de los tiempos estándar por cronometraje y por predeterminados, desde la valoración, cronometraje y método, así como se relaciona a continuación: 

    .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in")
      table
        caption Nota. Tomado de Kanawaty (1996)
        thead(style="background-color:#583CB6")          
          tr.text-center.text-white
            th(width="20%") 
            th(width="40%") Tiempos estándar por cronometro
            th(width="40%") Tiempos estándar por predeterminados
        tbody
          tr
            td.text-center #[strong Valoración]
            td Los cronometrajes dependen de la calificación de la valoración de la velocidad del operario.  Errores al calificar la velocidad del operario o subjetividad en la calificación producen un estándar errado.
            td Los tiempos predeterminados vienen para una actividad del 100 %, en la escala 100 a 133 %, por lo tanto, no requieren valorarse.
          tr
            td.text-center #[strong Cronometraje]
            td Los cronometrajes dependen también de la precisión de las mediciones. Errores al cronometrar o cantidad de observaciones estadísticamente insuficiente para obtener un estándar.<br>Medir ciclos en condiciones diferentes a la producción normal también produce datos errados.
            td No se requiere cronometraje.  Solamente se cronometra para realizar comprobaciones.
          tr
            td.text-center #[strong Método]
            td Normalmente, al medir el tiempo de ciclo de una operación, no se estandariza el método, por esta razón, no se hace una verdadera ingeniería de la operación.  Muchas veces se sacan promedios de tiempos de varias personas que hacen la misma operación sin tener en cuenta que se realizan dos métodos diferentes y por lo tanto el promedio es inválido.
            td Se analiza y define al detalle el mejor método para la operación, y el resultado de estandarizar el método a través de los tiempos predeterminados es el tiempo de la operación.

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Cálculo del tiempo estándar.

    p(data-aos="fade-in") Es el tiempo requerido para que un operario calificado, con comportamiento eficiente, plenamente dotado, adiestrado y trabajando a ritmo normal, lleve a cabo una operación.
    p.mb-5 Son tres los elementos esenciales en el cálculo del estándar; para ello, se tienen presentes los tiempos observados, como el número de ciclos que se cronometran y se registran en una matriz de cálculo de tiempos, estos son: 

    .row.justify-content-center(data-aos="zoom-in")
      .col-lg-9
        TabsA.color-acento-contenido
          .tarjeta.color-acento-contenido--borde.p-4(titulo="Valoración")
            h4 Valoración
            p Justipreciar en relación con la idea que se tiene de lo que es el ritmo tipo 2.

            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Para poder valorar correctamente, hacen falta tres acciones: práctica, práctica, práctica.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Se evalúan condiciones como habilidad, esfuerzo, condiciones y consistencia.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Ritmo normal del colaborador promedio.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Tecnificar la valoración relacionando a un colaborador calificado. 
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Cálculo tiempo base o valorado.  

          .tarjeta.color-acento-contenido--borde.p-4(titulo="Suplementos")
            h4 Suplementos
            p Para reponerse de los efectos fisiológicos y psicológicos, dadas ciertas actividades.

            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Análisis de demoras.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Estudio de fatiga.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Cálculo de suplementos y sus tolerancias.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Descanso.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Necesidades personales:] 5 % y 7 %. 
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Básicas:] 4 %. 
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Variables:] aplican a las condiciones del ambiente laboral. 
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Contingencia:] para prever demoras que aparecen con frecuencia, valor es del 2 %.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Especiales:] actividades que no forman parte del trabajo.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | #[strong Misceláneos:] daño de la máquina 7.5 %.

          .tarjeta.color-acento-contenido--borde.p-4(titulo="Tiempo estándar")
            h4 Tiempo estándar
            p Para reponerse de los efectos fisiológicos y psicológicos, dadas ciertas actividades.

            ul.fa-ul
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Error de tiempo estándar.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Cálculo de frecuencia de los elementos.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Determinación de tiempos de interferencia.
              li.mb-2
                i.fa-li.fas.fa-check-circle.purpleTxt
                | Cálculo de tiempo estándar.
      .col-lg-3.d-none.d-lg-flex
        figure
          img(src="@/assets/curso/temas/tema1/99.svg", alt="alt")

    
    



</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    modal8: false,
    modal9: false,
    modal10: false,
    modal11: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.tarjeta-avatar-b .tarjeta
  width: 100%
  margin-left: -15%
  padding-left: 10%
</style>
