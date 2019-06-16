
//hide warning on page load
 $('#warning').hide()

//initalize veriables
let bill;
let people;
let tip;
let calculatedTip;



//function that displays tip when keyboard calculate button is pressed
$("#calculate").click(function () {

event.preventDefault()

  //values are connected to input
     bill = $("#bill").val();
     people = Number($("#peopleNum").val());
     tip = $("#tip").val();

    //tip can be entered as either a desmole or a precent
      if (tip < 1) {
        tip = tip * 100
      }

  //operation that returns tip
  calculatedTip = ((bill * (tip / 100)) / people).toFixed(2)

  if (isNaN(calculatedTip)) {
  $('#warning').show();
  } else {
    $('#calculatedTip').text("$" + calculatedTip);
  }


});

//buttons for the Keypad option. These save their inputs inside the form so we only have to use the calculate function once.

  //display numbers on modal
  $("body").on("click", ".keypadNum", function () {
    $("#keypadDisplay").append($(this).text())
  });

  //clear keypad Display
  $("body").on("click", "#clear", function () {
    $("#keypadDisplay").empty();
  });

  //display bill value on form
  $("body").on("click", "#keypad-bill", function () {
    $("#bill").val($("#keypadDisplay").text().trim());
    $("#keypadDisplay").empty();
  });

  //display tip value on form
  $("body").on("click", "#keypad-tip", function () {
    $("#tip").val($("#keypadDisplay").text().trim());
    $("#keypadDisplay").empty();
  });

  //display number of people on form
  $("body").on("click", "#keypad-people", function () {
    $("#peopleNum").val($("#keypadDisplay").text().trim());
    $("#keypadDisplay").empty();
  });


//console.log( calculateTip(56.78, .15, 3) );