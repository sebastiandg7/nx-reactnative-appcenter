# Demo: Nx + React Native + AppCenter

This repo aims to provide an example react native application under an Nx workspace using [AppCenter](https://appcenter.ms/) for it's CI/CD.

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
| `JAVA_HOME`                   | `$(JAVA_HOME_11_X64)` | android  |
