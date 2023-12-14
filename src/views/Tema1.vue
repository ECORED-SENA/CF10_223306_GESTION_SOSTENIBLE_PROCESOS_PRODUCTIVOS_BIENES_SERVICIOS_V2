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

      .col-lg-4.col-8(data-aos="fade-left"): img(src='@/assets/curso/temas/tema1/img3.png', alt='')


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

    p #[strong Las siguientes son algunas acciones posibles y efectivas, frente a los métodos de trabajo:]

    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A?si=dzo3bl68Yg1sQ-66" title="Nombre del video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Nombre del video


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

    p Dado que el objeto de estudio puede ser muy amplio, dentro del escenario productivo, se hace necesario definir ciertos aspectos para centrar la atención en elementos concretos que permitan llevar a cabo el estudio en un tiempo real y concreto. Para ello, se deben tener en cuenta las siguientes consideraciones:

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
