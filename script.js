const COMPUTER_PASSWORD = "ENTREPOT22";

const data = {
  documents: {
    title: "Documents",
    content: `
      <p>Répertoire principal de l'utilisateur.</p>
      <div class="folder-grid">
        <div class="folder-item" onclick="showFile('clients')">
          <span class="emoji">📄</span>
          <span class="name">clients.txt</span>
        </div>
        <div class="folder-item" onclick="showFile('planning')">
          <span class="emoji">📄</span>
          <span class="name">planning.txt</span>
        </div>
        <div class="folder-item" onclick="showFile('notes')">
          <span class="emoji">📄</span>
          <span class="name">notes_perso.txt</span>
        </div>
      </div>
      <div id="inner-file-view"></div>
    `
  },
  messages: {
    title: "Messagerie",
    content: `
      <div class="messaging-app">
        <div class="messaging-sidebar">
          <div class="messaging-sidebar-header">
            <h3>Messagerie</h3>
            <input class="messaging-search" type="text" placeholder="Rechercher une conversation" />
          </div>

          <div class="contact-list">
            <div class="contact-card active">
              <div class="contact-avatar">F</div>
              <div class="contact-meta">
                <div class="contact-top">
                  <div class="contact-name">Fournisseur</div>
                  <div class="contact-time">21:47</div>
                </div>
                <div class="contact-preview">supprime les messages après</div>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-avatar">N</div>
              <div class="contact-meta">
                <div class="contact-top">
                  <div class="contact-name">Numéro inconnu</div>
                  <div class="contact-time">20:51</div>
                </div>
                <div class="contact-preview">fais attention aux gendarmes</div>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-avatar">C</div>
              <div class="contact-meta">
                <div class="contact-top">
                  <div class="contact-name">Client A</div>
                  <div class="contact-time">Hier</div>
                </div>
                <div class="contact-preview">je passe demain pour récupérer</div>
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-avatar">C</div>
              <div class="contact-meta">
                <div class="contact-top">
                  <div class="contact-name">Client B</div>
                  <div class="contact-time">Hier</div>
                </div>
                <div class="contact-preview">j'ai préparé l'argent</div>
              </div>
            </div>
          </div>
        </div>

        <div class="messaging-chat">
          <div class="chat-header">
            <div class="chat-header-left">
              <div class="contact-avatar">F</div>
              <div>
                <div class="chat-header-name">Fournisseur</div>
                <div class="chat-header-status">Connecté récemment</div>
              </div>
            </div>

            <div class="chat-header-actions">
              <span>📞</span>
              <span>📎</span>
              <span>⋯</span>
            </div>
          </div>

          <div class="chat-body">
            <div class="message-row left">
              <div class="message-bubble">
                t'es dispo ce soir ?
                <div class="message-time">21:41</div>
              </div>
            </div>

            <div class="message-row right">
              <div class="message-bubble">
                oui, dis-moi
                <div class="message-time">21:42</div>
              </div>
            </div>

            <div class="message-row left">
              <div class="message-bubble">
                rdv 22h à l'entrepôt
                <div class="message-time">21:43</div>
              </div>
            </div>

            <div class="message-row left">
              <div class="message-bubble">
                je t'envoie la position
                <div class="message-time">21:43</div>
              </div>
            </div>

            <div class="message-row left">
              <div class="message-bubble">
                📍 Position partagée<br>
                Entrepôt abandonné, zone industrielle de Paleto
                <div class="message-time">21:44</div>
              </div>
            </div>

            <div class="message-row left">
              <div class="message-bubble">
                j'ai la marchandise
                <div class="message-time">21:45</div>
              </div>
            </div>

            <div class="message-row right">
              <div class="message-bubble">
                ok je viens seul
                <div class="message-time">21:46</div>
              </div>
            </div>

            <div class="message-row left">
              <div class="message-bubble">
                supprime les messages après
                <div class="message-time">21:47</div>
              </div>
            </div>
          </div>

          <div class="chat-footer">
            <div class="chat-input-row">
              <span>😊</span>
              <div class="chat-input-placeholder">Écrire un message...</div>
              <button class="chat-send">➤</button>
            </div>
          </div>
        </div>
      </div>
    `
  },
  browser: {
    title: "Historique du navigateur",
    content: `
      <div class="file-box">
- prix kilo cocaïne
- entrepôt abandonné Paleto localisation
- comment effacer historique ordinateur
- téléphone chiffré application
      </div>
    `
  },
  downloads: {
    title: "Téléchargements",
    content: `
      <div class="file-box">
- facture_scan.pdf
- plan_entrepot.jpg
- contact_fournisseur.vcf
      </div>
    `
  }
};

const files = {
  clients: `
Nom : Client A — Montant : 5 000€
Nom : Client B — Montant : 12 000€
Nom : Client C — Montant : 3 500€
  `,
  planning: `
Lundi : repérage
Mardi : livraison 22h
Mercredi : encaissement
  `,
  notes: `
Penser à changer de numéro.
Ne pas oublier le rendez-vous à l'entrepôt.
Supprimer les traces après la remise.
  `
};

