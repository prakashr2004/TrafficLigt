var red = document.getElementById("colour-red")
var yellow = document.getElementById("colour-yellow")
var green = document.getElementById("colour-green")
var counter = document.getElementById("counter")


var count = 10

var rcount = 0


var x = setInterval(()=>{

    
    if(rcount<11)
    {
        counter.innerHTML = count--
        red.classList.add("Addred")
        green.classList.remove("Addgreen")
        if(count<0){
            count=5
        }   
       
    }
    else if(rcount>=11 && rcount<17)
    {
        counter.innerHTML = count--
       red.classList.remove("Addred") 
       yellow.classList.add("Addyellow")      
       if(count<0){
        count=10
           } 
    }
    else if(rcount>=17 && rcount<=27)
    {
        counter.innerHTML = count--
        yellow.classList.remove("Addyellow")
        green.classList.add("Addgreen")
        
    }
    if(rcount == 28)
    {
        rcount = 0
        count=10
    }
    rcount++  
        
},500)




// var counter = 10;
// var newYearCountdown = setInterval(function(){
//   console.log(counter);
//   counter--
//   if (counter === 0) {
//     console.log("HAPPY NEW YEAR!!");
//     clearInterval(newYearCountdown);
//   }
// }, 1000);










// var count = 10
// console.log(count)
// var pre = ++count
// var post = count++
// console.log(count)
// console.log(post)
