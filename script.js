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