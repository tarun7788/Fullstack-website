import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'
import App from './App';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';

const root = createRoot(document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Auth0Provider
    domain="dev-dbvzwtub4mrz3b6f.us.auth0.com"
    clientId="Tqk5I7zNhJf0Wb7M2dGqDQXkeK78QF2g"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
      <App />
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
