document.addEventListener('DOMContentLoaded', () => {
  let tools = document.querySelectorAll('.tool');
  let pixels = document.querySelectorAll('.pixel');
  let colors = document.querySelectorAll('.color');
  let select_color = document.querySelector('.color-selected');
  let select_tool = document.querySelector('.tool-selected');

  let get_tool = function(tool){
    tool.addEventListener('click', function(){
      for(let i = 0; i < tools.length; i++){
        tools[i].classList.remove('tool-selected');
      }
      tool.classList.add('tool-selected');
      select_tool = tool;
      console.log(select_tool.id)
    }) 
  }
  for(let i = 0; i < tools.length; i++){
    get_tool(tools[i]);
  }

  let get_color = function(color){
    color.addEventListener('click', function(){
      for(let i = 0; i < colors.length; i++){
        colors[i].classList.remove('color-selected');
      }
      color.classList.add('color-selected');
      select_color = color;
    })
  }
  for(let i = 0; i < colors.length; i++){
    get_color(colors[i]);
  }
  
  let get_pixel = function(pixel){
    pixel.addEventListener('click', function(){
      if(select_tool.id == 'tool-pencil'){
        pixel.style.backgroundColor = select_color.style.backgroundColor;
      }
      else if(select_tool.id == 'tool-erase'){
        pixel.style.backgroundColor = '#eee';
      }
      else if(select_tool.id == 'tool-fill'){
        for(let i = 0; i < pixels.length; i++){
          pixels[i].style.backgroundColor = select_color.style.backgroundColor;
        }
      }
      else if(select_tool.id == 'tool-brush'){ 
        for(let i = 0; i < pixels.length; i++){
          if(pixels[i] == pixel){
            pixels[i].style.backgroundColor = select_color.style.backgroundColor;
            pixels[i+1].style.backgroundColor = select_color.style.backgroundColor;
            pixels[i-1].style.backgroundColor = select_color.style.backgroundColor;
            pixels[i+14].style.backgroundColor = select_color.style.backgroundColor;
            pixels[i-14].style.backgroundColor = select_color.style.backgroundColor;
          }
        }
      }
    }) 
  }
  for(let i = 0; i < pixels.length; i++){
    get_pixel(pixels[i]);
  }
});