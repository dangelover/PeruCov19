let CanvasLinea = document.getElementById("graficaLinea").getContext("2d");
let CanvasBarras = document.getElementById("graficaBarras").getContext("2d");
let canvasVacunateDepartamentos = document
  .getElementById("canvasVacunateDepartamentos")
  .getContext("2d");
let canvasDeathDepartamentos = document
  .getElementById("canvasDeathDepartamentos")
  .getContext("2d");
const departamentos = document.querySelector("#departamentos");
// const analisis = document.querySelector("#verAnalisis");
const verDatos = document.querySelector("#verDatos");
const verRanking = document.querySelector("#verRanking");
const verRatio = document.querySelector("#verRatio");
const datosContent = document.querySelector("#datosContent");

verDatos.addEventListener("click", cambiarDatos);
verRanking.addEventListener("click", cambiarRanking);
verRatio.addEventListener("click", cambiarRatio);
function cambiarRatio() {
  const url = "https://6082367a827b350017cfbe93.mockapi.io/Coronavirus";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarRatio(resultado));
}
function mostrarRatio(ratio) {
  datosRanking = document.getElementById("datosRanking").value;
  ratio.forEach((ratios) => {
    if (ratios.id === datosRanking) {
      let label = Object.keys(ratios.RatioDep);
      let arrayRanking = Object.values(ratios.RatioDep);
      console.log(label);
      console.log(arrayRanking);
      chart2.data.datasets[0].label = ratios.Tipo.tipo4;
      chart2.data.labels = label;
      chart2.data.datasets[0].data = arrayRanking;
      chart2.update();
    }
  });
}
function cambiarRanking() {
  const url = "https://6082367a827b350017cfbe93.mockapi.io/Coronavirus";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarRanking(resultado));
}
function mostrarRanking(resultado) {
  datosRanking = document.getElementById("datosRanking").value;
  resultado.forEach((elements) => {
    if (elements.id === datosRanking) {
      let label = Object.keys(elements.Departamento);
      let arrayRanking = Object.values(elements.Departamento);
      console.log(label);
      console.log(arrayRanking);
      chart2.data.datasets[0].label = elements.Tipo.tipo3;
      chart2.data.labels = label;
      chart2.data.datasets[0].data = arrayRanking;
      chart2.update();
    }
  });
}
function cambiarDatos() {
  const url = "https://6082367a827b350017cfbe93.mockapi.io/Coronavirus";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarGrafica(resultado));
}
function mostrarGrafica(data) {
  datos = document.getElementById("datos").value;
  data.forEach((elemetos) => {
    if (elemetos.id === datos) {
      console.log(elemetos);
      let infoData = {
        enero: elemetos.Mes.enero,
        febrero: elemetos.Mes.febrero,
        marzo: elemetos.Mes.marzo,
        abril: elemetos.Mes.abril,
        mayo: elemetos.Mes.mayo,
        junio: elemetos.Mes.junio,
        julio: elemetos.Mes.julio,
        agosto: elemetos.Mes.agosto,
      };
      // console.log(infoData);
      let mostrarDatos = Object.values(infoData);
      let mostrarDatos2 = Object.values(elemetos.Mes_2020);
      // console.log(mostrarDatos);
      chart.data.datasets[0].label = elemetos.Tipo.tipo2;
      chart.data.datasets[1].label = elemetos.Tipo.tipo1;
      chart.data.datasets[0].data = mostrarDatos;
      chart.data.datasets[1].data = mostrarDatos2;
      chart.update();
      if (datos == 3) {
        document.getElementById("verAnalisis").style.display = "block";
        document.getElementById("verAnalisis").classList.add =
          'class="btn btn-success';
        document.getElementById("analisis").innerHTML = `
        <div class="container">
          <div class="row">
              <div class="col-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">ANALISIS DE MUERTES DESPUES DE LA VACUNA CON RESPECTO A LOS
                              INFECTADOS (2021)</h5>
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Infectados</th>
                                      <th scope="col">Muertes</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1108474</td>
                                      <td>103818</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p class="card-text">Mediante los datos mostrados en Perucov basados en los datos
                              proporcionados por MINSA, el 9,36 % de las personas infectadas mueren a causa
                              del COVID 19</p>
                          <p class="card-text">En el año 2021 se muestra la 2da ola de COVID-19 debido a que
                              las resticciones establecidos por el gobierno Peruano disminuyeron, ante ello,
                              el lanzamiento de vacunas para el COVID-19 hacia los peruanos hizo que la curva
                              de muertes disminuyera en un 20,8% e infectados en 14,4% desde abril hasta fines
                              del mes de JULIO.</p>
                          <p class="card-text">Las vacunas hicieron posible que las personas se sientan mas
                              seguras,e hizo posible la reduccion del contagio y las muertes en Lima como en
                              las otras regiones del Peru</p>
                      </div>
                  </div>
              </div>
              <div class="col-6">
                  <div class="card" style="width: 18rem;">
                      <div class="card-body">
                          <h5 class="card-title">ANALISIS DE MUERTES ANTES DE LA VACUNA CON RESPECTO A LOS
                              INFECTADOS (2020)</h5>
                          <table class="table">
                              <thead>
                                  <tr>
                                      <th scope="col">Infectados</th>
                                      <th scope="col">Muertes</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr>
                                      <td>1024175</td>
                                      <td>93554</td>
                                  </tr>
                              </tbody>
                          </table>
                          <p class="card-text">Mediante los datos mostrados en Perucov basados en los datos
                              proporcionados por MINSA, el 9,13 % de las personas infectadas mueren a causa
                              del COVID 19</p>
                          <p class="card-text">En el año 2020 se redujeron las muertes por COVID-19 debio a
                              las cuarentena y restricciones establecidos por el Gobierno Peruano, en la cual,
                              desde el mes de agosto hasta diciembre de este años hubo una disminucion de
                              infectados en un 19,9% y una disminucion de 21% con respecto a las muertes</p>
                          <p class="card-text">La region con mayor crecimiento de infeccion y muerte es Lima,
                              debido a la gran concentracion de personas en aquel lugar y la gran necesidad de
                              obtener dinero para satisfacer sus necesidades basicas.</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
        `;
      }
      if (datos === 1) {
        console.log("dasda");
      }
    }
  });
}

