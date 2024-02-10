import logo from "./logo.svg";
import "./App.css";
import { Home } from "./components/Home";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { Employees } from "./components/employees/Employees";
import { UseStateDemo } from "./components/UseStateDemo";
import { UserComponent } from "./components/users/UserComponent";
import { Route, Routes } from "react-router-dom";
import { NetflixHome } from "./components/netflix/NetflixHome";
import { NetflixMovies } from "./components/netflix/NetflixMovies";
import { NetflixShows } from "./components/netflix/NetflixShows";
import { Navbar } from "./components/Navbar";
import { ApiDemo1 } from "./components/api/apiDemo1";
import { ApiDemo2 } from "./components/api/apiDemo2";
import { ApiDemo3 } from "./components/api/apiDemo3";
import { ApiDemo4 } from "./components/api/apiDemo4";



function App() {
  var title = "Employee Application";
  var employee = {
    id: 1,
    name: "John",
    age: 25,
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/netflix/home" element={<NetflixHome />}></Route>
        <Route path="/netflix/movies" element={<NetflixMovies />}></Route>
        <Route path="/netflix/shows" element={<NetflixShows />}></Route>
        <Route path="/apidemo1" element={<ApiDemo1 />}></Route>
        <Route path="/apidemo2" element={<ApiDemo2 />}></Route>
        <Route path="/apidemo3" element={<ApiDemo3 />}></Route>
        <Route path="/apidemo4" element={<ApiDemo4 />}></Route>

      </Routes>

      {/* <UserComponent/> */}
      {/* <UseStateDemo/> */}
      {/* <Employees title = {title} employee = {employee}/> */}
      {/* <Header/>
      <Home/>
      <Footer/>   */}
    </div>
  );
}

export default App;
