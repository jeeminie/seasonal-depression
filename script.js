const entries = [
  "cry", "cut my hair", "get a new piercing?", "rot in bed", "binge eat",
  "watch the same show on repeat", "take a nap, but still feel tired after", "call my mom", "skip class!!!",
  "scroll endlessly on social media", "avoid mirrors", "order food", "cancel plans (again)",
  "forget to reply to messages", "miss home and my cat", "journal at every inconvenience",
  "call my friends from home", "complain about the weather", "eat a cookie everyday",
  "complain about gaining weight", "procrastinate", "stay dehydrated", "start, but don’t finish tasks",
  "look at old photos", "wear the same outfit for days", "hate myself", "question my existence", "don’t eat",
  "survive on caffeine", "stare blankly at my ceiling", "let my room get messy", "forget",
  "obsess over past mistakes", "say \"I'll start tomorrow\"", "listen to my sad playlist", "get fat",
  "skip the gym", "skip classes", "miss home", "miss summer", "miss my mom", "sulk", "go on walks",
  "enjoy alone time", "go on drives", "listen to music", "take long showers and think",
  "game all day", "hit the gym", "watch mukbangs", "look at flight tickets home", "curl up in bed"
];

const images = [
  "assets/image1.gif",
  "assets/image2.gif",
  "assets/image3.gif",
  "assets/image4.gif",
  "assets/image5.gif"
];

let imageIndex = 0;
let shuffledEntries = [];
let shuffledImages = [];

window.onload = () => {
  const wrapper = document.getElementById("journal-wrapper");
  const imageContainer = wrapper.querySelector(".image-container");
  const entryContainer = wrapper.querySelector(".entry-container");

  // Shuffle entries and images
  shuffledEntries = [...entries].sort(() => 0.5 - Math.random());
  shuffledImages = [...images].sort(() => 0.5 - Math.random());

  // Create entry boxes
  for (let i = 0; i < 5; i++) {
    const box = document.createElement("div");
    box.className = "entry-box";

    box.onclick = () => {
      if (!box.textContent) {
        box.classList.add("typing");
        box.textContent = "";
        const text = shuffledEntries[i];
        let idx = 0;

        const typer = setInterval(() => {
          box.textContent += text[idx];
          idx++;
          if (idx >= text.length) {
            clearInterval(typer);
            box.style.cursor = "default";
            box.classList.remove("typing");
          }
        }, 100);
      }
    };

    entryContainer.appendChild(box);
  }

  // Create and insert eraser once
  const restartImg = document.createElement("img");
  restartImg.src = "assets/eraser.png";
  restartImg.alt = "New Entry Eraser";
  restartImg.className = "restart-image";
  restartImg.onclick = () => clearEntries(entryContainer, imageContainer);
  document.body.appendChild(restartImg);
};

function clearEntries(entryContainer, imageContainer) {
  const boxes = entryContainer.querySelectorAll(".entry-box");
  boxes.forEach((box) => {
    box.textContent = "";
    box.style.cursor = "pointer";
  });

  shuffledEntries = [...entries].sort(() => 0.5 - Math.random());

  imageContainer.innerHTML = "";

  const img = document.createElement("img");
  img.src = shuffledImages[imageIndex];
  img.className = "image-format";
  imageContainer.appendChild(img);

  imageIndex++;
  if (imageIndex >= shuffledImages.length) {
    imageIndex = 0;
    shuffledImages = [...images].sort(() => 0.5 - Math.random());
  }
}
