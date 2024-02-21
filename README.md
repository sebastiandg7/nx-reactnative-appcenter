# Demo: Nx + React Native + AppCenter

This repo aims to provide an example react native application under an Nx workspace using [AppCenter](https://appcenter.ms/) for it's CI/CD.

Versions used:

- Package manager: `yarn@1`
- Nx: `18.0.3`
- Node: `18.X`
- React native: `0.73.2`
- Java JDK: `17.0.10`

| Platform                                                                                                                                         | Status       |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------ |
| Android <img width="16" alt="image" src="https://simpleicons.org/icons/android.svg" style="filter: opacity(0.5) drop-shadow(0 0 0 lightgreen);"> | `working` ✅ |
| iOS <img width="16" alt="image" src="https://simpleicons.org/icons/apple.svg" style="filter: opacity(0.5) drop-shadow(0 0 0 white);">            | `working` ✅ |

## Backlog

- [x] Re-use workspace dependencies installation
- [x] Reusable AppCenter custom build scripts via [zx](https://github.com/google/zx)
- [ ] Only run if `mobile` Nx project is affected by the changes
- [ ] Cache `node_modules` dependencies
- [ ] Cache Pod dependencies for iOS

# Workspace layout

<img width="756" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/7bce8ee4-0eb7-4cde-b640-0e7a13047ec7">

# Configuration

To make things work in AppCenter, we need to tune our project configuration as follows.

## AppCenter project creation

Go ahead to AppCenter and create an Android project and an iOS project for your react native app.

1. Create the AppCenter project using `React Native` as platform and `Android`/`iOS` as OS.

Android
<img width="601" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/0c13f290-3833-4511-8075-0b61f2e193ec">

iOS
<img width="601" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/08582fad-a743-4c96-ab35-60bc6661a944">

2. Add build configuration to your branch using the app's `package.json`, not the workspace root `package.json`.

<img width="756" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/00c97adb-5b98-4bde-89e4-a292fd361d3a">

3. Envrionment variables

Refer to the [environment variables section](#appcenter-environment-variables) about what to add for each platform build configuration.

## Custom build scripts

Using [AppCenter custom build scripts](https://learn.microsoft.com/en-us/appcenter/build/custom/scripts/) we can setup the Nx workspace dependencies so that workspace libs are included in our build.

Check the following scripts:

- `apps/mobile/appcenter-post-clone.sh`

## AppCenter environment variables

The following are the custom environment variables you need to add in the AppCenter build configuration for each project.

| Name                         | Value                 | Platform |
| ---------------------------- | --------------------- | -------- |
| `APPCENTER_CURRENT_PLATFORM` | `android` or `ios`    | both     |
| `APPCENTER_NX_PROJECT`       | `mobile`              | both     |
| `APPCENTER_NX_PROJECT_DIR`   | `apps/mobile`         | both     |
| `JAVA_HOME`                  | `$(JAVA_HOME_17_X64)` | android  |

# Significant changes

In order to make the react-native build work from AppCenter some files needed changes as we cannot spawn the nx build targets (AppCenter runs their own build commands).

`./apps/mobile/.babelrc.js`

<img width="695" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/5561e2ee-75b1-4c6e-b252-e86b1c08d0e4">
