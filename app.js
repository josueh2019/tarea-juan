new Vue({
  el: '#app',
  data: {

    questions: [{
        codigo: 'rel33',
        lider: "Soy coherente entre lo que digo y lo que hago.",
        colaborador: "Es coherente entre lo que dice y lo que hace."
      },
      {
        codigo: 'dpe19',
        lider: "Ayudo a mis colaboradores a comprender el aporte de su trabajo en los resultados de la empresa.",
        colaboradores: "Ayuda a sus colaboradores a comprender el aporte de su trabajo en los resultados de la empresa."
      },
      {
        codigo: 'dsm9',
        lider: "Pido retroalimentación de mis colaboradores sobre mi rol de líder.",
        colaboradores: "pide retroalimentacionde sus colaboradoressobre su rol de lider."
      },
      {
        codigo: 'con12',
        lider: "Dedico tiempo para enseñar a mis colaboradores.",
        colaboradores: "dedica tiempo para enseñar a sus colaboradores."
      },
      {
        codigo: 'dpe39',
        lider: "Me aseguro que mis colaboradores participen en la capacitación y entrenamiento que requieren.",
        colaboradores: "se asegura que sus colaboradores participen en la capacitacion y entrenamiento que requieren."
      },
      {
        codigo: 'rel27',
        lider: "Expreso mis emociones respetando a otros.",
        colaboradores: "expresa sus emociones respetando a otros."
      },
      {
        codigo: 'dsm4',
        lider: "Puedo reconocer mis errores con humildad.",
        colaboradores: "puede reconocer sus errores con humildad."
      },
      {
        codigo: 'log26',
        lider: "Veo los cambios como oportunidades.",
        colaboradores: "ve los cambios como oportunidades."
      },
      {
        codigo: 'dsm22',
        lider: "Verifico el avance de sus planes de desarrollo personal y mejoramiento del desempeño.",
        colaboradores: "Verifica el avance de sus planes de desarrollo personal y mejoramiento del desempeño."
      },
      {
        codigo: 'dpe27',
        lider: "Hago seguimiento al desempeño de mis colaboradores.",
        colaboradores: "hace seguimiento al desempeño de sus colaboradores."
      },
      {
        codigo: 'log3',
        lider: "Identifico soluciones para resolver problemas de raiz.",
        colaboradores: "Identifica soluciones para resolver problemas de raiz."
      },
      {
        codigo: 'dpe29',
        lider: "Me aseguro de que las personas de mi equipo cuenten con la información que necesitan para hacer su trabajo.",
        colaboradores: "Se asegura de que las personas de su equipo cuenten con la informacion que necesitan para hacer su trabajo"
      },
      {
        codigo: 'rel36',
        lider: "Mis actos son coherentes con mis principios.",
        colaboradores: "Sus actos son coherentes con sus principios."
      },
      {
        codigo: 'rel43',
        lider: "Estimulo el apoyo mutuo entre las personas de mi equipo de trabajo. ",
        colaboradores: "Estimula el apoyo mutuo entre las personas de su equipo de trabajo"
      },
      {
        codigo: 'rel22',
        lider: "Doy respuestas claras cuando se me solicita información.",
        colaboradores: "Da respuestas claras cuando se le solicita informacion."
      },
      {
        codigo: 'rel10',
        lider: "Transmito información veraz en mi trabajo.",
        colaboradores: "Transmite informacion veraz en su trabajo."
      },
      {
        codigo: 'rel18',
        lider: "Mi comunicación escrita es oportuna.",
        colaboradores: "Su comunicacion escrita es oportuna."
      },
      {
        codigo: 'rel35',
        lider: "Muestro coherencia en mis acciones.",
        colaboradores: "Muestra coherencia en sus acciones."
      },
      {
        codigo: 'dsm23',
        lider: "Realizo seguimiento frecuente de mi desempeño con el fin de superarme a mí mismo.",
        colaboradores: "Realiza seguimiento frecuentede su propio desempeño con el fin de superarse a si mismo."
      },
      {
        codigo: 'log7',
        lider: "Alcanzo las metas definidas para mi proceso.",
        colaboradores: "Alcanza las metas definidas para su proceso."
      },
      {
        codigo: 'log15',
        lider: "Mido los resultados de mi trabajo.",
        colaboradores: "Mide los resultados de su trabajo."
      },
      {
        codigo: 'rel31',
        lider: "Controlo mi tono de voz para mantener el interés de las personas en lo que digo. ",
        colaboradores: "Controla su tono de voz para mantener el interes de las personas en lo que dice."
      },
      {
        codigo: 'rel12',
        lider: "Miro a la otra persona cuando me está hablando.",
        colaboradores: "Mira a la otra persona a los ojos cuando le esta hablando."
      },
      {
        codigo: 'con11',
        lider: "Transmito el conocimiento a mis colaboradores.",
        colaboradores: "Transmite el conocimiento a sus colaboradores."
      },
      {
        codigo: 'dpe17',
        lider: "Oriento a las personas nuevas del equipo para que conozcan claramente qué hacer en su trabajo.",
        colaboradores: "Orienta a las personas nuevas del equipo para que conozcan claramente que hacer en su trabajo."
      },
      {
        codigo: 'log8',
        lider: "Logro los resultados de mi trabajo en el tiempo previsto.",
        colaboradores: "Logra los resultados de su trabajo en el tiempo previsto."
      },
      {
        codigo: 'dpe18',
        lider: "Le transmito a mis colaboradores la importancia de lo que hacen. ",
        colaboradores: "Le transmite a sus colaboradores la importancia de lo que hacen."
      },
      {
        codigo: 'dpe6',
        lider: "Estoy al tanto de los conocimientos, habilidades y actitudes que poseen mis colaboradores.",
        colaboradores: "Esta al tanto de los conocimientos,habilidades y actitudes que poseen sus colaboradores."
      },
      {
        codigo: 'con18',
        lider: "Complemento mis conocimientos con los que poseen otros.",
        colaboradores: "Complementa sus conocimientos con los que poseen otros."
      },
      {
        codigo: 'dpe43',
        lider: "Busco que mis colaboradores pongan en práctica los conocimientos y habilidades que poseen.",
        colaboradores: "Busca que sus colaboradores pongan en practica los conocimientos y habilidades que poseen."
      },
      {
        codigo: 'con1',
        lider: "Poseo conocimiento necesario para hacer bien mi trabajo.",
        colaboradores: "Posee el conocimiento necesario para hacer bien su trabajo."
      },
      {
        codigo: 'log2',
        lider: "Tengo en cuenta las opiniones de los demás para tomar decisiones.",
        colaboradores: "Tiene en cuenta las opiniones de los demas para tomar decisiones."
      },
      {
        codigo: 'dpe46',
        lider: "Oriento con claridad a mis colaboradores cuando les delego actividades.",
        colaboradores: "Orienta con claridad a sus colaboradores cuando les delega actividades."
      },
      {
        codigo: 'log9',
        lider: "Alcanzo los resultados en mi trabajo con los recursos asignados para hacerlo.",
        colaboradores: "Alcanza los resultados en su trabajo con los recursos asignados para hacerlo."
      },
      {
        codigo: 'rel24',
        lider: "Mantengo el hilo de la conversación.",
        colaboradores: "Mantiene el hilo de la conversacion."
      },
      {
        codigo: 'log6',
        lider: "Cumplo los compromisos que asumo.",
        colaboradores: "Cumple los compromisos que asume."
      },
      {
        codigo: 'dsm3',
        lider: "Cuando hago algo bien lo reconozco con sencillez.",
        colaboradores: "Cuando hace algo bien lo reconoce con sencillez."
      },
      {
        codigo: 'log11',
        lider: "Logro resultados en mi trabajo con la calidad requerida.",
        colaboradores: "Logra resultados en su trabajo con la calidad requerida."
      },
      {
        codigo: 'dsm8',
        lider: "Acepto con facilidad las cosas que no salen como esperaba.",
        colaboradores: "Acepta con facilidad las cosas que no salen como esperaba."
      },
      {
        codigo: 'con5',
        lider: "Utilizo mis conocimientos para apoyar el trabajo de mis compañeros.",
        colaboradores: "Utiliza sus conocimientos para apoyar el trabajo de sus compañeros."
      },
      {
        codigo: 'rel38',
        lider: "Manifiesto mi malestar con respeto. ",
        colaboradores: "Manifiesta su malestar con respeto."
      },
      {
        codigo: 'log27',
        lider: "Afronto nuevos proyectos.",
        colaboradores: "Afronta nuevos proyectos."
      },
      {
        codigo: 'dpe5',
        lider: "Identifico capacidades y destrezas en las personas de mi equipo.",
        colaboradores: "Identifica capacidades y destrezas en las personas de su equipo."
      },
      {
        codigo: 'log1',
        lider: "Tomo decisiones rápidamente basándome en mi experiencia.",
        colaboradores: "Toma decisiones rapidamente basandose en su experiencia."
      },
      {
        codigo: 'dpe24',
        lider: "Sugiero a mis colaboradores maneras distintas de hacer las cosas en su trabajo.",
        colaboradores: "Sugiere a sus colaboradores maneras distintas de hacer las cosas en su trabajo."
      },
      {
        codigo: 'rel46',
        lider: "Establezco relaciones de apoyo con personas de diferentes áreas. ",
        colaboradores: "Establece relaciones de apoyo con personas de diferentes areas."
      },
      {
        codigo: 'log24',
        lider: "Propongo nuevas formas de hacer las cosas.",
        colaboradores: "Propone nuevas formas de hacer las cosas."
      },
      {
        codigo: 'con4',
        lider: "Adquiero conocimientos a partir de nuevas actividades. ",
        colaboradores: "Adquiere conocimientos a partir de nuevas actividades."
      },
      {
        codigo: 'dsm13',
        lider: "Lo que pienso sobre mi mismo(a) coincide con lo que otros piensan de mí.",
        colaboradores: "Lo que piensa sobre si mismo(a) coincide con lo que otros piensan de el(ella)."
      },
      {
        codigo: 'log4',
        lider: "Analizo diversas posibilidades de acción a la hora de tomar una decisión.",
        colaboradores: "Analiza diversas posibilidades de accion a la hora de tomar una decision."
      },
      {
        codigo: 'rel42',
        lider: "Coopero con las personas de mi equipo de trabajo. ",
        colaboradores: "Coopera con las personas de su equipo de trabajo."
      },
      {
        codigo: 'log14',
        lider: "Llevo a cabo mis actividades de principio a fin.",
        colaboradores: "Lleva a cabo sus actividades de principio a fin."
      },
      {
        codigo: 'log23',
        lider: "Insisto cuando la situación es difícil manteniendo una actitud positiva.",
        colaboradores: "Insiste cuando la situacion es dificil manteniendo una actitud positiva."
      },
      {
        codigo: 'dsm6',
        lider: "Asumo las consecuencias de las decisiones que tomo.",
        colaboradores: "Asume las consecuencias de las decisiones que toma."
      },
      {
        codigo: 'log25',
        lider: "Durante las crisis identifico el camino a seguir.",
        colaboradores: "Durante las crisis identifica el camino a seguir."
      },
      {
        codigo: 'rel17',
        lider: "Mi comunicación escrita es clara.",
        colaboradores: "Su comunicacion escrita es clara."
      },
      {
        codigo: 'rel8',
        lider: "Me concentro en la otra persona mientras me habla.",
        colaboradores: "Se concentra en la otra persona mientras le habla."
      },
      {
        codigo: 'con8',
        lider: "Ayudo a otros a resolver problemas a partir de mis conocimientos.",
        colaboradores: "Ayuda a otros a resolver problemas a partir de sus conocimientos."
      },
      {
        codigo: 'dsm5',
        lider: "Asumo las consecuencias de mis acciones.",
        colaboradores: "Asume las consecuencias de sus acciones."
      },
      {
        codigo: 'dsm12',
        lider: "Pido retroalimentación a mi propio jefe sobre mi rol como líder.",
        colaboradores: "Pide retroalimentacion a su propio jefe sobre su rol como lider."
      },
      {
        codigo: 'dpe10',
        lider: "Doy orientaciones claras a las personas para desarrollar su trabajo.",
        colaboradores: "Da orientaciones claras a las personas para desarrollar su trabajo."
      },
      {
        codigo: 'rel48',
        lider: "Me acerco a las personas de mi equipo con regularidad.",
        colaboradores: "Se acerca a las personas de su equipo con regularidad."
      },
      {
        codigo: 'rel53',
        lider: "Intervengo en las situaciones de conflicto entre mis colaboradores.",
        colaboradores: "Interviene en las situaciones de conflicto entre sus colaboradores."
      },
      {
        codigo: 'dsm7',
        lider: "Admito mis equivocaciones.",
        colaboradores: "Admite sus equivocaciones."
      },
      {
        codigo: 'rel40',
        lider: "Busco el momento apropiado para expresar mis opiniones.",
        colaboradores: "Busca el momento apropiado para expresar sus opiniones."
      },
      {
        codigo: 'rel19',
        lider: "Mi comunicación escrita va dirigida a quien realmente requiere la información",
        colaboradores: "Su comunicacion escrita va dirigida a quien realmente requiere la informacion."
      },
      {
        codigo: 'dsm16',
        lider: "Planteo metas claras para mejorar en mi vida laboral.",
        colaboradores: "Plantea metas claras para mejorar en su vida laboral."
      },
      {
        codigo: 'log16',
        lider: "Organizo mis actividades de acuerdo a su importancia.",
        colaboradores: "Organiza sus actividades de acuerdo a su importancia."
      },
      {
        codigo: 'dsm15',
        lider: "Implemento planes para mi desarrollo personal.",
        colaboradores: "Implementa planes para su propio desarrollo personal."
      },
      {
        codigo: 'rel1',
        lider: "Escucho atentamente cuando otras personas me están hablando. ",
        colaboradores: "Escucha atentamente cuando otras personas le estan hablando."
      },
      {
        codigo: 'rel50',
        lider: "Conozco a los miembros de mi equipo de trabajo.",
        colaboradores: "Conoce a los miembros de su equipo de trabajo."
      },
      {
        codigo: 'dpe20',
        lider: "Asesoro a las personas de mi equipo para que desempeñen bien su labor.",
        colaboradores: "Asesora a las personas de su equipo para que desempeñen bien su labor."
      },
      {
        codigo: 'con15',
        lider: "Me apoyo en el conocimiento de otros para hacer bien mi trabajo.",
        colaboradores: "Se apoya en el conocimiento de otros para hacer bien su trabajo."
      },
      {
        codigo: 'rel20',
        lider: "Verifico la efectividad de mis comunicaciones escritas.",
        colaboradores: "Verifica la efectividad de sus comunicaciones escritas."
      },
      {
        codigo: 'rel30',
        lider: "Utilizo un lenguaje respetuoso cuando me dirijo a otras personas.",
        colaboradores: "Utiliza un lenguaje respetuoso cuando se dirige a otras personas."
      },
      {
        codigo: 'rel23',
        lider: "Doy respuestas precisas a las preguntas que me hacen.",
        colaboradores: "Da respuestas precisas a las preguntas que le hacen."
      },
      {
        codigo: 'dsm11',
        lider: "Pido retroalimentación de mis compañeros de trabajo sobre mi rol como líder.",
        colaboradores: "Pide retroalimentacion de sus compañeros de trabajo de su rol como lider."
      },
      {
        codigo: 'con16',
        lider: "Pido apoyo a quienes poseen conocimientos especializados. ",
        colaboradores: "Pide apoyo a quienes poseen conocimientos especializados."
      },
      {
        codigo: 'nuevo1',
        lider: "Recompenso a mis colaboradores por un trabajo bien hecho.",
        colaboradores: "Recompensa a sus colaboradores por un trabajo bien hecho."
      },
      {
        codigo: 'nuevo2',
        lider: "Retroalimento a mis colaboradores sobre los resultados de lo que hacen",
        colaboradores: "Retroalimenta a sus colaboradores sobre los resultados de lo que hacen."
      },
      {
        codigo: 'nuevo3',
        lider: "Felicito a mis colaboradores cuando hacen bien las cosas. ",
        colaboradores: "Felicita a sus colaboradores cuando hacen bien las cosas."
      },
      {
        codigo: 'nuevo4',
        lider: "Retroalimento positivamente a mis colaboradores cuando cumplen sus metas y objetivos. ",
        colaboradores: "Retroalimenta positivamente a sus colaboradores cuando cumplen sus metas y objetivos."
      },
      {
        codigo: 'nuevo5',
        lider: "Animo a mis colaboradores para que tomen sus propias decisiones. ",
        colaboradores: "Anima a sus colaboradores para que tomen sus propias decisiones."
      },
      {
        codigo: 'nuevo6',
        lider: "Exijo a mis colaboradores que propongan diferentes maneras de hacer la cosas.",
        colaboradores: "Exige a sus colaboradores que propongan direrentes maneras de hacer las cosas."
      },
      {
        codigo: 'nuevo7',
        lider: "Estimulo a mis colaboradores para que resuelvan los problemas de trabajo. ",
        colaboradores: "Estimula a sus colaboradores para que resuelvan los problemas de trabajo."
      }
    ]
  },
  methods: {
    siguiente(n) {
      console.log(n);
    }
  },
})