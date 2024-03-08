document.addEventListener("DOMContentLoaded", function () {
  // Datos de la tabla
  var data = [
    {
      tiempo: "Trapassato prossimo",
      usos: "Expresar acciones que ocurrieron antes de otra acción en el pasado. Se forma con el imperfecto del verbo 'avere' o 'essere' y el participio pasado del verbo principal.",
      ejemplos: ["Avevo mangiato (Había comido)", "Ero venuto (Había venido)"],
    },
    {
      tiempo: "Passato remoto",
      usos: "Expresar acciones que ocurrieron en el pasado lejano. Se utiliza principalmente en la lengua escrita o en registros formales.",
      ejemplos: ["Mangiò (Él/Ella comió)", "Partì (Él/Ella partió)"],
    },
    {
      tiempo: "Passato prossimo",
      usos: "Expresar acciones completadas en un momento específico en el pasado. Se forma con el presente del verbo 'avere' o 'essere' y el participio pasado del verbo principal.",
      ejemplos: ["Ho mangiato (He comido)", "Sei venuto (Has venido)"],
    },
    {
      tiempo: "Imperfetto",
      usos: "Describir acciones habituales o estados en el pasado. También se utiliza para describir acciones en curso o situaciones que se repetían en el pasado.",
      ejemplos: ["Io mangiavo (Yo comía)", "Tu studiavi (Tú estudiabas)"],
    },
    {
      tiempo: "Presente",
      usos: "Expresar acciones habituales o verdades generales. También se usa para hablar de acciones que están sucediendo en el momento actual.",
      ejemplos: ["Io mangio (Yo como)", "Tu studi (Tú estudias)"],
    },
    {
      tiempo: "Futuro semplice",
      usos: "Expresar acciones que ocurrirán en el futuro.",
      ejemplos: ["Mangerò (Comeré)", "Partirai (Te irás)"],
    },
    {
      tiempo: "Condizionale presente",
      usos: "Expresar acciones hipotéticas en el presente o futuro.",
      ejemplos: ["Mangerei (Comería)", "Partiresti (Te irías)"],
    },
    {
      tiempo: "Condizionale Composto o passato",
      usos: "Expresar acciones hipotéticas en el pasado.",
      ejemplos: [
        "Avrei mangiato (Habría comido)",
        "Saresti venuto (Habrías venido)",
      ],
    },
  ];

  // Crear tabla
  var table =
    "<table><tr><th>Tiempo Verbal =====> Usos: 🤌</th><th>Ejemplos:</th></tr>";

  data.forEach(function (item) {
    table += "<tr>";
    table +=
      "<td>" + "- " + item.tiempo + "  : " + "  <br> " + item.usos + "</td>";
    table += "<td><ul>";
    item.ejemplos.forEach(function (ejemplo) {
      table += "<li>" + ejemplo + "</li>";
    });
    table += "</ul></td>";
    table += "</tr>";
  });

  table += "</table>";

  document.getElementById("tabla-container").innerHTML = table;
});

document
  .getElementsByClassName("confetti-button")[0]
  .addEventListener("click", () => {
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName("button-wrapper")[0];
    canvas.width = 600;
    canvas.height = 600;

    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });
