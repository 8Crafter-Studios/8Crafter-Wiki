---
title: Downloading
page_title: Downloading
description: How to download the application.
nav_order: 2
mentions:
    - 8Crafter
---

Downloads can be found [here](https://github.com/8Crafter-Studios/Bedrock-World-Editor/releases/latest).

The privacy policy and code signing policy can be found [here](./general-information#privacy-policy).

You want to find the download for your OS and CPU architecture.

Downloads with a `.zip` file extension are portable versions and can be run without installing.

NOTE: If you have a Mac with an Apple Silicon CPU, make sure you download the arm64 build. Otherwise if you have an older Mac with an Intel CPU, download the x86_64 build.

## Finding the Download

> [!TIP]
> If you are on Windows 11, use the `Bedrock.World.Editor-win32-x64-<version>.Setup.exe` build (unless you want to use the portable version), even if you are using Windows 11 ARM, as all Windows 11 versions are 64-bit.

1. Figure out the architecture and OS of your device, and the correct file extension. Use the [Supported Operating Systems](#supported-operating-systems), [Architectures](#architectures), and [File Extension Guide](#file-extension-guide) sections below.
2. Go to [this page](https://github.com/8Crafter-Studios/Bedrock-World-Editor/releases/latest).
3. Scroll to the bottom of the page. You should see a list of assets like you can see here:
   ![BWE release page assets list](/assets/images/general/downloading/image.png)
4. Find the one with a matching architecture and file extension.

## Supported Operating Systems

> [!TIP]
> Support for mobile platforms is in development. **Your** contribution can help it arrive sooner, visit [this page](https://github.com/8Crafter-Studios/Bedrock-World-Editor/milestone/1) for more information.

The following operating systems are currently supported:

-   Windows 10/11
-   Linux
-   macOS 12+

Even though iOS is not supported yet, you can still edit worlds from your iPhone/iPad without needing to transfer them to your computer. You can edit your iPhone/iPad's worlds directly from the app on your computer, you don't even need a cable, you can edit them over Wi-Fi. This does not require jailbreaking either, you can do it on any iPhone/iPad. More information can be found [here](https://wiki.8crafter.com/bwe/advanced/editing-ios-worlds).

> [!NOTE]
> For some Linux releases there is no OS name in it, but the OS can be determined from the file extension, checking the OS name is only necessary if you are downloading a ZIP build (all the ZIP builds have the OS name in them so it isn't a problem).

This lists all the names for different operating systems that are used in the release file names:

-   Windows
    -   win32
-   Linux
    -   linux
-   macOS
    -   darwin

## Architectures

> [!IMPORTANT] IMPORTANT (Windows)
> For Windows, there are no ARM builds of the app, so if you are using an ARM CPU and running Windows, use the corresponding non-ARM build, so for 64-bit ARM use the x64 build, and for 32-bit ARM use the ia32 build. Also, note that performance of the app on Windows ARM may be impacted due to the translation layer.

This lists all the names for different CPU architectures that are used in the release file names.

-   64-bit CPU:
    -   x64
    -   x86_64
    -   amd64
-   32-bit CPU:
    -   ia32
-   64-bit ARM CPU
    -   arm64
-   32-bit ARM CPU:
    -   armv7l
    -   armv7hl
    -   armhf

<!-- TODO: Add a note about how users can help add native Windows ARM support by helping fix the issues with the leveldb-zlib module. -->

This lists all the supported architectures for each operating system:

-   Windows
    -   64-bit (native)
    -   32-bit (native)
    -   64-bit ARM (64-bit build via translation layer)
    -   32-bit ARM (32-bit build via translation layer)
-   Linux
    -   64-bit (native)
    -   64-bit ARM (native)
    -   32-bit ARM (native)
-   macOS
    -   64-bit (Intel) (native)
    -   64-bit ARM (Apple Silicon) (native)

## File Extension Guide

This lists the different file extensions of the releases and what platforms they are for.

-   `.zip`: Portable build.
    -   All supported OSes have a zip build.
    -   If you are using Linux and your Linux distro is not Debian-based, Red Hat-based, or SUSE-based then you must use the portable version.
-   `.exe`: Windows installer.
    -   This is for Windows 10 and Windows 11 (Windows ARM is supported<!-- , but make sure you get the arm build if it is available -->).
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

<Button link="./installing">Next: Installing</Button>
