import { AuthProvider } from "./providers/auth_provider";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router />

      </AuthProvider>
    </div>
  );
}

export default App;
