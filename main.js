document.addEventListener('DOMContentLoaded', () => {
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
      console.log(event.target);
      event.target.style.backgroundColor = selectColor.style.backgroundColor;
    }
    else if(selectTool.id == 'tool-erase' & !event.target.id){
      event.target.style.backgroundColor = '#eee';
          }
          else if(selectTool.id == 'tool-fill'){
            for(let i = 0; i < pixels.length; i++){
              pixels[i].style.backgroundColor = selectColor.style.backgroundColor;
            }
          }
          else if(selectTool.id == 'tool-brush'){ 
            for(let i = 0; i < pixels.length; i++){
              if(pixels[i] == event.target){
                pixels[i].style.backgroundColor = selectColor.style.backgroundColor;
                pixels[i+1].style.backgroundColor = selectColor.style.backgroundColor;
                pixels[i-1].style.backgroundColor = selectColor.style.backgroundColor;
                pixels[i+14].style.backgroundColor = selectColor.style.backgroundColor;
                pixels[i-14].style.backgroundColor = selectColor.style.backgroundColor;
              }
            }
          }
  })
});