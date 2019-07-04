window.addEventListener("load", () => {
  const SOUNDS = document.querySelectorAll(".sound");
  const PADS = document.querySelectorAll(".pads  div");
  const VISUAL = document.querySelector(".visual");

  const COLORS = [
    "#60d394",
    "#dbbe39",
    "#db39db",
    "#3949db",
    "#26c920",
    "#d8271a"
  ];

  //sounds logic

  PADS.forEach((pad, i) => {
    pad.addEventListener("click", function() {
      SOUNDS[i].currentTime = 0;
      SOUNDS[i].play();
      createBubbles(i);
    });
  });

  //function creates bubbles

  const createBubbles = i => {
    const bubble = document.createElement("div");
    VISUAL.appendChild(bubble);
    bubble.style.backgroundColor = COLORS[i];
    bubble.style.animation = "jump 1s ease";
    bubble.addEventListener("animationend", function() {
      VISUAL.removeChild(this);
    });
  };
});
