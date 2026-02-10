function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

const notes = [
  "You are my favorite notification 💕",
  "I choose you. Every day. 🐻",
  "My heart feels at home with you 💖"
];

function showNote(index) {
  document.getElementById("noteText").innerText = notes[index];
}
