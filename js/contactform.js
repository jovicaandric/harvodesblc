function sendEmail() {
    var patt = /[a-zA-Z0-9.,]{2,}/;
    var subject = document.getElementById("subject").value;
    var body = document.getElementById("body").value

    if (patt.test(subject)) {
        document.getElementById("subjectValidation").style = "display:none;";
        if (patt.test(body)) {
            document.getElementById("bodyValidation").style = "display:none";
            window.open('mailto:bander014@gmail.com?subject=' + subject + '&body=' + body);
        } else {
            document.getElementById("bodyValidation").style = "display:block;";
        }
    } else {
        document.getElementById("subjectValidation").style = "display:block;";
    }


}