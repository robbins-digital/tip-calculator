//Storing all of the various strings to be used in events as an object
var domStrings = {
    inputBill: "input-bill",
    slider: "tip-percent-slider",
    outputPercent: "output-percent",
    outputTip: "output-tip",
    outputFinalBill: "output-final-bill",
    calcBtn: "calculate-values",
    inputForm: "tip-calculator"
};

//Pulling the document objects
var eventInputBill = document.getElementById(domStrings.inputBill);
var eventOutputTip = document.getElementById(domStrings.outputTip);
var eventOutputFinalBill = document.getElementById(domStrings.outputFinalBill);
var eventSlider = document.getElementById(domStrings.slider);
var eventOutputSlider = document.getElementById(domStrings.outputPercent);
var eventCalcBtn = document.getElementById(domStrings.calcBtn);
var eventInputForm = document.getElementById(domStrings.inputForm);

//Slider
eventOutputSlider.innerHTML = eventSlider.value;

//Update the current slider value (each time you drag the slider handle)r
eventSlider.oninput = function () {
    eventOutputSlider.innerHTML = this.value;
}

//Multipling the bill input by type percent
function calcTip(bill, tipPercent) {
    return bill * tipPercent;
}

//Displaying bill value function for event listeners to call
function displayBill() {

    //Converting the input slider value to a decimal percent
    var actualInputPercent = (eventSlider.value / 100);

    //Converting the bill input value to a number
    var actualBillValue = Number(eventInputBill.value);

    //Using the calculate tip function to calculate the tip and total bill
    var tipTotal = calcTip(actualInputPercent, actualBillValue);
    var billTotal = calcTip(actualInputPercent, actualBillValue) + actualBillValue;

    //Rounding the tip and bill to 2 decimal places
    tipTotal = tipTotal.toFixed(2);
    billTotal = billTotal.toFixed(2);

    //Assigning the calculated variables to their respective dom locations
    eventOutputTip.innerHTML = tipTotal;
    eventOutputFinalBill.innerHTML = billTotal;
}

//Adding the event listeners
eventCalcBtn.addEventListener('click', displayBill);

document.addEventListener('keypress', function (event) {
    if (event.keyCode === 13 || event.which === 13) {
        displayBill();
    }
});

eventInputForm.onsubmit = function() {
    return false;
}