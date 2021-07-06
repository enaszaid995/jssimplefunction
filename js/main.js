function myFunction() {
    var x = document.getElementById("details");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
function plusBy()
{
        num1 = parseInt(document.getElementById("n1").value);
        num2 = parseInt(document.getElementById("n2").value);
        document.getElementById("result").innerHTML = num1 + num2;
}
function minusBy()
{
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
        document.getElementById("result").innerHTML = num1 - num2;
}
function multiplyBy()
{
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
        document.getElementById("result").innerHTML = num1 * num2;
}

function divideBy() 
{ 
        num1 = document.getElementById("n1").value;
        num2 = document.getElementById("n2").value;
document.getElementById("result").innerHTML = num1 / num2;
}
var arr =[]
function addArray() 
{ 
        num1 = parseInt(document.getElementById("n").value);
        num2 = parseInt(document.getElementById("nn").value);
        num3 = parseInt(document.getElementById("nnn").value);
        num4 = parseInt(document.getElementById("nnnn").value);
        num5 = parseInt(document.getElementById("nnnnn").value);
        arr.push(num1);
        arr.push(num2);
        arr.push(num3);
        arr.push(num4);
        arr.push(num5);
        
       
        document.getElementById("arrayy").innerHTML=arr;
     
}

function averageBy(){
      var average = 0;
        
        for(var i in arr) {
            average +=arr[i];
        }
        
        var obj = arr.length;
        document.getElementById("resultt").innerHTML = average / obj;
      }
function resetBy(){
  arr.pop();
  document.getElementById("arrayy").innerHTML = arr;
}

function DarkMode(){
  document.body.classList.toggle("dark");
  document.body.style.transition = "all 2s";
  var x = document.getElementById('modee');
  if (x.innerHTML === "OFF"){
    x.innerHTML= "ON";
  }else{
    x.innerHTML = "OFF";
  }
}
