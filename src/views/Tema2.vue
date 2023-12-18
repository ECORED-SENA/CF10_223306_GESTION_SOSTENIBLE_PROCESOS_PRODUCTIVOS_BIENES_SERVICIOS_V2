<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Distribución de planta

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8(data-aos="flip-right")
        figure
          img(src="@/assets/curso/temas/tema2/img_01.png", alt="alt")
      .col-lg-8(data-aos="fade-in")
        p Aprovechar industrialmente el espacio físico hace referencia a la disposición de la infraestructura física y razonada de los componentes, las estructuras digitales, maquinaria y equipo, respondiendo a que el recorrido óptimo sea al más bajo costo. Esta distribución, ya trabajada o en proyecto, contiene tanto las áreas indispensables para la corriente del material, stock de máquinas, equipos de trabajo, colaboradores, como el resto de las actividades o servicios.
        p.mb-0 Mostrando en gráficos fáciles de conceptualizar, la disposición del espacio físico, de las áreas de producción y servicios, apremia tratar dos puntos base: el primero, de carácter financiero, con el que se busca incrementar la productividad, eficiencia y eficacia y disminuir a la mínima expresión los costos de manufactura. Un segundo ítem, de carácter humano, con el que se busca darle seguridad y salud al colaborador y plena confianza en las actividades que ejecuta.
      
    p(data-aos="fade-in") Más aún, el terreno que se gana con un proyecto estructurado de distribución surge de una organización eficiente de las áreas, que no solo cubra una disposición de más bajo costo de uso de las áreas de trabajo e infraestructura mecánica, sino también una organización amigable y sostenible con el medio ambiente y de alto confort para los empleados. 

    .margin-n(style='background-color: #FFF9ED').p-5.mb-5(data-aos="zoom-in")
      .row.justify-content-center.align-items-center
        .col-lg-8
          p Consecuentemente, se obtienen ventajas como:
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-check
              | Bajar a niveles mínimos los peligros de padecimientos profesionales y de incidentes laborales, prescindir de espacios insalubres, desplazamientos de alto riesgo y materias primas e insumos mal almacenados en espacios de circulación.
            li.mb-2
              i.fa-li.fas.fa-check
              | Se aumenta la autoestima del colaborador.
            li.mb-2
              i.fa-li.fas.fa-check
              | Se incrementa la productividad, mejorando el flujo de trabajo.
            li.mb-2
              i.fa-li.fas.fa-check
              | Se eliminan cuellos de botella.
            li.mb-2
              i.fa-li.fas.fa-check
              | Se logra mayor eficiencia en el uso del espacio.
            li.mb-2
              i.fa-li.fas.fa-check
              | Disminución en el transporte de materiales e insumos.
            li.mb-2
              i.fa-li.fas.fa-check
              | Máximo aprovechamiento de infraestructura mecánica y digital.
            li.mb-2
              i.fa-li.fas.fa-check
              | Mejora la trazabilidad y el control del proceso.
            li.mb-2
              i.fa-li.fas.fa-check
              | Mejora la calidad y el reproceso de productos no conformes.
            li.mb-2
              i.fa-li.fas.fa-check
              | Ostensible disminución de costos ocultos en el proceso.
            li
              i.fa-li.fas.fa-check
              | Óptimas condiciones de salud por la mejora en las condiciones sanitarias.

        .col-lg-4.col-8
          figure
            img(src="@/assets/curso/temas/tema2/img_02.svg", alt="alt")

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Principios básicos para la distribución de planta

    p.mb-5 En la distribución de la planta, se aplican algunos principios que son básicos para su adecuado funcionamiento y producción, estos son:

    SlyderF.slyder-100.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in")
      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_03.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del Principio de la integración de conjunto
        p Cuando en la disposición del espacio se complementan los recursos esenciales del proceso, se hace integración del factor humano, materias primas, infraestructura mecánica y los demás factores complementarios.

      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_04.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del Principio de la mínima distancia recorrida
        p Distancias de recorrido cortas entre áreas o puestos de trabajo.

      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_05.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del Principio de la circulación o recorrido
        p Complementaria a la anterior, emplear el apoyo en la secuencia operacional.

      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_06.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del Principio del espacio cúbico
        p Emplear las dimensiones verticales y horizontales, ya que se obtienen ahorros de espacio; se hace uso de las tres dimensiones.

      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_07.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del principio de satisfacción y seguridad
        p Brindar a los colaboradores seguridad, salud y familiaridad para desempeñar sus labores; puestos de trabajo amigables con el medio; y un espacio sostenible.

      .purpleCard
        img(src='@/assets/curso/temas/tema2/img_08.png' alt='').mb-3
        .roundendTitle
          h3 Aplicación del Principio de flexibilidad
        p Se puedan manufacturar bienes y servicios de diferente gama.

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Tipos de distribución de planta

    p(data-aos="fade-in").mb-5 Existen cuatro tipos principales de distribución en planta: por posición fija, por proceso o función, por producto o en línea y por células o híbridas.

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Estructura física por posición fija

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p Se considera como una división del espacio físico para ubicar materias primas, insumos y elementos en áreas fijas. Infraestructuras mecánicas, personas y equipos realizan recorridos a través de este espacio; se utiliza esta forma de distribución cuando los materiales son de alto peso, cuando el bien es voluptuoso, cuando se construyen tractocamiones, barcos, edificios, aviones, entre otros.

        .paleYellow.p-4
          p #[strong Aquí, algunas ventajas:]
          ul.fa-ul
            li.mb-2
              i.fa-li.fas.fa-check-circle.purpleTxt
              | Disminuye en cierto modo la manipulación por ser piezas grandes. 
            li.mb-2
              i.fa-li.fas.fa-check-circle.purpleTxt
              | Trabajos de alta tecnología, sostenibles y de impecable calidad. 
            li.mb-2
              i.fa-li.fas.fa-check-circle.purpleTxt
              | Procesos flexibles.
            li.mb-2
              i.fa-li.fas.fa-check-circle.purpleTxt
              | Infraestructura de ingeniería fija y estándar. 

      .col-lg-4.col-8
        figure
          img(src="@/assets/curso/temas/tema2/img_09.png", alt="alt")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Estructura física por proceso o función

    p(data-aos="fade-in") En una área o departamento, se agrupan cada uno de los procesos. Infraestructuras de disposición para alta gama de productos. Con tecnología mecánica estandarizada y producción logística de bienes y servicios, para bajos volúmenes de unidades, se facilita la labor para unidades intermitentes; cuando la demanda cae, estas infraestructuras quedan cesantes.   

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-8.mb-4.mb-xl-0(data-aos="zoom-in")
        .orangeBorderCard
          .row.justify-content-center.align-items-center
            .col-lg
              p #[strong Algunas ventajas:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | En la manufactura, interviene la misma infraestructura mecánica.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Son altamente flexibles.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se pueden adaptar a la manufactura de cualquier bien o servicio.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | El equipo operativo es altamente calificado y polivalente.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Es fácil mantener el inventario de maquinaria para reemplazar por averías.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/tema2/img_10.png", alt="alt")
      .col-xl-6.col-lg-8.mb-4.mb-xl-0(data-aos="zoom-in")
        .orangeBorderCard
          .row.justify-content-center.align-items-center
            .col-lg
              p #[strong Algunas inconvenientes:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se genera mayor problema para establecer las rutas.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se genera mucha manipulación.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Optimizar el desplazamiento es complejo, se hace con expertos.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Se debe garantizar más disposición de espacio físico.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | La trazabilidad del proceso es más compleja.
 
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/tema2/img_11.png", alt="alt")


    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Estructura física por producto o en línea

    p(data-aos="fade-in").mb-5 Se diseñan infraestructuras físicas denominadas cadenas de producción, altamente empleadas en sistemas fabriles de manufactura; máquinas, equipos, personas, materias primas, se instalan en un mismo departamento y se organizan de acuerdo con el diseño del bien o servicio. Mueven grandes volúmenes de producto.

    .row.justify-content-center.mb-5
      .col-xl-6.col-lg-8.mb-4.mb-xl-0(data-aos="zoom-in")
        .purpleBorderCard
          .row.justify-content-center.align-items-center
            .col-lg
              p #[strong Algunas ventajas:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Rutas fijas y en línea directa, mínimas demoras en la producción.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Casi a cero disminuye la manipulación de puestos de trabajo secuenciales.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Mejora continua por ser procesos amigables y limpios por el uso de células híbridas.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Puntos de inspección mínimos por el uso de tecnología.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Mano de obra calificada y procesos altamente tecnológicos.
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/tema2/img_12.png", alt="alt")
      .col-xl-6.col-lg-8.mb-4.mb-xl-0(data-aos="zoom-in")
        .purpleBorderCard
          .row.justify-content-center.align-items-center
            .col-lg
              p #[strong Algunas inconvenientes:]
              ul.fa-ul
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Altos costos de inversión en infraestructuras tecnológicas.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Disminuye la flexibilidad.
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Disminuye la pericia en los colaboradores.                
                li.mb-2
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | Peligro que se pare toda la línea de producción si una máquina sufre una avería.
                li
                  i.fa-li.fas.fa-check-circle.purpleTxt
                  | La velocidad de producción la pone la tecnología.
 
            .col-auto.d-none.d-lg-flex
              figure
                img(src="@/assets/curso/temas/tema2/img_13.png", alt="alt")

    .titulo(style='background-color: #F0BD51' data-aos="fade-right").d-inline-block.p-3.mb-4
      h4.mb-0 Estructuras físicas por procesos híbridos

    p(data-aos="fade-in").mb-5 El uso, en las actuales circunstancias, de tecnologías emergentes, amigables y limpias, se estructura para manufacturar diseños híbridos con especial particularidad; se enruta a buscar beneficios en simultaneidad con las ventajas originadas en las estructuras anteriores, por producto, por proceso, especialmente en la eficacia de las iniciales y en la flexibilidad de las últimas, aprobando que un esquema de gran volumen y uno de mínimo volumen simpaticen en el mismo establecimiento.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5(data-aos="zoom-in")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/img_14.svg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Dos son las estructuras que se han diseñado para crear prototipos híbridos: las células de un colaborador, donde este personaje opera varias máquinas y múltiples materiales; y las células de tecnología de grupo, orientando una filosofía como células de agrupación de máquinas y colaboradores, que procesan una sucesión de operaciones sobre múltiples unidades de familias de productos.

              





</template>

<script>
export default {
  name: 'Tema2',
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

<style lang="sass"></style>
