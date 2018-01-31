

//User Interface
$(document).ready(function() {
    $("#submitButton").click(function() {
        // $("#formInput").hide();
        var numberInput = $("#numberInput").val();
        var workableArray = arrayMaker(numberInput);
    alert(IfStatement(workableArray));
    //     var outputArray = [];
    //     var forThree = "I'm sorry, Dave. I'm afraid I can't do that.";
    //     var boopPushed = "Boop!";
    //     var beepPushed = "Beep!";
    // for (var index = 0; index <= workableArray.length; index++) {
    //     var checkNumber = workableArray[index];
    //     if (checkNumber%3 === 0 && checkNumber !== "0")
    //             outputArray.push(forThree);
    //     else if (checkNumber === "1")
    //             outputArray.push(boopPushed);
    //     else if (checkNumber === "0")
    //             outputArray.push(beepPushed);
    //     else
    //             outputArray.push(checkNumber);
    //
    // };
    // alert(outputArray);
    });
});

//Business Logic
// var myString = '1234';

//This fuction split the string number into individual characters
function arrayMaker(input) {
	var myArrayedString = input.split('');
  return myArrayedString;
}
function IfStatement (input) {
    var forThree = "I'm sorry, Dave. I'm afraid I can't do that.";
    var boopPushed = "Boop!";
    var beepPushed = "Beep!";
    var scopedOutputArray = [];
    for (var index = 0; index <= input.length; index++) {
        var checkNumber = input[index];

        if (checkNumber%3 === 0 && checkNumber !== "0")
                scopedOutputArray.push(forThree);
        else if (checkNumber === "1")
                scopedOutputArray.push(boopPushed);
        else if (checkNumber === "0")
                scopedOutputArray.push(beepPushed);
        else
                scopedOutputArray.push(checkNumber);

    };
        return scopedOutputArray;
};
