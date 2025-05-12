// Lê o texto da URL
const params = new URLSearchParams(window.location.search);
const text = params.get("text") || "Texto não encontrado.";

const container = document.getElementById("texto");
const words = text.split(" ");

// Cria um span clicável para cada palavra
words.forEach(word => {
  const span = document.createElement("span");
  span.textContent = word + " ";
  span.className = "word";
  span.onclick = () => {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "pt-BR";
    speechSynthesis.speak(utterance);
  };
  container.appendChild(span);
});
