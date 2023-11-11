// -------------------------------------------------> 1. <-------------------------------------------------

// 1. Funksiya yazacaqsınız və bu funksiya parametr olaraq number qəbul edir. Əgər number cütdürsə, 
// həmin number-i 2-yə bölürsünüz, təkdirsə 3-ə vurub üzərinə 1 gəlirsiniz. 
// Bu prosesi həmin number 1 olana qədər təkrarlanır ( 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1)

function myFunction(number) {

    console.log(number) //BU setir sadece console da hansi ededi daxil etdiyimizi gormek ucun yazilib, yazilmasa da olar.

    while (number != 1) {
        if (number % 2 === 0) {
            number /= 2
        }
        else {
            number = number * 3 + 1
        }
        console.log(number);
    }
}

myFunction(3);


// -------------------------------------------------> 2. <-------------------------------------------------

// 2. Array-dəki ən böyük və ən kiçik ədədi tapın və onların fərqini console-a çıxarın.

const array = [5, 50, 100, 10, 2, 30]

let minArr = array[0]
let maxArr = array[0]

for (let i = 0; i < array.length; i++) {
    if (array[i] < minArr) {
        minArr = array[i]
    }
    else if (array[i] > maxArr) {
        maxArr = array[i]
    }
}

console.log(`minimum = ${minArr}`)
console.log(`maximum = ${maxArr}`)

// RESULT :
console.log(`maxArr - minArr = 
= ${maxArr} - ${minArr} = ${maxArr - minArr}`);


// -------------------------------------------------> 3. <-------------------------------------------------

// 3. Funksiya yazacaqsiniz və parametr olaraq array və number qəbul edəcək.
// Həmin number-in array-də olub-olmadığını yoxlayacaqsınız.

function checkArray(array, number) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] === number) {
            return true
        }

        return false
    }
}

const array_check = [1, 2, 3, 4, 5, 6, 7, 8]

console.log(checkArray(array_check, 5));