const firebaseConfig = {
    apiKey: "AIzaSyB0RHnKGNveZmFlKeNEO2XJGsrMeE0o0Po",
    authDomain: "proyectin-22109.firebaseapp.com",
    projectId: "proyectin-22109",
    storageBucket: "proyectin-22109.firebasestorage.app",
    messagingSenderId: "296657090501",
    appId: "1:296657090501:web:b86bc2bf24d68558dbfdac"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Initialize Firestore
  const db = firebase.firestore();

// Elementos de audio
const correctSound = document.getElementById('correctSound');
const incorrectSound = document.getElementById('incorrectSound');
const gameOverSound = document.getElementById('gameOverSound');
const backgroundMusic = document.getElementById('backgroundMusic');

const wasteItems = [
    { emoji: '📰', name: 'Periódico', bin: 'azul', image: 'images/waste/newspaper.png' },
    { emoji: '🍎', name: 'Manzana podrida', bin: 'marron', image: 'images/waste/rotten-apple.png' },
    { emoji: '💉', name: 'Jeringa', bin: 'rojo', image: 'images/waste/syringe.png' },
    { emoji: '🦾', name: 'Acero', bin: 'amarillo', image: 'images/waste/acero.png' },
    { emoji: '🍼', name: 'Botella de plástico', bin: 'blanco', image: 'images/waste/plastic-bottle.png' },
    { emoji: '🥫', name: 'Lata de conservas', bin: 'amarillo', image: 'images/waste/tin-can.png' },
    { emoji: '💡', name: 'Bombilla', bin: 'verde', image: 'images/waste/light-bulb.png' },
    { emoji: '🥤', name: 'Lata gloria', bin: 'amarillo', image: 'images/waste/lata_gloria.png' },
    { emoji: '👟', name: 'Zapato viejo', bin: 'negro', image: 'images/waste/old-shoe.png' },
    { emoji: '📦', name: 'Caja de cartón', bin: 'azul', image: 'images/waste/cardboard-box.png' },
    { emoji: '🥫', name: 'Latas de conserva', bin: 'amarillo', image: 'images/waste/latas_conserva.png' },
    { emoji: '🥚', name: 'Cáscara de huevo', bin: 'marron', image: 'images/waste/eggshell.png' },
    { emoji: '🔋', name: 'Batería', bin: 'rojo', image: 'images/waste/battery.png' },
    { emoji: '🖇', name: 'Grapas', bin: 'amarillo', image: 'images/waste/grapas.png' },
    { emoji: '🍺', name: 'Botella de cerveza', bin: 'verde', image: 'images/waste/cerveza.png' },
    { emoji: '🏺', name: 'Cerámica', bin: 'negro', image: 'images/waste/ceramica.png' },
    { emoji: '🫙', name: 'Frasco', bin: 'verde', image: 'images/waste/frascovidrio.png' },
    { emoji: '😷', name: 'Mascarilla usada', bin: 'negro', image: 'images/waste/mascarilla.png' },
    { emoji: '📓', name: 'Revistas', bin: 'azul', image: 'images/waste/revistas.png' },
    { emoji: '🔋', name: 'Taper', bin: 'blanco', image: 'images/waste/taperes.webp' },
    { emoji: '🍁', name: 'Hojarasca', bin: 'marron', image: 'images/waste/hojarasca.webp' },
    { emoji: '🔋', name: 'Batería de auto', bin: 'rojo', image: 'images/waste/bateriaauto.png' },
    { emoji: '🧪', name: 'Químicos', bin: 'rojo', image: 'images/waste/botella_reactivo.png' },
    { emoji: '🍶', name: 'Botella de reactivo', bin: 'rojo', image: 'images/waste/botella_reactivo1.png' },
    { emoji: '🖋', name: 'Cartucho de tinta', bin: 'rojo', image: 'images/waste/cartucho_tinta.png' },
    { emoji: '📌', name: 'Clavos', bin: 'amarillo', image: 'images/waste/clavos.png' },
    { emoji: '🥤', name: 'Pedazos de vidrio', bin: 'verde', image: 'images/waste/vidrio.png' },
    { emoji: '🥤', name: 'Restos de piña', bin: 'marron', image: 'images/waste/restos_piña.png' },
    { emoji: '🥤', name: 'Restos de plátano', bin: 'marron', image: 'images/waste/restos_platano.png' },
    { emoji: '🥤', name: 'Restos de zanahoria', bin: 'marron', image: 'images/waste/restos_zanahoria.png' },
    { emoji: '🥤', name: 'Restos de pescado', bin: 'marron', image: 'images/waste/restos_pescado.png' },
    { emoji: '🥤', name: 'Restos de pan', bin: 'marron', image: 'images/waste/restos_pan.png' },
    { emoji: '🥤', name: 'Restos de lechuga', bin: 'marron', image: 'images/waste/restos_lechuga.png' },
    { emoji: '🥤', name: 'Colgadorde ropa', bin: 'blanco', image: 'images/waste/colgador.png' },
    { emoji: '🥤', name: 'Bolsas plastificadas', bin: 'blanco', image: 'images/waste/bolsas_plastico.png' },
    { emoji: '🥤', name: 'Vasos arrugados', bin: 'blanco', image: 'images/waste/vasos_arrugados.png' },
    { emoji: '🥤', name: 'Botella spray', bin: 'blanco', image: 'images/waste/botella_spray.png' },
    { emoji: '🥤', name: 'jarra de plástico', bin: 'blanco', image: 'images/waste/jarra_plastico.png' },
    { emoji: '🥤', name: 'tenedores de plástico', bin: 'blanco', image: 'images/waste/tenedores_plastico.png' },
    { emoji: '🥤', name: 'Jarra de vidrio', bin: 'verde', image: 'images/waste/jarra_vidrio.png' },
    { emoji: '🥤', name: 'Botella de vino', bin: 'verde', image: 'images/waste/vino.png' },
    { emoji: '🥤', name: 'Copa', bin: 'verde', image: 'images/waste/copa_vidrio.png' },
    { emoji: '🥤', name: 'Vaso', bin: 'verde', image: 'images/waste/vaso_vidrio.png' },
    { emoji: '🥤', name: 'Botellas de coca cola', bin: 'verde', image: 'images/waste/botella_vidriococa.png' },
    { emoji: '🥤', name: 'Chicles', bin: 'negro', image: 'images/waste/chicles.png' },
    { emoji: '🥤', name: 'Cepillos', bin: 'negro', image: 'images/waste/cepillos.png' },
    { emoji: '🥤', name: 'Pañuelos utilizados', bin: 'negro', image: 'images/waste/pañuelos.png' },
    { emoji: '🥤', name: 'Colilla de cigarrillo', bin: 'negro', image: 'images/waste/colillas_cigarillo.png' },
    { emoji: '🥤', name: 'Guantes quirúrgicos', bin: 'negro', image: 'images/waste/guantes.png' },
    { emoji: '🥤', name: 'Huevera', bin: 'azul', image: 'images/waste/hueveras.png' },
    { emoji: '🥤', name: 'Rollos de papel higiénico', bin: 'azul', image: 'images/waste/rollos.png' },
    { emoji: '🥤', name: 'Envases de papel', bin: 'azul', image: 'images/waste/papel.png' },
    { emoji: '🥤', name: 'Cajas de cereal', bin: 'azul', image: 'images/waste/cereal.png' },     
    { emoji: '🥤', name: 'Bolsas de papel', bin: 'azul', image: 'images/waste/bolsas_papel.png' },


    
];

const bins = [
    { color: 'rojo', name: 'Residuos peligrosos', emoji: '🔴', image: 'images/bins/red-bin.png' },
    { color: 'azul', name: 'Papel y cartón', emoji: '🔵', image: 'images/bins/blue-bin.png' },
    { color: 'verde', name: 'Vidrio', emoji: '🟢', image: 'images/bins/green-bin.png' },
    { color: 'amarillo', name: 'Metales', emoji: '🟡', image: 'images/bins/yellow-bin.png' },
    { color: 'marron', name: 'Residuos orgánicos', emoji: '🟤', image: 'images/bins/brown-bin.png' },
    { color: 'negro', name: 'No reciclables', emoji: '⚫', image: 'images/bins/black-bin.png' },
    { color: 'blanco', name: 'Plásticos', emoji: '⚪', image: 'images/bins/white-bin.png' },
];

const hangmanStages = [
    'images/hangman/capibara.png',
    'images/hangman/capibara_cabeza.png',
    'images/hangman/capibara_cuerpo.png',
    'images/hangman/capibara_un_brazo.png',
    'images/hangman/capibara_dos_brazos.png',
    'images/hangman/capibara_una_pierna.png',
    'images/hangman/capibara_cuerpo_completo.png',
];
let maxAttempts = 6;
let currentItem;
let attempts = 0;
let score = 0;
let gameOver = false;
let playerName = '';
let difficulty = 'normal';

window.onload = function() {
    document.getElementById('overlay').style.display = 'block'; // Muestra la superposición
    document.getElementById('difficultySelection').classList.remove('hidden'); // Muestra la selección de dificultad
};

function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty;
        document.getElementById('overlay').style.display = 'none';
    document.getElementById('difficultySelection').classList.add('hidden'); // Oculta la selección de dificultad
    newGame(); // Inicia el nuevo juego
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.stop();
}

