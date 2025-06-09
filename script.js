const questions = {
          "HTML5": [
            {
              "question": "¿Cuál es la etiqueta correcta para definir un párrafo en HTML5?",
              "options": ["<text>", "<p>", "<paragraph>", "<div>"],
              "answer": 1,
              "difficulty": "Fácil",
              "explanation": "La etiqueta <p> se usa en HTML5 para definir un párrafo."
            },
            {
              "question": "¿Qué atributo en HTML5 se usa para enlaces internos?",
              "options": ["href", "src", "alt", "link"],
              "answer": 0,
              "difficulty": "Medio",
              "explanation": "El atributo href en la etiqueta <a> se usa para enlaces internos y externos."
            },
            {
              "question": "¿Cuál es la diferencia entre <section> y <article> en HTML5?",
              "options": [
                "No hay diferencia",
                "<section> se usa para agrupar contenido temático, <article> para contenido independiente",
                "<article> se usa dentro de <section>",
                "Ambos son reemplazados por <div>"
              ],
              "answer": 1,
              "difficulty": "Difícil",
              "explanation": "<section> agrupa contenido relacionado, mientras que <article> representa un contenido independiente, como un post o una noticia."
            }
          ],
          "CSS": [
            {
              "question": "¿Cuál propiedad de CSS se usa para cambiar el color del texto?",
              "options": ["text-color", "font-color", "color", "style-color"],
              "answer": 2,
              "difficulty": "Fácil",
              "explanation": "La propiedad color en CSS controla el color del texto de un elemento."
            },
            {
              "question": "¿Qué unidad es relativa en CSS y depende del tamaño de la fuente?",
              "options": ["px", "em", "rem", "%"],
              "answer": 1,
              "difficulty": "Medio",
              "explanation": "La unidad 'em' en CSS es relativa y depende del tamaño de la fuente del elemento padre."
            },
            {
              "question": "¿Cómo se usa CSS Grid para crear una estructura con 3 columnas iguales?",
              "options": [
                "grid-template-columns: auto auto auto;",
                "grid-template-columns: 1fr 1fr 1fr;",
                "grid-template-columns: repeat(3, 1fr);",
                "grid-template: 3-columns;"
              ],
              "answer": 2,
              "difficulty": "Difícil",
              "explanation": "La propiedad 'grid-template-columns: repeat(3, 1fr);' define 3 columnas iguales con flexibilidad."
            }
          ],
          "JavaScript": [
            {
              "question": "¿Cómo se declara una variable en JavaScript con alcance de bloque?",
              "options": ["var", "let", "const", "static"],
              "answer": 1,
              "difficulty": "Medio",
              "explanation": "La palabra clave 'let' permite declarar una variable con alcance de bloque en JavaScript."
            },
            {
              "question": "¿Qué método convierte una cadena en un número entero en JavaScript?",
              "options": ["parseInt()", "toNumber()", "convertInt()", "integer()"],
              "answer": 0,
              "difficulty": "Difícil",
              "explanation": "El método parseInt() convierte una cadena en un número entero en JavaScript."
            },
            {
              "question": "¿Cuál es la diferencia entre '==' y '===' en JavaScript?",
              "options": [
                "No hay diferencia",
                "'==' compara valores sin importar tipo, '===' compara valor y tipo",
                "'===' solo se usa en objetos",
                "'==' es para números, '===' para strings"
              ],
              "answer": 1,
              "difficulty": "Difícil",
              "explanation": "'==' hace conversión implícita de tipos, mientras que '===' exige que los valores sean del mismo tipo."
            }
          ],
          "Bootstrap": [
            {
              "question": "¿Cuál es la clase de Bootstrap para crear un botón primario?",
              "options": ["btn-main", "btn-blue", "btn-primary", "button-primary"],
              "answer": 2,
              "difficulty": "Fácil",
              "explanation": "La clase btn-primary en Bootstrap se usa para diseñar botones de estilo primario."
            },
            {
              "question": "¿Cuál es el sistema de diseño de columnas en Bootstrap?",
              "options": ["Flexbox", "Grid", "Container", "Row"],
              "answer": 1,
              "difficulty": "Medio",
              "explanation": "Bootstrap usa el sistema Grid con columnas que pueden variar de tamaño según el viewport."
            },
            {
              "question": "¿Cómo se usa Bootstrap para hacer que un botón ocupe todo el ancho?",
              "options": ["btn-full", "btn-block", "w-100", "btn-expand"],
              "answer": 2,
              "difficulty": "Difícil",
              "explanation": "La clase 'w-100' en Bootstrap hace que un botón ocupe el 100% del ancho disponible."
            }
          ],
          "Java": [
            {
              "question": "¿Cuál es el tipo de dato primitivo para almacenar un número decimal en Java?",
              "options": ["int", "float", "boolean", "char"],
              "answer": 1,
              "difficulty": "Fácil",
              "explanation": "El tipo de dato primitivo 'float' se usa para almacenar números decimales en Java."
            },
            {
              "question": "¿Cuál palabra clave en Java se usa para herencia entre clases?",
              "options": ["extends", "implements", "inherit", "override"],
              "answer": 0,
              "difficulty": "Medio",
              "explanation": "La palabra clave 'extends' permite que una clase herede propiedades y métodos de otra."
            },
            {
              "question": "¿Cuál interfaz en Java se usa para manejar múltiples hilos de ejecución?",
              "options": ["Runnable", "Thread", "Executor", "Multithreading"],
              "answer": 0,
              "difficulty": "Difícil",
              "explanation": "La interfaz 'Runnable' permite que una clase implemente ejecución en múltiples hilos de manera eficiente."
            }
          ],
          "C++": [
            {
              "question": "¿Cuál operador se usa para acceder a miembros de un objeto en C++?",
              "options": [".", "->", "::", "&"],
              "answer": 0,
              "difficulty": "Fácil",
              "explanation": "El operador '.' en C++ se usa para acceder a miembros de un objeto."
            },
            {
              "question": "¿Qué estructura de datos en C++ usa nodos conectados?",
              "options": ["Array", "Lista enlazada", "Pila", "Cola"],
              "answer": 1,
              "difficulty": "Difícil",
              "explanation": "Las listas enlazadas en C++ usan nodos conectados entre sí para formar una estructura dinámica."
            },
            {
              "question": "¿Cómo se usa la función 'virtual' en C++?",
              "options": [
                "Para declarar funciones abstractas",
                "Para permitir la sobreescritura de métodos en clases derivadas",
                "Para definir constantes globales",
                "Para realizar operaciones matemáticas avanzadas"
              ],
              "answer": 1,
              "difficulty": "Difícil",
              "explanation": "Las funciones 'virtual' permiten que las clases derivadas sobreescriban métodos de la clase base."
            }
          ]
    };
  
   
    
    const maxScore = 100; // Puntaje máximo para ganar
    const timeLimit = 10; // Tiempo en segundos por pregunta
    let score = { player1: 0, player2: 0 };
    let currentPlayer = "player1";
    let history = { player1: [], player2: [] };
    
    const gameBoard = document.getElementById("game-board");
    const scoreDisplay = document.getElementById("score");
    const timerDisplay = document.getElementById("timer");
    const historyDisplay = document.getElementById("history");
    
    const correctSound = new Audio("correct.mp3"); // Sonido para respuesta correcta
    const wrongSound = new Audio("wrong.mp3"); // Sonido para respuesta incorrecta
    
    function updateGameBoard() {
        gameBoard.innerHTML = ""; // Limpiar tablero
        for (let category in questions) {
            if (questions[category].length > 0) {
                const categoryDiv = document.createElement("div");
                categoryDiv.classList.add("category");
                categoryDiv.innerText = category;
                categoryDiv.addEventListener("click", () => showQuestion(category));
                gameBoard.appendChild(categoryDiv);
            }
        }
    }
    
    function showQuestion(category) {
        if (questions[category].length === 0) return;
    
        const randomIndex = Math.floor(Math.random() * questions[category].length);
        const selectedQuestion = questions[category][randomIndex];
    
        let timeLeft = timeLimit;
        timerDisplay.innerText = `Tiempo restante: ${timeLeft}s`;
    
        const countdown = setInterval(() => {
            timeLeft--;
            timerDisplay.innerText = `Tiempo restante: ${timeLeft}s`;
            if (timeLeft <= 0) {
                clearInterval(countdown);
                alert("¡Tiempo agotado! ⏳");
                wrongSound.play();
                history[currentPlayer].push({ question: selectedQuestion.question, result: "Tiempo agotado" });
                switchPlayer();
            }
        }, 1000);
    
        const userAnswer = prompt(`(${selectedQuestion.difficulty}) ${selectedQuestion.question}`);
    
        clearInterval(countdown);
        if (userAnswer && userAnswer.toLowerCase() === selectedQuestion.options[selectedQuestion.answer].toLowerCase()) {
            alert("¡Correcto! 🎉");
            correctSound.play();
            score[currentPlayer] += selectedQuestion.difficulty === "Fácil" ? 10 : selectedQuestion.difficulty === "Medio" ? 20 : 30;
            history[currentPlayer].push({ question: selectedQuestion.question, result: "Correcto" });
        } else {
            alert(`Incorrecto. 😕 La respuesta es: ${selectedQuestion.options[selectedQuestion.answer]}`);
            wrongSound.play();
            score[currentPlayer] -= selectedQuestion.difficulty === "Fácil" ? 5 : selectedQuestion.difficulty === "Medio" ? 10 : 15;
            history[currentPlayer].push({ question: selectedQuestion.question, result: "Incorrecto" });
        }
    
        questions[category].splice(randomIndex, 1); // Eliminar la pregunta usada
        scoreDisplay.innerText = `Puntuación - Jugador 1: ${score.player1} | Jugador 2: ${score.player2}`;
        updateHistory();
        updateGameBoard(); // Refrescar tablero
    
        if (score[currentPlayer] >= maxScore) {
            alert(`¡${currentPlayer} ha ganado! 🏆`);
            resetGame();
        } else {
            switchPlayer();
        }
    }
    
    function switchPlayer() {
        currentPlayer = currentPlayer === "player1" ? "player2" : "player1";
        alert(`Turno de ${currentPlayer}`);
    }
    
    function updateHistory() {
        historyDisplay.innerHTML = `<h3>Historial de respuestas</h3>`;
        for (let player in history) {
            historyDisplay.innerHTML += `<strong>${player}:</strong><br>`;
            history[player].forEach(entry => {
                historyDisplay.innerHTML += `<p>${entry.question} - <span style="color: ${entry.result === 'Correcto' ? 'green' : 'red'}">${entry.result}</span></p>`;
            });
        }
    }
    
    function resetGame() {
        score = { player1: 0, player2: 0 };
        history = { player1: [], player2: [] };
        currentPlayer = "player1";
        scoreDisplay.innerText = `Puntuación - Jugador 1: ${score.player1} | Jugador 2: ${score.player2}`;
        historyDisplay.innerHTML = "";
        updateGameBoard();
    }
    
    updateGameBoard(); // Inicializar tablero
    