import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Messager from "./components/Messanger";
import Elections from "./components/Elections";
import Results from "./components/Results";

function App() {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  let routes =
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path='*' element={<Login />} />
    </Routes>;
  if (isAuthenticated) {
    routes =
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
        <Route exact path="/elections" element={<Elections />} />
        <Route exact path="/results" element={<Results />} />
      </Routes>;
  };
  return (
    <>
    <Messager />
      {routes}
    </>
  );
}

export default App;
