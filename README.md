# Demo: Nx + React Native + AppCenter

This repo aims to provide an example react native application under an Nx workspace using [AppCenter](https://appcenter.ms/) for it's CI/CD.

Versions used:

- Package manager: `yarn@1`
- Nx: `18.0.3`
- React native: `0.73.2`
- Java JDK: `17.0.10`

Project progress:

|Platform|Status|
|-|-|
|Android <img width="16" alt="image" src="https://simpleicons.org/icons/android.svg">|`working` ✅|
|iOS <img width="16" alt="image" src="https://simpleicons.org/icons/apple.svg">|`in progress` ⏳|

# Configuration

To make things work in AppCenter, we need to tune our project configuration as follows.

## AppCenter project creation

Go ahead to AppCenter and create an Android project and an iOS project for your react native app.

### Android

TODO.

### iOS

TODO.

## Custom build scripts

TODO

## AppCenter environment variables

The following are the custom environment variables to need to add in the AppCenter build configuration for each project.

| Name                          | Value                 | Platform |
| ----------------------------- | --------------------- | -------- |
| `APP_CENTER_CURRENT_PLATFORM` | `android` or `ios`    | both     |
| `APPCENTER_NX_PROJECT`        | `mobile`              | both     |
| `APPCENTER_NX_PROJECT_DIR`    | `apps/mobile`         | both     |
| `JAVA_HOME`                   | `$(JAVA_HOME_17_X64)` | android  |

# Significant changes

In order to make the react-native build work from AppCenter some files needed changes as we cannot spawn the nx build targets (AppCenter runs their own build commands).

`./apps/mobile/.babelrc.js`

<img width="695" alt="image" src="https://github.com/sebastiandg7/nx-reactnative-appcenter/assets/13395979/5561e2ee-75b1-4c6e-b252-e86b1c08d0e4">
