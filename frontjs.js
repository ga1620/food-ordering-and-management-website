function validation() {
    result = true;
    rn = true;
    rm = true;
    ri = true;
    x = document.getElementsByTagName("input");
    nam = x[0].value;
    mobile = x[1].value;
    id = x[2].value;
    var genm = x[3];
    var genf = x[4];
    if ((nam.length != 0) && (mobile.length != 0) && (id.length != 0) && (genm.checked || genf.checked)) {
        namvalid();
        mobilevalid();
        idvalid();
        if (rn && rm && ri) {
            result = true;
            return (result);
        } else {
            result = false;
            alert("Oops Someting wrong.....\nInstruction\n1.All feild are Mandatory\n2.Name should be contains only alphabets\n3.Mobile number must be of 10 digit and contains only digits \n4.Id number must be of 12 digit and not contain any alphabets and special Character");
            return (result);
        }
    } else {
        result = false;
        alert("Oops Someting wrong.....\nInstruction\n1.All feild are Mandatory \n2.Name should be contains only alphabets\n3.Mobile number must be of 10 digit and  contains only digits\n4.Id number must be of 12 digit and not contain any alphabets and special Character");
        return (result);
    }


}

function namvalid() {
    var regex = /^[A-Za-z ]+$/;
    if ((!regex.test(nam)))
        rn = false;
    else
        rn = true;
}


function mobilevalid() {
    var regex = /^[0-9 ]+$/;
    if (mobile.length == 10 && (regex.test(mobile))) {
        rm = true;
    } else
        rm = false;
}

function idvalid() {
    var regex = /^[0-9 ]+$/;
    if (id.length == 12 && (regex.test(id))) {
        ri = true;
    } else
        ri = false;
}