const repo = "hydakyo/KelvinTerm";
const fallback = "https://github.com/" + repo + "/releases/latest";

async function hydrateLatestRelease() {
  try {
    const response = await fetch("https://api.github.com/repos/" + repo + "/releases/latest", {
      headers: { "Accept": "application/vnd.github+json" }
    });
    if (!response.ok) throw new Error("release lookup failed");

    const release = await response.json();
    const dmg = Array.isArray(release.assets)
      ? release.assets.find(asset => /\.dmg$/i.test(asset.name || ""))
      : null;

    document.querySelectorAll(".download-link").forEach(link => {
      link.href = dmg?.browser_download_url || release.html_url || fallback;
    });

    const label = release.tag_name || release.name || "Latest release";
    document.querySelectorAll(".release-version").forEach(node => {
      node.textContent = label;
    });
  } catch {
    document.querySelectorAll(".download-link").forEach(link => link.href = fallback);
  }
}

document.getElementById("year").textContent = new Date().getFullYear();
hydrateLatestRelease();
