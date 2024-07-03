import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import PrivateRoute from "./component/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard/*" element={<Dashboard />} />
        <Route path="/auth/*" element={<Auth />} />
        <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
        </Route>
    </Routes>
  );
}

export default App;
