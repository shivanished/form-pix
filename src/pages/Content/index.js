// Create a panel
const panel = document.createElement("div");
panel.id = "dummy-panel";
panel.innerHTML = `
  <div id="dummy-panel-header">Dummy Panel</div>
  <div id="dummy-panel-content">
    <p>Hello World!</p>
    <button id="dummy-panel-close">Close</button>
  </div>
`;

// Add basic styles directly to the script
const style = document.createElement("style");
style.textContent = `
  #dummy-panel {
    position: fixed;
    right: 20px;
    top: 50px;
    width: 300px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    border-radius: 8px;
    z-index: 10000;
    font-family: Arial, sans-serif;
  }
  #dummy-panel-header {
    background-color: #007bff;
    color: white;
    padding: 10px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    font-size: 18px;
    font-weight: bold;
    text-align: center;
  }
  #dummy-panel-content {
    padding: 15px;
    text-align: center;
  }
  #dummy-panel-content button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 10px 20px;
    cursor: pointer;
  }
  #dummy-panel-content button:hover {
    background-color: #0056b3;
  }
`;

// Append the panel and styles to the document
document.body.appendChild(panel);
document.head.appendChild(style);

// Add functionality to close the panel
document.getElementById("dummy-panel-close").addEventListener("click", () => {
  panel.remove();
});