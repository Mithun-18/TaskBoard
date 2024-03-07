import { AuthProvider } from "./providers/auth_provider";
import { TaskManagerProvider } from "./providers/task_manager_provider";
import Router from "./router";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TaskManagerProvider>
          <Router />
        </TaskManagerProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
