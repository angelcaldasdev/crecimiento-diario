/* ==========================================================
   ARTÍCULOS DE CRECIMIENTO DIARIO
   Para publicar uno nuevo: copia un bloque { ... }, pégalo
   AL INICIO de la lista, cambia sus datos y guarda.
   - fecha: formato AAAA-MM-DD
   - categoria: si escribes una categoría nueva, el filtro se crea solo
   - contenido: cada texto entre comillas es un párrafo
   ========================================================== */
const listaDeArticulos = [
  {
    titulo: "Por qué empezar pequeño cambia todo",
    categoria: "Hábitos",
    fecha: "2026-11-09",
    resumen: "Los grandes cambios nacen de acciones tan pequeñas que es difícil decir que no.",
    contenido: [
      "Muchas personas empiezan el año con metas enormes: leer un libro por semana, correr cinco kilómetros diarios, levantarse a las cinco de la mañana. A las dos semanas, la motivación se apaga y llega la culpa.",
      "El problema no es la falta de fuerza de voluntad, sino el tamaño del primer paso. Un hábito pequeño, como leer dos páginas o caminar diez minutos, es tan fácil que no necesita motivación para empezar.",
      "Elige una sola acción, hazla a la misma hora todos los días y no la subas de nivel hasta que se sienta natural. Lo importante al principio no es el resultado, sino convertirte en alguien que cumple lo que se propone."
    ]
  },
  {
    titulo: "Cómo hablarte como le hablarías a un amigo",
    categoria: "Mentalidad",
    fecha: "2026-11-02",
    resumen: "Tu diálogo interno marca tu ánimo. Aprende a cambiarlo sin engañarte.",
    contenido: [
      "Si un amigo se equivoca, le dices que a todos nos pasa y le ayudas a buscar una salida. Cuando nos equivocamos nosotros, solemos decirnos cosas que jamás diríamos a otra persona.",
      "La próxima vez que notes una frase dura en tu cabeza, hazte esta pregunta: ¿se lo diría a alguien que quiero? Si la respuesta es no, reescríbela con más respeto y más claridad.",
      "No se trata de ignorar tus errores, sino de mirarlos como información útil. Quien se trata con respeto tiene más energía para corregir y volver a intentar."
    ]
  },
  {
    titulo: "La regla de las tres prioridades del día",
    categoria: "Productividad",
    fecha: "2026-10-26",
    resumen: "Una lista corta te ayuda a terminar lo importante antes de que el día se llene.",
    contenido: [
      "Una lista de veinte tareas agota antes de empezar. Una lista de tres, en cambio, se puede cumplir y deja la sensación de haber avanzado.",
      "Cada noche escribe las tres cosas que, si las terminas mañana, harán que el día valga la pena. Ordénalas de la más importante a la menos importante y empieza por la primera.",
      "Si terminas las tres antes de tiempo, perfecto: lo demás es un extra. Si no terminas todas, avanzaste en lo que más importaba."
    ]
  },

  /* ---------- NUEVOS: disciplina, hábitos, constancia y trabajo duro ---------- */
  {
    titulo: "La disciplina no es castigo, es cumplirte una promesa",
    categoria: "Disciplina",
    fecha: "2026-10-19",
    resumen: "Cambia la idea de disciplina como sacrificio por una más amable: ser alguien en quien puedes confiar.",
    contenido: [
      "Cuando escuchamos la palabra disciplina, pensamos en esfuerzo, privaciones y una voz interior que nos regaña. Por eso mucha gente la evita: suena a castigo.",
      "Hay otra forma de verla. Disciplina es cumplirte una promesa pequeña. Si te dijiste que estudiarías treinta minutos y lo haces, estás demostrándote que tu palabra vale. Cada promesa cumplida construye confianza en ti mismo; cada promesa rota la desgasta.",
      "Por eso conviene prometer menos y cumplir más. Elige un compromiso que sí puedas sostener incluso en un mal día, y cúmplelo sin negociar. Con el tiempo, esa confianza será la base para metas más grandes."
    ]
  },
  {
    titulo: "Un hábito nuevo en cuatro pasos",
    categoria: "Hábitos",
    fecha: "2026-10-12",
    resumen: "Una fórmula simple para pasar de la intención a la rutina sin depender de la motivación.",
    contenido: [
      "Los hábitos se forman cuando una acción se repite en el mismo contexto hasta que deja de costar. No existe un número mágico de días: depende de la persona y de lo difícil que sea la acción. Lo que sí funciona es darle una estructura clara.",
      "Paso uno: elige una señal. Algo que ya haces todos los días, como servirte el café o cepillarte los dientes. Paso dos: define una acción mínima que dure menos de dos minutos, por ejemplo escribir una frase en tu cuaderno. Paso tres: celebra al terminar, aunque sea con una sonrisa; esa pequeña recompensa le enseña a tu cerebro que vale la pena repetirlo.",
      "Paso cuatro: registra tu avance. Marca una X en un calendario cada día que lo cumplas. Ver una cadena de marcas te motiva a no romperla. Cuando la acción mínima ya sea natural, puedes aumentarla poco a poco."
    ]
  },
  {
    titulo: "Diseña tu entorno para que el hábito sea fácil",
    categoria: "Hábitos",
    fecha: "2026-10-05",
    resumen: "Cuando lo bueno está a la mano y lo que distrae queda lejos, necesitas menos fuerza de voluntad.",
    contenido: [
      "Solemos culparnos por no cumplir un hábito, cuando muchas veces el problema es el entorno. Si el libro está guardado en un cajón y el celular está en tu mano, ya sabes qué va a ganar.",
      "Haz que la acción buena sea fácil y visible: deja la ropa de ejercicio lista la noche anterior, pon el libro sobre tu almohada, prepara tu botella de agua en el escritorio. Cada obstáculo que quitas ahorra energía mental.",
      "Y haz lo contrario con lo que te distrae: desinstala aplicaciones que te quitan tiempo, apaga notificaciones o deja el teléfono en otra habitación mientras estudias. No dependas de resistir la tentación cuando puedes quitarla del camino."
    ]
  },
  {
    titulo: "Nunca falles dos veces seguidas",
    categoria: "Constancia",
    fecha: "2026-09-28",
    resumen: "Un día perdido no arruina nada. Lo que pesa es abandonar la rutina por varios días.",
    contenido: [
      "Tarde o temprano ocurrirá: te enfermas, tienes un día pesado en el trabajo o simplemente no tienes ganas, y rompes tu racha. En ese momento aparece el pensamiento más dañino: ya lo arruiné, mejor empiezo la próxima semana.",
      "Una regla sencilla puede salvarte: nunca falles dos veces seguidas. Perder un día es normal y no define nada. Lo que sí debilita un hábito es dejar que un día perdido se convierta en tres, en una semana, en un abandono.",
      "Si hoy no pudiste hacer la versión completa, haz la versión mínima: diez minutos en lugar de una hora, una página en lugar de un capítulo. Lo importante es mantener viva la identidad de alguien que no se rinde, incluso en los días difíciles."
    ]
  },
  {
    titulo: "La motivación te arranca, la disciplina te sostiene",
    categoria: "Disciplina",
    fecha: "2026-09-21",
    resumen: "Esperar a sentirte motivado es un mal plan. Aprende a avanzar incluso cuando no hay ganas.",
    contenido: [
      "La motivación es como una chispa: aparece después de ver un video inspirador o de terminar una conversación con alguien que admiras, y se va con la misma rapidez. Si tus avances dependen de ella, vas a avanzar solo en los días buenos.",
      "La disciplina funciona distinto. Es decidir de antemano qué vas a hacer y cuándo, sin consultarlo con tu estado de ánimo. Quien entrena a las seis de la mañana no siempre tiene ganas; simplemente ya decidió que a esa hora entrena.",
      "Usa la motivación para empezar y la disciplina para continuar. Y recuerda algo útil: muchas veces las ganas llegan después de empezar, no antes. Prueba con la regla de los cinco minutos: comienza solo cinco, y si luego quieres parar, puedes hacerlo."
    ]
  },
  {
    titulo: "Trabajar duro no es trabajar sin descanso",
    categoria: "Trabajo duro",
    fecha: "2026-09-14",
    resumen: "El trabajo duro que rinde combina enfoque profundo, tareas difíciles y descanso a propósito.",
    contenido: [
      "Se suele confundir trabajar duro con estar ocupado todo el día. Pero responder mensajes, saltar entre pestañas y hacer tareas fáciles para sentir que avanzas no es esfuerzo real; es movimiento sin dirección.",
      "El trabajo duro que da resultados es el que enfrenta lo difícil con atención total: estudiar ese tema que no entiendes, practicar la habilidad que todavía te cuesta, terminar lo que lleva días postergado. Reserva un bloque de tiempo, silencia las distracciones y concéntrate en una sola cosa.",
      "Y no olvides descansar. Dormir bien, comer a tus horas y hacer pausas cortas no es pereza: es lo que te permite sostener el esfuerzo durante meses. Quien se agota en dos semanas no trabajó más duro, solo trabajó peor. Pensar en el largo plazo es parte de esforzarse bien."
    ]
  }
];