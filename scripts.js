function hide(btn){
    btn.remove ();
}

function change ($this) 
{
    if ($this.value=="Dog")
    {
    alert("You are looking for a dog");
    }
    if ($this.value=="Cat")
    {
    alert("You are looking for a cat");
    }
    

}
var count=3
countElement=document.querySelector("#count");

function increase1 () {
    count++;
    countElement.innerText="Petting(s)"+count;
    console.log (count);


}


var count2=5
count2Element=document.querySelector("#count2");

function increase2 () {
    count2++;
    count2Element.innerText="Petting(s)"+count2;
    console.log (count2);
}

var count3=8
count3Element=document.querySelector("#count3");

function increase3 () {
    count3++;
    count3Element.innerText="Petting(s)"+count3;
    console.log (count3);
}