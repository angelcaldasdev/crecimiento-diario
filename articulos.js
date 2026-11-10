/* ==========================================================
   ARTÍCULOS DE CRECIMIENTO DIARIO
   Para publicar uno nuevo: copia un bloque { ... }, pégalo
   AL INICIO de la lista, cambia sus datos y guarda.
   - fecha: formato AAAA-MM-DD
   - categoria: "Hábitos", "Mentalidad" o "Productividad"
     (si escribes una categoría nueva, el filtro se crea solo)
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
  }
];