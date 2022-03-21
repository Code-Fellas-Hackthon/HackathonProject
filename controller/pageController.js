//Hide All Content
$("#firstPage").css("display", "block");
$("#secondPage").css("display", "none");
$("#thirdPage").css("display", "none");
$("#forthPage").css("display", "none");


$("#btnGoSecond").click(function () {
    $("#firstPage").css("display", "none");
    $("#secondPage").css("display", "block");
    $("#thirdPage").css("display", "none");
    $("#forthPage").css("display", "none");

    setCurrentDate();
});

$("#btnBackHome").click(function () {
    $("#firstPage").css("display", "block");
    $("#secondPage").css("display", "none");
    $("#thirdPage").css("display", "none");
    $("#forthPage").css("display", "none");

});

// $("#btnSaveDetail").click(function () {
//     $("#firstPage").css("display", "none");
//     $("#secondPage").css("display", "none");
//     $("#thirdPage").css("display", "block");
//
// });

$("#btnBackHomeSecondPage").click(function () {
    $("#firstPage").css("display", "block");
    $("#secondPage").css("display", "none");
    $("#thirdPage").css("display", "none");
    $("#forthPage").css("display", "none");

});

/*
$("#btnLogin").click(function () {
    $("#firstPage").css("display", "none");
    $("#secondPage").css("display", "none");
    $("#thirdPage").css("display", "none");
    $("#forthPage").css("display", "block");

});*/
