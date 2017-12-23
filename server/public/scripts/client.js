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
$('#calculateBtn').on('click', multiply);
$('#calculateBtn').on('click', add);
$('#calculateBtn').on('click', subtract);
$('#calculateBtn').on('click', divide);
}
function multiply () {
    let multiplication = new Operation($("#firstVal").val(), $("#secondVal").val(), $('#dropDown :selected').val());
    if($('#dropDown :selected').text() === '*') {
        $.ajax({
            method: 'POST',
            url: '/multiplication',
            data: multiplication,
            success: function (response) {
                console.log('we have recieved:', response); 
                getMultiply();
            }
        })
    } // end if multiply
}// end multiply 
function getMultiply () {
    $.ajax({
        method: 'GET',
        url:'/multiplication',
        success: function (response) {
            console.log('multiplication :', response);
        }
    })
}

function add () {
    let addition = new Operation($("#firstVal").val(), $("#secondVal").val(), $('#dropDown :selected').text());
    if($('#dropDown :selected').text() === '+') {
            console.log('WOOOOO');
        $.ajax({
            method: 'POST',
            url: '/addition',
            data: addition,
            success: function (response) {
                console.log('we have recieved:', response); 
            }
        })
    }// end if addition 
}// end addition 

function subtract () {
    let subtraction = new Operation($("#firstVal").val(), $("#secondVal").val(), $('#dropDown :selected').text());
    if($('#dropDown :selected').text() === '-') {
            console.log('WOOOOO');
        $.ajax({
            method: 'POST',
            url: '/subtraction',
            data: subtraction,
            success: function (response) {
                console.log('we have recieved:', response); 
            }
        })
    }// end if subtraction 
}// end subtraction

function divide () {
    let division = new Operation($("#firstVal").val(), $("#secondVal").val(), $('#dropDown :selected').text());
    if($('#dropDown :selected').text() === '/') {
            console.log('WOOOOO');
        $.ajax({
            method: 'POST',
            url: '/division',
            data: division,
            success: function (response) {
                console.log('we have recieved:', response); 
            }
        })
    }// end if division 
}// end division
