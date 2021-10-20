const canvas = document.getElementById('logo-canvas')
const urlInput = document.getElementById('image-url')
const textInput = document.getElementById('text')
const fontInput = document.getElementById('font')

const ctx = canvas.getContext('2d')

const drawPlz = (options={}) =>{
  const textToPrint = textInput.value
  const margin = 10;
  const width = 500;
  const height = 500;
  const colours = options.colours || ['#DD4','#4D4']
  const img = {width,height,colours}
  
  const textWidth = ctx.measureText(textToPrint).width
  const textHeight = 250

  var g=ctx.createLinearGradient(img.width-10,0,0,img.height-10);
  colours.forEach((c,i)=>{g.addColorStop(i,c)})
  ctx.fillStyle=g;
  ctx.fillRect(0, 0, img.width, img.height);
  
  ctx.font = `${textHeight}px ${fontInput.value}`;
  ctx.fillStyle = "white";
  ctx.strokeStyle = "#444";
  ctx.lineWidth = 4;
  ctx.lineJoin = "round";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  
  ctx.strokeText(textToPrint.trim(), width/2, height/2, width-margin)
  ctx.fillText(textToPrint.trim(), width/2, height/2, width-margin)
  
  return canvas
}

drawPlz()
urlInput.addEventListener('change',drawPlz)
textInput.addEventListener('change',drawPlz)
fontInput.addEventListener('change',drawPlz)
