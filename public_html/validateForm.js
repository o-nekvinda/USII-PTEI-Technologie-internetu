function validateForm()
{

    var title = document.getElementById("name").value;
    if (title.length <= 3) {
        label = document.getElementById("lblName");
        label.style.color = "red";
        alert("Jméno elektrárny musí být delší než 3 znaky.");
        return false;
    }
//    if ((title == null || title.length <= 3))
//    {
//        var label = document.getElementById("lblName");
//        label.style.color = "red";
//        if (title == null || title == "")
//        {
//            document.getElementById("name").placeholder = "Doplňte jméno elektrárny";
//        }
//        else
//        {
//            alert("Jméno elektrárny musí být delší než 3 znaky.");
//
//        }
//        return false;
//    }

    return true;
}

function checkName() {
    var title = document.getElementById("name").value;
    if (title && title.length > 0)
        document.getElementById("btnSubmit").disabled = false;
    else
        document.getElementById("btnSubmit").disabled = true;


}