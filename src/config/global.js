export default {
  global: {
    componenteFormativo:
      'Estudio del trabajo y su aplicación en los sistemas de producción.',
    descripcionCurso:
      'Este componente formativo aborda aspectos generales y claves sobre los procesos de manufactura y servicios, estrategias de uso del espacio físico, costos y cálculo de estándares óptimos de tiempo; todo ello para responder satisfactoriamente a la entrega del producto, según expectativas del cliente. Con su estudio, el aprendiz estará en capacidad de conceptualizar y, sobre todo, aportar a la actualización de los sistemas de producción con tecnología emergente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal2.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estudio del trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estudio de métodos de trabajo',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Medición del trabajo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Distribución de planta',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Principios básicos para la distribución de planta',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipos de distribución de planta',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de producción de bienes y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación de los sistemas de producción',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Secuencias operacionales',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo:
              'Sistemas de producción emergentes <em>Lean Manufacturing</em>',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF01_223306_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Procesos administrativos',
      referencia:
        '<em>Lifeder Education. </em> (2022) ¿Qué es el Proceso Administrativo y cuáles son sus etapas?. ',
      tipo: 'Video      ',
      link: 'https://www.youtube.com/watch?v=QqcjI-zZyb8',
    },
    {
      tema: 'Responsabilidad Social Empresarial',
      referencia:
        '<em>Lifeder Education.</em> (2021) ¿Qué es la Responsabilidad Social?. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L7SDdGAImsA',
    },
    {
      tema: 'Responsabilidad Social Empresarial',
      referencia:
        'Pérez, M.,  Espinoza, C. y Peralta, B. (2016). La responsabilidad social empresarial y su enfoque ambiental: una visión sostenible a futuro. Revista Universidad y Sociedad, 8(3), p. 169-178. ',
      tipo: 'Artículo',
      link:
        'http://scielo.sld.cu/scielo.php?script=sci_arttext&pid=S2218-36202016000300023&lng=es&tlng=es',
    },
    {
      tema: 'Partes interesadas',
      referencia:
        'Lteam Training. (2016). Partes Interesadas <em>Stakeholders</em>. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=9AtaIAZEu0c',
    },
    {
      tema: 'Desarrollo sostenible',
      referencia:
        'KanelaMental. (2021). El Desarrollo Sostenible y sus pilares fundamentales.  ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=OZlUTG07XFQ',
    },
    {
      tema: 'Diagnóstico y técnicas de recolección organizacional',
      referencia:
        'Lifeder Education. (2022) ¿Qué es el Diagnóstico organizacional y para qué sirve?.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=SnJz_2__fC0',
    },
  ],
  glosario: [
    {
      termino: 'Competencia',
      significado:
        'rivales a nivel de empresa. Investigar sobre quiénes son la competencia permitirá la identificación de amenazas y tener una estrategia para la reacción a dicha amenaza.',
    },
    {
      termino: 'Control',
      significado:
        'consiste en que la organización mida los resultados de cómo se hicieron las actividades planteadas y efectuadas, con el objetivo de generar mejoras continuas.',
    },
    {
      termino: 'Diagnóstico',
      significado:
        'recoge y analiza la información o datos para tomar decisiones frente a diferentes problemas de la organización.',
    },
    {
      termino: 'Dirección',
      significado:
        'consiste en que la organización verifique que se hagan las actividades o tareas propuestas para el logro de los objetivos, mediante el liderazgo, la motivación y la comunicación de los involucrados.',
    },
    {
      termino: 'Estrategia',
      significado:
        'es un proceso que busca dirigir o trazar un objetivo propuesto.',
    },
    {
      termino: 'Indicador',
      significado:
        'brinda la información cualitativa o cuantitativa conformada por varios datos.',
    },
    {
      termino: 'Liderazgo',
      significado:
        'son las habilidades para dirigir, acompañar a un equipo de personas o trabajo.',
    },
    {
      termino: 'Organización',
      significado:
        'grupo de personas que se asocian para desarrollar una actividad económica y utilizar diversos recursos para lograr objetivos o metas.',
    },
    {
      termino: 'Planeación',
      significado:
        'consiste en que la organización determine qué se va a hacer, de forma anticipada, para lograr los objetivos propuestos de manera eficiente.',
    },
    {
      termino: 'Sostenibilidad',
      significado:
        'gestionar los recursos para satisfacer las necesidades actuales, sin poner en riesgo las necesidades futuras.',
    },
    {
      termino: '<em>Stakeholders</em>',
      significado:
        'son el público de interés que se relaciona con las actividades y decisiones de una organización.',
    },
    {
      termino: 'Valores',
      significado:
        'son aquellos principios, normas o creencias que caracterizan una organización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Benavides, C. (2016). <em>Definiendo las partes interesadas en ISO 9001:2015</em>. Calidad para Pymes.  ',
      link:
        'https://es.linkedin.com/pulse/definiendo-las-partes-interesadas-en-iso-90012015-benavides-gallegos',
    },
    {
      referencia:
        'Business at Speed. (2018). <em>¿Qué indicadores miden la sostenibilidad de tu empresa? PHC Software.</em> ',
      link:
        'https://phcsoftware.pe/business-at-speed/indicadores-sostenibilidad-empresa/',
    },
    {
      referencia:
        'Calvo, E. (s. f.). <em>Influencia de Stakeholders en el Proyecto</em>. BSG Institute.  ',
      link:
        'https://bsginstitute.com/bs-campus/blog/influencia-de-stakeholders-en-el-proyecto-69',
    },
    {
      referencia:
        'Conexión ESAN. (2016) <em>¿Qué es el mapa de procesos de la organización?</em>. ESAN Graduate School of Business.  ',
      link:
        'https://www.esan.edu.pe/conexion-esan/que-es-el-mapa-de-procesos-de-la-organizacion',
    },
    {
      referencia:
        'Duque, Y., Cardona, M. y Rendón, J. (2014). <em>Responsabilidad Social Empresarial: Teorías, índices, estándares y certificaciones. Cuadernos de administración</em>, 29(50), p. 196–206. ',
      link:
        'https://www.academia.edu/71951475/Responsabilidad_Social_Empresarial_Teor%C3%ADas_%C3%ADndices_est%C3%A1ndares_y_certificaciones',
    },
    {
      referencia:
        'Editorial Grudemi. (2018). <em>Organización</em>. Enciclopedia Económica.  ',
      link: 'https://enciclopediaeconomica.com/organizacion/',
    },
    {
      referencia:
        'Enciclopedia Concepto. (s. f.). <em>Proceso administrativo</em>. Concepto ',
      link: 'https://concepto.de/proceso-administrativo/',
    },
    {
      referencia:
        'ISOTools. (2016). <em>Mapa de procesos según la nueva ISO 9001 2015</em>.  ',
      link:
        'https://www.isotools.org/2016/05/11/mapa-procesos-nueva-iso-9001-2015/',
    },
    {
      referencia:
        'Meza, A. (2020). <em>El Diagnóstico Organizacional: elementos, métodos y técnicas</em>. Mi Espacio.',
      link:
        'https://www.infosol.com.mx/miespacio/el-diagnostico-organizacional-elementos-metodos-y-tecnicas/',
    },
    {
      referencia:
        'URSE. (2015). <em>Conceptos y primeros pasos en RSE</em>. CEPB.',
      link:
        'https://www.cepb.org.bo/urse/wp-content/uploads/2015/03/GUIA1Vweb.pdf',
    },
    {
      referencia:
        'Velásquez, L. y D’Armas, M. (2015). El ingeniero con conciencia social: Una posibilidad para el desarrollo sostenible. <em>Universidad, Ciencia y Tecnología, 19(74)</em>, p. 25–38.',
      link:
        'http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1316-48212015000100003',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'May Stefanny González Verjel',
          cargo: 'Experta temática',
          centro:
            'Centro de Industria, Empresa y Servicios Regionales - Regional Norte de Santander',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Experta temática',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrector de Estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco Torres',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Francisco José Lizcano Reyes',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Animador y Producción Audiovisual',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos Inclusivos y Accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
