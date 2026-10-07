(() => {
  'use strict';
  const form = document.getElementById('sample-form');
  const output = document.getElementById('sample-result');
  if (!form || !output) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const home = form.elements.namedItem('home').value;
    const service = form.elements.namedItem('service').value;
    const rhythm = form.elements.namedItem('rhythm').value;
    output.hidden = false;
    output.textContent = `Sample request: I’m looking for ${service} for a ${home}, ${rhythm}. Please confirm the scope and quote before booking. This is a preview only; nothing has been sent or saved.`;
  });
})();
