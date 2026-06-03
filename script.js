// ===============================
// FIFA WORLD CUP HISTORY
// ===============================

let worldCups = [];

const yearSelector =
document.getElementById("yearSelector");

const groupsContainer =
document.getElementById("groupsContainer");

const bracketContainer =
document.getElementById("bracketContainer");

const timelineContainer =
document.getElementById("timelineContainer");

let statsChart = null;

// ===============================
// LOADER
// ===============================

window.addEventListener("load", () => {

setTimeout(() => {

document.getElementById("loader").style.display = "none";

}, 2500);

});

// ===============================
// CAMBIO DE SECCIONES
// ===============================

function showSection(sectionId){

const sections =
document.querySelectorAll(".content");

sections.forEach(section => {

section.classList.add("hidden");

});

document
.getElementById(sectionId)
.classList
.remove("hidden");

}

// ===============================
// CARGAR DATOS
// ===============================

fetch("data/worldcups.json")

.then(response => response.json())

.then(data => {

worldCups = data;

loadYears();

buildTimeline();

})

.catch(error => {

console.error(error);

});

// ===============================
// CARGAR AÑOS
// ===============================

function loadYears(){

worldCups.forEach(cup => {

const option =
document.createElement("option");

option.value = cup.year;

option.textContent = cup.year;

yearSelector.appendChild(option);

});

}

// ===============================
// EVENTO SELECTOR
// ===============================

yearSelector.addEventListener("change", () => {

const selectedYear =
parseInt(yearSelector.value);

const worldCup =
worldCups.find(
cup => cup.year === selectedYear
);

if(worldCup){

renderWorldCup(worldCup);

}

});

// ===============================
// TIMELINE
// ===============================

function buildTimeline(){

timelineContainer.innerHTML = "";

worldCups.forEach(cup => {

const item =
document.createElement("div");

item.className =
"timeline-item";

item.innerHTML = `
<h4>${cup.year}</h4>
<p>${cup.champion}</p>
`;

item.addEventListener("click", () => {

yearSelector.value = cup.year;

renderWorldCup(cup);

showSection("info");

});

timelineContainer.appendChild(item);

});

}

// ===============================
// RENDER MUNDIAL
// ===============================

function renderWorldCup(cup){

document.getElementById("wcTitle").textContent =
`Mundial ${cup.year}`;

document.getElementById("host").textContent =
cup.host;

document.getElementById("champion").textContent =
cup.champion;

document.getElementById("runnerup").textContent =
cup.runnerup;

document.getElementById("ball").textContent =
cup.ball;

document.getElementById("song").textContent =
cup.song;

document.getElementById("teams").textContent =
cup.teams;

renderGroups(cup.groups);

renderKnockout(cup.knockout);

renderChart(cup.stats);

}

// ===============================
// GRUPOS
// ===============================

function renderGroups(groups){

groupsContainer.innerHTML = "";

groups.forEach(group => {

const card =
document.createElement("div");

card.className =
"group";

let teamsHtml = "";

group.teams.forEach(team => {

teamsHtml += `

<div class="team">

<img
src="https://flagcdn.com/w40/${team.code}.png"
alt="${team.country}">

<span>${team.country}</span>

</div>

`;

});

card.innerHTML = `

<h3>${group.name}</h3>

${teamsHtml}

`;

groupsContainer.appendChild(card);

});

}

// ===============================
// ELIMINATORIAS
// ===============================

function renderKnockout(matches){

bracketContainer.innerHTML = "";

matches.forEach(match => {

const card =
document.createElement("div");

card.className =
"match";

card.innerHTML = `

<h4>${match.round}</h4>

<p>${match.home}</p>

<p>vs</p>

<p>${match.away}</p>

`;

bracketContainer.appendChild(card);

});

}

// ===============================
// GRAFICO
// ===============================

function renderChart(stats){

const ctx =
document.getElementById("statsChart");

if(statsChart){

statsChart.destroy();

}

statsChart =
new Chart(ctx, {

type: "bar",

data: {

labels: [

"Goles",
"Partidos",
"Asistencia"

],

datasets: [

{

label:
"Estadísticas",

data: [

stats.goals,
stats.matches,
stats.attendance

]

}

]

},

options: {

responsive: true,

plugins: {

legend: {

display: true

}

}

}

});

}

// ===============================
// BUSQUEDA FUTURA
// ===============================

function searchChampion(name){

return worldCups.filter(cup =>

cup.champion
.toLowerCase()
.includes(
name.toLowerCase()
)

);

}

// ===============================
// COMPARADOR FUTURO
// ===============================

function compareWorldCups(year1, year2){

const cup1 =
worldCups.find(
cup => cup.year === year1
);

const cup2 =
worldCups.find(
cup => cup.year === year2
);

return {

first: cup1,

second: cup2

};

}
