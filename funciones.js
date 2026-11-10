/* ==========================================================
   Crecimiento Diario - Lógica de la página
   Usa la lista "listaDeArticulos" definida en articulos.js
   ========================================================== */

// ---------- 1. Frase del día ----------
const frasesMotivadoras = [
  "Un pequeño paso hoy vale más que un gran plan mañana.",
  "No tienes que ser perfecto, solo constante.",
  "Cada día es una nueva oportunidad para empezar de nuevo.",
  "Lo que haces todos los días importa más que lo que haces de vez en cuando.",
  "Tu futuro se construye con lo que decides hoy.",
  "Avanzar despacio sigue siendo avanzar.",
  "La disciplina es un acto de cariño hacia tu yo del futuro."
];

const elementoFrase = document.getElementById("fraseDelDia");
const botonNuevaFrase = document.getElementById("botonNuevaFrase");

// La frase inicial cambia cada día según la fecha
const indiceInicial = Math.floor(Date.now() / 86400000) % frasesMotivadoras.length;
let indiceFraseActual = indiceInicial;

function mostrarFrase() {
  elementoFrase.textContent = frasesMotivadoras[indiceFraseActual];
}

botonNuevaFrase.addEventListener("click", () => {
  indiceFraseActual = (indiceFraseActual + 1) % frasesMotivadoras.length;
  mostrarFrase();
});

// ---------- 2. Utilidades ----------
function formatearFecha(textoFecha) {
  // Se agrega la hora para evitar desfases de zona horaria
  const fecha = new Date(textoFecha + "T00:00:00");
  return fecha.toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });
}

function calcularMinutosDeLectura(parrafos) {
  const totalPalabras = parrafos.join(" ").split(/\s+/).length;
  return Math.max(1, Math.round(totalPalabras / 200)); // ~200 palabras por minuto
}

// ---------- 3. Tarjetas de artículos ----------
const contenedorArticulos = document.getElementById("listaArticulos");
const contenedorFiltros = document.getElementById("filtrosCategorias");
let categoriaSeleccionada = "Todos";

function dibujarArticulos() {
  contenedorArticulos.textContent = ""; // limpiar antes de dibujar

  const articulosFiltrados = listaDeArticulos.filter(
    (articulo) => categoriaSeleccionada === "Todos" || articulo.categoria === categoriaSeleccionada
  );

  articulosFiltrados.forEach((articulo) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = `${articulo.categoria} - ${formatearFecha(articulo.fecha)}`;

    const titulo = document.createElement("h3");
    titulo.textContent = articulo.titulo;

    const resumen = document.createElement("p");
    resumen.textContent = articulo.resumen;

    const botonLeer = document.createElement("button");
    botonLeer.type = "button";
    botonLeer.textContent = "Leer artículo";
    botonLeer.addEventListener("click", () => abrirArticulo(articulo));

    tarjeta.append(meta, titulo, resumen, botonLeer);
    contenedorArticulos.appendChild(tarjeta);
  });
}

// ---------- 4. Filtros por categoría ----------
function dibujarFiltros() {
  // Categorías únicas tomadas de los artículos
  const categorias = ["Todos", ...new Set(listaDeArticulos.map((articulo) => articulo.categoria))];

  categorias.forEach((nombreCategoria) => {
    const boton = document.createElement("button");
    boton.type = "button";
    boton.textContent = nombreCategoria;
    boton.setAttribute("aria-pressed", String(nombreCategoria === categoriaSeleccionada));

    boton.addEventListener("click", () => {
      categoriaSeleccionada = nombreCategoria;
      contenedorFiltros.querySelectorAll("button").forEach((otro) =>
        otro.setAttribute("aria-pressed", String(otro === boton))
      );
      dibujarArticulos();
    });

    contenedorFiltros.appendChild(boton);
  });
}

// ---------- 5. Ventana para leer el artículo ----------
const ventanaArticulo = document.getElementById("ventanaArticulo");
const tituloVentana = document.getElementById("tituloVentana");
const metaVentana = document.getElementById("metaVentana");
const cuerpoVentana = document.getElementById("cuerpoVentana");

function abrirArticulo(articulo) {
  tituloVentana.textContent = articulo.titulo;
  metaVentana.textContent = `${articulo.categoria} - ${formatearFecha(articulo.fecha)} - ${calcularMinutosDeLectura(articulo.contenido)} min de lectura`;
  cuerpoVentana.textContent = "";

  articulo.contenido.forEach((textoParrafo) => {
    const parrafo = document.createElement("p");
    parrafo.textContent = textoParrafo;
    cuerpoVentana.appendChild(parrafo);
  });

  ventanaArticulo.showModal();
}

document.getElementById("botonCerrar").addEventListener("click", () => ventanaArticulo.close());

// Cerrar al hacer clic fuera de la ventana
ventanaArticulo.addEventListener("click", (evento) => {
  if (evento.target === ventanaArticulo) ventanaArticulo.close();
});

// ---------- 6. Inicio ----------
document.getElementById("anioActual").textContent = new Date().getFullYear();
mostrarFrase();
dibujarFiltros();
dibujarArticulos();