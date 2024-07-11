const endDate = "29 May 2024 2:54 PM"
document.getElementById("end-date").innerText= endDate

const inputs=document.querySelectorAll("input")

function clock() {
    const end= new Date(endDate)
    const now= new Date()
    const diff= (end-now)/ 1000;//to convert into sec from milisec
    console.log(diff);//in sec 
    //convert into days
    if(diff<0) return;
    inputs[0].value=(Math.floor (diff/3600/24));//to add the day in 1st input box
    inputs[1].value=(Math.floor (diff/3600)%24);// to add the hours out of days
    inputs[2].value=(Math.floor (diff/60)%60);// to add the minutes out of days and hours
    inputs[3].value=(Math.floor (diff)%60);// to add the minutes out of days and hours


}

clock()//initial call

setInterval(
() => {
    clock()
},
1000//to call the clock after each sec
)