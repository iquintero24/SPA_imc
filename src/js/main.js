//let myWeight 
//let myheight 

//myWeight = prompt("plis, enter your weight")
//myHeight = prompt("plis, enter your height")

//imc = myWeight / (myHeight * myHeight)

//alert("yout imc is"+ imc)


const forms = document.getElementById('formCalculate');

forms.addEventListener('submit', (e) => {
    
    const weight = e.target[0].value
    const height = e.target[1].value

    const result = weight / (height*height)
    let resultfixed = result.toFixed(1)
    let message

    if(resultfixed < 10.5){
        message = 'Bajo peso';
    }else if(resultfixed < 24.9){
        message = 'Peso normal';
    }else if (resultfixed < 29.9){
        message = 'Sobre peso';
    }else{
        message = 'obesidad'
    }
    
    console.log(message);
    document.getElementById('result').value  = resultfixed 



    e.preventDefault(); // Prevents the default form submission
    // Custom validation and submission logic here
});