import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submitHandler = async (data) => {
    data.role_id = "67dbba350fe4c8c06d68e278";
    data.status = data.status == "true" ? true : false;
    console.log("formData..!", data);

    try {
      const res = await axios.post("/user", data);
      console.log(res);
      console.log(res.data);
      if (res.status === 201) {
        alert("Signup success");
        navigate("/login");
      } else {
        alert("Signup failed");
      }
    } catch (error) {
      alert("Error signing up");
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.brand}>
          <h1 style={styles.title}>SIGN UP</h1>
        </div>
        <form onSubmit={handleSubmit(submitHandler)} style={styles.form}>
          <div style={styles.formGroup}>
            <label htmlFor="firstName" style={styles.label}>First Name</label>
            <input type="text" id="firstName" {...register("firstName")} placeholder="Enter first name" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="lastName" style={styles.label}>Last Name</label>
            <input type="text" id="lastName" {...register("lastName")} placeholder="Enter last name" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="age" style={styles.label}>Age</label>
            <input type="number" id="age" {...register("age")} placeholder="Enter age" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="status" style={styles.label}>Status</label>
            <input type="text" id="status" {...register("status")} placeholder="Enter status" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="email" style={styles.label}>Email</label>
            <input type="email" id="email" {...register("email")} placeholder="Enter email" style={styles.input} />
          </div>
          <div style={styles.formGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input type="password" id="password" {...register("password")} placeholder="Enter password" style={styles.input} />
          </div>
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
        <div style={styles.signupLink}>
          <p>Already have an account? <a href="/login" style={styles.signupText}>Login</a></p>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    height: "100vh",
    background: "#EDF6FF",
  },
  card: {
    background: "#ffffff",
    padding: "30px",
    width: "400px",
    boxShadow: "0px 5px 20px rgba(0, 0, 0, 0.2)",
    borderRadius: "12px",
    textAlign: "center",
    color: "#000",
  },
  brand: {
    marginBottom: "20px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginTop: "10px",
    color: "#12354D",
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
    color: "#000",
    marginBottom: "5px",
  },
  input: {
    width: "100%",
    padding: "10px",
    border: "1px solid #12354D",
    borderRadius: "5px",
    fontSize: "14px",
    backgroundColor: "#ffffff",
    color: "#000",
    outline: "none",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    background: "#12354D",
    color: "white",
    padding: "10px",
    fontSize: "16px",
    fontWeight: "bold",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "0.3s",
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
};

export default Signup;
