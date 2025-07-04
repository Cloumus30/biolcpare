import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import ReactGA from 'react-ga4';
import { createContext, useState } from 'react';
import { GlobalProvider } from './Providers/GlobalContext';

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    return pages[`./Pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
     ReactGA.initialize('G-HNETTFG64F');
     
    createRoot(el).render(
    <GlobalProvider>
      <PrimeReactProvider>
        <App {...props} />
      </PrimeReactProvider> 
    </GlobalProvider>
  )
  },
})