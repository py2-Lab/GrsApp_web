
export const registerStyles = `
.register-page {
  width: 100%;
  min-height: 100vh;
  min-height: 100svh;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url("/images/bg-login.png");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  font-family: Arial, Helvetica, sans-serif;
  color: #505050;
  box-sizing: border-box;
}

/* Glass Panel */
.register-panel {
  width: 100%;
  max-width: 486px;
  min-height: 680px;
  padding: 42px 42px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: rgba(255, 255, 255, 0.78);
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
.register-heading {
  width: 100%;
  text-align: center;
}

.register-heading h1 {
  margin: 0;

  font-size: 23px;
  line-height: 1.35;
  font-weight: 400;
  color: #505050;
}

.register-heading p {
  margin: 9px 0 0;
  font-size: 11px;
  line-height: 1.5;
  color: #666;
}

/* Form */
.register-form {
  width: 100%;
  max-width: 348px;
  margin-top: 48px;
}

.register-field {
  position: relative;
  width: 100%;
  margin-bottom: 15px;
}

.register-input {
  width: 100%;
  height: 42px;
  padding: 0 14px;

  border: 1.5px solid #55B77D;
  border-radius: 50px;

  background: rgba(255, 255, 255, 0.35);
  color: #505050;

  font-family: inherit;
  font-size: 11px;

  outline: none;
  box-sizing: border-box;

  transition: all 0.2s ease;
}

.register-input::placeholder {
  color: #666;
  opacity: 1;
}

.register-input:focus {
  background: rgba(255, 255, 255, 0.75);
  border-color: #399C64;
  box-shadow: 0 0 0 3px rgba(85, 183, 125, 0.12);
}

.register-input.has-toggle {
  padding-right: 43px;
}

.register-toggle {
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

.register-toggle:hover {
  color: #39895d;
}

/* Password Hint */
.register-password-hint {
  margin: -5px 0 14px 12px;
  font-size: 9px;
  line-height: 1.5;
  color: #777;
}

/* Info Message */
.register-info {
  display: flex;
  align-items: flex-start;
  gap: 7px;

  width: 100%;
  margin-top: 8px;

  color: #55B77D;
  font-size: 9px;
  line-height: 1.5;
}

.register-info svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.register-info p {
  margin: 0;
}

.register-info.error {
  color: #dc5555;
}

/* Submit */
.register-submit {
  width: 210px;
  height: 38px;
  margin: 25px auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: none;
  border-radius: 50px;

  background: #59B27D;
  color: white;

  font-family: inherit;
  font-size: 13px;
  font-weight: 500;

  cursor: pointer;

  transition:
    background 0.2s ease,
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.register-submit:hover {
  background: #419B67;
  box-shadow: 0 5px 14px rgba(65, 155, 103, 0.2);
}

.register-submit:active {
  transform: scale(0.98);
}

.register-submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Bottom Note */
.register-note {
  width: 100%;
  max-width: 348px;
  margin-top: 25px;

  display: flex;
  align-items: flex-start;
  gap: 7px;

  color: #55B77D;
  font-size: 9px;
  line-height: 1.5;
}

.register-note svg {
  flex-shrink: 0;
  margin-top: 1px;
}

.register-note p {
  margin: 0;
}

/* Back to Login */
.register-back {
  margin-top: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;

  font-size: 10px;
  color: #666;
}

.register-back button {
  padding: 0;
  border: none;
  background: transparent;

  color: #55B77D;
  font-family: inherit;
  font-size: inherit;
  font-weight: 500;

  cursor: pointer;
}

.register-back button:hover {
  text-decoration: underline;
}

/* Success State */
.register-success {
  width: 100%;
  max-width: 348px;
  margin: auto 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.register-success-icon {
  width: 66px;
  height: 66px;
  margin-bottom: 22px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  background: rgba(85, 183, 125, 0.14);
  color: #419B67;
}

.register-success h2 {
  margin: 0;
  font-size: 23px;
  font-weight: 400;
  color: #505050;
}

.register-success p {
  margin: 12px 0 0;
  font-size: 12px;
  line-height: 1.8;
  color: #666;
}

/* Short Laptop */
@media (max-height: 750px) and (min-width: 601px) {
  .register-panel {
    min-height: 0;
    padding-top: 28px;
    padding-bottom: 25px;
  }

  .register-form {
    margin-top: 28px;
  }

  .register-field {
    margin-bottom: 12px;
  }

  .register-submit {
    margin-top: 18px;
  }

  .register-note {
    margin-top: 17px;
  }

  .register-back {
    margin-top: 13px;
  }
}

/* Tablet */
@media (max-width: 768px) {
  .register-panel {
    max-width: 440px;
    padding-left: 32px;
    padding-right: 32px;
  }
}

/* Mobile */
@media (max-width: 600px) {
  .register-page {
    padding: 16px;
  }

  .register-panel {
    width: 100%;
    max-width: 420px;
    min-height: 0;
    padding: 35px 24px 32px;

    background: rgba(255, 255, 255, 0.86);
    border-radius: 14px;
  }

  .register-heading h1 {
    font-size: 22px;
  }

  .register-form {
    margin-top: 32px;
  }

  .register-input {
    height: 44px;
  }

  .register-field {
    margin-bottom: 14px;
  }

  .register-submit {
    width: 190px;
  }
}

/* Short Mobile */
@media (max-width: 600px) and (max-height: 700px) {
  .register-panel {
    padding-top: 24px;
    padding-bottom: 24px;
  }

  .register-form {
    margin-top: 24px;
  }

  .register-field {
    margin-bottom: 10px;
  }

  .register-submit {
    margin-top: 15px;
  }

  .register-note {
    margin-top: 16px;
  }
}
`;
