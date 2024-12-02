function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}





document.addEventListener('DOMContentLoaded', function() {

    

    const links = document.querySelectorAll('a[href^="#"]');
    const volverArribaBtn = document.getElementById('volverArriba');
            
 links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            smoothScroll(targetElement, 1000);
        }
    });
});

function smoothScroll(target, duration) {
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

volverArribaBtn.addEventListener('click', function() {
    smoothScroll(document.body, 1000);
});

function toggleVolverArribaBtn() {
    if (window.pageYOffset > 300) {
        volverArribaBtn.classList.add('visible');
    } else {
        volverArribaBtn.classList.remove('visible');
    }
}

window.addEventListener('scroll', toggleVolverArribaBtn);
toggleVolverArribaBtn();


    // Create indicators
    items.forEach((_, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicator.addEventListener('click', () => showItem(index));
        indicators.appendChild(indicator);
    });

    const indicatorDots = indicators.querySelectorAll('.indicator');

    function showItem(index) {
        const itemWidth = items[0].offsetWidth;
        carousel.style.transform = `translateX(-${index * itemWidth}px)`;
        currentIndex = index;
        updateIndicators();
    }

    function updateIndicators() {
        indicatorDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    });

    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    });

    // Responsive behavior
    function updateItemsPerView() {
        const viewportWidth = window.innerWidth;
        if (viewportWidth >= 1024) {
            items.forEach(item => item.style.flex = '0 0 33.333%');
        } else if (viewportWidth >= 768) {
            items.forEach(item => item.style.flex = '0 0 50%');
        } else {
            items.forEach(item => item.style.flex = '0 0 100%');
        }
        showItem(currentIndex);
    }

    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    carousel.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    carousel.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        if (touchStartX - touchEndX > 50) {
            // Swipe left
            currentIndex = (currentIndex + 1) % items.length;
        } else if (touchEndX - touchStartX > 50) {
            // Swipe right
            currentIndex = (currentIndex - 1 + items.length) % items.length;
        }
        showItem(currentIndex);
    }

    window.addEventListener('resize', updateItemsPerView);
    updateItemsPerView();
    updateIndicators();
}

);

/*titulo*/
document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.animated-title');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollPercent = Math.min(scrollTop / window.innerHeight, 1);
        
        // Efecto de desvanecimiento
        title.style.opacity = 1 - scrollPercent;
        
        // Efecto de movimiento
        title.style.transform = `translateY(${scrollPercent * -50}px)`;

        // Efecto de desenfoque
        title.style.filter = `blur(${scrollPercent * 10}px)`;

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }, false);

}



);

document.addEventListener('DOMContentLoaded', function() {
    const visitasElement = document.getElementById('visitas');
    const arbolesSalvadosElement = document.getElementById('arboles-salvados');
    const plantarArbolButton = document.getElementById('plantar-arbol');

    

    // Calcula el número inicial de árboles "salvados"
    let arbolesSalvados = Math.floor(numeroVisita / 100);
    arbolesSalvadosElement.textContent = arbolesSalvados;

    // Función para plantar un árbol
    function plantarArbol(event) {
        event.preventDefault();
        arbolesSalvados++;
        arbolesSalvadosElement.textContent = arbolesSalvados;
    }

    // Añade el evento de clic al botón
    plantarArbolButton.addEventListener('click', plantarArbol);
});

//FOOTER INTERACTIVO

const teamMembers = [
            { id: 1, name: "Jelibeth Ramirez Vilchez", role: "Diseñadora de UX/UI", bio: "https://yakuchasqa.github.io/web/" },
            { id: 2, name: "Ruben Sinche Rojas", role: "Desarrollador Frontend", bio: "Construyendo interfaces eco-amigables con código limpio." },
            { id: 3, name: "Ximena Chihuan Cárdenas", role: "Analista de Comunicación", bio: "Ayudando en la creación de contenido y en la coordinación de comunicaciones internas y externas." },
            { id: 4, name: "Karol Balbin Puñez", role: "Genrente de redacción", bio: "Dirigiendo el proyecto y asegurando su éxito." },
            { id: 5, name: "Andersen Aguilar Enriquez", role: "Asistente de Documentación", bio: "Apoyando en la elaboración y organización de manuales y documentación de proyecto." },
            { id: 6, name: "Hilari Mishel Zerpa Salazar", role: "Apoyo en Gestión de proyectos", bio: "Colaborando en la planificación y seguimiento de las tareas." },
            { id: 7, name: "Michael Chancan Alania", role: "Analista de Investigación", bio: "Realizando estudios y recopilando información relevante." }
        ];

        const teamGrid = document.getElementById('team-grid');
        const memberDetails = document.getElementById('member-details');

        function createTeamMemberElement(member) {
            const memberElement = document.createElement('div');
            memberElement.className = 'team-member';
            memberElement.innerHTML = `
                <div class="member-name">${member.name}</div>
                <div class="member-role">${member.role}</div>
            `;
            memberElement.addEventListener('click', () => showMemberDetails(member));
            return memberElement;
        }

        function showMemberDetails(member) {
            memberDetails.innerHTML = `
                <h3>${member.name}</h3>
                <p><strong>${member.role}</strong></p>
                <p>${member.bio}</p>
                <button class="close-btn">Cerrar</button>
            `;
            memberDetails.classList.add('active');
            memberDetails.querySelector('.close-btn').addEventListener('click', hideMemberDetails);
        }

        function hideMemberDetails() {
            memberDetails.classList.remove('active');
        }

        // Inicializar el footer
        teamMembers.forEach(member => {
            teamGrid.appendChild(createTeamMemberElement(member));
        });

//juego
document.querySelector('.recycling-game-entry #playButton').addEventListener('click', function(e) {
    e.preventDefault();
    // Reemplazar 'URL_DEL_JUEGO' con la URL real del juego
    window.location.href = 'JueGod/juego.html';
});

document.querySelector('.recycling-game-entry').addEventListener('mousemove', function(e) {
    const gameEntry = this.querySelector('.game-entry');
    const rect = this.getBoundingClientRect();
    const xAxis = (rect.width / 2 - (e.clientX - rect.left)) / 50;
    const yAxis = (rect.height / 2 - (e.clientY - rect.top)) / 50;
    gameEntry.style.transform = `perspective(1000px) rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

document.querySelector('.recycling-game-entry').addEventListener('mouseleave', function() {
    const gameEntry = this.querySelector('.game-entry');
    gameEntry.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
});   