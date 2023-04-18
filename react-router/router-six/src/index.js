import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
  Outlet,
  useParams,
  NavLink,
  useNavigate,
  useLocation,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/myapps" element={<Navigate replace to="/learn" />} />
      <Route path="/learn" element={<Learn />}>
        <Route path="courses" element={<Courses />}>
          <Route path=":courseid" element={<CourseId />} />
        </Route>
        <Route path="bundles" element={<Bundles />}>
          <Route path=":bundleid" element={<BundleId />} />
        </Route>
      </Route>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  </Router>
);

function Home() {
  return (
    <div>
      <h1>Home Route</h1>
    </div>
  );
}

function Learn() {
  return (
    <div>
      <h1>Learn</h1>
      <h4>All Courses Are Listed Here</h4>
      <Link className="btn btn-success m-3" to="/learn/courses">
        Courses
      </Link>
      <Link className="btn btn-primary" to="/learn/bundles">
        Bundles
      </Link>
      <Outlet />
    </div>
  );
}

function Courses() {
  const courseList = [
    "React",
    "Angular",
    "Vue",
    "NodeJs",
    "TypeScript",
    "JavaScript",
  ];

  const randomCourseName =
    courseList[Math.floor(Math.random() * courseList.length)];

  return (
    <div>
      <h1>Courses List</h1>
      <h4>Courses Card</h4>

      <p>More Test</p>
      <NavLink
        style={({ isActive }) => {
          return {
            backgroundColor: isActive ? "white" : "yellow",
          };
        }}
        to={`/learn/courses/${randomCourseName}`}
      >
        {randomCourseName}
      </NavLink>

      <NavLink className="btn btn-light m-3" to={`/learn/courses/tests`}>
        tests
      </NavLink>

      <Outlet />
    </div>
  );
}

function CourseId() {
  const navigate = useNavigate();
  const { courseid } = useParams();

  return (
    <div>
      <h1>URL Param is : {courseid}</h1>
      <button
        onClick={() => {
          navigate("/dashboard", { state: "399" });
        }}
        className="btn btn-warning"
      >
        Price
      </button>

      <Link to="/dashboard" state={"DJANGO"}>
        Test Link
      </Link>
    </div>
  );
}

function Bundles() {
  return (
    <div>
      <h1>Bundles List</h1>
      <h4>Bundles Card</h4>
      <Outlet />
    </div>
  );
}

function BundleId() {
  const { bundleid } = useParams();
  return (
    <div>
      <h1>URL Param is : {bundleid}</h1>
    </div>
  );
}

function Dashboard() {
  const location = useLocation();
  return (
    <div>
      <h1>Info that i got here is {location.state}</h1>
    </div>
  );
}

reportWebVitals();
