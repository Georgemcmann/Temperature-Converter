// Get referecne to the Celsius and Fahrenheit input fields
const celsius = document.querySelector("#celsius");
const fahrenheit = document.querySelector("#fahrenheit");
const kelvin = document.querySelector("#kelvin");

console.log(celsius, fahrenheit,);
      // Set focus to the Celsius input field when the page loads
      window.addEventListener("load", () => celsius.focus());

      //Convert Celsius to Fahrenheit when Celsius value changes
      celsius.addEventListener("input", () => {
        fahrenheit.value = ((celsius.value * 9 ) / 5 + 32).toFixed(2);
        //Clear fahrenheit input when celsius input is empty
        if(!celsius.value) fahrenheit.value = "";
      });

       // Convert fahrenheit to Celsius when fahrenheit value changes
       fahrenheit.addEventListener("input", () => {
        celsius.value = (((fahrenheit.value - 32) * 5) / 9).toFixed(2);
        //Clear celsius input when celsius input is empty
        if(!fahrenheit.value) celsius.value = "";
       });


       console.log(celsius, kelvin);
       //convert celsius to kelvin when celsius value changes
       celsius.addEventListener("input", () => {
        kelvin.value = (Number(celsius.value) + 273);
        //Clear Kelvin input when celsius value changes
        if(!celsius.value) kelvin.value = "";
       });

       //convert kelvin to celsius when kelvin value changes
       kelvin.addEventListener("input", () => {
       celsius.value = (Number(kelvin.value) - 273);
       //clear celsius input when kelvin value changes
       if(!kelvin.value) celsius.value = "";
       });

       console.log(fahrenheit, kelvin);
       //convert fahrenheit to kelvin when fahrenheit value changes
       fahrenheit.addEventListener("input", () => {
        kelvin.value = ((((fahrenheit.value -32) * 5) / 9) + 273).toFixed(2);
        //clear kelvin input when fahrenheit value changes
        if(!fahrenheit.value) kelvin.value = "";
       });

       //convert kelvin to fahrenheit when kelvin value changes
       kelvin.addEventListener("input", () => {
        fahrenheit.value = ((((kelvin.value -273) * 9) / 5) +32).toFixed(2);
        //clear fahrenheit input when kelvin value changes
        if(!kelvin.value) fahrenheit.value = "";
       });


       //END OF THE CODE



