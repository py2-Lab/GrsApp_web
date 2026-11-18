export const loginStyles = `
.login-page {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  background-image: url("/images/bg-login.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  color: #505050;
}

.login-panel {
  width: 100%;
  max-width: 486px;
  min-height: 100vh;
  min-height: 100svh;
  padding: 28px 40px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.86);
  backdrop-filter: blur(3px);
}

.login-heading {
  width: 100%;
  text-align: center;
}

.login-heading h1 {
  margin: 0;
  font-size: 32px;
  line-height: 1.25;
  font-weight: 400;
  color: #505050;
}

.login-heading p {
  margin: 10px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #555;
}

.login-form {
  width: 100%;
  max-width: 348px;
  margin-top: 42px;
}

.login-input {
  width: 100%;
  height: 43px;
  padding: 0 13px;
  border: 2px solid #55B77D;
  border-radius: 50px;
  background: rgba(255, 255, 255, 0.2);
  color: #505050;
  font-family: inherit;
  font-size: 14px;
  outline: none;
  transition: all 0.2s ease;
}

.login-input::placeholder {
  color: #555;
  opacity: 1;
}

.login-input:focus {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 3px rgba(85, 183, 125, 0.13);
}

.login-password {
  position: relative;
  margin-top: 22px;
}

.login-password .login-input {
  padding-right: 44px;
}

.login-toggle-password {
  position: absolute;
  right: 15px;
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

.login-info {
  min-height: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  line-height: 1.5;
  color: #55B77D;
}

.login-info.error {
  color: #e34b4b;
}

.login-submit {
  width: 210px;
  height: 38px;
  margin: 25px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background: #59B27D;
  color: white;
  font-family: inherit;
  font-size: 17px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
}

.login-submit:hover {
  background: #419B67;
}

.login-submit:active {
  transform: scale(0.98);
}

.login-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-links {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  margin-top: 15px;
  font-size: 10px;
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

.login-divider {
  width: 100%;
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.login-divider-line {
  flex: 1;
  height: 1px;
  background: #999;
}

.login-divider span {
  color: #505050;
  font-size: 14px;
  white-space: nowrap;
}

.login-social {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 42px;
  margin-top: 20px;
}

.login-social button {
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
  width: 28px;
  height: 28px;
}

/* Tablet */
@media (max-width: 768px) {
  .login-panel {
    max-width: 460px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .login-page {
    background-position: center;
  }

  .login-panel {
    max-width: 100%;
    padding: 38px 25px 28px;
    background: rgba(255, 255, 255, 0.9);
  }

  .login-heading h1 {
    font-size: 28px;
  }

  .login-heading p {
    font-size: 13px;
  }

  .login-form {
    margin-top: 42px;
  }
}

/* Laptop dengan tinggi layar lebih pendek */
@media (max-height: 700px) and (min-width: 601px) {
  .login-panel {
    padding-top: 18px;
    padding-bottom: 16px;
  }

  .login-heading h1 {
    font-size: 29px;
  }

  .login-heading p {
    margin-top: 6px;
  }

  .login-form {
    margin-top: 25px;
  }

  .login-password {
    margin-top: 16px;
  }

  .login-info {
    margin-top: 13px;
  }

  .login-submit {
    margin-top: 16px;
  }

  .login-divider {
    margin-top: 16px;
  }

  .login-social {
    margin-top: 14px;
  }
}
`;
