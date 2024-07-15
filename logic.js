let user_score=0;
let comp_score=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const init_user=document.querySelector("#you");
const init_comp=document.querySelector("#comp");

choices.forEach((choice)=>
{
    choice.addEventListener("click",()=>
    {
      const userchoice=choice.getAttribute("id");
      playgame(userchoice);
    })
})
const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const idx=Math.floor(Math.random()*3);
    return options[idx];
}
const playgame=(userchoice)=>
{
const compchoice=gencompchoice();
if(userchoice===compchoice)
{
drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock")
    {
        userwin=compchoice==="paper"?false:true;
    }
    else if(userchoice==="paper")
    {
            userwin=compchoice==="scissors"?false:true;
    }
    else
    {
            userwin=compchoice==="rock"?false:true;
    }
    show_winner(userwin,userchoice,compchoice);
}
}
const show_winner=(userwin,userchoice,compchoice)=>
{
  if(userwin)
  {
    user_score++;
    init_user.innerText=user_score;
    msg.innerText=`You won! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor="green";
  }
  else{
    comp_score++;
    init_comp.innerText=comp_score;
    msg.innerText=`You lose!${compchoice} beats your ${userchoice}`;
    msg.style.backgroundColor="red";

  }
}
const drawgame=()=>
{
    msg.innerText="It's a draw!";
     msg.style.backgroundColor="blue";
}