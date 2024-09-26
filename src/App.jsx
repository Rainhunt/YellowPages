import { BrowserRouter } from "react-router-dom"
import Layout from "./layout/Layout"
import AppThemeProvider from "./providers/AppThemeProvider"
import LayoutProvider from "./providers/LayoutProvider.jsx/LayoutProvider"
import Router from "./routes/Router"
import UserProvider from "./providers/UserProvider"
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <BrowserRouter>
      <AppThemeProvider>
        <LayoutProvider>
          <UserProvider>
            <Layout>
              <Router />
            </Layout>
          </UserProvider>
        </LayoutProvider>
      </AppThemeProvider>
    </BrowserRouter>
  )
}

export default App
