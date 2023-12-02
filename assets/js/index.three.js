//Создать программу, которая генерирует случайное слово из четырёх букв.
    
//Шаги для выполнения задания:
    
//1. Создай переменную `alphabet`, в которой будет храниться строка с алфавитом, из которых ты будешь генерировать случайное слово.
//2. Используя объект `Math`, создай четыре случайных индекса в диапазоне от 0 до длины вашей `alphabet`. 
//3. Используя полученные случайные индексы, извлеки соответствующие символы из `alphabet` и объедини их в строку, чтобы сформировать случайное слово.
//4. Выведи полученное случайное слово на экран, чтобы проверить результат.

const alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
console.log(alphabet.length);

const index1 = Math.floor(Math.random() * alphabet.length);
const index2 = Math.floor(Math.random() * alphabet.length);
const index3 = Math.floor(Math.random() * alphabet.length);
const index4 = Math.floor(Math.random() * alphabet.length);

const rez1 = alphabet[index1];
const rez2 = alphabet[index2];
const rez3 = alphabet[index3];
const rez4 = alphabet[index4];
const result = rez1 + rez2 + rez3 + rez4;
console.log(result);