function newGame() {
if (isSoundOn){
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.play();
}
    currentItem = wasteItems[Math.floor(Math.random() * wasteItems.length)];
    attempts = 0;
    score = 0;
    gameOver = false;
    updateUI();
    document.getElementById('gameOverMessage').classList.add('hidden');
    document.getElementById('playerName').value = ''; // Clear player name input
    document.getElementById('playerRank').textContent = ''; // Clear player rank

}

function updateUI() {
    document.getElementById('scoreValue').textContent = score;
    document.getElementById('wasteImage').src = currentItem.image;
    document.getElementById('wasteImage').alt = currentItem.name;
    document.getElementById('wasteName').textContent = currentItem.name;
    document.getElementById('hangmanImage').src = hangmanStages[attempts];

    if (difficulty === 'dificil') {
        document.getElementById('wasteName').textContent = ''; // Oculta el nombre del residuo
    } else {
        document.getElementById('wasteName').textContent = currentItem.name; // Muestra el nombre del residuo
    }
    const binButtons = document.querySelectorAll('.bin-button span');
    binButtons.forEach((span, index) => {
        if (difficulty === 'dificil') {
            span.textContent = ''; // Oculta el texto del tacho
        } else {
            span.textContent = bins[index].name; // Muestra el texto del tacho
        }
    });

    document.getElementById('hangmanImage').src = hangmanStages[attempts];
}



