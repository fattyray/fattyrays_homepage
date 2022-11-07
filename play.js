let board=document.getElementById('board');
let num_board=[];
let ele_board=[];
let player=1;
let count=0;
function judge(j) {
    if (num_board[j]==0)
    {
        if (player==1)
        {
            ele_board[j].innerText='X';
            num_board[j]=1;
            player=-1;
            count++;
        }
        else {
            ele_board[j].innerText='O';
            num_board[j]=-1;
            player=1;
            count++;
        }
    }
    if (count==9)
    {
        alert("平局");
        location.href="chess.html";
    }
    else
    {
        for (var q=0;q<3;q++)
        {
            var ans=0;
            for (var t=0;t<3;t++){

                ans+=num_board[3*q+t];
            }
            if (ans==3)
            {
                alert("先手胜");
                location.href="chess.html";
            }
            if (ans==-3)
            {
                alert("后手胜");
                location.href="chess.html";
            }
             ans=0;
            for (var t=0;t<3;t++){

                ans+=num_board[3*t+q];
            }
            if (ans==3)
            {
                alert("先手胜");
                location.href="chess.html";
            }
            if (ans==-3)
            {
                alert("后手胜");
                location.href="chess.html";
            }
        }
        var ans=num_board[0]+num_board[4]+num_board[8];
        var ans1=num_board[2]+num_board[4]+num_board[6];
        if (ans==3 ||ans1==3)
        {
            alert("先手胜");
            location.href="chess.html";
        }
        if (ans==-3 ||ans1==-3)
        {
            alert("后手胜");
            location.href="chess.html";
        }

    }

}
for (let i=0;i<9;i++)
{   num_board.push(0);
    s=document.createElement("div");
    s.setAttribute('class','placechess');
    board.appendChild(s);
    ele_board.push(s);
    s.onclick=function (){
        judge(i);
    }

}
