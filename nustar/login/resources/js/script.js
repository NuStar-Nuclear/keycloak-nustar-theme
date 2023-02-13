const footer = document.createElement("footer");
footer.appendChild(document.createTextNode("© Copyright 2023 "));
const a = document.createElement("a");
a.setAttribute("href", "https://www.nustarnuclear.com");
a.textContent = "NuStar Nuclear";
footer.appendChild(a);
footer.appendChild(document.createTextNode(" All Rights Reserved."));
footer.className = "copyright";
document.body.appendChild(footer);
