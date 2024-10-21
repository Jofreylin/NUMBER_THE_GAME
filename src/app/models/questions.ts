export const QuestionPool:
    {
        id: number,
        question: string,
        hint: string,
        answers: {
            value: string,
            isCorrect: boolean
        }[]
    }[] =
[
    {
        "id": 1,
        "question": "¿Cuánto es 5 + 3?",
        "hint": "Suma simple.",
        "answers": [
            { "value": "8", "isCorrect": true },
            { "value": "7", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "11", "isCorrect": false },
            { "value": "15", "isCorrect": false }
        ]
    },
    {
        "id": 2,
        "question": "¿Cuánto es 10 - 4?",
        "hint": "Resta de dos dígitos.",
        "answers": [
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "10", "isCorrect": false }
        ]
    },
    {
        "id": 3,
        "question": "¿Cuál es el número mayor: 7 o 9?",
        "hint": "Comparación de números.",
        "answers": [
            { "value": "9", "isCorrect": true },
            { "value": "7", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "7.5", "isCorrect": false },
            { "value": "Ambos son iguales", "isCorrect": false },
            { "value": "No se puede determinar", "isCorrect": false }
        ]
    },
    {
        "id": 4,
        "question": "¿Cuánto es 3 × 2?",
        "hint": "Multiplicación sencilla.",
        "answers": [
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "12", "isCorrect": false }
        ]
    },
    {
        "id": 5,
        "question": "¿Qué número viene después del 12?",
        "hint": "Sigue la secuencia numérica.",
        "answers": [
            { "value": "13", "isCorrect": true },
            { "value": "14", "isCorrect": false },
            { "value": "11", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "16", "isCorrect": false },
            { "value": "No sé", "isCorrect": false }
        ]
    },
    {
        "id": 6,
        "question": "¿Cuánto es la mitad de 8?",
        "hint": "Divide por dos.",
        "answers": [
            { "value": "4", "isCorrect": true },
            { "value": "3", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "1", "isCorrect": false },
            { "value": "0", "isCorrect": false }
        ]
    },
    {
        "id": 7,
        "question": "Si tienes 4 manzanas y comes 2, ¿cuántas te quedan?",
        "hint": "Resta las manzanas que comiste.",
        "answers": [
            { "value": "2", "isCorrect": true },
            { "value": "3", "isCorrect": false },
            { "value": "1", "isCorrect": false },
            { "value": "0", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "2.5", "isCorrect": false }
        ]
    },
    {
        "id": 8,
        "question": "¿Cuántos lados tiene un triángulo?",
        "hint": "Piensa en la geometría básica.",
        "answers": [
            { "value": "3", "isCorrect": true },
            { "value": "4", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "1", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "8", "isCorrect": false }
        ]
    },
    {
        "id": 9,
        "question": "Si tienes 2 caramelos y te dan 3 más, ¿cuántos tienes en total?",
        "hint": "Suma los caramelos.",
        "answers": [
            { "value": "5", "isCorrect": true },
            { "value": "4", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "1", "isCorrect": false }
        ]
    },
    {
        "id": 10,
        "question": "¿Cuánto es 9 ÷ 3?",
        "hint": "Divide entre tres.",
        "answers": [
            { "value": "3", "isCorrect": true },
            { "value": "2", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "1", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "0", "isCorrect": false },
            { "value": "5", "isCorrect": false }
        ]
    },
    {
        "id": 11,
        "question": "Si un tren tiene 4 vagones y se le agregan 2 más, ¿cuántos vagones tiene en total?",
        "hint": "Suma los vagones.",
        "answers": [
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "3", "isCorrect": false }
        ]
    },
    {
        "id": 12,
        "question": "¿Cuál es el siguiente número en la secuencia: 2, 4, 6, ___?",
        "hint": "Observa el patrón.",
        "answers": [
            { "value": "8", "isCorrect": true },
            { "value": "7", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "14", "isCorrect": false },
            { "value": "4", "isCorrect": false }
        ]
    },
    {
        "id": 13,
        "question": "Si un gato tiene 4 patas, ¿cuántas patas tienen 3 gatos?",
        "hint": "Multiplica la cantidad de patas por la cantidad de gatos.",
        "answers": [
            { "value": "12", "isCorrect": true },
            { "value": "10", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "16", "isCorrect": false },
            { "value": "4", "isCorrect": false }
        ]
    },
    {
        "id": 14,
        "question": "Si hoy es lunes, ¿qué día será en dos días?",
        "hint": "Cuenta los días a partir de lunes.",
        "answers": [
            { "value": "Miércoles", "isCorrect": true },
            { "value": "Martes", "isCorrect": false },
            { "value": "Jueves", "isCorrect": false },
            { "value": "Viernes", "isCorrect": false },
            { "value": "Sábado", "isCorrect": false },
            { "value": "Domingo", "isCorrect": false },
            { "value": "Lunes", "isCorrect": false },
            { "value": "No sé", "isCorrect": false }
        ]
    },
    {
        "id": 15,
        "question": "Si un cuadrado tiene 4 lados, ¿cuántos lados tienen 2 cuadrados juntos?",
        "hint": "Suma los lados de ambos cuadrados.",
        "answers": [
            { "value": "8", "isCorrect": true },
            { "value": "6", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "16", "isCorrect": false },
            { "value": "0", "isCorrect": false }
        ]
    },
    {
        "id": 16,
        "question": "Si una semana tiene 7 días, ¿cuántos días hay en 2 semanas?",
        "hint": "Multiplica la cantidad de días por el número de semanas.",
        "answers": [
            { "value": "14", "isCorrect": true },
            { "value": "12", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "21", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "13", "isCorrect": false },
            { "value": "20", "isCorrect": false }
        ]
    },
    {
        "id": 17,
        "question": "¿Cuál es el número faltante en la secuencia: 1, 3, 5, ___?",
        "hint": "Observa cómo aumentan los números.",
        "answers": [
            { "value": "7", "isCorrect": true },
            { "value": "6", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "11", "isCorrect": false },
            { "value": "4", "isCorrect": false }
        ]
    },
    {
        "id": 18,
        "question": "Si tienes 10 caramelos y regalas 3, ¿cuántos te quedan?",
        "hint": "Resta los caramelos que regalaste.",
        "answers": [
            { "value": "7", "isCorrect": true },
            { "value": "6", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "10", "isCorrect": false }
        ]
    },
    {
        "id": 19,
        "question": "Si una bicicleta tiene 2 ruedas, ¿cuántas ruedas tienen 4 bicicletas?",
        "hint": "Multiplica el número de ruedas por la cantidad de bicicletas.",
        "answers": [
            { "value": "8", "isCorrect": true },
            { "value": "6", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "14", "isCorrect": false },
            { "value": "16", "isCorrect": false }
        ]
    },
    {
        "id": 20,
        "question": "Si un reloj marca las 3 y avanza 2 horas, ¿qué hora será?",
        "hint": "Suma las horas al reloj.",
        "answers": [
            { "value": "5", "isCorrect": true },
            { "value": "4", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "1", "isCorrect": false }
        ]
    },
    {
        "id": 21,
        "question": "Si un año tiene 12 meses, ¿cuántos meses tienen 3 años?",
        "hint": "Multiplica los meses por la cantidad de años.",
        "answers": [
            { "value": "36", "isCorrect": true },
            { "value": "24", "isCorrect": false },
            { "value": "30", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "48", "isCorrect": false },
            { "value": "18", "isCorrect": false },
            { "value": "40", "isCorrect": false },
            { "value": "42", "isCorrect": false }
        ]
    },
    {
        "id": 22,
        "question": "Si tienes 5 bolas y compras 5 más, ¿cuántas bolas tienes en total?",
        "hint": "Suma las bolas que tenías con las que compraste.",
        "answers": [
            { "value": "10", "isCorrect": true },
            { "value": "9", "isCorrect": false },
            { "value": "11", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "15", "isCorrect": false }
        ]
    },
    {
        "id": 23,
        "question": "¿Cuántos minutos hay en media hora?",
        "hint": "Piensa en cuántos minutos tiene una hora y divide por dos.",
        "answers": [
            { "value": "30", "isCorrect": true },
            { "value": "20", "isCorrect": false },
            { "value": "40", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "25", "isCorrect": false },
            { "value": "35", "isCorrect": false },
            { "value": "60", "isCorrect": false },
            { "value": "50", "isCorrect": false }
        ]
    },
    {
        "id": 24,
        "question": "Si una docena son 12, ¿cuántos huevos hay en media docena?",
        "hint": "Divide la docena por dos.",
        "answers": [
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "12", "isCorrect": false }
        ]
    },
    {
        "id": 25,
        "question": "Si una jirafa tiene 4 patas, ¿cuántas patas tienen 5 jirafas?",
        "hint": "Multiplica las patas por el número de jirafas.",
        "answers": [
            { "value": "20", "isCorrect": true },
            { "value": "15", "isCorrect": false },
            { "value": "25", "isCorrect": false },
            { "value": "18", "isCorrect": false },
            { "value": "22", "isCorrect": false },
            { "value": "24", "isCorrect": false },
            { "value": "16", "isCorrect": false },
            { "value": "30", "isCorrect": false }
        ]
    },
    {
        "id": 26,
        "question": "Si un avión recorre 500 km en una hora, ¿cuántos kilómetros recorrerá en 3 horas?",
        "hint": "Multiplica la distancia por el tiempo.",
        "answers": [
            { "value": "1500", "isCorrect": true },
            { "value": "1200", "isCorrect": false },
            { "value": "1600", "isCorrect": false },
            { "value": "1400", "isCorrect": false },
            { "value": "1000", "isCorrect": false },
            { "value": "1800", "isCorrect": false },
            { "value": "2000", "isCorrect": false },
            { "value": "1300", "isCorrect": false }
        ]
    },
    {
        "id": 27,
        "question": "Un autobús tiene 20 pasajeros y se bajan 8, luego suben 5 más. ¿Cuántos pasajeros hay ahora?",
        "hint": "Resta los pasajeros que se bajan y luego suma los que suben.",
        "answers": [
            { "value": "17", "isCorrect": true },
            { "value": "15", "isCorrect": false },
            { "value": "18", "isCorrect": false },
            { "value": "16", "isCorrect": false },
            { "value": "20", "isCorrect": false },
            { "value": "13", "isCorrect": false },
            { "value": "12", "isCorrect": false },
            { "value": "22", "isCorrect": false }
        ]
    },
    {
        "id": 28,
        "question": "Si hoy es miércoles y faltan 5 días para una fiesta, ¿qué día será la fiesta?",
        "hint": "Cuenta los días a partir de miércoles.",
        "answers": [
            { "value": "Lunes", "isCorrect": true },
            { "value": "Domingo", "isCorrect": false },
            { "value": "Martes", "isCorrect": false },
            { "value": "Jueves", "isCorrect": false },
            { "value": "Viernes", "isCorrect": false },
            { "value": "Sábado", "isCorrect": false },
            { "value": "Miércoles", "isCorrect": false },
            { "value": "Jueves", "isCorrect": false }
        ]
    },
    {
        "id": 29,
        "question": "En una carrera de 4 vueltas, si ya has corrido 3 vueltas, ¿cuántas te faltan?",
        "hint": "Resta las vueltas que ya corriste del total.",
        "answers": [
            { "value": "1", "isCorrect": true },
            { "value": "2", "isCorrect": false },
            { "value": "0", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "No sé", "isCorrect": false },
            { "value": "6", "isCorrect": false }
        ]
    },
    {
        "id": 30,
        "question": "Si un coche consume 10 litros de gasolina por cada 100 km, ¿cuántos litros necesitará para recorrer 300 km?",
        "hint": "Multiplica el consumo por la distancia recorrida.",
        "answers": [
            { "value": "30", "isCorrect": true },
            { "value": "25", "isCorrect": false },
            { "value": "35", "isCorrect": false },
            { "value": "40", "isCorrect": false },
            { "value": "20", "isCorrect": false },
            { "value": "50", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "45", "isCorrect": false }
        ]
    },
    {
        "id": 31,
        "question": "Si una pizza se corta en 8 porciones y ya se han comido 5, ¿cuántas porciones quedan?",
        "hint": "Resta las porciones que se comieron.",
        "answers": [
            { "value": "3", "isCorrect": true },
            { "value": "4", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "5", "isCorrect": false },
            { "value": "1", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "0", "isCorrect": false }
        ]
    },
    {
        "id": 32,
        "question": "Si en una caja hay 24 chocolates y quieres repartirlos equitativamente entre 6 personas, ¿cuántos chocolates recibe cada persona?",
        "hint": "Divide los chocolates por la cantidad de personas.",
        "answers": [
            { "value": "4", "isCorrect": false },
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "3", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "12", "isCorrect": false }
        ]
    },
    {
        "id": 33,
        "question": "Si tienes 7 camisetas y cada una cuesta $15, ¿cuánto costarían todas juntas?",
        "hint": "Multiplica la cantidad de camisetas por el precio de cada una.",
        "answers": [
            { "value": "105", "isCorrect": true },
            { "value": "110", "isCorrect": false },
            { "value": "95", "isCorrect": false },
            { "value": "100", "isCorrect": false },
            { "value": "90", "isCorrect": false },
            { "value": "115", "isCorrect": false },
            { "value": "120", "isCorrect": false },
            { "value": "125", "isCorrect": false }
        ]
    },
    {
        "id": 34,
        "question": "Un árbol tiene 12 ramas y cada rama tiene 3 nidos, ¿cuántos nidos hay en total?",
        "hint": "Multiplica las ramas por la cantidad de nidos.",
        "answers": [
            { "value": "36", "isCorrect": true },
            { "value": "33", "isCorrect": false },
            { "value": "30", "isCorrect": false },
            { "value": "39", "isCorrect": false },
            { "value": "40", "isCorrect": false },
            { "value": "24", "isCorrect": false },
            { "value": "42", "isCorrect": false },
            { "value": "48", "isCorrect": false }
        ]
    },
    {
        "id": 35,
        "question": "Si un grupo de 5 amigos comparte una cuenta de $100 equitativamente, ¿cuánto paga cada uno?",
        "hint": "Divide la cuenta por la cantidad de amigos.",
        "answers": [
            { "value": "20", "isCorrect": true },
            { "value": "25", "isCorrect": false },
            { "value": "15", "isCorrect": false },
            { "value": "30", "isCorrect": false },
            { "value": "18", "isCorrect": false },
            { "value": "22", "isCorrect": false },
            { "value": "24", "isCorrect": false },
            { "value": "28", "isCorrect": false }
        ]
    },
    {
        "id": 36,
        "question": "Si un reloj marca las 10:15 y pasan 45 minutos, ¿qué hora será?",
        "hint": "Suma los minutos al tiempo actual.",
        "answers": [
            { "value": "11:00", "isCorrect": true },
            { "value": "10:30", "isCorrect": false },
            { "value": "11:15", "isCorrect": false },
            { "value": "12:00", "isCorrect": false },
            { "value": "11:45", "isCorrect": false },
            { "value": "10:45", "isCorrect": false },
            { "value": "12:15", "isCorrect": false },
            { "value": "11:30", "isCorrect": false }
        ]
    },
    {
        "id": 37,
        "question": "Si una pelota de baloncesto pesa 600 gramos, ¿cuánto pesarán 10 pelotas iguales?",
        "hint": "Multiplica el peso de una por la cantidad.",
        "answers": [
            { "value": "6000", "isCorrect": true },
            { "value": "6500", "isCorrect": false },
            { "value": "5500", "isCorrect": false },
            { "value": "7000", "isCorrect": false },
            { "value": "5000", "isCorrect": false },
            { "value": "7500", "isCorrect": false },
            { "value": "8000", "isCorrect": false },
            { "value": "8500", "isCorrect": false }
        ]
    },
    {
        "id": 38,
        "question": "En una carrera de relevos, cada vuelta son 400 metros y el equipo debe correr 4 vueltas, ¿cuál es la distancia total?",
        "hint": "Multiplica la distancia de una vuelta por el número de vueltas.",
        "answers": [
            { "value": "1600", "isCorrect": true },
            { "value": "1400", "isCorrect": false },
            { "value": "1800", "isCorrect": false },
            { "value": "1200", "isCorrect": false },
            { "value": "2000", "isCorrect": false },
            { "value": "1000", "isCorrect": false },
            { "value": "2200", "isCorrect": false },
            { "value": "2400", "isCorrect": false }
        ]
    },
    {
        "id": 39,
        "question": "Si un libro tiene 300 páginas y lees 50 páginas al día, ¿cuántos días tardarás en leerlo?",
        "hint": "Divide el total de páginas por la cantidad leída por día.",
        "answers": [
            { "value": "6", "isCorrect": true },
            { "value": "5", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "4", "isCorrect": false },
            { "value": "9", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "12", "isCorrect": false }
        ]
    },
    {
        "id": 40,
        "question": "Si un rectángulo tiene un área de 40 cm² y una base de 8 cm, ¿cuál es la altura?",
        "hint": "Divide el área por la base.",
        "answers": [
            { "value": "5", "isCorrect": true },
            { "value": "4", "isCorrect": false },
            { "value": "6", "isCorrect": false },
            { "value": "7", "isCorrect": false },
            { "value": "8", "isCorrect": false },
            { "value": "10", "isCorrect": false },
            { "value": "2", "isCorrect": false },
            { "value": "9", "isCorrect": false }
        ]
    }
];
