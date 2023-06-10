import { useSelector } from "react-redux";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Profile from "./pages/Profile/Profile";
import Home from "./pages/home/home";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? <Navigate to="home" /> : <Navigate to="auth" />
          }
        />
        <Route
          path="/home"
          element={currentUser ? <Home /> : <Navigate to="../auth" />}
        />
        <Route
          path="/auth"
          element={currentUser ? <Navigate to="../home" /> : <Auth />}
        />
        <Route
          path="/profile/:id"
          element={currentUser ? <Profile /> : <Navigate to="../auth" />}
        />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's Nothing here!</p>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
