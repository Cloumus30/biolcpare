import '../css/app.css';

import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider, PrimeReactContext } from 'primereact/api';
import "primereact/resources/themes/lara-light-cyan/theme.css";

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.tsx', { eager: true })
    return pages[`./Pages/${name}.tsx`]
  },
  setup({ el, App, props }) {
     
    createRoot(el).render(<PrimeReactProvider><App {...props} /></PrimeReactProvider> )
  },
})