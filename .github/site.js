const INVITE = "https://discord.com/oauth2/authorize?client_id=1442543093634039859";
const page = location.pathname.split("/").pop() || "index.html";
const links = [["index.html", "About"], ["help.html", "Help"], ["terms.html", "Terms"], ["privacy.html", "Privacy"]];

document.getElementById("top").innerHTML =
  `<div class="wrap"><a class="brand" href="index.html"><img src="assets/logo.png" alt="">Minigames Ahoy!</a>` +
  links.map(([h, t]) => `<a href="${h}"${page === h || (h === "index.html" && page === "") ? ' aria-current="page"' : ""}>${t}</a>`).join("") +
  `<a href="${INVITE}">Invite</a></div>`;

document.getElementById("foot").innerHTML =
  `<div class="wrap"><a href="https://github.com/DinoCDX/minigames-ahoy-issues/issues">Report a bug</a>` +
  `<a href="https://github.com/DinoCDX/minigames-ahoy-issues/discussions">Suggest a game</a>` +
  `<a href="mailto:dinocdxofficial@gmail.com">Contact</a></div>`;

const stat = document.getElementById("servers");
if (stat) {
  fetch("stats.json", { cache: "no-cache" })
    .then(r => r.json())
    .then(d => { if (d.servers) stat.textContent = `Playing in ${d.servers.toLocaleString()} servers`; })
    .catch(() => {});
}