function handleBinSelection(selectedBin) {
    if (gameOver) return;

    if (selectedBin === currentItem.bin) {
        score++;
        currentItem = wasteItems[Math.floor(Math.random() * wasteItems.length)];
    if (isSoundOn) {    
        const correctSound = document.getElementById('correctSound');
        correctSound.play();
    }
    } else {
        attempts++;
        if (attempts >= maxAttempts) {
            endGame(false);
        }
        // Añadir una pequeña animación de sacudida al contenedor de la imagen del residuo
        if (isSoundOn) {
            const incorrectSound = document.getElementById('incorrectSound');
            incorrectSound.play();
        }
        const wasteImageContainer = document.querySelector('.waste-image-container');
        wasteImageContainer.classList.add('shake');
        setTimeout(() => {
            wasteImageContainer.classList.remove('shake');
        }, 500);
    }
    updateUI();
}

function endGame(isWinner) {
    gameOver = true;
    const gameOverMessage = document.getElementById('gameOverMessage');
    const gameOverText = document.getElementById('gameOverText');
    const finalScore = document.getElementById('finalScore');
    if (isSoundOn) {
        const incorrectSound = document.getElementById('gameOverSound');
        incorrectSound.play();
    }
    const backgroundMusic = document.getElementById('backgroundMusic');
    backgroundMusic.pause();
    gameOverText.textContent = isWinner ? '¡Felicidades! Has ganado el juego.' : 'Juego terminado.';
    finalScore.textContent = score;
    gameOverMessage.classList.remove('hidden');

    document.getElementById('overlay').style.display = 'block'; // Muestra la superposición
    document.getElementById('difficultySelection').classList.remove('hidden'); // Muestra la selección de dificultad

}

