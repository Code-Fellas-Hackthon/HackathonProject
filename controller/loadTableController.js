
function generateId() {
    var orderId = personDB[personDB.length - 1].getId();
    var tempId = parseInt(id.split("-")[1]);
    tempId = tempId + 1;
    if (tempId <= 9) {
        $("#id").val("O00-000" + tempId);
    } else if (tempId <= 99) {
        $("#id").val("O00-00" + tempId);
    } else if (tempId <= 999) {
        $("#id").val("O00-0" + tempId);
    } else {
        $("#id").val("O00-" + tempId);
    }
}var searchingNic = $("#txtSearchVisitor").val();
var searchingDate = $("#searchingDate").val();

for (let i = 0; i < personDB.length; i++) {
    if (searchingNic==personDB[i].getNic()){
        if (searchingDate==personDB[i].getDate()){
            for (let j = personDB.length-1; j < personDB.length-i; j++) {
                /*var personDetailArray = personDB[j].slice(i+1,personDB.length);
                $('#allEntriesTbl tr').eq(rowNo).children(":eq(0)").text(personDetailArray[]);
                $('#allEntriesTbl tr').eq(rowNo).children(":eq(1)").text(itemName);
                $('#allEntriesTbl tr').eq(rowNo).children(":eq(2)").text(price);
                $('#allEntriesTbl tr').eq(rowNo).children(":eq(3)").text(newQty1);
                $('#allEntriesTbl tr').eq(rowNo).children(":eq(4)").text(newTotal1);*/
                var row = <tr><td>${personDB[j].getNic()}</td><td>${personDB[j].getNic()}</td><td>${personDB[j].getName()}</td><td>${personDB[j].getTelNo()}</td><td>${personDB[j].getEmail()}</td><td>${personDB[j].getDate()}</td></tr>;
                //console.log(row);
                $("#allEntriesTbl").append(row);
            }
        }
    }
}