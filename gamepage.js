let array=["programming","mobile","java","india","tamilnadu","classes","object","inheritance","abandon", 
"ability",
"able",
"abortio",
"about",
"above",
"abroad",
"absence",
"absolute",
"absolutely",
"absorb",
"abuse",
"academic",
"accept",
"access",
"accident",
"accompany",
"accomplish",
"according",
"account",
"accurate",
"accuse",
"achieve",
"achievement",
"acid",
"acknowledge",
"acquire",
"across",
"act",
"action",
"active",
"activist",
"activity",
"actor",
"actress",
"actual",
"actually",
"ad",
"adapt",
"add",
"addition",
"additional",
"address",
"adequate",
"award",
"aware",
"awareness",
"away",
"awful"];
let heart=document.getElementById("heart");
let coinstag=document.getElementById('coins');

let heartshow=localStorage.getItem('heart');
let coinshow=localStorage.getItem('coins');
let turns=localStorage.getItem('turns');
let hrt=parseInt(turns);

let score=parseInt(coinshow);
let past=0;
let str=heartshow;

window.onload
{
   heart.innerHTML=heartshow;
   coinstag.innerHTML=coinshow;
  if(hrt>0)
  {
   wordgeneration();
  }
  else
  {
     buyheartfunction();
  }
}

function wordgeneration()
{
    let random=Math.floor(Math.random()*array.length);
    if(random==past)
    {
        random=Math.floor(Math.random()*array.length);
    }
    let word=array[random];
    let wordarray=word.split("");
    for(let i=wordarray.length-1;i>0;i--)
    {
        let j=Math.floor(Math.random()*(i+1));
        let temp=wordarray[i];
        wordarray[i]=wordarray[j];
        wordarray[j]=temp;
    }
    let guessword="";
    for(let x=0;x<wordarray.length;x++)
    {
        guessword+=wordarray[x];
        guessword+=" ";
    }
   let para=document.getElementById("showword");
   para.innerHTML=guessword;
   let guess=document.getElementById("guess"); 
   past=random;   
   guess.addEventListener("click",gamefunction);

   function gamefunction()
    {
        let input=document.getElementById("input").value;
        let input1=document.getElementById("input");
        if(input==" ")
        {
            alert("enter some guess ! ! !");
        }
        else if(input==word)
        {
            
            score+=50;
            guess.removeEventListener("click",gamefunction);
            wordgeneration();
        }
        else if(input!=word)
        {
           
            hrt--;
           guess.removeEventListener("click",gamefunction);
            wordgeneration();
        }

        if(hrt==3)
        {
         str="️ ⚡️ ❤️ ❤️ ❤️";
         localStorage.setItem('heart',str);
        }
        else if(hrt==2)
        {
         str="️ ⚡️ ❤️ ❤️ ";
         localStorage.setItem('heart',str);
        }
        else if(hrt==1)
        {
          str="️ ⚡️ ❤️ ";
          localStorage.setItem('heart',str);
        }
        else if(hrt==0)
        {
            str="️ ⚡️ ";
            localStorage.setItem('heart',str);
            buyheartfunction();
        }

        localStorage.setItem('coins',score);
        let showcoins=localStorage.getItem('coins');
        coinstag.innerHTML=showcoins;
        let heartdone=localStorage.getItem('heart');
        heart.innerHTML=heartdone;
        localStorage.setItem('turns',hrt);
        input1.value="";
    }
}

function  buyheartfunction()
{
   let playgame=document.getElementById("playgame");
            let heartbut=document.getElementById('heartbuy');
            playgame.style.display="none";
            heartbut.style.display="flex";
   let buy=document.getElementById('buy');

   buy.addEventListener("click",()=>{
      let buyheart=document.getElementById('buyheart');
      let money=localStorage.getItem('coins');
      let kasu=parseInt(money);
      if(kasu>0){
      if(buyheart.value>3)
      {
         alert("you can buy only 3 heart");
      }
      else if(buyheart.value==3)
      {
        if(kasu>=150){
         str="️ ⚡️ ❤️ ❤️ ❤️";
         localStorage.setItem('heart',str);
         kasu=kasu-(3*50);
         hrt=3;}
         else
         alert("Insufficient Coins");
      }
      else if(buyheart.value==2&&kasu>=100)
      {
        if(kasu>=100){
         str="️ ⚡️ ❤️ ❤️ ";
         localStorage.setItem('heart',str);
         kasu=kasu-(2*50);
         hrt=2;
        }
         else
         alert("Insufficient Coins");
      }
      else if(buyheart.value==1&&kasu>=50)
      {
        if(kasu>=50){
         str="️ ⚡️ ❤️ ";
         localStorage.setItem('heart',str);
         kasu=kasu-(1*50);
         hrt=1;}
         else
         alert("Insufficient Coins");
      }
    }
    else{
        alert("Insufficient Coins");
    }
      localStorage.setItem('coins',kasu);
      localStorage.setItem('turns',hrt);

      let idhayam=localStorage.getItem('heart');
      heart.innerHTML=idhayam;
      let dhuddu=localStorage.getItem('coins');
      coinstag.innerHTML=dhuddu;
      location.reload();
   })
}

setInterval(function(){
    let coinns=localStorage.getItem('coins');
    let score1=parseInt(coinns);
    score1+=100;
    localStorage.setItem('coins',score1);
},60*60*1000);
