window.onload = () => {
  // Copyright
  const footer = document.createElement("footer");
  footer.appendChild(document.createTextNode("© Copyright 2023 "));
  const a = document.createElement("a");
  a.setAttribute("href", "https://www.nustarnuclear.com");
  a.textContent = "NuStar Nuclear";
  footer.appendChild(a);
  footer.appendChild(document.createTextNode(" All Rights Reserved."));
  footer.className = "copyright";
  document.body.appendChild(footer);

  // Guest login when not admin console
  if (!document.title.includes("Keycloak")) {
    const btnContainer = document.querySelector("#kc-form-buttons");
    const loginBtn = document.querySelector("#kc-login");
    const usernameInput = document.querySelector("#username");
    const passwordInput = document.querySelector("#password");
    const guestBtn = document.createElement("input");
    guestBtn.classList.add(...loginBtn.classList.values());
    const localeLink = document.querySelector("#kc-current-locale-link");
    const text =
      localeLink.textContent === "中文简体" ? "访客登录" : "Sign In as Guest";
    guestBtn.setAttribute("value", text);
    guestBtn.setAttribute("type", "submit");
    guestBtn.style.marginTop = "10px";
    guestBtn.style.background = "var(--pf-global--palette--blue-300)";
    guestBtn.onclick = function () {
      usernameInput.value = "anonymous";
      passwordInput.value = "111";
    };
    btnContainer.append(guestBtn);
  }
};