function createBinButtons() {
    const binsContainer = document.getElementById('binsContainer');
    bins.forEach(bin => {
        const button = document.createElement('button');
        button.className = 'bin-button';
        button.style.backgroundColor = bin.color;
        button.style.color = ['blanco', 'amarillo'].includes(bin.color) ? 'black' : 'white';
        button.onclick = () => handleBinSelection(bin.color);

        const img = document.createElement('img');
        img.src = bin.image;
        img.alt = bin.name;

        const span = document.createElement('span');
        span.textContent = bin.name;

        button.appendChild(img);
        button.appendChild(span);
        binsContainer.appendChild(button);
    });
}

let isSoundOn = true;

document.getElementById('toggleSoundButton').addEventListener('click', function() {
    isSoundOn = !isSoundOn;
    const backgroundMusic = document.getElementById('backgroundMusic');
    const gameOverSound = document.getElementById('gameOverSound');
    const correctSound = document.getElementById('correctSound');
    const incorrectSound = document.getElementById('incorrectSound');

    if (isSoundOn) {
        backgroundMusic.play();
        this.innerHTML = '🔊';
    } else {
        backgroundMusic.pause();
        gameOverSound.pause();
        correctSound.pause();
        incorrectSound.pause();
        // Reiniciar el tiempo de los sonidos a 0 si se mutean
        backgroundMusic.currentTime = 0;
        gameOverSound.currentTime = 0;
        correctSound.currentTime = 0;
        incorrectSound.currentTime = 0;
        this.innerHTML = '🔇';
    }
    
});

const muteButton = document.getElementById('muteButton');
const volumeSlider = document.getElementById('volumeSlider');
const audio = document.getElementById('myAudio');

let isMuted = false;

document.addEventListener('DOMContentLoaded', function() {
    var audioElement = document.getElementById('correctSound');
    var audioElement = document.getElementById('incorrectSound');
    var audioElement = document.getElementById('gameOverSound');
    var audioElement = document.getElementById('backgroundMusic');
    var volumeSlider = document.getElementById('volumeSlider');

    // Ajustar el volumen inicial
    audioElement.volume = volumeSlider.value / 100;

    // Escuchar cambios en el slider y ajustar el volumen
    volumeSlider.addEventListener('input', function() {
        audioElement.volume = volumeSlider.value / 100;
    });
});


// Función para actualizar el volumen
function updateVolume(value) {
    audio.volume = value / 100; // Ajustar el volumen de 0 a 1
}


// Evento para la barra deslizadora
volumeSlider.addEventListener('input', (e) => {
    const volumeValue = e.target.value;
    updateVolume(volumeValue); // Actualizar el volumen
    if (volumeValue == 0) {
        isMuted = true; // Si el volumen es 0, marcar como silenciado
        muteButton.textContent = 'Unmute'; // Actualizar el botón
    } else {
        isMuted = false; // Si hay volumen, no está silenciado
        muteButton.textContent = 'Mute'; // Actualizar el botón
    }
});

