document.querySelectorAll(".abstract-toggle").forEach((btn) => {
  const abstract = document.getElementById(btn.getAttribute("aria-controls"));
  btn.addEventListener("click", () => {
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    btn.textContent = open ? "expand" : "collapse";
    abstract.hidden = open;
  });

  // Clicking anywhere else on the card toggles too
  const card = btn.closest(".publication");
  card.classList.add("is-expandable");
  card.addEventListener("click", (e) => {
    if (e.target.closest("a, .abstract-toggle, .publication-abstract")) return;
    if (window.getSelection().toString()) return;
    btn.click();
  });
});

let app = document.getElementById("typewriter-app");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 70,
});

typewriter
  .pauseFor(800)
  .typeString("Data Science student at UC Berkeley")
  .pauseFor(2500)
  .deleteAll(50)
  .typeString("interested in machine learning & robotics")
  .pauseFor(2500)
  .deleteAll(50)
  .typeString("beli rater · traveler · waymo rider")
  .pauseFor(2500)
  .deleteAll(50)
  .start();

let granimInstance = new Granim({
  element: "#canvas-image-blending",
  direction: "top-bottom",
  isPausedWhenNotInView: true,
  image: {
    source: "images/back.jpg",
    blendingMode: "multiply",
    imageStretch: true,
  },
  states: {
    "default-state": {
      gradients: [
        ["#29323c", "#485563"],
        ["#FF6B6B", "#556270"],
        ["#80d3fe", "#7ea0c4"],
        ["#f0ab51", "#eceba3"],
      ],
      transitionSpeed: 8000,
    },
  },
});

