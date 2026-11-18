
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import SuperAdmin from "./pages/SuperAdmin";
import type { ReactNode } from "react";

function RolePage({
  role,
  title,
  children,
}: {
  role: "admin" | "superadmin";
  title: string;
  children?: ReactNode;
})

{
  const token = localStorage.getItem("authToken");
  const savedUser = localStorage.getItem("authUser");

  if (!token || !savedUser) {
    return <Navigate to="/login" replace />;
  }

  const user = JSON.parse(savedUser);

  if (user.role !== role) {
    return (
      <Navigate
        to={
          user.role === "superadmin"
            ? "/super-admin"
            : "/dashboard"
        }
        replace
      />
    );
  }

  return children ?? (
  <main className="min-h-screen flex flex-col items-center justify-center bg-[#f5f7f5] p-6">
    <h1 className="text-3xl font-semibold text-[#39895d]">
      {title}
    </h1>

    <p className="mt-3 text-gray-600">
      Selamat datang, {user.username}.
    </p>

    <p className="mt-1 text-sm text-gray-500">
      Login berhasil. Halaman ini masih placeholder.
    </p>

    <button
      onClick={() => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
        window.location.href = "/login";
      }}
      className="mt-6 rounded-full bg-[#59B27D] px-6 py-2 text-white hover:bg-[#419B67]"
    >
      Logout
    </button>
  </main>
);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route
          path="/dashboard"
          element={
            <RolePage
              role="admin"
              title="Dashboard Admin"
            />
          }
        />

        <Route
  path="/super-admin"
  element={
    <RolePage
      role="superadmin"
      title="Super Admin"
    >
      <SuperAdmin />
    </RolePage>
  }
/>

        <Route
          path="*"
          element={<Navigate to="/login" replace />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
