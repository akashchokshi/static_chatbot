const chatBoxContainer = document.getElementById("chatbot-container");
const FAQS = [
  "Can I redeem my FB before the original term?",
  "How do I pay my Credit card bill?",
  "How can I get my Account Statement?",
  "What is the tenure of Fixed Deposit?",
];
const faqsParent = document.getElementsByClassName("faqs")[0];
// bind click on document to close the chatbot when clicked outside it
document.addEventListener("click", (event) => {
  if ($(event.target).parents("#chatbot-container").length === 0) {
    toggleChatBot(event, false);
  }
});
function toggleChatBot(event, state) {
  event.stopPropagation();
  event.preventDefault();
  if (state) {
    chatBoxContainer.style.transform = "scale(1)";
  } else {
    chatBoxContainer.style.transform = "scale(0)";
  }
}
function appendFaqs() {
  const len = FAQS.length;
  for (let index = 0; index < len; index++) {
    const value = FAQS[index];
    const element = document.createElement("div");
    element.innerHTML = value;
    element.classList.add("faq");
    faqsParent.appendChild(element);
  }
}
