var btn = document.getElementById("done");
btn.addEventListener("click", AddRow);
var row = 1;

function AddRow() {
    var employee_name = document.getElementById("employee_name").value;
    var d = Date();
    var time = document.getElementById("time").innerHTML = d;
    var choice = document.getElementById("choice").value;

    if (!employee_name || !time) {
        alert("Kindly, fill all boxes.")
        return;
    }

    var mytable = document.getElementById("mytable");
    var newRow = mytable.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = employee_name;
    cell2.innerHTML = time;
    cell3.innerHTML = choice;

    row++;
    employee_name.reset();
}
