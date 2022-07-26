import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { Credits } from "./pages/Credits";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { Job } from "./pages/Job/index";
import { CreateJobPage } from "./pages/Job/Create/index";
import { EditJobPage } from "./pages/Job/Edit/index";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/jobs" element={<Job />} />
          <Route path="/jobs/createjob" element={<CreateJobPage />} />
          <Route path="/jobs/edit/:jobsId" element={<EditJobPage />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />
          <Route path="/credits" element={<Credits />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;
