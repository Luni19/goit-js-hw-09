!function(){var t=document.querySelector("body"),e=document.querySelector("[data-start]"),r=document.querySelector("[data-stop]"),a=null;r.setAttribute("disabled",""),e.addEventListener("click",(function(e){e.target.setAttribute("disabled",!0),r.removeAttribute("disabled"),a=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),r.addEventListener("click",(function(t){t.target.setAttribute("disabled",!0),e.removeAttribute("disabled"),clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.d7697781.js.map
