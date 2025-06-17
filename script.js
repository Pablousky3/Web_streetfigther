$(document).ready(function() {
    let currentIndex = 1; // Empieza con la segunda imagen centrada
    const items = $('.carousel-item');
    const itemCount = items.length;

    function updateCarousel() {
        items.removeClass('active');
        $('.carousel').css('transform', `translateX(-${currentIndex * 100}%)`);
        items.eq(currentIndex).addClass('active');
    }

    function showNextItem() {
        currentIndex = (currentIndex + 1) % itemCount;
        updateCarousel();

        // Reinicia la posición del carrusel cuando llegue al final
        if (currentIndex === 0) {
            setTimeout(() => {
                $('.carousel').css('transition', 'none');
                $('.carousel').css('transform', 'translateX(-100%)');
                items.eq(0).addClass('active');
                currentIndex = 1;
                setTimeout(() => {
                    $('.carousel').css('transition', 'transform 0.5s ease');
                }, );
            }, 6000);
        }
    }

    function showPrevItem() {
        currentIndex = (currentIndex - 1 + itemCount) % itemCount;
        updateCarousel();
    }

    items.eq(currentIndex).addClass('active'); // Marca la imagen inicial como activa

    // Añade el evento de clic a cada imagen
    items.on('click', function() {
        const clickedIndex = items.index(this);
        currentIndex = clickedIndex;
        updateCarousel();
    });

    // Añade los eventos de clic a los botones
    $('.carousel-button.next').on('click', showNextItem);
    $('.carousel-button.prev').on('click', showPrevItem);

    setInterval(showNextItem, 6000);

    
    $('.menu-toggle').click(function () {
    $('.nav-links').toggleClass('active');
    });

        $('.nav-links a').on('click', function () {
    $('.nav-links').removeClass('active');
    });

        $('.nav-links a').on('click', function (e) {
    e.preventDefault(); // Evita el salto inmediato
    const target = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(target).offset().top - 60 // Ajusta si hay header fijo
    }, 600); // Duración en milisegundos

    $('.nav-links').removeClass('active'); // Cierra el menú
});




});

document.addEventListener('scroll', function() {
    const secciones = document.querySelectorAll('.seccion-animada');
    const alturaPantalla = window.innerHeight;
  
    secciones.forEach(function(seccion) {
      const posicion = seccion.getBoundingClientRect().top;
  
      if (posicion < alturaPantalla) {
        seccion.classList.add('visible');
      }
    });
  });



// pagina selector personajes

let player1Selected = false;
let player2Selected = false;



function selectCharacter(character) {
    if (!player1Selected) {
        updatePlayerStats('player1', character);
        player1Selected = true;
    } else if (!player2Selected) {
        updatePlayerStats('player2', character);
        player2Selected = true;
    }

    if (player1Selected && player2Selected) {
        document.getElementById('ready-button').disabled = false;
    }
}

// $('.btn-x1').on('click', );
// $('.carousel-button.prev').on('click', showPrevItem);


function updatePlayerStats(player, character) {
    const playerImg = document.getElementById(`${player}-img`);
    const playerInfo = document.getElementById(`${player}-info`);
    let characterName, characterImage, characterStats;
    
    document.getElementById(`boton-x${player === 'player1' ? '1' : '2'}`).style.display = "block";


    switch(character) {
        case 'james':
            characterName = "Blanka";
            characterImage = "images/Personajes/G.gif";
            characterStats = { Fuerza: 80, Velocidad: 70, Vida: 60 };
            break;
        case 'emily':
            characterName = "Cammy";
            characterImage = "images/Personajes/H.gif";
            characterStats = { Fuerza: 60, Velocidad: 80, Vida: 70 };
            break;
        case 'william':
            characterName = "Chunli";
            characterImage = "images/Personajes/F.gif";
            characterStats = { Fuerza: 90, Velocidad: 60, Vida: 50 };
            break;
        case 'olivia':
            characterName = "Dhalsim";
            characterImage = "images/Personajes/E.gif";
            characterStats = { Fuerza: 50, Velocidad: 90, Vida: 80 };
            break;
        case 'michael':
            characterName = "Guile";
            characterImage = "images/Personajes/c.gif";
            characterStats = { Fuerza: 70, Velocidad: 70, Vida: 70 };
            break;
        case 'charlotte':
            characterName = "Ken";
            characterImage = "images/Personajes/d.gif";
            characterStats = { Fuerza: 60, Velocidad: 60, Vida: 90 };
            break;
        case 'benjamin':
            characterName = "Ryu";
            characterImage = "images/Personajes/a.gif";
            characterStats = { Fuerza: 85, Velocidad: 65, Vida: 55 };
            break;
        case 'sophia':
            characterName = "Zangief";
            characterImage = "images/Personajes/b.gif";
            characterStats = { Fuerza: 55, Velocidad: 85, Vida: 75 };
            break;
        
    }

    playerImg.src = characterImage;
    playerImg.alt = characterName;
    playerInfo.innerHTML = `
        <h3>${characterName}</h3>
        <p>Fuerza: <div class="stat-bar"><div class="stat-fill fuerza" style="width: ${characterStats.Fuerza}%;"></div></div></p>
        <p>Velocidad: <div class="stat-bar"><div class="stat-fill velocidad" style="width: ${characterStats.Velocidad}%;"></div></div></p>
        <p>Vida: <div class="stat-bar"><div class="stat-fill vida" style="width: ${characterStats.Vida}%;"></div></div></p>
    `;
}

function ready() {
    alert("¡READY!");
}

function deselectCharacter(player) {
  const playerImg = document.getElementById(`${player}-img`);
  const playerInfo = document.getElementById(`${player}-info`);
  const botonX = document.getElementById(`boton-x${player === 'player1' ? '1' : '2'}`);

  playerImg.src = "";
  playerImg.alt = "";
  playerInfo.innerHTML = "";
  botonX.style.display = "none";

  if (player === 'player1') {
    player1Selected = false;
  } else {
    player2Selected = false;
  }

  document.getElementById('ready-button').disabled = true;
}
