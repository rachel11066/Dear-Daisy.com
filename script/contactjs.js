function validateForm() {
    var symbol = /\S+@\S+.\S+/;
    var em1 = document.getElementById('email').value;
    if (em1.match(symbol)) {
        document.getElementById('sent').style.display='block';
        document.getElementById('error').style.display='none';
        return false;
    }
    else {
        document.getElementById('sent').style.display='none';
        document.getElementById('error').style.display='block';
        return false;
    }
}

   