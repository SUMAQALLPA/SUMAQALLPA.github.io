document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel-inner');
    const items = carousel.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    let currentIndex = 0;

    function showItem(index) {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % totalItems;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        showItem(currentIndex);
    }

    document.querySelector('.carousel-control-next').addEventListener('click', function(e) {
        e.preventDefault();
        nextItem();
    });

    document.querySelector('.carousel-control-prev').addEventListener('click', function(e) {
        e.preventDefault();
        prevItem();
    });

    // Auto-play (opcional)
    setInterval(nextItem, 5000);
});

function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
