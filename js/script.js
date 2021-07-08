var absnt = []

function select(button) {
    if (button.classList.contains("selected")) {
        button.classList.remove("selected");
        absnt.pop(button.id);
        document.getElementById("output_text").value = absnt;
    }

    else {
        button.classList.add("selected");
        absnt.push(button.id);
        document.getElementById("output_text").value = absnt;
    }

}

function sbmt() {
    var joined_string = absnt.join(", ");
    document.getElementById("at_list").innerText = joined_string;
    document.getElementById("popup_window").style.display = "block";

}

function confirm(){
    document.getElementById("popup_window").style.display = "none";
    alert("Attendance Submitted");
    location.reload();
}

function createButtonArray() {
    var attendance_button
    for (i = 1; i <= 74; i++) {
        attendance_button = document.createElement("button");
        attendance_button.className = "attendance-tab";
        attendance_button.onclick = function () { select(this) };
        attendance_button.innerText = i.toString();
        attendance_button.id = i.toString();
        document.getElementById("button_array").appendChild(attendance_button);
    }
}
