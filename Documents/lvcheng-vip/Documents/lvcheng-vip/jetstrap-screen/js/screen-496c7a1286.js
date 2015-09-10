$('document').ready(function(){
  
  //initiate board 

  var i,j;
  
  for(i=0;i<=7;i++)
    for(j=0;j<=7;j++)
      {

        var id='a'+i+j;
        $('.board').append("<div class='box'"+" id="+id+ "></div>");
//        $(".board").append("<br>"); 
      }
      
  //destination
  $("#a07").css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//castle image
  //monster
  
  //player
  var x1=7,y1=0,x2=7,y2=1;
  var player1='#a'+x1+y1;
  var player2='#a'+x2+y2;
//  $(player1).css('background-color','green');
  $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
   // background-image:url("https://files.nyu.edu/yq368/public/pawn.jpg");
  //$(player2).css('background-color','green');

  //enable monster
  
  var state=0;//1: win ; -1:lose ;0 playing
  var movement=1;//1:move on 0:wait for action
  
  var direction_dice=1 + Math.floor(Math.random()*4);
  var distance_dice=1 + Math.floor(Math.random()*2);
  var new_monster_loc=1 + Math.floor(Math.random()*4);
  
  var a1=2,b1=2,a2=2,b2=5,a3=5,b3=2,a4=5,b4=5;
  var new_monster_1="#a"+a1+b1;
  var new_monster_2="#a"+a2+b2;
  var new_monster_3="#a"+a3+b3;
  var new_monster_4="#a"+a4+b4;  
  
    $(new_monster_1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');
    //('background-color','yellow');
    $(new_monster_2).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');
    $(new_monster_3).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');  
    $(new_monster_4).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');
 
//   $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
/*  while(state==0&&movement==1)
  
    
    movement =0; */
    var playerposition=player1;
/******************************MONSTER MOVE*********START*************************************/
    $('.box').click(function(){
   //   $(this).css('background-color','green'); 
  

  //clear previous monster
    $(new_monster_1).css('background-image','');
    $(new_monster_2).css('background-image','');
    $(new_monster_3).css('background-image','');  
    $(new_monster_4).css('background-image','');
  
      // dice;
    direction_dice=1 + Math.floor(Math.random()*4);
    distance_dice=1 + Math.floor(Math.random()*2);
    new_monster_loc=1 + Math.floor(Math.random()*4);
   var directions;
   if(direction_dice==1)
    directions="north";
   else if(direction_dice==2)
    directions="west";
   else if(direction_dice==3)
    directions="east";    
   else if(direction_dice==4)
    directions="south";    
    
   $(".dice").html("<p font-size='10px'>watch out! monsters move to <strong>"+directions+    "</strong> for <strong>"+distance_dice+ "</strong> step </p>");
  //  else if(direction_dice==2)
  //  $(".dice").html("<p font-size='10px'>watch out! monsters move to west for "+distance_dice+ " step, new monster will appears in new_monster= "+new_monster_loc+"</p>")    
  //  else if(direction_dice==3)
   // $(".dice").html("<p font-size='10px'>watch out! monsters move to east for "+distance_dice+ " step, new monster will appears in new_monster= "+new_monster_loc+"</p>
  //  else 
  //  $(".dice").html("<p font-size='10px'>watch out! monsters move to south for "+distance_dice+ " step, new monster will appears in new_monster= "+new_monster_loc+"</p>")
  
    
    switch (direction_dice)//1 north 2 east 3 south 4 west //***change the moving mode: unlimited moving
    {
      case 1: if(a1-distance_dice>=0 && a1-distance_dice<=9)
              a1=a1-distance_dice;
              else if(a1>9)
                      a1=9;
                   else 
                      a1=0;
              if(a2-distance_dice>=0 && a2-distance_dice<=9)
              a2=a2-distance_dice;
              else if(a2>9)
                      a2=9;
                   else 
                      a2=0;
              if(a3-distance_dice>=0 && a3-distance_dice<=9)
              a3=a3-distance_dice;
              else if(a3>9)
                      a3=9;
                   else 
                      a3=0;
              if(a4-distance_dice>=0 && a4-distance_dice<=9)
              a4=a4-distance_dice;
              else if(a4>9)
                      a4=9;
                   else 
                      a4=0;
              break;
      case 2: if(b1-distance_dice>=0 && b1-distance_dice<=9)
              b1=b1-distance_dice;
              else if(b1>9)
                      b1=9;
                   else 
                      b1=0;
              if(b2-distance_dice>=0 && b2-distance_dice<=9)
              b2=b2-distance_dice;
              else if(b2>9)
                      b2=9;
                   else 
                      b2=0;
              if(b3-distance_dice>=0 && b3-distance_dice<=9)
              b3=b3-distance_dice;
              else if(b3>9)
                      b3=9;
                   else 
                      b3=0;
              if(b4-distance_dice>=0 && b4-distance_dice<=9)
              b4=b4-distance_dice;
              else if(b4>9)
                      b4=9;
                   else 
                      b4=0;
              break;
      case 3: if(b1+distance_dice>=0 && b1+distance_dice<=9)
              b1=b1+distance_dice;
              else if(b1>9)
                      b1=9;
                   else 
                      b1=0;
              if(b2+distance_dice>=0 && b2+distance_dice<=9)
              b2=b2+distance_dice;
              else if(b2>9)
                      b2=9;
                   else 
                      b2=0;
              if(b3+distance_dice>=0 && b3+distance_dice<=9)
              b3=b3+distance_dice;
              else if(b3>9)
                      b3=9;
                   else 
                      b3=0;
              if(b4+distance_dice>=0 && b4+distance_dice<=9)
              b4=b4+distance_dice;
              else if(b4>9)
                      b4=9;
                   else 
                      b4=0;
              break;
      case 4: if(a1+distance_dice>=0 && a1+distance_dice<=9)
              a1=a1+distance_dice;
              else if(a1>9)
                      a1=9;
                   else 
                      a1=0;
              if(a2+distance_dice>=0 && a2+distance_dice<=9)
              a2=a2+distance_dice;
              else if(a2>9)
                      a2=9;
                   else 
                      a2=0;
              if(a3+distance_dice>=0 && a3+distance_dice<=9)
              a3=a3+distance_dice;
              else if(a3>9)
                      a3=9;
                   else 
                      a3=0;
              if(a4+distance_dice>=0 && a4+distance_dice<=9)
              a4=a4+distance_dice;
              else if(a4>9)
                      a4=9;
                   else 
                      a4=0;
              break;
    }

    new_monster_1="#a"+a1+b1;
    new_monster_2="#a"+a2+b2;
    new_monster_3="#a"+a3+b3;
    new_monster_4="#a"+a4+b4;
    
 //create new monster    
    
    $(new_monster_1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn
    $(new_monster_2).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');
    $(new_monster_3).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');  
    $(new_monster_4).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');
    
    if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4){
   //   alert("Game Over! ---- a");
             
       $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
     playerpositon=player1;
    }
     
    });
   
/**********************************MONSTER MOVE************END*********************/
/**********************************PLAYER MOVE*************START*******************/
var cardid=1 + Math.floor(Math.random()*4);//r1 r2 r3 r4 m1 m2 m3 m4....
var Acard1=0;
var Acard2=0;
var Acard3=0;
var Bcard1;
var Bcard2;
var Bcard3;

while(Acard1==Acard2 || Acard2==Acard3 || Acard1==Acard3)
{
  cardid=1 + Math.floor(Math.random()*4);
  Acard1=cardid;
  cardid=1 + Math.floor(Math.random()*4);
  Acard2=cardid;
  cardid=1 + Math.floor(Math.random()*4);
  Acard3=cardid;
}


$("#card1").html("<h1>"+Acard1+"</h1>");
$("#card2").html("<h1>"+Acard2+"</h1>");
$("#card3").html("<h1>"+Acard3+"</h1>");




//select card

/*  var x1=8,y1=0,x2=9,y2=1;
  var player1='#a'+x1+y1;
  var player2='#a'+x2+y2;
  $(player1).css('background-color','green');
  $(player2).css('background-color','green');*/
  //$(player1).css('background-color','black');
//var choice=0,move;

$("#card1").click(function(){
  //alert("Card click only be called once...");
  
 // alert(x1"+"y1);
  

  if(x1-Acard1>=0 && x1-Acard1<=7)
    {

      var choice1=0,move1;
      move1=x1-Acard1;
      choice1='#a'+move1+y1;
      $(".box").css("border","1px dashed black");
      $(choice1).css("border","2px solid gold");

      $(choice1).click(function(){
     //   alert("Should only be called once...");

          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          x1=move1;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
       //   alert(player1);
       //   alert(new_monster_1);
          if(player1=="#a07")
             {
           //    alert("You win!");
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");
             }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
                 {  // alert("Game Over! ----- b");
                    $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
                 }
                else{
                   var newcard=1 + Math.floor(Math.random()*4);
                  // alert("d"+newcard+"origin");
                   while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
                        {
                          newcard=1 + Math.floor(Math.random()*4);
                        }
                      Acard1=newcard;
                    $("#card1").html("<h1>"+Acard1+"</h1>");
                 //   alert(Acard1);
                }
     
        
      });
    }

   if(x1+Acard1>=0 && x1+Acard1<=7)
    {
      var choice2=0,move2;
      move2=x1+Acard1;
      choice2='#a'+move2+y1;
      $(choice2).css("border","2px solid gold");
  //    alert("ds"+choice2);
      choice2='#a'+move2+y1;
      $(choice2).click(function(){
     //   alert("Should only be called once...");
        
          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black"); 
        
          $(player1).css('background-image','');
          x1=move2;
          player1='#a'+x1+y1;
      //    alert(player1);
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn imge
     //      alert(player1);

          if(player1=="#a07")
             {//alert("You win!");
                $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win!</p> </div>");
             }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
          {
              //alert("Game Over!") ;      
                 $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
          }
          else{
             var newcard=1 + Math.floor(Math.random()*4);
            // alert("d"+newcard+"origin");
                while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
              {
                newcard=1 + Math.floor(Math.random()*4);
              }
                Acard1=newcard;
              $("#card1").html("<h1>"+Acard1+"</h1>");
          }
      });
    }
     /*
  if(y1-Acard1>=0 && y1-Acard1<=9)
    {
      var choice3=0,move3;    
      move3=y1-Acard1;
      choice3='#a'+x1+move3;
      $(choice3).css("border","2px solid gold");
      $(choice3).click(function(){
        y1=move3;
      });
    }    
    */
   if(y1-Acard1>=0 && y1-Acard1<=7)
    {

      var choice3=0,move3;
      move3=y1-Acard1;
      choice3='#a'+x1+move3;
      $(choice3).css("border","2px solid gold");

      $(choice3).click(function(){
//alert("Should only be called once...");

          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          y1=move3;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
          
            if(player1=="#a07")
            {
             //alert("You win!");
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");
             }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
             { //alert("Game Over!");
                $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
             }
          else{
             var newcard=1 + Math.floor(Math.random()*4);
            // alert("d"+newcard+"origin");
                while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
              {
                newcard=1 + Math.floor(Math.random()*4);
              }
                Acard1=newcard;
              $("#card1").html("<h1>"+Acard1+"</h1>");
     
          }
      });
    }  
    
    
    /*

  if(y1+Acard1>=0 && y1+Acard1<=9)
    {
      move=y1+Acard1;
      choice='#a'+x1+move;
      $(choice).css("border","2px solid gold");
      $(choice).click(function(){
        y1=move;
      });
    } 
    
*/
   if(y1+Acard1>=0 && y1+Acard1<=7)
    {

      var choice4=0,move4;
      move4=y1+Acard1;
      choice4='#a'+x1+move4;
      $(choice4).css("border","2px solid gold");

      $(choice4).click(function(){
       // alert("Should only be called once...");

          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          y1=move4;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
          
          if(player1=="#a07")
          {
             //alert("You win!");
           $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");
          }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
            { // alert("Game Over!") ;            
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
            }
          else{          
           var newcard=1 + Math.floor(Math.random()*4);
          // alert("d"+newcard+"origin");
              while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
            {
              newcard=1 + Math.floor(Math.random()*4);
            }
              Acard1=newcard;
            $("#card1").html("<h1>"+Acard1+"</h1>");
       
          }
      });
    }  



});

////////////////////////////////////////////////card2
$("#card2").click(function(){
  
  
 // alert(x1"+"y1);
  
   $(".box").css("border","1px dashed black");
  if(x1-Acard2>=0 && x1-Acard2<=7)
    {

      var choice1=0,move1;
      move1=x1-Acard2;
      choice1='#a'+move1+y1;
      $(choice1).css("border","2px solid gold");

      $(choice1).click(function(){

          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          x1=move1;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
          
          if(player1=="#a07")
          {
            // alert("You win!");
            $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");  
          }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
            {  //alert("Game Over!") ;            
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
            }        
          else{          
         var newcard=1 + Math.floor(Math.random()*4);
        // alert("d"+newcard+"origin");
            while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
          {
            newcard=1 + Math.floor(Math.random()*4);
          }
            Acard2=newcard;
          $("#card2").html("<h1>"+Acard2+"</h1>");
     
          }
      });
    }

  if(x1+Acard2>=0 && x1+Acard2<=7)
    {
      var choice2=0,move2;
      move2=x1+Acard2;
      choice2='#a'+move2+y1;
      $(choice2).css("border","2px solid gold");
  //    alert("ds"+choice2);
      choice2='#a'+move2+y1;
      $(choice2).click(function(){
          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black"); 
        
          $(player1).css('background-image','');
          x1=move2;
          player1='#a'+x1+y1;
        //  alert(player1);
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
     //      alert(player1);
          
            if(player1=="#a07"){
           //  alert("You win!");
                $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");
               }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
              {//alert("Game Over!");            
                 $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
              }
          else{
             var newcard=1 + Math.floor(Math.random()*4);
            // alert("d"+newcard+"origin");
                while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
              {
                newcard=1 + Math.floor(Math.random()*4);
              }
                Acard2=newcard;
              $("#card2").html("<h1>"+Acard2+"</h1>");
          }
      });
    }
     /*
  if(y1-Acard1>=0 && y1-Acard1<=9)
    {
      var choice3=0,move3;    
      move3=y1-Acard1;
      choice3='#a'+x1+move3;
      $(choice3).css("border","2px solid gold");
      $(choice3).click(function(){
        y1=move3;
      });
    }    
    */
  if(y1-Acard2>=0 && y1-Acard2<=9)
    {

      var choice3=0,move3;
      move3=y1-Acard2;
      choice3='#a'+x1+move3;
      $(choice3).css("border","2px solid gold");

      $(choice3).click(function(){

          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          y1=move3;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
          
          if(player1=="#a07")
          {
            // alert("You win!");
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win</p> </div>");
          }
          else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
              {//alert("Game Over!");            
                 $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
              }
          else{
             var newcard=1 + Math.floor(Math.random()*4);
            // alert("d"+newcard+"origin");
                while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
              {
                newcard=1 + Math.floor(Math.random()*4);
              }
                Acard2=newcard;
              $("#card2").html("<h1>"+Acard2+"</h1>");
          }
     
        
      });
    }  
    
    
    /*

  if(y1+Acard1>=0 && y1+Acard1<=9)
    {
      move=y1+Acard1;
      choice='#a'+x1+move;
      $(choice).css("border","2px solid gold");
      $(choice).click(function(){
        y1=move;
      });
    } 
    
*/
  if(y1+Acard2>=0 && y1+Acard2<=7)
    {

      var choice4=0,move4;
      move4=y1+Acard2;
      choice4='#a'+x1+move4;
      $(choice4).css("border","2px solid gold");

      $(choice4).click(function(){
         // alert("sdfdsfs");
          $(choice1).css("border","1px dashed black");
          $(choice2).css("border","1px dashed black");         
          $(choice3).css("border","1px dashed black");
          $(choice4).css("border","1px dashed black");   
          
          $(player1).css('background-image','');
          y1=move4;
          player1='#a'+x1+y1;
          $(player1).css('background-image','url(http://img3.imgtn.bdimg.com/it/u=3851535547,790178952&fm=21&gp=0.jpg)');//pawn image
          
          if(player1=="#a07")
            { //alert("You win!");
             $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>You win!</p> </div>");
            }
            else if(player1==new_monster_1 || player1==new_monster_2 || player1==new_monster_3 || player1==new_monster_4)
              {
                 $('.board').html("<div class='gameover'><br><br><br><br><br> <br><br><br><br><br><p>Game over</p> </div>");
              //  alert("Game Over!") ;          
              }
          else{
          
           var newcard=1 + Math.floor(Math.random()*4);
          // alert("d"+newcard+"origin");
              while(newcard==Acard1 || newcard==Acard2 || newcard==Acard3)
            {
              newcard=1 + Math.floor(Math.random()*4);
            }
              Acard2=newcard;
            $("#card2").html("<h1>"+Acard2+"</h1>");
     
          }
      });
    }  



});











//  }
  
  
/***************************RULES*******************************************/
$('.pull-me').click(function(){
    
    $('.panel').slideToggle('slow');
    
}


);  
  });
  

  
