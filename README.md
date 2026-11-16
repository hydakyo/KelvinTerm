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

Latest macOS release **0.4.19** adds in-app updates.

Requires **macOS 14 Sonoma or later**.

The public repository contains only the website and downloadable releases for each platform. It does not contain the macOS app source code. Current builds are Apple Development signed but not notarized; macOS may require right-clicking the app and choosing **Open**. DHCP and TFTP share an administrator helper that can require approval on first use or after an update.

## GitHub Pages

To publish this site from the repository root:

1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/(root)**.
4. Save.

The private source code remains in the separate `KelvinTerm-source` repository.

## Windows 0.5.7

Install with the [Windows x64 installer](https://github.com/hydakyo/KelvinTerm/releases/download/windows-v0.5.7/KelvinTerm-Setup-x64.exe). This release fixes right-click Copy, SSH tunnel shutdown, SFTP transfers, and session editing and import. The installer is unsigned and Windows may show a publisher warning. [Release notes and checksums](https://github.com/hydakyo/KelvinTerm/releases/tag/windows-v0.5.7).

## macOS 0.4.19

Copy KelvinTerm into Applications from the [macOS disk image](https://github.com/hydakyo/KelvinTerm/releases/download/v0.4.19/KelvinTerm.dmg). The app is signed with Apple Development and has no Apple notarization. [Release notes and checksum](https://github.com/hydakyo/KelvinTerm/releases/tag/v0.4.19).

## In-app updates

Install the first version with the updater manually. For future releases, click **Update** in the top bar to download, install, and reopen KelvinTerm. The app confirms first if a restart would interrupt active work.

GitHub Pages serves the [macOS update feed](updates/macos/appcast.xml) and [Windows update metadata](updates/windows/latest.yml). Both point to separately versioned GitHub Release assets.
