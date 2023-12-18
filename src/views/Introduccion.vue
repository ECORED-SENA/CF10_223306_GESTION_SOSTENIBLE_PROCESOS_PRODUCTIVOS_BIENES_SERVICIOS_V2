<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción


    p Tenga una cordial bienvenida al estudio de este componente formativo denominado Estudio del trabajo y su aplicación en los sistemas de producción. Para avanzar en el contenido de este espacio formativo y los elementos a partir de la estandarización de los procesos productivos según los métodos industriales, observe la información que presenta el siguiente video a manera de introducción:

    figure(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/obdiCn6WJuo" title="Nombre del video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video. Estudio del trabajo y su aplicación en los sistemas de producción 
      



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
