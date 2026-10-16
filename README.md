# KelvinTerm

Public release repository and product website for **KelvinTerm**, a terminal workspace for network engineers on macOS and Windows.

## Website

This repository contains a dependency-free static landing page:

- `index.html`
- `styles.css`
- `app.js`

The download buttons query the GitHub Releases API at runtime and point to the latest `.dmg` asset automatically, with a pinned verified macOS DMG as a direct-download fallback. The installer is named **KelvinTerm.dmg**; its version is recorded in the app and release tag.

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

Latest macOS release: **0.4.13** — repairs automatic changed SSH host-key recovery when known_hosts contains malformed unrelated lines. Exact host lookup supports hashed entries and custom ports, preserves other lines and permissions, saves a complete .old backup and reconnects. Replacement keys are accepted without independent verification. Includes the background-aware 7:1 terminal highlights from 0.4.12 and previous Keychain/Logs improvements.

Requires **macOS 14 Sonoma or later**.

The public repository contains only the website and downloadable releases for each platform. It does not contain the macOS app source code. Current builds are Apple Development signed but not notarized; macOS may require right-clicking the app and choosing **Open**. DHCP and TFTP share an administrator helper that can require approval on first use or after an update.

## GitHub Pages

To publish this site from the repository root:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

The private source code remains in the separate `KelvinTerm-source` repository.


## Windows 0.5.1

The Windows x64 release is published separately as `windows-v0.5.1`; its installer
is `KelvinTerm-Setup-x64.exe`, with a portable `KelvinTerm-x64.zip`. Windows links
are explicit and are not rewritten by the macOS release API hydration. The macOS
latest release remains the `.dmg` release.

Version 0.5.1 introduces a modern Windows 11 Fluent 2 visual overhaul, featuring
native Mica material, adaptive titleBarOverlay window controls, soft elevation shadows,
rounded 12px cards, and Cascadia Code / JetBrains Mono typography.

The packaged application passed all 10 runtime checks on Windows x64 build
10.0.26200, including ConPTY, DPAPI, COM discovery, recording/Logs, independent
appearance, and loopback SSH/SFTP/tunnel/TFTP. Physical device/LAN behavior and
installer lifecycle still need manual validation. The Windows build is unsigned.
DHCP requires a preconfigured static /24 address; SFTP resume across restarts is
not yet implemented on Windows.
