const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
let w, h, columns, drops;
const chars = '01アカサタナ01<>{}/;=+-*01';

function resize(){
  w = canvas.width = canvas.offsetWidth;
  h = canvas.height = canvas.offsetHeight;
  columns = Math.floor(w/16);
  drops = Array(columns).fill(1);
}
window.addEventListener('resize', resize);
resize();

let animId;
function draw(){
  ctx.fillStyle = 'rgba(6,9,7,0.08)';
  ctx.fillRect(0,0,w,h);
  ctx.fillStyle = '#39ff88';
  ctx.font = '14px monospace';
  for(let i=0;i<drops.length;i++){
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*16, drops[i]*16);
    if(drops[i]*16 > h && Math.random() > 0.975) drops[i]=0;
    drops[i]++;
  }
  animId = requestAnimationFrame(draw);
}

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion) draw();