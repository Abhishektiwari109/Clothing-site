// Load products from JSON and display on products page
document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("products");

  if (productContainer) {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((product) => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <button onclick="aiTryOn('${product.name}')">Try with AI</button>
          `;
          productContainer.appendChild(card);
        });
      })
      .catch((err) => {
        console.error("Error loading products:", err);
      });
  }

  // AI popup hide after 5 seconds
  const chatbotPopup = document.getElementById("chatbot-popup");
  if (chatbotPopup) {
    setTimeout(() => {
      chatbotPopup.style.display = "none";
    }, 5000);
  }
});

// Fake AI try-on function
function aiTryOn(productName) {
  alert(`🧠 AI says: "${productName}" will look great on you! 😍✨`);
}
