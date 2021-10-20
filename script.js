const canvas = document.getElementById('logo-canvas')
const urlInput = document.getElementById('image-url')
const textInput = document.getElementById('text')
const fontInput = document.getElementById('font')

const image = new Image();

const ctx = canvas.getContext('2d')

const drawPlz = (options={}) =>{
  const textToPrint = textInput.value
  const margin = 10;
  const width = 500;
  const height = 500;
  const colours = options.colours || ['#DD4','#4D4']
  const img = {width,height,colours}
  
  
  ctx.font = `${250}px "${fontInput.value}"`;
  
  const measurements = ctx.measureText(textToPrint)
  const textWidth = measurements.width
  // todo, font sits a bit high due to baseline being lower than average middle
  //const textHeight = measurements.emHeightAscent+measurements.emHeightDescent

  var g=ctx.createLinearGradient(img.width-10,0,0,img.height-10);
  colours.forEach((c,i)=>{g.addColorStop(i,c)})
  ctx.fillStyle=g;
  ctx.fillRect(0, 0, img.width, img.height);
  
  ctx.drawImage(image, 0, 0);
  
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

urlInput.addEventListener('change',e => image.src = URL.createObjectURL(e.target.files[0]));
image.addEventListener('load', drawPlz);
textInput.addEventListener('change',drawPlz)
fontInput.addEventListener('change',drawPlz)

