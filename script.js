async function openPhone() {
  const res = await fetch("data/phone.json");
  const data = await res.json();

  let html = "<h2>📱 Messages</h2>";
  data.sms.forEach(msg => {
    html += `<p><b>${msg.from}:</b> ${msg.text}</p>`;
  });

  document.getElementById("viewer").innerHTML = html;
}

async function openComputer() {
  const res = await fetch("data/computer.json");
  const data = await res.json();

  let html = "<h2>💻 Fichiers</h2>";
  html += "<h3>clients.txt</h3>";

  data.clients.forEach(c => {
    html += `<p>${c.name} - ${c.amount}€</p>`;
  });

  html += "<h3>Historique</h3>";
  data.history.forEach(h => {
    html += `<p>${h}</p>`;
  });

  document.getElementById("viewer").innerHTML = html;
}

function goToReport() {
  window.location.href = "rapport/submit.html";
}
