# KelvinTerm

Public release repository and product website for **KelvinTerm**, a native macOS terminal workspace for network engineers.

## Website

This repository contains a dependency-free static landing page:

- `index.html`
- `styles.css`
- `app.js`

The download buttons query the GitHub Releases API at runtime and point to the latest `.dmg` asset automatically, with `/releases/latest/download/KelvinTerm.dmg` as a direct-download fallback. The installer is named **KelvinTerm.dmg**; its version is recorded in the app and release tag.

## Product

KelvinTerm combines:

- SSH sessions and local shell
- USB serial console with automatic device discovery
- SFTP browser and resumable transfers
- Local SSH port forwarding
- Reusable commands with parameters
- Purposeful terminal text highlighting across local shell, SSH, serial and Logs
- Terminal recording and transcript export
- Searchable Logs library with read-only ANSI replay (100 entries, or 200 in Settings)
- On-demand DHCP for direct or isolated Ethernet links
- On-demand TFTP on a selected adapter and folder, download-only by default
- Customer/system Groups with an inline selector and connection management menus
- Direct session search, 3 Latest Sessions and up to 20 Recent connections
- Resizable Logs list with remembered width and deletion confirmation
- macOS Keychain-backed SSH passwords

Latest release: **0.4.12** — background-aware terminal highlighting with a 7:1 contrast target across built-in themes, distinct IP/interface/MAC colors, readable neutral states and corrected timeout-setting recognition. Existing ANSI colors are preserved. Includes the automatic changed SSH host-key recovery and reconnect policy from 0.4.11 (replacement keys are accepted without verification; a backup and retry limit are retained), corrected Keychain cleanup and recoverable Logs. macOS may still ask for Keychain access permission.

Requires **macOS 14 Sonoma or later**.

The public repository contains only the website and downloadable `.dmg` releases. It does not contain the macOS app source code. Current builds are Apple Development signed but not notarized; macOS may require right-clicking the app and choosing **Open**. DHCP and TFTP share an administrator helper that can require approval on first use or after an update.

## GitHub Pages

To publish this site from the repository root:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

The private source code remains in the separate `KelvinTerm-source` repository.
