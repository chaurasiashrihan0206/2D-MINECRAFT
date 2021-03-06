var canvas= new fabric.Canvas('myCanvas');

p_x=10;
p_y=10;

b_width=30;
b_height=30;

var p_object="";
var b_object="";

function player_update(){
    fabric.Image.fromURL("player.png" , function(Img){
        p_object=Img;
        p_object.scaleToWidth(150);
        p_object.scaleToHeight(140);
        p_object.set({
            top: p_y,
            left: p_x 
        });
        canvas.add(p_object);
    }
    );
}

function new_image(get_image){
    fabric.Image.fromURL(get_image , function(Img){
        b_object=Img;
        b_object.scaleToWidth(b_width);
        b_object.scaleToHeight(b_height);
        b_object.set({
            top: p_y,
            left: p_x 
        });
        canvas.add(b_object);
    }
    );
}

window.addEventListener("keydown" , my_keydown);
function my_keydown(e){
    keypressed=e.keyCode;
    if(e.shiftKey==true && keypressed=='80'){
    b_width=b_width+10;
    b_height=b_height+10;
    document.getElementById("current_width").innerHTML=b_width;
    document.getElementById("current_height").innerHTML=b_height;
    } 

    if(e.shiftKey==true && keypressed=='77'){
        b_width=b_width-10;
        b_height=b_height-10;
        document.getElementById("current_width").innerHTML=b_width;
        document.getElementById("current_height").innerHTML=b_height;
        } 

        if(keypressed=='38'){
            up();
        console.log("up");
        }

        if(keypressed=='40'){
            down();
         console.log("down");
        }

        if(keypressed=='39'){
            right();
        console.log("right");
         }

        if(keypressed=='37'){
            left();
         console.log("left");
         }

         if(keypressed=='87'){
             new_image('wall.jpg');
             console.log("w");
         }

         if(keypressed=='71'){
            new_image('ground.png');
            console.log("g");
        }

        if(keypressed=='76'){
            new_image('light_green.png');
            console.log("l");
        }

        if(keypressed=='84'){
            new_image('trunk.jpg');
            console.log("t");
        }

        if(keypressed=='82'){
            new_image('roof.jpg');
            console.log("r");
        }

        if(keypressed=='89'){
            new_image('yellow_wall.png');
            console.log("y");
        }

        if(keypressed=='68'){
            new_image('dark_green.png');
            console.log("d");
        }

        if(keypressed=='85'){
            new_image('unique.png');
            console.log("u");
        }

        if(keypressed=='67'){
            new_image('cloud.jpg');
            console.log("c");
        }
}

function up(){
    if(p_y > 0){
        p_y=p_y-b_height;
        canvas.remove(p_object);
        player_update();
    }
}

function down(){
    if(p_y < 500){
        p_y=p_y+b_height;
        canvas.remove(p_object);
        player_update();
    }
}

function left(){
    if(p_x > 0){
        p_x = p_x-b_width;
        console.log("whenLeftPressed" + p_x);
        canvas.remove(p_object);
        player_update();
    }
}

function right(){
    if(p_x < 850){
        p_x = p_x+b_width;
        console.log("whenRightPressed" + p_x);
        canvas.remove(p_object);
        player_update();
    }
}