
export const loginStyles = `
.login-page {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/images/bg-login.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  color: #505050;
  font-family: Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

/* Glass Login Panel */
.login-panel {
  width: 100%;
  max-width: 486px;
  height: min(680px, calc(100svh - 40px));
  min-height: 560px;
  padding: 48px 40px 38px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 13px;

  box-shadow:
    0 12px 45px rgba(0, 0, 0, 0.12),
    inset 0 1px 0 rgba(255, 255, 255, 0.45);

  box-sizing: border-box;
}

/* Heading */
.login-heading {
  width: 100%;
  text-align: center;
}

.login-heading h1 {
  margin: 0;
  font-size: 30px;
  line-height: 1.3;
  font-weight: 400;
  color: #505050;
}

.login-heading p {
  margin: 8px 0 0;
  font-size: 12px;
  line-height: 1.5;
  color: #555;
}

/* Form */
.login-form {
  width: 100%;
  max-width: 348px;
  margin-top: 64px;
}

.login-input {
  width: 100%;
  height: 42px;
  padding: 0 13px;

  border: 1.5px solid #55B77D;
  border-radius: 50px;

  background: rgba(255, 255, 255, 0.35);
  color: #505050;

  font-family: inherit;
  font-size: 12px;

  outline: none;
  box-sizing: border-box;

  transition: all 0.2s ease;
}

.login-input::placeholder {
  color: #555;
  opacity: 1;
}

.login-input:focus {
  background: rgba(255, 255, 255, 0.7);
  border-color: #399C64;
  box-shadow: 0 0 0 3px rgba(85, 183, 125, 0.12);
}

/* Password */
.login-password {
  position: relative;
  margin-top: 16px;
}

.login-password .login-input {
  padding-right: 44px;
}

.login-toggle-password {
  position: absolute;
  right: 13px;
  top: 50%;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;
  background: transparent;

  color: #55B77D;
  cursor: pointer;
}

.login-toggle-password:hover {
  color: #39895d;
}

/* Info */
.login-info {
  min-height: 20px;
  margin-top: 16px;

  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 9px;
  line-height: 1.5;
  color: #55B77D;
}

.login-info svg {
  flex-shrink: 0;
}

.login-info p {
  margin: 0;
}

.login-info.error {
  color: #e34b4b;
}

/* Login Button */
.login-submit {
  width: 210px;
  height: 38px;
  margin: 22px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 50px;

  background: #59B27D;
  color: white;

  font-family: inherit;
  font-size: 14px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.login-submit:hover {
  background: #419B67;
  box-shadow: 0 5px 14px rgba(65, 155, 103, 0.2);
}

.login-submit:active {
  transform: scale(0.98);
}

.login-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Forgot Password / Register */
.login-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;

  margin-top: 14px;
  font-size: 9px;
}

.login-links button {
  padding: 0;
  border: none;
  background: transparent;

  color: #55B77D;
  font-family: inherit;
  font-size: inherit;

  cursor: pointer;
}

.login-links button:hover {
  text-decoration: underline;
}

/* Divider */
.login-divider {
  width: 100%;
  margin-top: 22px;

  display: flex;
  align-items: center;
  gap: 14px;
}

.login-divider-line {
  flex: 1;
  height: 1px;
  background: rgba(100, 100, 100, 0.5);
}

.login-divider span {
  color: #505050;
  font-size: 12px;
  white-space: nowrap;
}

/* Social Login */
.login-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 38px;

  margin-top: 18px;
}

.login-social button {
  width: 28px;
  height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  border: none;
  background: transparent;

  cursor: pointer;
  transition: transform 0.2s ease;
}

.login-social button:hover {
  transform: translateY(-3px);
}

.login-social svg {
  width: 25px;
  height: 25px;
}

/* Laptop dengan tinggi layar pendek */
@media (max-height: 700px) and (min-width: 601px) {
  .login-panel {
    height: auto;
    min-height: 0;
    padding: 30px 40px;
  }

  .login-form {
    margin-top: 35px;
  }

  .login-password {
    margin-top: 13px;
  }

  .login-info {
    margin-top: 12px;
  }

  .login-submit {
    margin-top: 15px;
  }

  .login-divider {
    margin-top: 17px;
  }

  .login-social {
    margin-top: 13px;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .login-panel {
    max-width: 440px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .login-page {
    padding: 16px;
    background-position: center;
  }

  .login-panel {
    width: 100%;
    max-width: 420px;
    height: auto;
    min-height: 0;

    padding: 38px 24px 40px;

    background: rgba(255, 255, 255, 0.84);
    border-radius: 14px;
  }

  .login-heading h1 {
    font-size: 27px;
  }

  .login-heading p {
    font-size: 12px;
  }

  .login-form {
    margin-top: 38px;
  }

  .login-input {
    height: 44px;
  }

  .login-submit {
    width: 190px;
  }
}

/* HP layar pendek */
@media (max-width: 600px) and (max-height: 650px) {
  .login-panel {
    padding-top: 25px;
    padding-bottom: 25px;
  }

  .login-form {
    margin-top: 25px;
  }

  .login-password {
    margin-top: 12px;
  }

  .login-info {
    margin-top: 10px;
  }

  .login-submit {
    margin-top: 13px;
  }

  .login-divider {
    margin-top: 15px;
  }

  .login-social {
    margin-top: 12px;
  }
}
`;
