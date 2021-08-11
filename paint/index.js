$(".screenSizeMsg").hide();
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;

  
if(canvasWidth >= 700 && canvasHeight >= 600)
{
  $(".screenSizeMsg").hide();
  $(".app").show();
  function _(selector){
    return document.querySelector(selector);
  }
  function setup(){
    let canvas = createCanvas(canvasWidth, canvasHeight);
    canvas.parent("canvas-wrapper");
    background(255);
  }
  function mouseDragged(){
    let type = _("#pen-pencil").checked?"pencil":"brush";
    let size = parseInt(_("#pen-size").value);
    let color = _("#pen-color").value;
    fill(color);
    stroke(color);
    if(type == "pencil"){
      line(pmouseX, pmouseY, mouseX, mouseY);
    } else {
      ellipse(mouseX, mouseY, size, size);
    }
  }
  _("#reset-canvas").addEventListener("click", function(){
    background(255);
  });
  _("#save-canvas").addEventListener("click",function(){
    saveCanvas(canvas, "sketch", "png");
  });
} // End of IF.
else{
  $(".screenSizeMsg").show();
  $(".app").hide();
}
