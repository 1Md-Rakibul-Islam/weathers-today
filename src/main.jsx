import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Auth0Provider } from "@auth0/auth0-react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import AuthProvider from './Context/AuthProvider/AuthProvider';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Auth0Provider
        domain="dev-4rzwfxuu1fexis00.us.auth0.com"
        clientId="zlZqS68cyPbS9QO2fiT3yUl4hG6Pk63h"
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
        </Auth0Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
