
function convert(type, element) {

    //Aqui recojo cada uno de los °
    const symbols = document.getElementsByClassName("symb");

    //Aqui guardamos el arreglo de temperaturas
    const temperatures = document.querySelectorAll(".weakly-weather-item p.mb-0");
  
    // comprueba el tipo de conversión (user o system)
    if (type === "user") {
      // si el input esta activado
      if (element.checked) {
        // convierte cada temperatura a Fahrenheit
        for (let i = 0; i < temperatures.length; i++) {
          const celsius = temperatures[i].getAttribute("value"); // traigo cada value del html
          const fahrenheit = (celsius * 9/5) + 32;
          temperatures[i].textContent = Math.round(fahrenheit); //redondea el valor
          symbols[i].textContent = "°F";  // y cada simbolo cambialo a °F
        }
      }
      // si el checkbox está desactivado, convierte a Celsius
      else {
        // convierte cada temperatura a Celsius
        for (let i = 0; i < temperatures.length; i++) {
          const fahrenheit = temperatures[i].getAttribute("value");
          const celsius = (fahrenheit - 32) * 5/9;
          temperatures[i].textContent = Math.round(celsius);
          symbols[i].textContent = "°C";
        }
      }
    }
  }