var chart = new Chart(CanvasLinea, {
  type: "line",
  data: {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
    ],
    datasets: [
      {
        label: "Infectados 2021",
        backgroundColor: [
          "#2C4A2C",
          "#2F6F2F",
          "#2A8A2A",
          "#28A028",
          "#24B224",
          "#10E010",
        ],
        data: [133367, 195701, 235153, 242192, 148224, 88730, 50414, 14693],
      },
      {
        label: "Infectados 2020",
        backgroundColor: [
          "#B74E40",
          "#E94C37",
          "#E53E27",
          "#EA2A0F",
          "#F0280C",
          "#F93519",
        ],
        data: [0, 0, 1317, 46499, 131503, 121535, 143954, 243193],
      },
    ],
  },
});
console.log(chart);

var chart2 = new Chart(CanvasBarras, {
  type: "bar",
  data: {
    labels: [
      "Lima",
      "Ancash",
      "Arequipa",
      "Callao",
      "La Libertad",
      "Piura",
      "Junin",
      "Cusco",
      "Cajamarca",
      "Lambayeque",
      "Ica",
      "San Martin",
      "Loreto",
      "Puno",
      "Huanuco",
      "Ayacucho",
      "Ucayali",
      "Amazonas",
      "Tacna",
      "Moquegua",
      "Apurimac",
      "Tumbes",
      "Huancavelica",
      "Pasco",
      "Madre de Dios",
    ],
    datasets: [
      {
        label: "Infectados",
        backgroundColor: [
          "#2C4A2C",
          "#2F6F2F",
          "#2A8A2A",
          "#28A028",
          "#24B224",
          "#10E010",
        ],
        data: [
          929028, 751019, 111833, 98806, 85951, 84924, 82461, 71140, 64233,
          60169, 56976, 47755, 44520, 37654, 34901, 31918, 30891, 29303, 28757,
          25614, 18016, 15750, 15315, 13708,
        ],
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
var chartVacunateDep = new Chart(canvasVacunateDepartamentos, {
  type: "line",
  data: {
    labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Vacunados 2021",
        backgroundColor: [
          "#2C4A2C",
          "#2F6F2F",
          "#2A8A2A",
          "#28A028",
          "#24B224",
          "#10E010",
        ],
        data: [4553, 5288, 5419, 17679, 29244, 59101],
      },
    ],
  },
});
var chartDeathDep = new Chart(canvasDeathDepartamentos, {
  type: "line",
  data: {
    labels: ["Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
    datasets: [
      {
        label: "Fallecidos 2021",
        backgroundColor: [
          "#B74E40",
          "#E94C37",
          "#E53E27",
          "#EA2A0F",
          "#F0280C",
          "#F93519",
        ],
        data: [81, 88, 152, 161, 15, 4],
      },
    ],
  },
});

const verDepartamento = document.querySelector("#verDepartamento");
verDepartamento.addEventListener("click", cambiarRegion);
function cambiarRegion() {
  regiones = document.getElementById("regiones").value;
  const url = "https://6082367a827b350017cfbe93.mockapi.io/Covid19";
  fetch(url)
    .then((respuesta) => respuesta.json())
    .then((resultado) => mostrarHTML(resultado));
}
function mostrarHTML(datos) {
  const contenidoDiv = document.createElement("div");
  regiones = document.getElementById("regiones").value;
  contenidoDiv.classList.add("card");
  document.getElementById("canvasVacunateDepartamentos").style.display =
    "block";
  document.getElementById("canvasDeathDepartamentos").style.display = "block";
  limpiarHtml();
  let html = "";
  datos.forEach((info) => {
    if (info.id == regiones) {
      console.log(info.Vacunados_Mes.febrero);
      html += `
        <div class="card-body">
          <h5 class="card-title">${info.Departamento}</h5>
          <table class="table">
            <thead>
              <tr> 
              <th scope="col">Mes</th>
              <th scope="col">Vacunados 1° Dosis</th>
              <th scope="col">Vacunados 2° Dosis</th>
              <th scope="col">Vacunados</th>
              <th scope="col">Muertes</th>
              <th scope="col">Año</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Febrero</td>
                <td>${info.Vacunados_Mes.vac_1.febrero}</td>
                <td>${info.Vacunados_Mes.vac_2.febrero}</td>
                <td>${info.Vacunados_Mes.febrero}</td>
                <td>${info.Fallecidos_Mes.febrero}</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Marzo</td>
                <td>${info.Vacunados_Mes.vac_1.marzo}</td>
                <td>${info.Vacunados_Mes.vac_2.marzo}</td>
                <td>${info.Vacunados_Mes.marzo}</td>
                <td>${info.Fallecidos_Mes.marzo}</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Abril</td>
                <td>${info.Vacunados_Mes.vac_1.abril}</td>
                <td>${info.Vacunados_Mes.vac_2.abril}</td>
                <td>${info.Vacunados_Mes.abril}</td>
                <td>${info.Fallecidos_Mes.abril}</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Mayo</td>
                <td>${info.Vacunados_Mes.vac_1.mayo}</td>
                <td>${info.Vacunados_Mes.vac_2.mayo}</td>
                <td>${info.Vacunados_Mes.mayo}</td>
                <td>${info.Fallecidos_Mes.mayo}</td>
                <td>2021</td>
              </tr>
              <tr> 
                <td>Junio</td>
                <td>${info.Vacunados_Mes.vac_1.junio}</td>
                <td>${info.Vacunados_Mes.vac_2.junio}</td>
                <td>${info.Vacunados_Mes.junio}</td>
                <td>${info.Fallecidos_Mes.junio}</td>
                <td>2021</td>
              </tr>
              <tr>
                <td>Julio</td>
                <td>${info.Vacunados_Mes.vac_1.julio}</td>
                <td>${info.Vacunados_Mes.vac_2.julio}</td>
                <td>${info.Vacunados_Mes.julio}</td>
                <td>${info.Fallecidos_Mes.julio}</td>
                <td>2021</td>
              </tr>
              
            </tbody>
          </table>
          <p class="card-text">${info.infoDep}</p>
          <h6 class="card-title">Analisis del Departamento ${info.Departamento}</h6>
          <p class="card-text">${info.analisisDep}</p>
        </div>
    
    
    `;
      let arrayVacunateRanking = Object.values(info.Vacunados_Mes);
      let arrayDeathRanking = Object.values(info.Fallecidos_Mes);
      chartVacunateDep.data.datasets[0].data = arrayVacunateRanking;
      chartVacunateDep.update();
      chartDeathDep.data.datasets[0].data = arrayDeathRanking;
      chartDeathDep.update();
    }
  });
  contenidoDiv.innerHTML = html;
  departamentos.appendChild(contenidoDiv);
}
function limpiarHtml() {
  //forma lenta
  //contenedorCarrito.innerHTML = '';
  //si ese contenedorCarrito tiene al menos un elemento dentro
  //este codigo se sigue ejecutando y una vez que es limpiado todo el html
  //dentro del contenedor ya no se ejecuta
  //mientras haya un hijo, por lo tanto el elemento padre el div va a eliminar un hijo por el primero
  while (departamentos.firstChild) {
    departamentos.removeChild(departamentos.firstChild);
  }
}
