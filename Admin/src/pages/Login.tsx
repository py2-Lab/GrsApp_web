
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Info,
  LoaderCircle,
} from "lucide-react";

import { loginAdmin } from "../services/api";
import { loginStyles } from "../styles/login";

export default function Login() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setMessage("");

    if (!identifier.trim() || !password) {
      setMessage("Email dan password wajib diisi.");
      return;
    }

    try {
      setLoading(true);

      const result = await loginAdmin(
        identifier.trim(),
        password
      );

      localStorage.setItem("authToken", result.token);

      localStorage.setItem(
        "authUser",
        JSON.stringify(result.user)
      );

      if (result.user.role === "superadmin") {
        navigate("/super-admin", { replace: true });
      } else {
        navigate("/dashboard", { replace: true });
      }

    } catch (error: unknown) {
      let errorMessage =
        "Tidak dapat terhubung ke server. Coba lagi.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error
      ) {
        const response = error.response;

        if (
          typeof response === "object" &&
          response !== null &&
          "data" in response
        ) {
          const data = response.data;

          if (
            typeof data === "object" &&
            data !== null &&
            "message" in data &&
            typeof data.message === "string"
          ) {
            errorMessage = data.message;
          }
        }
      }

      setMessage(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{loginStyles}</style>

      <main className="login-page">

        <section className="login-panel">

          {/* Heading */}
          <div className="login-heading">
            <h1>Selamat Datang</h1>

            <p>
              Silahkan isi email dan password untuk masuk
            </p>
          </div>

          {/* Login Form */}
          <form
            onSubmit={handleLogin}
            className="login-form"
          >

            {/* Email / Username */}
            <input
              type="text"
              value={identifier}
              onChange={(e) =>
                setIdentifier(e.target.value)
              }
              placeholder="Email:"
              autoComplete="username"
              className="login-input"
            />

            {/* Password */}
            <div className="login-password">

              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                placeholder="Password:"
                autoComplete="current-password"
                className="login-input"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
                aria-label={
                  showPassword
                    ? "Sembunyikan password"
                    : "Tampilkan password"
                }
                className="login-toggle-password"
              >
                {showPassword ? (
                  <Eye size={20} />
                ) : (
                  <EyeOff size={20} />
                )}
              </button>

            </div>

            {/* Info / Error */}
            <div
              className={`login-info ${
                message ? "error" : ""
              }`}
            >
              <Info size={16} />

              <p>
                {message ||
                  "Silahkan Login untuk memulai."}
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="login-submit"
            >
              {loading ? (
                <LoaderCircle
                  size={20}
                  className="animate-spin"
                />
              ) : (
                "Login"
              )}
            </button>

            {/* Forgot Password / Register */}
            <div className="login-links">

              <button
                type="button"
                onClick={() =>
                  setMessage(
                    "Fitur Lupa Password akan kita buat berikutnya."
                  )
                }
              >
                Lupa Password?
              </button>

              <span>/</span>

              <button
                type="button"
                onClick={() => navigate("/register")}
              >
                Register
              </button>

            </div>

            {/* Divider */}
            <div className="login-divider">

              <div className="login-divider-line" />

              <span>Atau Login dengan</span>

              <div className="login-divider-line" />

            </div>

            {/* Social Login */}
            <div className="login-social">

              {/* Google */}
              <button
                type="button"
                title="Google Login"
                onClick={() =>
                  setMessage(
                    "Google Login belum diaktifkan."
                  )
                }
              >
                <svg viewBox="0 0 48 48">
                  <path
                    fill="#4285F4"
                    d="M43.6 24.5c0-1.4-.1-2.7-.4-4H24v7.6h11a9.4 9.4 0 0 1-4.1 6.2v5h6.6c3.9-3.6 6.1-8.8 6.1-14.8Z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4 1.9-6.9 1.9-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2A20 20 0 0 0 24 44Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M12.6 27.7a12 12 0 0 1 0-7.4v-5.2H5.8a20 20 0 0 0 0 17.8l6.8-5.2Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M24 12c3 0 5.7 1 7.8 3l5.8-5.8A19.5 19.5 0 0 0 24 4 20 20 0 0 0 5.8 15.1l6.8 5.2C14.2 15.6 18.7 12 24 12Z"
                  />
                </svg>
              </button>

              {/* GitHub */}
              <button
                type="button"
                title="GitHub Login"
                onClick={() =>
                  setMessage(
                    "GitHub Login belum diaktifkan."
                  )
                }
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="#202124"
                >
                  <path d="M12 .9a11.1 11.1 0 0 0-3.5 21.6c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 .1.7 2.1 3.4 1.6.1-.8.4-1.3.8-1.6-2.5-.3-5.1-1.3-5.1-5.6 0-1.2.4-2.1 1.1-2.9-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10.5 10.5 0 0 1 5.5 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.7 1.1 2.9 0 4.3-2.6 5.3-5.1 5.6.4.3.8 1 .8 2v3c0 .3.2.7.8.6A11.1 11.1 0 0 0 12 .9Z" />
                </svg>
              </button>

              {/* LinkedIn */}
              <button
                type="button"
                title="LinkedIn Login"
                onClick={() =>
                  setMessage(
                    "LinkedIn Login belum diaktifkan."
                  )
                }
              >
                <svg viewBox="0 0 24 24">
                  <path
                    fill="#3986D8"
                    d="M12 1.2A10.8 10.8 0 1 0 12 22.8 10.8 10.8 0 0 0 12 1.2Z"
                  />
                  <path
                    fill="#fff"
                    d="M7.1 9.2h2.2v7.7H7.1V9.2Zm1.1-3.7a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6Zm2.4 3.7h2.1v1h.1c.3-.6 1-1.2-2.1-1.2 2.2 0 2.6 1.4 2.6 3.3v4.6h-2.2v-4.1c0-1-.1-1.8-1.2-1.8s-1.3.9-1.3 1.8v4.1h-2.2V9.2Z"
                  />
                </svg>
              </button>

            </div>

          </form>

        </section>

      </main>
    </>
  );
}
