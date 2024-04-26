function mouseHandler() {
  let x = 0, y = 0;

  const mouseX = () => x;
  const mouseY = () => y;

  const handle = e => {
    x = e.clientX;
    y = e.clientY;
  }

  window.addEventListener('mousemove', handle);

  return { mouseX, mouseY };
}

export default function initOffsetWithMouse(options = {
  selector: '.offset-with-mouse',
  offsetAmount: 0.05 // TODO: Make offset amount variable with data attribute per element
}) {
  const elements = document.querySelectorAll(options.selector);

  const {mouseX, mouseY} = mouseHandler();
  let smoothMouseX = 0, smoothMouseY = 0;

  for(let i = 0; i < elements.length; i++) {
    elements[i].style.scale = 1 + options.offsetAmount;
  }

  const onTick = () => {
    smoothMouseX += (mouseX() - smoothMouseX) * 0.05;
    smoothMouseY += (mouseY() - smoothMouseY) * 0.05;
    
    const x =  (smoothMouseX / window.innerWidth - 0.5) * options.offsetAmount;
    const y =  (smoothMouseY / window.innerHeight - 0.5) * options.offsetAmount;

    for(let i = 0; i < elements.length; i++) {
      elements[i].style.transform = `translate(${-x * 100}%, ${-y * 100}%)`;
    }
  }

  setInterval(onTick, (1/30) * 1000);
}