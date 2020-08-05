document.addEventListener('DOMContentLoaded', () => {
  "use strick"
  let tools = document.querySelectorAll('.tool');
  let colors = document.querySelectorAll('.color');
  let selectColor = document.querySelector('.color-selected');
  let selectTool = document.querySelector('.tool-selected');
  let pixelsContainer = document.getElementById('canvas');
  let pixels = pixelsContainer.children;

  let getTool = function(tool){
    tool.addEventListener('click', function(){
      for(let i = 0; i < tools.length; i++){
        tools[i].classList.remove('tool-selected');
      }
      tool.classList.add('tool-selected');
      selectTool = tool;
      console.log(selectTool.id)
    }) 
  }
  for(let i = 0; i < tools.length; i++){
    getTool(tools[i]);
  }

  let getColor = function(color){
    color.addEventListener('click', function(){
      for(let i = 0; i < colors.length; i++){
        colors[i].classList.remove('color-selected');
      }
      color.classList.add('color-selected');
      selectColor = color;
    })
  }
  for(let i = 0; i < colors.length; i++){
    getColor(colors[i]);
  }

  pixelsContainer.addEventListener('click',function(event){

    
    if(selectTool.id == 'tool-pencil' & !event.target.id){
      event.target.style.backgroundColor = selectColor.style.backgroundColor;
    }
    
    
    else if(selectTool.id == 'tool-erase' & !event.target.id){
      event.target.style.backgroundColor = '#eee';
          }


    else if(selectTool.id == 'tool-fill'){
      
        let setColor = function(index,color){
          // console.log(index);
          let row = Math.floor(index / 14) + 1
          pixels[index].style.backgroundColor = selectColor.style.backgroundColor;
          
          while(pixels[index+1] && (pixels[index+1].style.backgroundColor == color) && ((Math.floor((index+1) / 14) + 1) == row)){
            // console.log('-->');
            let newIndex = index+1;
            setColor(newIndex,color);
          }
          
          while(pixels[index-1] && (pixels[index-1].style.backgroundColor == color) && ((Math.floor((index-1) / 14) + 1) == row) ){
            // console.log('<--');
            let newIndex = index-1;
            setColor(newIndex,color);
          }
          
          while(pixels[index-14] && pixels[index-14].style.backgroundColor == color){
            row -= 1;
            // console.log('^');
            let newIndex = index-14;
            setColor(newIndex,color);
          }

          while(pixels[index+14] && pixels[index+14].style.backgroundColor == color){
            row += 1;
            // console.log('v');
            let newIndex = index+14;
            setColor(newIndex,color);
          }
        }
      for(let i = 0; i < pixels.length; i++){
        if((pixels[i] == event.target) && (event.target.style.backgroundColor != selectColor.style.backgroundColor)){
          let curentPositionIndex = i;
          let curentColor = event.target.style.backgroundColor;
          setColor (curentPositionIndex,curentColor);
          }
        }
    }


    else if(selectTool.id == 'tool-brush'){ 
      for(let i = 0; i < pixels.length; i++){
        if(pixels[i] == event.target){
          let row = Math.floor(i / 14) + 1
          pixels[i].style.backgroundColor = selectColor.style.backgroundColor;
          if(pixels[i+1] && row == (Math.floor((i+1) / 14) + 1)){pixels[i+1].style.backgroundColor = selectColor.style.backgroundColor;}
          if(pixels[i-1] && row == (Math.floor((i-1) / 14) + 1)){pixels[i-1].style.backgroundColor = selectColor.style.backgroundColor;}
          if(pixels[i+14]){pixels[i+14].style.backgroundColor = selectColor.style.backgroundColor;}
          if(pixels[i-14]){pixels[i-14].style.backgroundColor = selectColor.style.backgroundColor;}
        }
      }
    }
  })
});