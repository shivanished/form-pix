// Create the side panel
const panel = document.createElement("div");
panel.id = "dummy-side-panel";
panel.innerHTML = `<div id="panel-header">Hello World</div>`;

console.log("Panel script is running");

// Append the panel to the body
document.body.appendChild(panel);