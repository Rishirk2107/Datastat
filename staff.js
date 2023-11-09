function staff() {
    location.href="https://locas-cit.free.nf/markentry";
}
const arr=[['staff@csbs','cit_csbs'],['staff@it','cit_it'],['staff@cse','cit_cse'],['staff@mech','cit_mech'],['staff@ece','cit_ece'],['staff@mct','cit_mct'],['staff@bme','cit_bme'],['staff@eee','cit_eee'],['staff@civil','cit_civil'],['staff@aids','cit_aids'],['staff@aiml','cit_aiml'],['staff@cs','cit_cs']];
function check(){
    var name=document.getElementById("name").value;
    var pass=document.getElementById("pass").value;
    var x=false;
    for(let i=0;i<arr.length;i++){
        if(name==arr[i][0] && pass==arr[i][1]){
            x=true;
            break;
        }
    }
    if(x==true){
        alert("Login Successfull");
        staff();
    }
    else{
        alert("Inavlid Username/Password....Login Failed");
    }
}