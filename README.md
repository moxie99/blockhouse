# CI/CD Setup

## GitHub Actions Workflow

We have configured the following GitHub Actions workflows to ensure smooth CI/CD for this React Native project:

### 1. Lint and Test

- **Path**: `.github/workflows/lint-and-test.yml`
- **Triggered on**: `push` or `pull_request` events for `main` and `feature/*` branches.
- **Tasks**: 
  - Linting using ESLint.
  - Running tests with the configured testing framework (e.g., Jest).
  
To extend this workflow:
- Add additional linters or tests in the respective sections.
- Modify the branches to trigger different events.

### 2. Build Android & iOS

- **Path**: `.github/workflows/build.yml`
- **Triggered on**: `push` or `pull_request` to `main`.
- **Tasks**: 
  - Builds the Android APK (`assembleRelease`).
  - Builds the iOS app using `xcodebuild`.
  
To extend this workflow:
- Add extra build steps or modify the `gradlew`/`xcodebuild` commands for specific configurations.
- You can also set up deploy steps after the build.

## Extending CI/CD

To extend or manage the CI/CD pipeline, you can:
1. Modify `.github/workflows/lint-and-test.yml` for additional linting rules or testing libraries.
2. Update `.github/workflows/build.yml` for new platforms or deploy steps (e.g., uploading APKs to the Play Store or iOS App Store).
