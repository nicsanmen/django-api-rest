import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LabelPage } from "./pages/LabelPage";
import { LabelFormPage } from "./pages/LabelFormPage";
import { Toaster } from "react-hot-toast";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <div className="container mx-auto">
        <Routes>
          <Route path="/" element={<TasksPage />} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks/new" element={<TaskFormPage />} />
          <Route path="/task/:id" element={<TaskFormPage />} />
          <Route path="labels" element={<LabelPage />} />
          <Route path="labels/new" element={<LabelFormPage />} />
        </Routes>
        <Toaster />
      </div>
    </BrowserRouter>
  );
}

export default App;
