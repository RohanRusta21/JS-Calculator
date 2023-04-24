let container = document.getElementById('container');
let calculator = document.getElementById('calculator');
let toggleImage = document.getElementById('toggleImage');
let toggleButton = document.getElementById('toggle-button');
let inputField = document.getElementsByTagName('input');
let bool = true;
let toggleLightDark = ()=>{
    for(let i=0;i<inputField.length;i++){
        console.log(inputField[i].classList.toggle('input-dark'))
    }
    if(bool === true){
        container.classList.remove('container-light')
        container.classList.add('container-dark')
        calculator.classList.remove('calculator-light')
        calculator.classList.add('calculator-dark')
        toggleImage.classList.remove('toggleImageLight')
        toggleImage.classList.add('toggleImageDark')
        toggleButton.value = "DARK"
        toggleButton.classList.remove('toggle-button-light')
        toggleButton.classList.add('toggle-button-dark')
        bool = false

    }else{
        container.classList.remove('container-dark')
        container.classList.add('container-light')
        calculator.classList.add('calculator-light')
        calculator.classList.remove('calculator-dark')
        toggleImage.classList.add('toggleImageLight')
        toggleImage.classList.remove('toggleImageDark')
        toggleButton.value = "LIGHT"
        toggleButton.classList.remove('toggle-button-dark')
        toggleButton.classList.add('toggle-button-light')
        bool = true;
    }
    
}
let inputValue = (val) => {
    document.getElementById("display").value += val;
}
let del = ()=>{
    document.getElementById("display").value = document.getElementById("display").value.slice(0,-1);
}

let ac = () =>{
    document.getElementById("display").value = '';
}

let calc = ()=>{
    document.getElementById("display").value = eval(document.getElementById("display").value);
}

