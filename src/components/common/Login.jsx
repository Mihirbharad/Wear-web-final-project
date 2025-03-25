import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const submitHandler = async (data) => {
    console.log("formData..!", data);

    const res = await axios.post("/user/login/", data);
    console.log(res.data.user._id);
    console.log(res.data);
    if (res.status === 200) {
      localStorage.setItem("id", res.data.user._id);
      localStorage.setItem("role", res.data.user.role.name);
      if (res.data.user.role.name === "user") {
        navigate("/user");
      } else if (res.data.user.role.name === "seller") {
        navigate("/seller");
      }
      alert("Login success");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.brand}>
          <div style={styles.logo}></div>
          <h1 style={styles.title}>LOGIN</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>EMAIL</label>
            <input
              type="text"
              id="email"
              {...register("email")}
              placeholder="Enter email"
              style={styles.input}
            />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>PASSWORD</label>
            <input
              type="password"
              id="password"
              {...register("password")}
              placeholder="Enter password"
              style={styles.input}
            />
          </div>
          <div style={styles.rememberForgot}>
            <div style={styles.rememberMe}>
              <input type="checkbox" id="remember" />
              <label htmlFor="remember" style={styles.label}>Remember Me</label>
            </div>
            <a href="#" style={styles.forgotPassword}>Forgot Password?</a>
          </div>
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <div style={styles.socialLogin}>
          <p>Or login with</p>
          <div style={styles.socialButtons}>
            <div style={styles.socialBtn}>G</div>
            <div style={styles.socialBtn}>F</div>
          </div>
        </div>
        <div style={styles.signupLink}>
          <p>
            Don't have an account? <a href="/signup" style={styles.signupText}>Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

// Internal CSS Styles (Vibrant Theme)
const styles = {
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    height: "100vh",
    background: "#EDF6FF", // Light grayish background for a clean look
  },
  card: {
    background: "#ffffff", // White background for the card
    padding: "30px",
    width: "400px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    textAlign: "center",
    color: "#000", // Black text color
  },
  brand: {
    marginBottom: "20px",
  },
  logo: {
    width: "60px",
    height: "60px",
    background: "url('/assets/images/logo.png') no-repeat center/cover",
    margin: "0 auto",
    borderRadius: "50%",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#12354D", // Bluish accent
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    textAlign: "left",
    marginBottom: "15px",
  },
  label: {
    display: "block",
    fontSize: "14px",
    fontWeight: "600",
    color: "#000", // Black text
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #12354D", // Bluish border
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#000", // Black text inside input
    outline: "none",
    transition: "0.3s",
  },
  inputFocus: {
    borderColor: "#023e8a", // Darker blue on focus
    boxShadow: "0 0 5px rgba(2, 62, 138, 0.5)",
  },
  rememberForgot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    margin: "10px 0",
  },
  rememberMe: {
    display: "flex",
    alignItems: "center",
  },
  forgotPassword: {
    textDecoration: "none",
    color: "#12354D",
    fontWeight: "850",
    transition: "0.3s",
  },
  forgotPasswordHover: {
    textDecoration: "underline",
  },
  button: {
    width: "100%",
    background: "#12354D", // Bluish button
    color: "white",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
  },
  buttonHover: {
    background: "#023e8a", // Darker blue on hover
  },
  socialLogin: {
    margin: "20px 0",
  },
  socialButtons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    marginTop: "10px",
  },
  socialBtn: {
    width: "40px",
    height: "40px",
    background: "#12354D",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "18px",
    fontWeight: "bold",
    color: "#fff",
    cursor: "pointer",
    transition: "0.3s",
  },
  socialBtnHover: {
    background: "#023e8a",
  },
  signupLink: {
    marginTop: "10px",
    fontSize: "14px",
  },
  signupText: {
    textDecoration: "none",
    color: "#12354D",
    fontWeight: "700",
    transition: "0.3s",
  },
  signupTextHover: {
    textDecoration: "underline",
  },
};


export default Login;
