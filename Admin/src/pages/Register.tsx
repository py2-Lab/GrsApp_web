
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Info,
  CheckCircle2,
  LoaderCircle,
  ArrowLeft,
} from "lucide-react";

import { registerAdmin } from "../services/api";
import { registerStyles } from "../styles/register";

export default function Register() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = async (
    e: FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setMessage("");

    const cleanUsername = username.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanUsername || !cleanEmail || !password || !confirmPassword) {
      setMessage("Semua kolom wajib diisi.");
      return;
    }

    if (cleanUsername.length < 3 || cleanUsername.length > 30) {
      setMessage("Username harus terdiri dari 3–30 karakter.");
      return;
    }

    if (!/^[a-zA-Z0-9_.-]+$/.test(cleanUsername)) {
      setMessage(
        "Username hanya boleh menggunakan huruf, angka, titik, garis, dan underscore."
      );
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail)) {
      setMessage("Format email tidak valid.");
      return;
    }

    if (
      password.length < 8 ||
      !/[A-Za-z]/.test(password) ||
      !/[0-9]/.test(password)
    ) {
      setMessage(
        "Password minimal 8 karakter dan harus mengandung huruf serta angka."
      );
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Konfirmasi password tidak cocok.");
      return;
    }

    try {
      setLoading(true);

      const result = await registerAdmin({
        username: cleanUsername,
        email: cleanEmail,
        password,
      });

      setSuccess(true);
      setMessage(result.message);

    } catch (error: unknown) {
      let errorMessage =
        "Pendaftaran gagal. Silakan coba kembali.";

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
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      setMessage(errorMessage);

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{registerStyles}</style>

      <main className="register-page">
        <section className="register-panel">

          {!success ? (
            <>
              {/* Heading */}
              <div className="register-heading">
                <h1>
                  Buat Akun yang akan
                  <br />
                  Di daftarkan
                </h1>
              </div>

              {/* Register Form */}
              <form
                className="register-form"
                onSubmit={handleRegister}
              >
                {/* Username */}
                <div className="register-field">
                  <input
                    type="text"
                    className="register-input"
                    placeholder="Username:"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    autoComplete="username"
                    maxLength={30}
                    aria-label="Username"
                  />
                </div>

                {/* Email */}
                <div className="register-field">
                  <input
                    type="email"
                    className="register-input"
                    placeholder="Email:"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                    autoComplete="email"
                    aria-label="Email"
                  />
                </div>

                {/* Password */}
                <div className="register-field">
                  <input
                    type={
                      showPassword ? "text" : "password"
                    }
                    className="register-input has-toggle"
                    placeholder="Password:"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    autoComplete="new-password"
                    aria-label="Password"
                  />

                  <button
                    type="button"
                    className="register-toggle"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    aria-label={
                      showPassword
                        ? "Sembunyikan password"
                        : "Tampilkan password"
                    }
                  >
                    {showPassword ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </button>
                </div>

                {/* Confirm Password */}
                <div className="register-field">
                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    className="register-input has-toggle"
                    placeholder="Confirm Password:"
                    value={confirmPassword}
                    onChange={(e) =>
                      setConfirmPassword(e.target.value)
                    }
                    autoComplete="new-password"
                    aria-label="Confirm Password"
                  />

                  <button
                    type="button"
                    className="register-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        !showConfirmPassword
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Sembunyikan konfirmasi password"
                        : "Tampilkan konfirmasi password"
                    }
                  >
                    {showConfirmPassword ? (
                      <Eye size={16} />
                    ) : (
                      <EyeOff size={16} />
                    )}
                  </button>
                </div>

                {/* Error Message */}
                {message && (
                  <div
                    className="register-info error"
                    role="alert"
                  >
                    <Info size={14} />
                    <p>{message}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="register-submit"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <LoaderCircle
                        size={16}
                        className="animate-spin"
                      />
                      Mendaftarkan...
                    </>
                  ) : (
                    "Register"
                  )}
                </button>

              </form>

              {/* Information */}
              <div className="register-note">
                <Info size={14} />

                <p>
                  Dengan mendaftar, Anda menyetujui
                  kebijakan penggunaan GrsApp.
                  Akun akan diperiksa oleh Super Admin
                  sebelum dapat digunakan.
                </p>
              </div>

              {/* Back to Login */}
              <div className="register-back">
                Sudah memiliki akun?

                <button
                  type="button"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </>
          ) : (
            /* Registration Success */
            <div className="register-success">

              <div className="register-success-icon">
                <CheckCircle2 size={36} />
              </div>

              <h2>Pendaftaran Berhasil!</h2>

              <p>
                {message}
              </p>

              <p>
                Silakan tunggu hingga Super Admin
                menyetujui permintaan akun Anda.
              </p>

              <button
                type="button"
                className="register-submit"
                onClick={() => navigate("/login")}
              >
                <ArrowLeft size={16} />
                Kembali ke Login
              </button>

            </div>
          )}

        </section>
      </main>
    </>
  );
}
