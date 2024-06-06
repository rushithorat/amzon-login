var a = 'rushi03';
var b = 'Rushi';


function verify(){
    if((document.getElementById('user').value == a) && (document.getElementById('pass').value == b))
        {
            window.location.href = "./index.html";
        }
        else{
            document.getElementById('invalid').value="Invalid";
        }
}