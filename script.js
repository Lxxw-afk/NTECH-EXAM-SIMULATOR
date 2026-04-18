const COMPUTER_PASSWORD = "ENTREPOT22";

const notesData = {
  repaires: {
    title: "Repaires",
    date: "Dernière modification : 14/04/2026 - 22:12",
    content: `- Entrepôt principal : zone industrielle de Paleto
- Garage secondaire : hangar bleu près de l'autoroute
- Dépôt temporaire : container 14 au port
- Toujours changer de véhicule avant les remises importantes`
  },

  consignes: {
    title: "Consignes",
    date: "Dernière modification : 16/04/2026 - 18:41",
    content: `- Ne jamais venir avec le téléphone perso
- Supprimer les échanges après validation
- Vérifier les plaques autour de l'entrepôt
- Si présence inhabituelle : annuler la remise`
  },

  paiements: {
    title: "Paiements",
    date: "Dernière modification : 17/04/2026 - 23:03",
    content: `- Lucas Morel : payé
- Kevin Dubois : reste 4 000€
- Fournisseur : règlement après livraison complète
- Prévoir liquide uniquement pour les gros montants`
  },

  materiels: {
    title: "Matériels",
    date: "Dernière modification : 18/04/2026 - 01:12",
    content: `- 4 téléphones sécurisés
- 2 tablettes chiffrées
- 1 ordinateur portable dédié
- 6 cartes SIM anonymes
- 3 clés USB (dont une avec outils)

⚠️ Rendre les tablettes et les GSM à la GN
⚠️ Nettoyer le matériel après chaque opération`
  }
};
const data = {
  documents: {
    title: "Documents",
    content: `
      <div class="docs-explorer">
        <div class="docs-sidebar">
          <div class="docs-sidebar-title">Accès rapide</div>
          <div class="docs-nav-item active">📁 Documents</div>
          <div class="docs-nav-item">⭐ Récents</div>
          <div class="docs-nav-item">🖥️ Bureau</div>
          <div class="docs-nav-item">📥 Téléchargements</div>
          <div class="docs-nav-item">💾 Support externe</div>
        </div>

        <div class="docs-main">
          <div class="docs-toolbar">
            <div class="docs-path">Ce PC > Utilisateur > Lucas.SARCE > Documents</div>
            <div class="docs-toolbar-right">
              <input class="docs-search" type="text" placeholder="Rechercher dans Documents" />
            </div>
          </div>

          <div class="docs-body">
            <div class="docs-grid">
              <div class="docs-file" onclick="openDocumentApp('clients')">
                <div class="docs-file-icon">📄</div>
                <div class="docs-file-name">clients.txt</div>
                <div class="docs-file-meta">Document texte • modifié récemment</div>
              </div>

              <div class="docs-file" onclick="openDocumentApp('planning')">
                <div class="docs-file-icon">🗓️</div>
                <div class="docs-file-name">planning.txt</div>
                <div class="docs-file-meta">Planning mensuel • avril</div>
              </div>

              <div class="docs-file" onclick="openDocumentApp('notes')">
                <div class="docs-file-icon">📝</div>
                <div class="docs-file-name">notes_perso.txt</div>
                <div class="docs-file-meta">Bloc-notes • plusieurs onglets</div>
              </div>
            </div>
          </div>
        </div>
      </div>
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

function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString("fr-FR", {
    hour: "2-digit",
    minute: "2-digit"
  });
  const date = now.toLocaleDateString("fr-FR");
  document.getElementById("clock").innerHTML = `${time}<br>${date}`;
}

function openDocumentApp(type) {
  stopHackGame();

  if (type === "clients") {
    windowTitle.textContent = "clients.txt";
    windowContent.innerHTML = `
      <div class="sheet-app">
        <div class="sheet-topbar">
          <div class="sheet-title-wrap">
            <div class="sheet-logo">S</div>
            <div>
              <div class="sheet-title">Clients - Inventaire & ventes</div>
              <div class="sheet-subtitle">Fichier synchronisé localement</div>
            </div>
          </div>
          <button class="status-btn" onclick="openWindow('documents')">Retour aux documents</button>
        </div>

        <div class="sheet-table-wrap">
          <table class="fake-sheet">
            <thead>
              <tr>
                <th>Client</th>
                <th>Produit</th>
                <th>Quantité</th>
                <th>Montant</th>
                <th>Mode</th>
                <th>Statut</th>
                <th>Date</th>
              </tr>
            </thead>
           <tbody>
  <tr><td>Lucas Morel</td><td>Marchandise blanche</td><td>2 kg</td><td>5 000€</td><td>Liquide</td><td>Payé</td><td>12/04</td></tr>
  <tr><td>Kevin Dubois</td><td>Résine</td><td>5 paquets</td><td>12 000€</td><td>Liquide</td><td>Partiel</td><td>13/04</td></tr>
  <tr><td>Mathis Leroy</td><td>Métaux</td><td>3 caisses</td><td>3 500€</td><td>Liquide</td><td>Payé</td><td>14/04</td></tr>
  <tr><td>Enzo Garcia</td><td>Armes démontées</td><td>2 lots</td><td>18 000€</td><td>Crypto</td><td>En attente</td><td>14/04</td></tr>
  <tr><td>Thomas Bernard</td><td>Marchandise blanche</td><td>1 kg</td><td>2 700€</td><td>Liquide</td><td>Payé</td><td>15/04</td></tr>
  <tr><td>Hugo Petit</td><td>Plaques vierges</td><td>10 unités</td><td>1 200€</td><td>Liquide</td><td>Payé</td><td>15/04</td></tr>
  <tr><td>Antoine Robert</td><td>Composants</td><td>4 lots</td><td>7 600€</td><td>Crypto</td><td>En attente</td><td>16/04</td></tr>
  <tr><td>Nathan Richard</td><td>Munitions</td><td>8 boîtes</td><td>4 900€</td><td>Liquide</td><td>Payé</td><td>16/04</td></tr>
  <tr><td>Maxime Durand</td><td>Résine</td><td>9 paquets</td><td>8 100€</td><td>Liquide</td><td>Payé</td><td>17/04</td></tr>
  <tr><td>Alexandre Michel</td><td>Équipement</td><td>1 lot</td><td>6 400€</td><td>Crypto</td><td>En attente</td><td>17/04</td></tr>
</tbody>
          </table>
        </div>
      </div>
    `;
    appWindow.classList.remove("hidden");
    return;
  }

  if (type === "planning") {
    windowTitle.textContent = "planning.txt";
    windowContent.innerHTML = `
      <div class="calendar-app">
        <div class="calendar-topbar">
          <div>
            <div class="calendar-month">Avril 2026</div>
            <div class="calendar-sub">Planning d'activité - usage interne</div>
          </div>
          <button class="status-btn" onclick="openWindow('documents')">Retour aux documents</button>
        </div>

        <div class="calendar-grid">
          <div class="calendar-day-name">Lun</div>
          <div class="calendar-day-name">Mar</div>
          <div class="calendar-day-name">Mer</div>
          <div class="calendar-day-name">Jeu</div>
          <div class="calendar-day-name">Ven</div>
          <div class="calendar-day-name">Sam</div>
          <div class="calendar-day-name">Dim</div>

          <div class="calendar-day empty"></div>
          <div class="calendar-day empty"></div>
          <div class="calendar-day"><div class="calendar-date">1</div></div>
          <div class="calendar-day"><div class="calendar-date">2</div></div>
          <div class="calendar-day"><div class="calendar-date">3</div></div>
          <div class="calendar-day"><div class="calendar-date">4</div></div>
          <div class="calendar-day"><div class="calendar-date">5</div></div>

          <div class="calendar-day"><div class="calendar-date">6</div></div>
          <div class="calendar-day"><div class="calendar-date">7</div></div>
          <div class="calendar-day">
            <div class="calendar-date">8</div>
            <div class="calendar-note">Repérage zone industrielle</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">9</div></div>
          <div class="calendar-day">
            <div class="calendar-date">10</div>
            <div class="calendar-note green">Réception marchandise</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">11</div></div>
          <div class="calendar-day"><div class="calendar-date">12</div></div>

          <div class="calendar-day"><div class="calendar-date">13</div></div>
          <div class="calendar-day">
            <div class="calendar-date">14</div>
            <div class="calendar-note">Contact Client B</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">15</div></div>
          <div class="calendar-day">
            <div class="calendar-date">16</div>
            <div class="calendar-note red">Déplacement discret - port</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">17</div></div>
          <div class="calendar-day"><div class="calendar-date">18</div></div>
          <div class="calendar-day"><div class="calendar-date">19</div></div>

          <div class="calendar-day">
            <div class="calendar-date">20</div>
            <div class="calendar-note green">Remise entrepôt 22h</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">21</div></div>
          <div class="calendar-day"><div class="calendar-date">22</div></div>
          <div class="calendar-day"><div class="calendar-date">23</div></div>
          <div class="calendar-day">
            <div class="calendar-date">24</div>
            <div class="calendar-note">Encaissement / tri</div>
          </div>
          <div class="calendar-day"><div class="calendar-date">25</div></div>
          <div class="calendar-day"><div class="calendar-date">26</div></div>

          <div class="calendar-day"><div class="calendar-date">27</div></div>
          <div class="calendar-day"><div class="calendar-date">28</div></div>
          <div class="calendar-day"><div class="calendar-date">29</div></div>
          <div class="calendar-day"><div class="calendar-date">30</div></div>
        </div>
      </div>
    `;
    appWindow.classList.remove("hidden");
    return;
  }

  if (type === "notes") {
    windowTitle.textContent = "notes_perso.txt";
    windowContent.innerHTML = renderNotesApp("repaires");
    appWindow.classList.remove("hidden");
  }
}

function renderNotesApp(activeKey) {
  const tabs = Object.keys(notesData).map((key) => {
    const note = notesData[key];
    return `
      <button class="notes-tab ${key === activeKey ? "active" : ""}" onclick="switchNoteTab('${key}')">
        ${note.title}
      </button>
    `;
  }).join("");

  const active = notesData[activeKey];

  return `
    <div class="notes-app">
      <div class="notes-tabs">
        <div class="notes-tabs-title">Bloc-notes</div>
        ${tabs}
        <button class="status-btn" style="margin-top:8px;width:100%;" onclick="openWindow('documents')">Retour aux documents</button>
      </div>

      <div class="notes-editor">
        <div class="notes-editor-header">
          <div>
            <div class="notes-editor-title">${active.title}</div>
            <div class="notes-editor-meta">${active.date}</div>
          </div>
        </div>

        <div class="notes-paper">${active.content}</div>
      </div>
    </div>
  `;
}

function switchNoteTab(key) {
  windowContent.innerHTML = renderNotesApp(key);
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

  numbers.forEach((num) => {
    const cell = document.createElement("div");
    cell.className = "hack-number";
    cell.textContent = num;
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
