$(document).ready(function() {
  const modo = localStorage.getItem('modo');
  if (modo === 'dark') {
    dark();
  } else {
    light();
  };
});

$('.dark').click( dark =()=>{
    $('html').attr('data-bs-theme','dark');
    $('.dark').addClass('invisible');
    $('.light').removeClass('invisible');
    $('.light').addClass('text-light');
    localStorage.setItem('modo', 'dark');
});

$('.light').click( light=()=>{
    $('html').attr('data-bs-theme','light');
    $('.light').addClass('invisible');
    $('.dark').removeClass('invisible');
    localStorage.setItem('modo', 'light');
});

const API_URL = 'https://643478b3582420e2317ceb41.mockapi.io';
const APIRESPONSE = document.querySelector('#apiresponse');

fetch(`${API_URL}/Teams`)
  .then(team => team.json())
  .then(equipo => {
        const todoElEquipo = equipo.map(equipo => `<div class="card" style="width: 18rem;">
        <img src="./img/TEAMIT-serviciosinfraestructura.png" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${equipo.nombre} ${equipo.apellido}</h5>
          <p class="card-text">${equipo.data}</p>
          <a href="${equipo.linkedin}" class="btn btn-primary" target="_blank">LinkedIn</a>
        </div>
      </div>`);
        APIRESPONSE.innerHTML = todoElEquipo;
        console.log(APIRESPONSE);
  }); 

