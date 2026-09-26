# KelvinTerm

Public release repository and product website for **KelvinTerm**, a native macOS terminal workspace for network engineers.

## Website

This repository contains a dependency-free static landing page:

- `index.html`
- `styles.css`
- `app.js`

The download buttons query the GitHub Releases API at runtime and point to the latest `.dmg` asset automatically, with `/releases/latest` as a fallback.

## Product

KelvinTerm combines:

- SSH sessions and local shell
- USB serial console with automatic device discovery
- SFTP browser and resumable transfers
- Local SSH port forwarding
- Reusable commands with parameters
- Terminal recording and transcript export
- On-demand DHCP for direct or isolated Ethernet links
- macOS Keychain-backed SSH passwords

Requires **macOS 14 Sonoma or later**.

## GitHub Pages

To publish this site from the repository root:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

The private source code remains in the separate `KelvinTerm-source` repository.
