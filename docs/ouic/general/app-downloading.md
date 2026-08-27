---
title: Downloading
page_title: Downloading
description: How to download the application.
category: App
nav_order: 2
mentions:
    - 8Crafter
---

Downloads can be found [here](https://github.com/8Crafter-Studios/Ore-UI-Customizer-App/releases/latest).

The privacy policy and code signing policy can be found [here](./general-information#privacy-policy).

You want to find the download for your OS and CPU architecture.

Downloads with a `.zip` file extension are portable versions and can be run without installing. It is recommended to use the installer rather than the portable version so that it can register the file type associations for the application.

NOTE: If you have a Mac with an Apple Silicon CPU, make sure you download the arm64 build. Otherwise if you have an older Mac with an Intel CPU, download the x86_64 build.

## Supported Operating Systems

The following operating systems are currently supported:

-   Windows 10/11
-   Linux
-   macOS

## Architectures

This lists all the names for different CPU architectures that are used in the release file names.

-   64-bit CPU:
    -   x86_64
    -   amd64
-   32-bit CPU:
    -   ia32
-   64-bit ARM CPU
    -   arm64
-   32-bit ARM CPU:
    -   armv7l
    -   armhf

## File Extension Guide

This lists the different file extensions of the releases and what platforms they are for.

-   `.zip`: Portable build.
    -   All supported OSes have a zip build.
    -   If you are using Linux and your Linux distro is not Debian-based, Red Hat-based, or SUSE-based then you must use the portable version.
-   `.exe`: Windows installer.
    -   This is for Windows 10 and Windows 11 (Windows ARM is supported, but make sure you get the arm build if it is available).
-   `.dmg`: macOS installer.
    -   This is for macOS.
-   `.deb`: Debian Linux installer.
    -   Use this if you install software with `apt`
    -   This is for Debian-based Linux distros. Some common Debian-based distros include:
        -   Ubuntu/Xubuntu/Kubuntu
        -   Debian
        -   Mint
-   `.rpm`: Red Hat/SUSE Linux installer.
    -   Package managers include `yum` and `dnf`
    -   This is for Red Hat-based and SUSE-based Linux distros. Some common Redhat-based and SUSE-based Linux distros include:
        -   Fedora
        -   Red Hat Enterprise Linux
        -   AlmaLinux
        -   Rocky Linux
        -   CentOS Stream
        -   Oracle Linux
        -   openSUSE
        -   SUSE Linux Enterprise Server
    -   The following distros also support `.rpm` installers (this list is non-exhaustive):
        -   Mageia
        -   OpenMandriva
        -   PCLinuxOS

## Next

<Button link="./app-installing">Next: Installing</Button>
