# React Native Register / Login App

A mobile app built with React Native (Expo) that demonstrates user registration and authentication against a **Laravel 5.4 + Passport (OAuth 2)** backend API. It covers token-based auth flow end-to-end: splash handshake, registration, login, and a protected dashboard screen.

> **Note:** This project was built in 2017 using Expo SDK 20 and React Native 0.48. The dependencies are significantly out of date. It is preserved as a learning reference for React Native + Redux architecture.

---

## Features

- **Splash screen** — On launch, checks `AsyncStorage` for an existing `access_token`; silently validates it with the backend and routes to the Dashboard if valid, or to the Main screen if not.
- **Registration** — Collects name, email, and password; posts to the API; stores OAuth tokens in `AsyncStorage`.
- **Login** — Email / password form; exchanges credentials for an OAuth token pair and navigates to the Dashboard.
- **Dashboard** — Displays the authenticated user's id, name, and email read from `AsyncStorage`.
- **Redux-managed navigation** — Navigation state lives in the Redux store alongside feature state (react-navigation v1 pattern).

---

## Tech Stack

| Category | Library | Version |
|---|---|---|
| Platform | Expo (managed) | 20.0.0 |
| UI framework | React Native | sdk-20.0.0 (Expo fork) |
| UI library | React | 16.0.0-alpha.12 |
| Navigation | react-navigation (StackNavigator) | ^1.0.0-beta.11 |
| State management | Redux + react-redux | ^3.7.2 / ^5.0.6 |
| Async middleware | redux-thunk | ^2.2.0 |
| Immutable state | Immutable.js | ^3.8.2 |
| HTTP client | Axios | ^0.16.2 |
| Environment vars | react-native-dotenv | ^0.1.0 |

---

## Architecture

```
App.js                         ← Expo entry point
└── app/
    ├── App.android.js         ← Android root (Redux Provider + store)
    ├── App.ios.js             ← iOS root (Redux Provider + store)
    ├── AppStyles.ios.js       ← Global stylesheet
    ├── AppActionTypes.js      ← Action type constants (root-level, unused)
    ├── lib/
    │   ├── AppActionTypes.js  ← Action type constants (used by all features)
    │   ├── AppNavigator.js    ← StackNavigator + Redux navigation wiring
    │   ├── AppHttp.js         ← Axios instance (reads APP_URL from .env)
    │   └── AppStorage.js      ← AsyncStorage abstraction (stub)
    ├── reducers/
    │   ├── index.js           ← combineReducers
    │   ├── navReducers.js     ← Navigation state reducer
    │   ├── splashReducers.js  ← Splash/loading state
    │   ├── loginReducers.js   ← Login state (Immutable.Map)
    │   ├── registerReducers.js← Register state (Immutable.Map)
    │   └── dashboardReducers.js← Dashboard / user info state
    └── components/
        ├── Splash/            ← Splash screen (token handshake)
        ├── Main/              ← Landing screen (Login / Register buttons)
        ├── Login/             ← Login form
        ├── Register/          ← Registration form
        └── Dashboard/         ← Authenticated user dashboard
```

Each feature folder follows the **Container / Presentational** pattern:

| File | Role |
|---|---|
| `ComponentName.js` | Presentational — pure UI, receives props |
| `index.js` | Container — `connect()` wires Redux state and dispatch |
| `actions.js` | Action creators (thunks for async API calls) |
| `styles.js` | Component-scoped StyleSheet |

---

## Navigation Flow

```
Splash
  ├── (token valid)  → Dashboard
  └── (no token)     → Main
                          ├── Login  → Dashboard
                          └── Register → Dashboard
```

Navigation is managed through a `StackNavigator` whose state is stored in `navReducer` inside the Redux store.

---

## Backend Requirements

This app expects a **Laravel 5.4** API with **Laravel Passport** installed. The following endpoints must be available:

| Env key | Endpoint example | Method |
|---|---|---|
| `APP_END_POINT_LOGIN` | `/oauth/token` | POST |
| `APP_END_POINT_REGISTER` | `/api/auth/register` | POST |
| `APP_END_POINT_USER_META` | `/api/user` | GET |

The login and register endpoints should return a standard Passport token response:

```json
{
  "access_token": "...",
  "refresh_token": "...",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v8 recommended for SDK 20 compatibility)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) or the legacy **Expo XDE**
- An iOS Simulator, Android Emulator, or the **Expo Go** app on a physical device
- A running Laravel 5.4 + Passport backend

---

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/jovanjv/ReactNativeRegisterLoginApp.git
   cd ReactNativeRegisterLoginApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**

   Copy `.env.tmp` to `.env` and fill in your backend details:

   ```bash
   cp .env.tmp .env
   ```

   ```env
   APP_URL=http://your-laravel-backend.com

   # Optional — uncomment basic auth in app/lib/AppHttp.js if your server requires it
   BASIC_AUTH_UNAME=your_username
   BASIC_AUTH_PASSWORD=your_password

   APP_END_POINT_REGISTER=/api/auth/register
   APP_END_POINT_LOGIN=/oauth/token
   APP_END_POINT_USER_META=/api/user
   ```

   > `.env` is git-ignored. Never commit it with real credentials.

---

## Running the App

```bash
# Start the Expo packager
expo start

# Run on iOS simulator
expo start --ios

# Run on Android emulator
expo start --android
```

Or scan the QR code with the **Expo Go** app on your phone.

---

## Known Issues & Limitations

This project was a first-time exploration of React Native and Redux. The following issues exist in the codebase and are documented here for transparency:

- **Expo SDK 20 is end-of-life.** Running `expo start` on modern Expo CLI may fail without downgrading Node and the Expo CLI version.
- **`AppStyles.ios.js` only** — `AppStyles.android.js` is missing. Android builds may not resolve the `../../AppStyles` import.
- **`redux` in devDependencies** — `redux` is used at runtime but listed only under `devDependencies`. A production build may fail if the bundler tree-shakes it.
- **`const token = token.replace(...)` in `Splash/actions.js`** — reassigning a `const` will throw a runtime error.
- **Login `mapStateToProps` wiring** — `state.loginReducer.loginAttempt` is not a function; the `loginAttempt` prop is correctly provided by `mapDispatchToProps` and the `mapStateToProps` mapping is a no-op.
- **Register dispatch mismatch** — `mapDispatchToProps` declares `(name, email, password)` but the component calls `registerAttempt(this.state)` (passing an object). The `register` action creator handles this correctly.
- **`loginSuccess` in `Login/actions.js`** references undefined `error` variable; the post-login navigation is called outside `dispatch`.
- **`AppStorage.js`** is a stub with no exports.
- **Duplicate action type files** — `app/AppActionTypes.js` and `app/lib/AppActionTypes.js` both exist; only the `lib/` version is imported by the rest of the code.

---

## Author

**Jovan Jay M. Villamor**

> This was my first attempt at coding in React Native + Redux, and also an attempt to achieve a correct folder/project structure. If you want to use this as a base for any of your projects, I would be both flattered and scared at the same time.

---

## License

This project is open source and available under the [MIT License](LICENSE).
