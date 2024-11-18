export const LettersPool: {letter:string}[] = [
    {
        letter: 'A'
    },
    {
        letter: 'B'
    },
    {
        letter: 'C'
    },
    {
        letter: 'D'
    },
    {
        letter: 'E'
    },
    {
        letter: 'F'
    },
    {
        letter: 'G'
    },
    {
        letter: 'H'
    },
    {
        letter: 'I'
    },
    {
        letter: 'J'
    },
    {
        letter: 'K'
    },
    {
        letter: 'L'
    }
]

    export const QuestionPool:
    {
        id: number,
        question: string,
        hint: string,
        difficulty?: string,
        time?: number,
        answers: {
            value: string,
            isCorrect: boolean
        }[]
    }[] =
[
    {
        "id": 1,
        "question": "¿En qué año se proclamó la Independencia de la República Dominicana?",
        "hint": "Fue el 27 de febrero.",
        "difficulty": "Intermedio",
        "time": 15,
        "answers": [
            { "value": "1844", "isCorrect": true },
            { "value": "1821", "isCorrect": false },
            { "value": "1865", "isCorrect": false },
            { "value": "1804", "isCorrect": false }
        ]
    },
    {
        "id": 2,
        "question": "¿Quién fue el líder principal del movimiento independentista dominicano?",
        "hint": "Fundador de la Trinitaria.",
        "difficulty": "Fácil",
        "time": 10,
        "answers": [
            { "value": "Juan Pablo Duarte", "isCorrect": true },
            { "value": "Gregorio Luperón", "isCorrect": false },
            { "value": "Pedro Santana", "isCorrect": false },
            { "value": "Matías Ramón Mella", "isCorrect": false }
        ]
    },
    {
        "id": 3,
        "question": "¿Qué fecha marca el inicio de la Guerra de la Restauración?",
        "hint": "Fue en agosto de 1863.",
        "difficulty": "Intermedio",
        "time": 15,
        "answers": [
            { "value": "16 de agosto de 1863", "isCorrect": true },
            { "value": "15 de julio de 1863", "isCorrect": false },
            { "value": "10 de septiembre de 1863", "isCorrect": false },
            { "value": "12 de junio de 1863", "isCorrect": false }
        ]
    },
    {
        "id": 4,
        "question": "¿Qué grupo fundó Juan Pablo Duarte para luchar por la independencia?",
        "hint": "Fue una sociedad secreta.",
        "difficulty": "Fácil",
        "time": 10,
        "answers": [
            { "value": "La Trinitaria", "isCorrect": true },
            { "value": "La Filantrópica", "isCorrect": false },
            { "value": "La Sociedad Secreta", "isCorrect": false },
            { "value": "Los Restauradores", "isCorrect": false }
        ]
    },
    {
        "id": 5,
        "question": "¿Qué batalla selló la independencia dominicana el 19 de marzo de 1844?",
        "hint": "Ocurrió en el Cibao.",
        "difficulty": "Intermedio",
        "time": 15,
        "answers": [
            { "value": "La Batalla del 19 de Marzo", "isCorrect": true },
            { "value": "La Batalla del 30 de Marzo", "isCorrect": false },
            { "value": "La Batalla de Azua", "isCorrect": false },
            { "value": "La Batalla de Beller", "isCorrect": false }
        ]
    },
    {
        "id": 6,
        "question": "¿Quiénes son considerados los Padres de la Patria en República Dominicana?",
        "hint": "Son tres figuras principales.",
        "difficulty": "Fácil",
        "time": 12,
        "answers": [
            { "value": "Juan Pablo Duarte, Francisco del Rosario Sánchez y Matías Ramón Mella", "isCorrect": true },
            { "value": "Gregorio Luperón, Pedro Santana y Ulises Heureaux", "isCorrect": false },
            { "value": "Máximo Gómez, Juan Bosch y Joaquín Balaguer", "isCorrect": false },
            { "value": "Francisco Alberto Caamaño, Rafael Trujillo y Juan Isidro Jimenes", "isCorrect": false }
        ]
    },
    {
        "id": 7,
        "question": "¿Qué país ocupó la República Dominicana entre 1822 y 1844?",
        "hint": "Es un país vecino.",
        "difficulty": "Fácil",
        "time": 10,
        "answers": [
            { "value": "Haití", "isCorrect": true },
            { "value": "España", "isCorrect": false },
            { "value": "Francia", "isCorrect": false },
            { "value": "Estados Unidos", "isCorrect": false }
        ]
    },
    {
        "id": 8,
        "question": "¿En qué año se firmó la primera Constitución de la República Dominicana?",
        "hint": "Fue después de la Independencia.",
        "difficulty": "Intermedio",
        "time": 15,
        "answers": [
            { "value": "1844", "isCorrect": true },
            { "value": "1856", "isCorrect": false },
            { "value": "1865", "isCorrect": false },
            { "value": "1821", "isCorrect": false }
        ]
    },
    {
        "id": 9,
        "question": "¿Qué ciudad fue la capital de la República Dominicana durante la ocupación haitiana?",
        "hint": "Es una ciudad importante en el sur.",
        "difficulty": "Intermedio",
        "time": 15,
        "answers": [
            { "value": "Santo Domingo", "isCorrect": true },
            { "value": "Azua", "isCorrect": false },
            { "value": "La Vega", "isCorrect": false },
            { "value": "Santiago", "isCorrect": false }
        ]
    },
    {
        "id": 10,
        "question": "¿Qué tratado puso fin a la Guerra de la Restauración?",
        "hint": "Incluye un país europeo.",
        "difficulty": "Difícil",
        "time": 20,
        "answers": [
            { "value": "El Tratado de Paz entre España y República Dominicana", "isCorrect": true },
            { "value": "El Tratado de París", "isCorrect": false },
            { "value": "El Tratado de Aranjuez", "isCorrect": false },
            { "value": "El Tratado de Basilea", "isCorrect": false }
        ]
    },
{
    "id": 11,
    "question": "¿Qué batalla importante se libró el 30 de marzo de 1844?",
    "hint": "Ocurrió en el Cibao, en Santiago.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "La Batalla del 30 de Marzo", "isCorrect": true },
        { "value": "La Batalla del 19 de Marzo", "isCorrect": false },
        { "value": "La Batalla de Sabana Larga", "isCorrect": false },
        { "value": "La Batalla de Beller", "isCorrect": false }
    ]
},
{
    "id": 12,
    "question": "¿Quién fue el primer presidente de la República Dominicana?",
    "hint": "Fue un militar y político.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "Pedro Santana", "isCorrect": true },
        { "value": "Buenaventura Báez", "isCorrect": false },
        { "value": "Ulises Heureaux", "isCorrect": false },
        { "value": "Juan Pablo Duarte", "isCorrect": false }
    ]
},
{
    "id": 13,
    "question": "¿Qué hecho marcó el inicio de la ocupación haitiana en 1822?",
    "hint": "Fue la unificación de la isla.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "La entrada de Jean-Pierre Boyer a Santo Domingo", "isCorrect": true },
        { "value": "La Batalla de Palo Hincado", "isCorrect": false },
        { "value": "La Guerra de la Restauración", "isCorrect": false },
        { "value": "El Tratado de Ryswick", "isCorrect": false }
    ]
},
{
    "id": 14,
    "question": "¿Qué símbolo nacional fue bordado por Concepción Bona y María Trinidad Sánchez?",
    "hint": "Es parte de la proclamación de independencia.",
    "difficulty": "Fácil",
    "time": 10,
    "answers": [
        { "value": "La Bandera Nacional", "isCorrect": true },
        { "value": "El Escudo Nacional", "isCorrect": false },
        { "value": "La Constitución", "isCorrect": false },
        { "value": "El Himno Nacional", "isCorrect": false }
    ]
},
{
    "id": 15,
    "question": "¿Quién disparó el trabucazo el 27 de febrero de 1844?",
    "hint": "Fue uno de los Padres de la Patria.",
    "difficulty": "Fácil",
    "time": 10,
    "answers": [
        { "value": "Matías Ramón Mella", "isCorrect": true },
        { "value": "Juan Pablo Duarte", "isCorrect": false },
        { "value": "Francisco del Rosario Sánchez", "isCorrect": false },
        { "value": "Pedro Santana", "isCorrect": false }
    ]
},
{
    "id": 16,
    "question": "¿Qué documento establece los derechos fundamentales de los dominicanos?",
    "hint": "Es el marco jurídico del país.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "La Constitución", "isCorrect": true },
        { "value": "El Código Civil", "isCorrect": false },
        { "value": "El Tratado de Paz", "isCorrect": false },
        { "value": "La Declaración de Independencia", "isCorrect": false }
    ]
},
{
    "id": 17,
    "question": "¿En qué ciudad se firmó la primera Constitución de la República Dominicana?",
    "hint": "Es una ciudad en el este del país.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "San Cristóbal", "isCorrect": true },
        { "value": "Santo Domingo", "isCorrect": false },
        { "value": "Santiago", "isCorrect": false },
        { "value": "Azua", "isCorrect": false }
    ]
},
{
    "id": 18,
    "question": "¿Qué líder militar dirigió la Guerra de la Restauración?",
    "hint": "Fue un gran estratega del norte.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "Gregorio Luperón", "isCorrect": true },
        { "value": "Pedro Santana", "isCorrect": false },
        { "value": "Ulises Heureaux", "isCorrect": false },
        { "value": "Juan Bosch", "isCorrect": false }
    ]
},
{
    "id": 19,
    "question": "¿Qué país intentó anexar la República Dominicana en 1861?",
    "hint": "Fue un país europeo.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "España", "isCorrect": true },
        { "value": "Francia", "isCorrect": false },
        { "value": "Inglaterra", "isCorrect": false },
        { "value": "Estados Unidos", "isCorrect": false }
    ]
},
{
    "id": 20,
    "question": "¿Qué día se celebra la Restauración de la República Dominicana?",
    "hint": "Fue el 16 de agosto.",
    "difficulty": "Fácil",
    "time": 10,
    "answers": [
        { "value": "16 de agosto", "isCorrect": true },
        { "value": "27 de febrero", "isCorrect": false },
        { "value": "30 de marzo", "isCorrect": false },
        { "value": "19 de marzo", "isCorrect": false }
    ]
},{
    "id": 21,
    "question": "¿Quién es conocido como el Restaurador de la República?",
    "hint": "Su apellido comienza con 'L'.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "Gregorio Luperón", "isCorrect": true },
        { "value": "Ulises Heureaux", "isCorrect": false },
        { "value": "Matías Ramón Mella", "isCorrect": false },
        { "value": "Juan Bosch", "isCorrect": false }
    ]
},
{
    "id": 22,
    "question": "¿Qué tratado dividió la isla de Santo Domingo entre Francia y España en 1697?",
    "hint": "Fue firmado en Ryswick.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "El Tratado de Ryswick", "isCorrect": true },
        { "value": "El Tratado de Basilea", "isCorrect": false },
        { "value": "El Tratado de París", "isCorrect": false },
        { "value": "El Tratado de Aranjuez", "isCorrect": false }
    ]
},
{
    "id": 23,
    "question": "¿Qué líder dominicano luchó contra la ocupación estadounidense en 1916?",
    "hint": "Es conocido como un símbolo de resistencia.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "Francisco Alberto Caamaño", "isCorrect": true },
        { "value": "Juan Pablo Duarte", "isCorrect": false },
        { "value": "Gregorio Luperón", "isCorrect": false },
        { "value": "Ulises Heureaux", "isCorrect": false }
    ]
},
{
    "id": 24,
    "question": "¿Qué héroe dominicano es conocido por su resistencia en la Batalla de Las Carreras?",
    "hint": "Fue un líder militar importante.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "Pedro Santana", "isCorrect": true },
        { "value": "Gregorio Luperón", "isCorrect": false },
        { "value": "Matías Ramón Mella", "isCorrect": false },
        { "value": "Francisco del Rosario Sánchez", "isCorrect": false }
    ]
},
{
    "id": 25,
    "question": "¿Qué país intentó anexionar la República Dominicana en 1871?",
    "hint": "Fue un país de América del Norte.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "Estados Unidos", "isCorrect": true },
        { "value": "España", "isCorrect": false },
        { "value": "Francia", "isCorrect": false },
        { "value": "Inglaterra", "isCorrect": false }
    ]
},
{
    "id": 26,
    "question": "¿Qué constitución introdujo por primera vez la figura del presidente vitalicio?",
    "hint": "Fue en el siglo XIX.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "La Constitución de Moca", "isCorrect": true },
        { "value": "La Constitución de San Cristóbal", "isCorrect": false },
        { "value": "La Constitución de Santiago", "isCorrect": false },
        { "value": "La Constitución de Santo Domingo", "isCorrect": false }
    ]
},
{
    "id": 27,
    "question": "¿Qué país intervino militarmente en la República Dominicana en 1916?",
    "hint": "Es un país de América del Norte.",
    "difficulty": "Fácil",
    "time": 10,
    "answers": [
        { "value": "Estados Unidos", "isCorrect": true },
        { "value": "España", "isCorrect": false },
        { "value": "Francia", "isCorrect": false },
        { "value": "Haití", "isCorrect": false }
    ]
},
{
    "id": 28,
    "question": "¿Qué evento significó el fin de la dictadura de Rafael Leónidas Trujillo?",
    "hint": "Ocurrió en 1961.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "Su asesinato", "isCorrect": true },
        { "value": "Su exilio", "isCorrect": false },
        { "value": "Una elección democrática", "isCorrect": false },
        { "value": "Un golpe de Estado", "isCorrect": false }
    ]
},
{
    "id": 29,
    "question": "¿Qué país reconoció la independencia dominicana en 1844 por primera vez?",
    "hint": "Es un país europeo.",
    "difficulty": "Difícil",
    "time": 20,
    "answers": [
        { "value": "Francia", "isCorrect": true },
        { "value": "España", "isCorrect": false },
        { "value": "Estados Unidos", "isCorrect": false },
        { "value": "Haití", "isCorrect": false }
    ]
},
{
    "id": 30,
    "question": "¿Qué presidente impulsó la Constitución de 1963, considerada progresista?",
    "hint": "Fue derrocado por un golpe de Estado.",
    "difficulty": "Intermedio",
    "time": 15,
    "answers": [
        { "value": "Juan Bosch", "isCorrect": true },
        { "value": "Joaquín Balaguer", "isCorrect": false },
        { "value": "Héctor García Godoy", "isCorrect": false },
        { "value": "Rafael Trujillo", "isCorrect": false }
    ]
}

];


