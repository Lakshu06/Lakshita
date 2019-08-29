var cvs=document.getElementById("canvas");
var ctx=cvs.getContext("2d");
// context.drawImage('./snake.png');
var cvsW = cvs.width;
var cvsH=cvs.height;
var snakeW=20;
var snakeH=20;
//score var
var score=0;
//default direction
var direction="right";
/*function saves(){
ctx.save();
}*/
//read users directions

window.onload= function()
    {
        textCanvas(); 
    }

function textCanvas()
    {
    ctx.fillStyle = "yellow";
    ctx.font = "40px calibri";
    ctx.fillText('Start Game' ,150,150);
   
    }
    
function reset()
    {
    location.reload();
    }
function startgame()
    {
            var cvs=document.getElementById("canvas");
            var ctx=cvs.getContext("2d");
            // context.drawImage('./snake.png');
            var cvsW = cvs.width;
            var cvsH=cvs.height;
            var snakeW=20;
            var snakeH=20;
            //score var
            var score=0;
            //default direction
            var direction="right";
            //read users directions
                //read users directions
    document.addEventListener("keydown",getDirection);
    function getDirection(e)
    {
            if(e.keyCode == 37 && direction != "right"){
            direction = "left";
            }
            else if(e.keyCode == 38 && direction != "down"){
                direction = "up";
            }
            else if(e.keyCode == 39 && direction != "left"){
                direction = "right";
            }
            else if(e.keyCode == 40 && direction != "up"){
                direction = "down";
            }
    }
    //drawsnake
    function drawsnake(x,y)
    {
            this.x=x;
            this.y=y;
            ctx.fillStyle ="#00ff00";
            ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
            ctx.strokeStyle = "#000000";
            ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
    }
// create our snake object , it will contain 4 box
//var len = 4;
    var snake=[];
    for(var i=3; i>=0 ; i--)
    {  
        snake.push({x:i,y:0});
    }
//create food
     food ={
         x:Math.round(Math.random()*(cvsW/snakeW-1)+1),
         y:Math.round(Math.random()*(cvsH/snakeH-1)+1)
           }
//draw food function
    function drawfood(x,y)
        {
                ctx.fillStyle ="red";
                ctx.fillRect(x*snakeW,y*snakeH,snakeW,snakeH);
                ctx.strokeStyle = "#000000";
                ctx.strokeRect(x*snakeW,y*snakeH,snakeW,snakeH);
        }


        function checkcollision(x,y,array)
            {
                     for(var i=0;i<=array.length;i++) 
                     {
                    if(x ==array[i].x && y ==array[i].y)
                        {
                        return true;               
                       }
                    return false;
                  
            
                    }
                }
//to show scores
function drawscore(x)
     {
                ctx.fillStyle ="white";
                ctx.font="15px verdana";
                ctx.fillText("score:"+x,5,cvsH-5);
    }  



function draw(){
        ctx.clearRect(0,0,cvsW,cvsH);
        for(var i=0 ; i< snake.length; i++)
         {   
            var x =snake[i].x;
            var y =snake[i].y;
            drawsnake(x,y);
         }

         drawfood(food.x,food.y);
        var snakeX =snake[0].x;
        var snakeY =snake[0].y;     
 //if the snake hits the wall , it's game over

        if(snakeX < 0 || snakeY < 0 || snakeX >= (cvsW/snakeW)-1 || snakeY >= (cvsH/snakeH)-1 ) 
            {  clearInterval(game);
                if(checkcollision(snake[0].x,snake[0].y,snake)  )
                {
                    Gameover();
                   

                    
                }
               
            }
           
// snakeX++;
         if(direction == "left")snakeX--;
         else if(direction == "up")snakeY--;
         else  if(direction == "right")snakeX++;
         else if(direction == "down")snakeY++;
//if snake eat the food
        if(snakeX == food.x && snakeY == food.y){
            food= {
            x:Math.round(Math.random()*(cvsW/snakeW-1)+1),
            y:Math.round(Math.random()*(cvsH/snakeH-1)+1)
               }
               var newHead = {
                                x:snakeX,
                                y:snakeY
                           };
            score++;
             }
        else { 
            snake.pop();
            var newHead = {
                            x:snakeX,
                            y:snakeY
                           };
        }
        snake.unshift(newHead);
        drawscore(score);
    }        
            
let game = setInterval(draw,200);

function Gameover(){
    
    ctx.fillStyle = "yellow";
    ctx.font = "40px calibri";
    ctx.fillText(' Game Over' ,200,200);
    ctx.fillText('Score :' + score,250,250);
    


}


}

