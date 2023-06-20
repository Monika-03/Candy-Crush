const timeH = document.getElementById('start');
let timeSecond = 120;


timeH.innerHTML = `00:${timeSecond}`;

const countDown = setInterval(()=>{
 timeSecond--;
 displayTime(timeSecond);
 
 if(timeSecond<=0 || timeSecond<1){
    clearInterval(countDown);
    endTime();
    
 }
 },1000)                

 function displayTime(second){
    const min = Math.floor(second/60);
    const sec = Math.floor(second %60);
    timeH.innerHTML = `${min<10 ? '0': ''}${min}:${sec<10 ?'0': ''}${sec}`
 }
 
 function endTime(){
   
    timeH.innerHTML = 'TIME OUT';
}

