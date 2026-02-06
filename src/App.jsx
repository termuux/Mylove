import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import TopNav from "./components/TopNav.jsx";

import Login from "./pages/Login.jsx";
import Landing from "./pages/Landing.jsx";
import Question from "./pages/Question.jsx";
import Timeline from "./pages/Timeline.jsx";
import Gallery from "./pages/Gallery.jsx";
import Success from "./pages/Success.jsx";
import Notifications from "./pages/Notifications.jsx";
import Valentine from "./pages/Valentine.jsx";
import FloatingMusicToggle from "./components/FloatingMusicToggle.jsx";
import FloatingHearts from "./components/FloatingHearts.jsx";

export default function App() {
  return (
    <>
      <FloatingMusicToggle />
      <FloatingHearts count={20} />

      <Routes>
        <Route path="/login" element={<Login />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <TopNav />
              <Landing />
            </ProtectedRoute>
          }
        />

        <Route
          path="/question"
          element={
            <ProtectedRoute>
              <TopNav />
              <Question />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notifications"
          element={
            <ProtectedRoute>
              <TopNav />
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="/valentine"
          element={
            <ProtectedRoute>
              <TopNav />
              <Valentine />
            </ProtectedRoute>
          }
        />

        <Route
          path="/timeline"
          element={
            <ProtectedRoute>
              <TopNav />
              <Timeline />
            </ProtectedRoute>
          }
        />

        <Route
          path="/gallery"
          element={
            <ProtectedRoute>
              <TopNav />
              <Gallery />
            </ProtectedRoute>
          }
        />

        <Route
          path="/success"
          element={
            <ProtectedRoute>
              <TopNav />
              <Success />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
