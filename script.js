const socket = io();
const chatBox = document.getElementById("chat-box");
const msgInput = document.getElementById("msgInput");
const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", () => {
  const msg = msgInput.value.trim();
  if (msg) {
    socket.emit("chatMessage", msg);
    msgInput.value = "";
  }
});

socket.on("chatMessage", (msg) => {
  const div = document.createElement("div");
  div.classList.add("message");
  div.textContent = msg;
  chatBox.appendChild(div);
  chatBox.scrollTop = chatBox.scrollHeight;
});
