const calculatetemp =()=>{
    const  numberTemp = document.getElementById('temp').value;
    const selectedTemp = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[selectedTemp.selectedIndex].value;
    // console.log(valueTemp)

    const celToFah = (celcius) => {
        let f = Math.round((celcius*9/5)+32);
        return f;
    }
    const fahToCel = (fahrenheit) => {
      let c = Math.round(fahrenheit-32)*(5/9);
      return c;
    };

    var result;

    if(valueTemp=='celcius'){
        result = celToFah(numberTemp);
        document.getElementById("result").innerHTML = `${result} degrees fahrenheit`;
    }
    else{
        result = fahToCel(numberTemp);
        document.getElementById("result").innerHTML = `${result} degrees celcius`;
    }
}
