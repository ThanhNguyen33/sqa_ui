import { HopeProvider, HopeThemeConfig } from '@hope-ui/solid';
import { Component } from 'solid-js';
import AppRouter from './router/AppRouter';

const config: HopeThemeConfig = {
  initialColorMode: "system"
}

const App: Component = () => {

  return (
    <HopeProvider config={config}>
      <AppRouter/>
    </HopeProvider>
  );
};

export default App;