const listaLibrosHarryPotter = [
    {
      numero: "1",
      nombre: "La Piedra Filosofal",
      ano: 1997,
      foto: "./hp1.jpg"
    },
    {
        numero: "2",
        nombre: "La Camara Secreta",
        ano: 1998,
        foto: "./hp2.jpg"
    },
    {
        numero: "3",
        nombre: "El Prisionero de Azkaban",
        ano: 1999,
        foto: "./hp4.jpg"
    },
    {
        numero: "4",
        nombre: "El Cáliz de Fuego",
        ano: 2001,
        foto: "./hp3.jpg"
    },
    {
        numero: "5",
        nombre: "La Orden del Fénix.",
        ano: 2003,
        foto: "./hp5.jpg"
    },
    {
        numero: "6",
        nombre: "El Misterio de Príncipe",
        ano: 2006,
        foto: "./hp6.jpg"
    },
    {
        numero: "7",
        nombre: "Las Reliquias de la Muerte",
        ano: 2007,
        foto: "./hp7.jpg"
    },
    {
        numero: "8",
        nombre: "El legado maldito",
        ano: 2016,
        foto: "./hp8.jpg"
    },
  ];
  
  

  
  window.onload = function () {
    // Conexión al html
    const lista = document.getElementById("lista");
  
    for (let i = 0; i < listaLibrosHarryPotter.length; i++) {
      // Obtener el estudiante
      const libro = listaLibrosHarryPotter[i];
  
      // Crear un elemento de tipo li
      const nuevolibro = `
        <li class="li">
          <p class="num">Número:<span class="numero"> ${libro.numero}</span></p>
          <p class="num">Nombre:<span class="numero"> ${libro.nombre}</span></p>
          <p class="num">Año: <span class="numero"> ${libro.ano}</span></p>
          <img src=${libro.foto}>
        </li>
      `;
  
      lista.innerHTML = lista.innerHTML + nuevolibro;
    }
  };