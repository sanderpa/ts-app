import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import ToDoPage from "./Components/ToDoPage";
import UserItemPage from "./Components/UserItemPage";
import UserPage from "./Components/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <NavLink className={"nav"} to={"/users"}>
          Users
        </NavLink>
        <NavLink className={"nav"} to={"/todos"}>
          Deals
        </NavLink>
      </div>
      <div>
        <Routes>
          <Route path="/users" element={<UserPage />} />
          <Route path="/todos" element={<ToDoPage />} />
          <Route path="/users/:id" element={<UserItemPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
