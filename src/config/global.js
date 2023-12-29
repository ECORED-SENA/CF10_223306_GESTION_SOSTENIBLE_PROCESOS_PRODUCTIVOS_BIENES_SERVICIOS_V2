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
        download: 'downloads/CF10-223306-DU.zip',
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
      tema: 'Estudio del trabajo',
      referencia:
        'Kanawaty, G. (1996). Introducción al estudio del trabajo. Oficina Internacional del Trabajo.',
      tipo: 'PDF',
      link:
        'https://teacherke.files.wordpress.com/2010/09/introduccion-al-estudio-del-trabajo-oit.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Cargas de trabajo',
      significado:
        'conjunto de requerimientos que debe realizar un trabajador en su jornada laboral.',
    },
    {
      termino: 'Código Sustantivo del Trabajo',
      significado:
        'documento constitucional donde se especifican todas las normas que regulan el contexto laboral en el país.',
    },
    {
      termino: 'Cuadro de control',
      significado:
        'documento donde se monitorizan procesos relacionados con la producción.',
    },
    {
      termino: 'Días hábiles',
      significado: 'se refiere a los días del año que son laborables.',
    },
    {
      termino: 'Estatus',
      significado: 'posición que se ocupa dentro de un grupo social.',
    },
    {
      termino: 'Estudio de métodos',
      significado:
        'permite comparar el nivel de eficiencia de una empresa con relación a sus procesos.',
    },
    {
      termino: 'Listado operacional',
      significado:
        'capacidad de llevar a cabo distintas actividades en un mismo tiempo determinado.',
    },
    {
      termino: 'Proceso productivo',
      significado:
        'conjunto de actividades que lleva a cabo una organización para generar productos o servicios.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ararat, A. (2010). Estudio de métodos y tiempos en el proceso productivo de la línea de camisas interior de Makila Cta, para mejorar la productividad de la empresa. Universidad Autónoma de Occidente',
      link: 'https://red.uao.edu.co/handle/10614/1175',
    },
    {
      referencia:
        'Del Castillo, R. y Salazar, R. (2018). Fundamentos básicos de estadística.',
      link: '',
    },
    {
      referencia:
        'Deming, W. (1989). Calidad, productividad y competitividad. La salida de la crisis. Ediciones Diaz de Santos.',
      link: '',
    },
    {
      referencia:
        'García, R. (2005).Estudio del trabajo: Ingeniería de métodos y medición del trabajo.McGraw - Hill',
      link: '',
    },
    {
      referencia:
        'García, R. (2005).Estudio del trabajo: Ingeniería de métodos y medición del trabajo.McGraw - Hill',
      link:
        'https://www.academia.edu/31455142/Manual_Del_Ingeniero_Industrial_Maynard',
    },
    {
      referencia:
        'Kanawaty, G. (1996). Introducción al estudio del trabajo. Oficina Internacional del Trabajo',
      link:
        'https://teacherke.files.wordpress.com/2010/09/introduccion-al-estudio-del-trabajo-oit.pdf',
    },
    {
      referencia:
        'López, P. (2016). Novedades ISO 9001:2015. Fundación Confemetal.',
      link: '',
    },
    {
      referencia:
        'Monks, J. (1991). Administración de operaciones. McGraw-Hill.',
      link: '',
    },
    {
      referencia:
        'Proaño, D., Gisbert, V. y Pérez, E. (2017). Metodología para elaborar un plan de mejora continua. 3C Empresa.',
      link: 'https://www.3ciencias.com/wp-content/uploads/2018/01/art_6.pdf',
    },
    {
      referencia:
        'Sipper, D. y Bulfin, R. (1998). Planeación y control de la producción. McGraw-Hill',
      link: '',
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
          nombre: 'Víctor Manuel Isaza Córdoba',
          cargo: 'Experta temático',
          centro:
            'Centro del Diseño y la Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Luz Aída Quintero Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Leydy Jhuliana Jaramillo Mejía',
          cargo: 'Diseñadora Instruccional',
          centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
        },
        {
          nombre: 'Fabián Leonardo Correa Díaz',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Álix Cecilia Chinchilla Rueda',
          cargo: 'Asesora Metodológica',
          centro:
            'Centro del Diseño y la Metrología - Regional Distrito Capital',
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
          nombre: 'Carlos Julian Ramirez Benitez',
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
