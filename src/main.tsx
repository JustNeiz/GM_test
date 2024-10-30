import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({
    fontFamily: 'Space Grotesk, sans-serif',
    colors: {
        black: ['#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000','#000000'],
        dark: ['#191A23','#191A23','#191A23','#191A23','#191A23','#191A23','#191A23','#191A23','#191A23','#191A23'],
        green: ['#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66','#B9FF66'],
        grey: ['#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3','#F3F3F3']
    }
});
createRoot(document.getElementById('root')!).render(
    <MantineProvider theme={theme}>
  <StrictMode>
    <App />
  </StrictMode>
        </MantineProvider>
        ,
)
