
function myfunction(){
var sub=document.getElementById('sub').value;
var id=document.getElementById('id').value;
var msg=document.getElementById('msg').value;
var mytest= new RegExp();
mytest =/[^0-9]/;

 
var errormessage = "";
if(document.getElementById('sub').value == "" || mytest.test(sub)==false){
errormessage +="please input a string value in Subject* box' \n";
}
 if(document.getElementById('email').value == ""){
errormessage +="please input a text value in Email* box' \n";
}
 if(document.getElementById('id').value == "" || mytest.test(id)==true){
errormessage +="please input a number value in ID* box'\n";
}
if(document.getElementById('url').value == ""){
errormessage +="please input a text value in URL* box'\n";
}
if(document.getElementById('msg').value == "" || mytest.test(msg)==false){
errormessage +="please input a string value in Message*box'\n";
}
if (errormessage != ""){
alert(errormessage)
return false;
}
var domain = "the email doamin is : "
var the_email=(document.getElementById('email').value)

var ind=the_email.indexOf("@");

var the_email=the_email.substr((ind+1));

alert(domain + the_email )

var domain = "the Username is : "
var the_url=(document.getElementById('url').value)

var ind=the_url.slice(".github.io");

var the_url=the_url.substr((ind-5));
var the_url=the_url.replace(".github.io","")
alert(domain + the_url )


}
