function populateDesignations()
{
var xmlHttpRequest=new XMLHttpRequest();
xmlHttpRequest.onreadystatechange=function(){
if(this.readyState==4)
{
if(this.status==200)
{
var responseData=this.responseText;
var designations=JSON.parse(responseData);
var designationsComboBox=document.getElementById('designationsComboBox');
var obj;
for(let i=0;i<designations.length;i++)
{
obj=document.createElement('option');
obj.value=designations[i].code;
obj.text=designations[i].title;
designationsComboBox.appendChild(obj);
}
}
else
{
alert('some problem');
}
}
};
xmlHttpRequest.open("GET",'servletOne',true);
xmlHttpRequest.send();
}
window.addEventListener('load',populateDesignations);
