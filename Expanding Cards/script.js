let panels = document.querySelectorAll(".panel");

let activePanelIndex = 0;

function panelChangeTimer() {
  panels[activePanelIndex].classList.remove("active");
  activePanelIndex =
    activePanelIndex + 1 == panels.length ? 0 : activePanelIndex + 1;
  panels[activePanelIndex].classList.add("active");
  setTimeout(panelChangeTimer, 2000);
}

panelChangeTimer();
