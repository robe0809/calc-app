class Operation {
    constructor(x, y, type) {
    this.x = x;
    this.y = y;
    this.type = type;
}
}

$(document).ready(readyNow);
// event listeners
function readyNow () {
    $('#calculateBtn').on('click', calculate);
    $('#clearBtn').on('click', clear);
}
// calculate function that takes a new object and POSTS it to the server
function calculate () {
    console.log('button clicked in calculate');
    let firstVal = $('#firstVal').val();
    let secondVal = $('#secondVal').val();
    let operator = $('#dropDown :selected').val();
    let calculation = new Operation(firstVal, secondVal, operator);
        $.ajax({
        method: 'POST',
        url: '/calculation',
        data: calculation,
        success: function (response) {
            console.log('we have recieved:', response);
            getCalculation(); 
        }, 
        error: function (response) {
            console.log('error', response);
            alert('Please enter Operation');
        }
        })
}
// get funciton, gets data from the server and appends values to the DOM.
function getCalculation () {
    $.ajax({
        method: 'GET',
        url: '/calculation',
        success: function (response) {
            console.log('we have a response: ', response);
            let firstVal = $('#firstVal').val();
            let secondVal = $('#secondVal').val();
            let operator = $('#dropDown :selected').text();
            let calculation = new Operation(firstVal, secondVal, operator);
            $('#mainContainer').append('<li>' + firstVal + ' ' + operator + ' ' + secondVal + ' ' + '=' + response.result.toFixed(2) + '</li>');
        }
    })
}
// clear dropdown menu only works once if you clear it and enter more operators and try to 
// clear again it does not clear twice. Need to fix.
function clear () {
    $('#mainContainer').empty();
    $('#dropDown option:eq(0)').attr('selected','selected'); 
    $('#firstVal').val('');
    $('#secondVal').val('');
}