const loginScreen = document.getElementById("login-screen");
const desktopScreen = document.getElementById("desktop-screen");
const passwordInput = document.getElementById("password-input");
const loginButton = document.getElementById("login-button");
const errorMessage = document.getElementById("error-message");
const appWindow = document.getElementById("app-window");
const windowTitle = document.getElementById("window-title");
const windowContent = document.getElementById("window-content");
const usbIcon = document.getElementById("usb-icon");
const usbNotice = document.getElementById("usb-notice");
const taskbarUsb = document.getElementById("taskbar-usb");

let messagingUnlocked = false;
let usbInserted = false;

let hackTargetValues = [];
let hackFoundValues = [];
let hackTimerInterval = null;
let hackTimeLeftMs = 49224;
let hackGameRunning = false;

loginButton.addEventListener("click", tryLogin);

passwordInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    tryLogin();
  }
});

document.addEventListener("keydown", function(event) {
  if (loginScreen.classList.contains("hidden") && !usbInserted && (event.key === "u" || event.key === "U")) {
    insertUsb();
  }
});

function tryLogin() {
  const attempt = passwordInput.value.trim();

  if (attempt === COMPUTER_PASSWORD) {
    errorMessage.textContent = "";
    loginScreen.classList.add("hidden");
    desktopScreen.classList.remove("hidden");
  } else {
    errorMessage.textContent = "Mot de passe incorrect.";
  }
}

function openWindow(key) {
  const app = data[key];
  if (!app) return;

  stopHackGame();
  windowTitle.textContent = app.title;
  windowContent.innerHTML = app.content;
  appWindow.classList.remove("hidden");
}

function closeWindow() {
  appWindow.classList.add("hidden");
  stopHackGame();
}

function showFile(fileKey) {
  const content = files[fileKey];
  const target = document.getElementById("inner-file-view");
  if (!target || !content) return;

  target.innerHTML = `<div class="file-box">${content}</div>`;
}

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = now.toLocaleDateString("fr-FR");
  document.getElementById("clock").innerHTML = `${time}<br>${date}`;
}

function openMessagingAccess() {
  if (messagingUnlocked) {
    openWindow("messages");
    return;
  }

  stopHackGame();
  windowTitle.textContent = "Messagerie";
  windowContent.innerHTML = `
    <div class="status-box">
      <div class="status-title">ACCÈS MESSAGERIE SÉCURISÉ</div>
      <div class="status-text">
        Cette messagerie est protégée par une couche de sécurité renforcée.
        L'entrée d'un mot de passe est requise, mais aucun accès direct n'est autorisé depuis cette session.
        Utilisez un outil externe pour contourner la protection.
      </div>
      <button class="status-btn" onclick="fakePasswordPrompt()">Entrer le mot de passe</button>
      <div id="secure-access-feedback" style="margin-top:14px;color:#cbd5e1;font-size:14px;"></div>
    </div>
  `;
  appWindow.classList.remove("hidden");
}

function fakePasswordPrompt() {
  const feedback = document.getElementById("secure-access-feedback");
  if (feedback) {
    feedback.textContent = "Accès refusé. Aucun mot de passe utilisateur valide n'est disponible sur cette session.";
  }
}

function insertUsb() {
  usbInserted = true;
  usbIcon.classList.remove("hidden");
  taskbarUsb.classList.remove("hidden");
  usbNotice.classList.remove("hidden");

  setTimeout(() => {
    usbNotice.classList.add("hidden");
  }, 3500);
}

function openUsbDrive() {
  stopHackGame();
  windowTitle.textContent = "Clé USB";
  windowContent.innerHTML = `
    <p>Support externe détecté.</p>
    <div class="folder-grid">
      <div class="folder-item" onclick="openHackApp()">
        <span class="emoji">🧩</span>
        <span class="name">messenger_bypass.exe</span>
      </div>
    </div>
  `;
  appWindow.classList.remove("hidden");
}

function openHackApp() {
  stopHackGame();
  windowTitle.textContent = "messenger_bypass.exe";
  windowContent.innerHTML = `
    <div class="hack-screen">
      <div class="hack-panel">
        <div class="hack-header">
          <div class="hack-header-left">
            <div class="hack-badge">🔓</div>
            <div class="hack-heading">
              <div class="hack-heading-main">CONNECTING TO THE HOST</div>
              <div class="hack-heading-sub">COMPROMISING GLOBAL SECURITY ONE SLIP AT A TIME</div>
            </div>
          </div>

          <div class="hack-signal">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        <div class="hack-ip" id="hack-ip">23.03.29.92</div>

        <div class="hack-targets" id="hack-targets"></div>

        <div class="hack-timer" id="hack-timer">00:49:224</div>

        <div class="hack-grid" id="hack-grid"></div>

        <div class="hack-footer-line"></div>

        <div class="hack-status" id="hack-status">
          Retrouvez dans la grille les 4 codes rouges affichés ci-dessus.
        </div>

        <div class="hack-toolbar">
          <button class="hack-btn" onclick="startHackNumbersGame()">Lancer le piratage</button>
          <button class="hack-btn secondary" onclick="resetHackNumbersGame()">Réinitialiser</button>
        </div>
      </div>
    </div>
  `;
  appWindow.classList.remove("hidden");
  startHackNumbersGame();
}

