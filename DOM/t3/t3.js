const target = document.querySelector('#target');

const dateOptions = {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
};

target.innerHTML = `<p>Browser: ${window.navigator.userAgentData.brands[1].brand} ${window.navigator.userAgentData.brands[1].version}</p>
<p>Operating system: ${navigator.userAgentData.platform}</p>
<p>Screen Width and height: ${screen.width + 'x' + screen.height}</p>
<p>Available screen width: ${screen.availWidth}</p>
<p>Available screen height: ${screen.availHeight}</p>
<p>Current date: ${new Date().toLocaleDateString('fi-fi', dateOptions)}</p>
`;
