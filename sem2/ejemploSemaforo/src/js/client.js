const state = {
  lights: ['red', 'yellow', 'green'],
  currentLight: 0,
};

const render = lState => {
  const title = document.createElement('h1');
  title.innerHTML = 'SEMAFORO';

  const semaforo = document.createElement('div');
  semaforo.className = 'semaforo';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'nextBtn';
  nextBtn.innerHTML = 'Next';

  // Clear previous root content
  if (root.hasChildNodes()) {
    root.innerHTML = null;
  }

  // Main rendering
  root.appendChild(title);
  root.appendChild(semaforo);
  root.appendChild(nextBtn);

  const lightElements = lState.lights.map(
    (lightColor, i) => {
      const lightElement = document.createElement('div');
      lightElement.className = `light ${lightColor}`;

      if (i === lState.currentLight) {
        lightElement.classList.add('on');
      }

      return lightElement;
    }
  );

  lightElements.forEach(
    lightElement => semaforo.appendChild(lightElement)
  );

  // Events
  nextBtn.onclick = () => {
    lState.currentLight = (lState.currentLight + 1) % lState.lights.length;
    render(lState);
  };
}

render(state);