function startHackNumbersGame() {
  stopHackGame();
  hackGameRunning = true;
  hackFoundValues = [];
  hackTargetValues = [];
  hackTimeLeftMs = 49224;

  const totalCells = 80;
  const targetCount = 4;
  const numbers = [];
  const usedIndexes = new Set();

  for (let i = 0; i < totalCells; i++) {
    const value = Math.floor(Math.random() * 100).toString().padStart(2, "0");
    numbers.push(value);
  }

  while (hackTargetValues.length < targetCount) {
    const randomIndex = Math.floor(Math.random() * totalCells);
    if (!usedIndexes.has(randomIndex)) {
      usedIndexes.add(randomIndex);
      hackTargetValues.push(numbers[randomIndex]);
    }
  }

  const targetsBox = document.getElementById("hack-targets");
  const grid = document.getElementById("hack-grid");
  const status = document.getElementById("hack-status");

  if (!targetsBox || !grid || !status) return;

  targetsBox.innerHTML = "";
  hackTargetValues.forEach((value, idx) => {
    const target = document.createElement("div");
    target.className = "hack-target";
    target.textContent = value;
    target.id = `hack-target-${idx}`;
    targetsBox.appendChild(target);
  });

  grid.innerHTML = "";

  numbers.forEach((num, index) => {
    const cell = document.createElement("div");
    cell.className = "hack-number";
    cell.textContent = num;
    cell.dataset.index = index;
    cell.dataset.value = num;

    cell.addEventListener("click", () => handleHackNumberClick(cell, num));
    grid.appendChild(cell);
  });

  status.textContent = "Retrouvez dans la grille les 4 codes rouges affichés ci-dessus.";
  status.style.color = "#cbd5e1";
  updateHackTimerDisplay();

  hackTimerInterval = setInterval(() => {
    hackTimeLeftMs -= 100;

    if (hackTimeLeftMs <= 0) {
      hackTimeLeftMs = 0;
      updateHackTimerDisplay();
      stopHackGame();
      failHackGame("Temps écoulé. Le contournement a échoué.");
      return;
    }

    updateHackTimerDisplay();
  }, 100);
}

function handleHackNumberClick(cell, value) {
  if (!hackGameRunning) return;
  if (cell.classList.contains("good") || cell.classList.contains("bad")) return;

  const targetIndex = hackTargetValues.findIndex((targetValue, idx) => {
    return targetValue === value && !hackFoundValues.includes(idx);
  });

  if (targetIndex !== -1) {
    hackFoundValues.push(targetIndex);
    cell.classList.add("good");

    const targetElement = document.getElementById(`hack-target-${targetIndex}`);
    if (targetElement) {
      targetElement.classList.add("found");
    }

    if (hackFoundValues.length === hackTargetValues.length) {
      stopHackGame();
      succeedHackGame();
    }
  } else {
    cell.classList.add("bad");
    failHackGame("Mauvaise sélection. La sécurité a rejeté l'injection.");
  }
}

function succeedHackGame() {
  messagingUnlocked = true;
  const status = document.getElementById("hack-status");
  if (status) {
    status.textContent = "Contournement réussi. La messagerie est maintenant accessible.";
    status.style.color = "#22c55e";
  }

  setTimeout(() => {
    openWindow("messages");
  }, 900);
}

function failHackGame(message) {
  stopHackGame();

  const status = document.getElementById("hack-status");
  if (status) {
    status.textContent = message;
    status.style.color = "#ef4444";
  }
}

function resetHackNumbersGame() {
  if (document.getElementById("hack-grid")) {
    startHackNumbersGame();
  }
}

function stopHackGame() {
  hackGameRunning = false;

  if (hackTimerInterval) {
    clearInterval(hackTimerInterval);
    hackTimerInterval = null;
  }
}

function updateHackTimerDisplay() {
  const timer = document.getElementById("hack-timer");
  if (!timer) return;

  const totalMs = Math.max(0, hackTimeLeftMs);
  const seconds = Math.floor(totalMs / 1000);
  const ms = totalMs % 1000;

  const formattedSeconds = String(seconds).padStart(2, "0");
  const formattedMs = String(ms).padStart(3, "0");

  timer.textContent = `00:${formattedSeconds}:${formattedMs}`;
}

updateClock();
setInterval(updateClock, 1000);
