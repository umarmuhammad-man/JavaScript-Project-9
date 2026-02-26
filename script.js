const output = (html) => { document.getElementById("output").innerHTML = html; };
const input = () => { return document.getElementById("input").value; };
const clearInput = () => { document.getElementById("input").value = ""; };
const clearOutput = () => { document.getElementById("output").innerHTML = ""; };

// Ch 76 & 77: Browser Detection and URL
function getURLInfo() {
    let host = window.location.hostname;
    let path = window.location.pathname;
    let href = window.location.href;
    
    let html = `<b>Host:</b> ${host}<br><b>Path:</b> ${path}<br><b>Full URL:</b> ${href}`;
    document.getElementById("dateBox").innerHTML = html;
    output(`<h1 style="color: green;">URL Info Fetched</h1>`);
}

// Ch 78: Navigation (Assign vs Replace)
function goToURL() {
    let url = input();
    if (!url) { alert("Please enter a URL first"); return; }
    if (!url.startsWith("http")) url = "https://" + url;
    
    // .assign() keeps the current page in history
    window.location.assign(url);
}

function replaceURL() {
    let url = input();
    if (!url) { alert("Please enter a URL first"); return; }
    if (!url.startsWith("http")) url = "https://" + url;
    
    // .replace() removes the current page from history
    window.location.replace(url);
}

function reloadPage() {
    window.location.reload();
}

// Ch 79: Browser History
function goBack() {
    // Navigates to the previous page in history
    window.history.back();
}

// Ch 80 & 81: Opening and Controlling Windows
function openNewWindow() {
    // Opens a small popup window
    let newWin = window.open("", "win1", "width=400,height=400,left=100,top=100");
    newWin.document.write("<h1>Hello from the new window!</h1><button onclick='window.close()'>Close Me</button>");
}