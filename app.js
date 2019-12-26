new Vue({
  el: '#app',
  data: {

    questions: [{
        "rel33": "Es coherente entre lo que dice y lo que hace"
      },
      {
        "dpe19": "Ayuda a sus colaboradores a comprender el aporte de su trabajo en los resultados de la empresa"
      },
      {
        "dsm9": "pide retroalimentacionde sus colaboradoressobre su rol de lider"
      },
      {
        "con12": "dedica tiempo para enseñar a sus colaboradores"
      },
      {
        "dpe39": "se asegura que sus colaboradores participen en la capacitacion y entrenamiento que requieren"
      },
      {
        "rel27": "expresa sus emociones respetando a otros"
      },
      {
        "dsm4": "puede reconocer sus errores con humildad"
      },
      {
        "log26": "ve los cambios como oportunidades"
      },
      {
        "dsm22": "verifica el avance de sus planes de desarrollo personal y mejoramiento del desempeño"
      },
      {
        "dpe27": "hace seguimiento al desempeño de sus colaboradores"
      },
      {
        "log3": "identifica soluciones para resolver problemas de raiz"
      },
      {
        "dpe29": "se asegura de que las personas de su equipo cuenten con la informacion que necesitan para hacer su trabajo"
      },
      {
        "rel36": "sus actos son coherentes con sus principios"
      },
      {
        "rel43": "estimula el apoyo mutuo entre las personas de su equipo de trabajo"
      },
      {
        "rel22": "da respuestas claras cuando se le solicita informacion."
      },
      {
        "rel10": "transmite informacion veraz en su trabajo."
      },
      {
        "rel18": "su comunicacion escrita es oportuna."
      },
      {
        "rel35": "muestra coherencia en sus acciones."
      },
      {
        "dsm23": "realiza seguimiento frecuentede su propio desempeño con el fin de superarse a si mismo."
      },
      {
        "log7": "alcanza las metas definidas para su proceso."
      },
      {
        "log15": "mide los resultados de su trabajo."
      },
      {
        "rel31": "controla su tono de voz para mantener el interes de las personas en lo que dice."
      },
      {
        "rel12": "mira a la otra persona a los ojos cuando le esta hablando."
      },
      {
        "con11": "transmite el conocimiento a sus colaboradores."
      },
      {
        "dpe17": "orienta a las personas nuevas del equipo para que conozcan claramente que hacer en su trabajo."
      },
      {
        "log8": "logra los resultados de su trabajo en el tiempo previsto."
      },
      {
        "dpe18": "le transmite a sus colaboradores la importancia de lo que hacen."
      },
      {
        "dpe6": "esta al tanto de los conocimientos,habilidades y actitudes que poseen sus colaboradores."
      },
      {
        "con18": "complementa sus conocimientos con los que poseen otros."
      },
      {
        "dpe43": "busca que sus colaboradores pongan en practica los conocimientos y habilidades que poseen."
      },
      {
        "con1": "posee el conocimiento necesario para hacer bien su trabajo."
      },
      {
        "log2": "tiene en cuenta las opiniones de los demas para tomar decisiones."
      },
      {
        "dpe46": "orienta con claridad a sus colaboradores cuando les delega actividades."
      },
      {
        "log9": "alcanza los resultados en su trabajo con los recursos asignados para hacerlo."
      },
      {
        "rel24": "mantiene el hilo de la conversacion."
      },
      {
        "log6": "cumple los compromisos que asume."
      },
      {
        "dsm3": "cuando hace algo bien lo reconoce con sencillez."
      },
      {
        "log11": "logra resultados en su trabajo con la calidad requerida."
      },
      {
        "dsm8": "acepta con facilidad las cosas que no salen como esperaba."
      },
      {
        "con5": "utiliza sus conocimientos para apoyar el trabajo de sus compañeros."
      },
      {
        "rel38": "manifiesta su malestar con respeto."
      },
      {
        "log27": "afronta nuevos proyectos."
      },
      {
        "dpe5": "identifica capacidades y destrezas en las personas de su equipo."
      },
      {
        "log1": "toma decisiones rapidamente basandose en su experiencia."
      },
      {
        "dpe24": "sugiere a sus colaboradores maneras distintas de hacer las cosas en su trabajo."
      },
      {
        "rel46": "establece relaciones de apoyo con personas de diferentes areas."
      },
      {
        "log24": "propone nuevas formas de hacer las cosas."
      },
      {
        "con4": "adquiere conocimientos a partir de nuevas actividades."
      },
      {
        "dsm13": "lo que piensa snbre si mismo(a) coincide con lo que otros piensan de el(ella)."
      },
      {
        "log4": "analiza diversas posibilidades de accion a la hora de tomar una decision."
      },
      {
        "rel42": "coopera con las personas de su equipo de trabajo."
      },
      {
        "log14": "lleva a cabo sus actividades de principio a fin."
      },
      {
        "log23": "insiste cuando la situacion es dificil manteniendo una actitud positiva."
      },
      {
        "dsm6": "asume las consecuencias de las decisiones que toma."
      },
      {
        "log25": "durante las crisis identifica el camino a seguir."
      },
      {
        "rel17": "su comunicacion escrita es clara."
      },
      {
        "rel8": "se concentra en la otra persona mientras le habla."
      },
      {
        "con8": "ayuda a otros a resolver problemas a partir de sus conocimientos."
      },
      {
        "dsm5": "asume las consecuencias de sus acciones."
      },
      {
        "dsm12": "pide retroalimentacion a su propio jefe sobre su rol como lider."
      },
      {
        "dpe10": "da orientaciones claras a las personas para desarrollar su trabajo."
      },
      {
        "rel48": "se acerca a las personas de su equipo con regularidad."
      },
      {
        "rel53": "interviene en las situaciones de conflicto entre sus colaboradores."
      },
      {
        "dsm7": "admite sus equivocaciones."
      },
      {
        "rel40": "busca el momento apropiado para expresar sus opiniones."
      },
      {
        "rel19": "su comunicacion escrita va dirigida a quien realmente requiere la informacion."
      },
      {
        "dsm16": "plantea metas claras para mejorar en su vida laboral."
      },
      {
        "log16": "organiza sus actividades de acuerdo a su importancia."
      },
      {
        "dsm15": "implementa planes para su propio desarrollo personal."
      },
      {
        "rel1": "escucha atentamente cuando otras personas le estan hablando."
      },
      {
        "rel50": "conoce a los miembros de su equipo de trabajo."
      },
      {
        "dpe20": "asesora a las personas de su equipo para que desempeñen bien su labor."
      },
      {
        "con15": "se apoya en el conocimiento de otros para hacer bien su trabajo."
      },
      {
        "rel20": "verifica la efectividad de sus comunicaciones escritas."
      },
      {
        "rel30": "utiliza un lenguaje respetuoso cuando se dirige a otras personas."
      },
      {
        "rel23": "da respuestas precisas a las preguntas que le hacen."
      },
      {
        "dsm11": "pide retroalimentacion de sus compañeros de trabajo de su rol como lider."
      },
      {
        "con16": "pide apoyo a quienes poseen conocimientos especializados."
      },
      {
        "nuevo1": "recompensa a sus colaboradores por un trabajo bien hecho."
      },
      {
        "nuevo2": "retroalimenta a sus colaboradores sobre los resultados de lo que hacen."
      },
      {
        "nuevo3": "felicita a sus colaboradores cuando hacen bien las cosas."
      },
      {
        "nuevo4": "retroaliemnta positivamente a sus colaboradores cuando cumplen sus metas y objetivos."
      },
      {
        "nuevo5": "anima a sus colaboradores para que tomen sus propias decisiones."
      },
      {
        "nuevo6": "exige a sus colaboradores que propongan direrentes maneras de hacer las cosas."
      },
      {
        "nuevo7": "estimula a sus colaboradores para que resuelvan los problemas de trabajo."
      }
    ]
  },
  filters: {
    uppercase: function(str) {
      return str.toUpperCase()
    }
  }
})