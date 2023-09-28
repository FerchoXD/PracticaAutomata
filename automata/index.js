
const btn = document.getElementById('btn_revisar');

const StringComplete = [];
const validLettersForEndCase = new Set(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
const numbersCase1 = new Set(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const numbersCase2 = new Set(["1", "2", "3", "4", "5", "6", "7", "8", "9"]);
const validLettersForFirstCase= new Set(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N","U", "V", "W", "X", "Y", "Z"]);
const validLettersForSecondCase= new Set(["U", "V", "W", "X", "Y", "Z"]);
const inputElement = document.getElementById('floating_outlined');


const elementsforU = new Set(["U","V","W","X","Y","Z"]);
const elementsforN1 = new Set(["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);



const validationFunctions = [
    validateString,
    firstCase,
    secondCase,
    validateHyphe1,
    validateNumbers,
    validateHyphe2,
    validateEndCase,
];

const completionFlags = [
    'validateStringComplet',
    'firstCaseComplet',
    'secondCaseComplet',
    'validateHyphe1Complet',
    'validateNumbersComplet',
    'validateHyphe2Complet',
    'validateEndCaseComplet'
];

function main(){
    // Itera a través de las funciones de validación en el arreglo 'validationFunctions'.
for (let i = 0; i < validationFunctions.length; i++) {
    // Comprueba si la variable de finalización correspondiente (indicada por 'completionFlags[i]') está establecida como falsa.
    if (!window[completionFlags[i]]) {
        // Si la variable de finalización es falsa, significa que esta validación aún no se ha completado con éxito.

        // Ejecuta la función de validación actual (validationFunctions[i]).
        if (validationFunctions[i]()) {
            // Si la función de validación retorna verdadero (éxito), se marca la variable de finalización como verdadera.
            window[completionFlags[i]] = true;
        } else {
            // Si la función de validación retorna falso (falla), se sale del proceso de validación y se retorna.
            return;
        }
    }
}
}

function validateString() {
if (inputElement.value.length < 9) {
    alert('El inputElement contiene menos de 9 caracteres');
    return 0;
}

if (inputElement.value.length > 9) {
    alert('El inputElement contiene mas de 9 caracteres');
    return 0;
}

if (inputElement.value.includes(' ')) {
    alert("no mame mijo es sin espacios ahi dice verga")
    return 0;
} else {
    for (let i = 0; i < 9; i++) {
        const character = inputElement.value.charAt(i).toUpperCase();
        StringComplete.push(character);
        const q0 = document.getElementById('q0');
        q0.setAttribute('fill', 'green');
        // alert(StringComplete[i]);
    }
    return 1;
}

}

//funcion para validar la primer transicion U...N
function firstCase() {
    const q1 = document.getElementById('q1');
    if (validLettersForFirstCase.has(StringComplete[0])) {
        q1.setAttribute('fill', 'green');
        return 1;
    } else {
        q1.setAttribute('fill', 'red');
        // inputElement.value = '';
        StringComplete.splice(0, StringComplete.length);
        // alert('Incorrecto');
        return 0;
    }
}

//funcion para validar la segunda transicion N...Z
function secondCase() {
    const q2 = document.getElementById('q2');
    if (validLettersForSecondCase.has(StringComplete[1])) {
        q2.setAttribute('fill', 'green');
        return 1;
    } else {
        q2.setAttribute('fill', 'red');
        // inputElement.value = '';
        StringComplete.splice(0, StringComplete.length);
        // alert('Incorrecto');
        return 0;
    }
}

// numbersCase1 = 0...9
// numbersCase2 = 1...9

//funcion para validar las transiciones entre los numeros 0001 A 9999
function validateNumbers() {
    const q4 = document.getElementById('q4');
    const q5 = document.getElementById('q5');
    const q6 = document.getElementById('q6');
    const q7 = document.getElementById('q7');
    const q9 = document.getElementById('q9');
    const q10 = document.getElementById('q10');
    const q11 = document.getElementById('q11');
    const q12 = document.getElementById('q12');
    const q13 = document.getElementById('q13');
    const q14 = document.getElementById('q14');
    const q15 = document.getElementById('q15');
    const q16 = document.getElementById('q16');
    const q17 = document.getElementById('q17');


    if(StringComplete[3] === "0"){
        q9.setAttribute('fill', 'green');
        if(StringComplete[4] === "0"){
            q13.setAttribute('fill', 'green');
            if(StringComplete[5] === "0"){
                q16.setAttribute('fill', 'green');
                if(numbersCase2.has(StringComplete[6])){
                    q17.setAttribute('fill', 'green');
                    return 1;
                }else{
                    q16.setAttribute('fill', 'red');
                    error(3);
                }
            }if(numbersCase2.has(StringComplete[5])){
                q11.setAttribute('fill', 'green');
                if(numbersCase1.has(StringComplete[6])){
                    q12.setAttribute('fill', 'green');
                    return 1;
                }
            }
        }if (numbersCase2.has(StringComplete[4])) {
            q10.setAttribute('fill', 'green');
            if(numbersCase1.has(StringComplete[5])){
                q14.setAttribute('fill', 'green');
                if(numbersCase1.has(StringComplete[6])){
                    q15.setAttribute('fill', 'green');
                    return 1;
                }
            }
        }
    }if (numbersCase2.has(StringComplete[3])){
        q4.setAttribute('fill', 'green');
        if (numbersCase1.has(StringComplete[4])){
            q5.setAttribute('fill', 'green');
            if (numbersCase1.has(StringComplete[5])){
                q6.setAttribute('fill', 'green');
                if (numbersCase1.has(StringComplete[6])){
                    q7.setAttribute('fill', 'green');
                    return 1;
                }
            }
        }
        return 1;
    }
}

//valida la primer entrada del simbolo "-"
function validateHyphe1(){
    const q3 = document.getElementById('q3');
    if ((StringComplete[2]) === "-") {
        q3.setAttribute('fill', 'green');
        return 1;
    } else {
        q3.setAttribute('fill', 'red');
        // inputElement.value = '';
        StringComplete.splice(0, StringComplete.length);
        // alert('Incorrecto');
        return 0;
    }
}

//valida la segunda entrada del simbolo "-"
function validateHyphe2(){
    const q8 = document.getElementById('q8');
    if ((StringComplete[7]) === "-") {
        q8.setAttribute('fill', 'green');
        return 1;
    } else {
        q8.setAttribute('fill', 'red');
        // inputElement.value = '';
        StringComplete.splice(0, StringComplete.length);
        // alert('Incorrecto');
        return 0;
    }
}

function validateEndCase(){
    const q18 = document.getElementById('q18');
    const q19 = document.getElementById('q19');
    const qcircle_19 = document.getElementById('qcircle_19');
    if (validLettersForEndCase.has(StringComplete[8])) {
        q18.setAttribute('fill', 'green');
        q19.setAttribute('fill', 'green');
        qcircle_19.setAttribute('fill', 'green');
        success();
        return 1;
    } else {
        q18.setAttribute('fill', 'red');
        // inputElement.value = '';
        StringComplete.splice(0, StringComplete.length);
        // alert('Incorrecto');
        return 0;
    }
}

//funcion para modal Sucess
function success() {
    Swal.fire({
        title: "success!!!",
        text: 'La cadena es valida',
        icon: 'success',
        // timerProgressBar: true,
        showConfirmButton: true
    }).then(() => {
        for(const element of states){
            element.setAttribute('fill', 'black')
        }
    })

    inputElement.value = '';
    StringComplete.splice(0, StringComplete.length);
}

//funcion para modal Error
function error(parametro) {
    switch (parametro) {
        case 1:
            Swal.fire({
                title: "Warning!!!",
                text: 'El automata NO es valido',
                icon: 'error',
                // timerProgressBar: true,
                showConfirmButton: true
            }).then(() => {
                for(const element of states){
                    element.setAttribute('fill', 'black')
                }
            })
        
            inputElement.value = '';
            StringComplete.splice(0, StringComplete.length);
            break;
        case 2:
            Swal.fire({
                title: "Warning!!!",
                text: 'Cadena no valida',
                icon: 'error',
                // timerProgressBar: true,
                showConfirmButton: true
            }).then(() => {
                for(const element of states){
                    element.setAttribute('fill', 'black')
                }
            })
        
            inputElement.value = '';
            StringComplete.splice(0, StringComplete.length);
            break;
            case 3:
                Swal.fire({
                    title: "Warning!!!",
                    text: 'No se puede ingresar el numero 0000',
                    icon: 'error',
                    // timerProgressBar: true,
                    showConfirmButton: true
                }).then(() => {
                    for(const element of states){
                        element.setAttribute('fill', 'black')
                    }
                })
            
                inputElement.value = '';
                StringComplete.splice(0, StringComplete.length);
                break;
        default:
            break;
    }
}

btn.addEventListener('click', main);
