
export default function initSlideShows(options = {
  selector: '.slideshow',
  defaultInterval: 5000,
  defaultFadeDuration: 2500
}) {
  const containers = document.querySelectorAll(options.selector);
  for(let i = 0; i < containers.length; i++) {
    const container = containers[i];
    const interval = Number(container.dataset.interval) || options.defaultInterval;
    const fadeDuration= Number(container.dataset.fadeDuration) || options.defaultFadeDuration;
    createSlideShow(container, interval, fadeDuration);
  }
}

function createSlideShow(container, interval, fadeDuration) {
  const state = {
    elements: [],
    index: 0
  }
  
  for(let i = 0; i < container.children.length; i++) {
    const child = container.children[i];
    const first = i === 0;
    if(first) {
      child.style.opacity = 1;
    }
    else {
      child.style.opacity = 0;
    }
    child.style.transition = 'opacity '+(fadeDuration / 1000)+'s';
    state.elements.push(child);
  }

  setInterval(() => {
    const current = state.elements[state.index];
    state.index = (state.index + 1) % state.elements.length;
    const next = state.elements[state.index];

    current.style.opacity = 0;
    next.style.opacity = 1;
  }, interval);
}
