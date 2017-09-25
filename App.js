import Expo from 'expo';

/**
 * Load correct entry file for Android and IOS
 * React will load the correct Entry point
 */
import LoginApp from './app/App';

Expo.registerRootComponent(LoginApp);