document.getElementById('playAgainButton').addEventListener('click', newGame);
document.getElementById('submitScore').addEventListener('click', submitScore);
document.getElementById('showRankingButton').addEventListener('click', showRanking);
document.getElementById('closeRankingButton').addEventListener('click', closeRanking);

function closeRanking() {
    document.getElementById('rankingModal').classList.add('hidden');
    document.getElementById('rankingModal').style.display('none');
}


async function submitScore() {
    playerName = document.getElementById('playerName').value.trim();
    if (!playerName) {
        alert('Por favor, ingresa tu nombre antes de subir tu puntuación.');
        return;
    }

    try {
        console.log('Intentando subir puntuación:', { name: playerName, score: score, difficulty: difficulty });
        const docRef = await db.collection('scores').add({
            name: playerName,
            score: score,
            difficulty: difficulty,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        console.log('Documento escrito con ID: ', docRef.id);
        alert('Puntuación subida con éxito!');
        showRanking();
    } catch (error) {
        console.error('Error al subir la puntuación:', error);
        alert('Hubo un problema al subir tu puntuación. Por favor, intenta de nuevo. Error: ' + error.message);
    }
}

async function showRanking() {
    try {
        const snapshot = await db.collection('scores')
            .where('difficulty', '==', difficulty)
            .orderBy('score', 'desc')
            .limit(10)
            .get();

        if (snapshot.empty) {
            console.log('No hay puntuaciones disponibles.');
            alert('Aún no hay puntuaciones registradas.');
            return;
        }

        const ranking = snapshot.docs.map(doc => doc.data());

        const rankingList = document.getElementById('rankingList');
        rankingList.innerHTML = '';
        ranking.forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = `${index + 1}. ${entry.name}: ${entry.score}`;
            if (entry.name === playerName) {
                li.style.fontWeight = 'bold';
                document.getElementById('playerRank').textContent = index + 1;
            }
            rankingList.appendChild(li);
        });

        document.getElementById('rankingModal').classList.remove('hidden');
    } catch (error) {
        console.error('Error al cargar el ranking:', error);
        alert('Hubo un problema al cargar el ranking. Por favor, intenta de nuevo. Error: ' + error.message);
    }
}



createBinButtons();
newGame();

let lastVisible = null;
const pageSize = 10;

async function showRanking(loadMore = false) {
    try {
        let query = db.collection('scores')
            .where('difficulty', '==', difficulty)
            .orderBy('score', 'desc')
            .limit(pageSize);

        if (loadMore && lastVisible) {
            query = query.startAfter(lastVisible);
        } else {
            document.getElementById('rankingList').innerHTML = '';
        }

        const snapshot = await query.get();
        lastVisible = snapshot.docs[snapshot.docs.length - 1];

        const ranking = snapshot.docs.map(doc => doc.data());

        const rankingList = document.getElementById('rankingList');
        ranking.forEach((entry, index) => {
            const li = document.createElement('li');
            li.textContent = `${entry.name}: ${entry.score}`;
            if (entry.name === playerName) {
                li.style.fontWeight = 'bold';
                document.getElementById('playerRank').textContent = index + 1;
            }
            rankingList.appendChild(li);
        });

        const rankingTitle = document.getElementById('rankingTitle');
        rankingTitle.textContent = `Ranking global - Dificultad: ${difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}`;

        document.getElementById('rankingModal').classList.remove('hidden');

        if (snapshot.docs.length === pageSize) {
            document.getElementById('loadMoreButton').style.display = 'block';
        } else {
            document.getElementById('loadMoreButton').style.display = 'none';
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Hubo un problema al cargar el ranking. Por favor, intenta de nuevo.');
    }
}

// Añade un botón "Cargar más" en tu HTML
// <button id="loadMoreButton" onclick="showRanking(true)">Cargar más</button>

