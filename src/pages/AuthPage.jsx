import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";

function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const location = useLocation();

  // Login fields
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // Signup fields
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupConfirmPassword, setSignupConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");

  const isValidEmail = (email) => email.includes("@") && email.includes(".");

  // ---------- LOGIN ----------
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    setLoginError("");

    if (!loginEmail) newErrors.loginEmail = "Email is required";
    else if (!isValidEmail(loginEmail)) newErrors.loginEmail = "Invalid email";

    if (!loginPassword) newErrors.loginPassword = "Password is required";
    else if (loginPassword.length < 6)
      newErrors.loginPassword = "Password must be at least 6 characters";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const user = storedUsers.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (!user) {
      setLoginError("Invalid email or password. Please try again.");
      return;
    }

    const userData = {
      email: loginEmail,
      name: user.name,
      loggedIn: true,
      loginTime: new Date().toISOString(),
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    navigate("/");
  };

  // ---------- SIGN UP ----------
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!signupName) newErrors.signupName = "Full name is required";
    if (!signupEmail) newErrors.signupEmail = "Email is required";
    else if (!isValidEmail(signupEmail)) newErrors.signupEmail = "Invalid email";

    if (!signupPassword) newErrors.signupPassword = "Password is required";
    else if (signupPassword.length < 6)
      newErrors.signupPassword = "Password must be at least 6 characters";

    if (!signupConfirmPassword)
      newErrors.signupConfirmPassword = "Please confirm your password";
    else if (signupPassword !== signupConfirmPassword)
      newErrors.signupConfirmPassword = "Passwords do not match";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem("registeredUsers") || "[]");
    const userExists = storedUsers.find((u) => u.email === signupEmail);
    if (userExists) {
      setErrors({ signupEmail: "This email is already registered" });
      return;
    }

    const newUser = {
      name: signupName,
      email: signupEmail,
      password: signupPassword,
      registeredAt: new Date().toISOString(),
    };

    storedUsers.push(newUser);
    localStorage.setItem("registeredUsers", JSON.stringify(storedUsers));

    alert("Sign up successful! Please log in.");
    setSignupName("");
    setSignupEmail("");
    setSignupPassword("");
    setSignupConfirmPassword("");
    setIsLogin(true);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setErrors({});
    setLoginError("");
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get("mode") === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }

    const showLogin = () => setIsLogin(true);
    const showSignup = () => setIsLogin(false);

    window.addEventListener("showLogin", showLogin);
    window.addEventListener("showSignup", showSignup);

    return () => {
      window.removeEventListener("showLogin", showLogin);
      window.removeEventListener("showSignup", showSignup);
    };
  }, [location]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-red-600">
          {isLogin ? "Welcome Back" : "Create Account"}
        </h1>
        <p className="text-center text-gray-500 mb-6">
          {isLogin ? "Login to continue" : "Sign up to get started"}
        </p>

        {isLogin ? (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            {loginError && (
              <div className="flex items-center gap-2 bg-red-100 text-red-700 p-3 rounded">
                <i className="fas fa-exclamation-circle"></i>
                <p>{loginError}</p>
              </div>
            )}

            <div>
              <label className="block mb-1 font-semibold text-red-600">Email</label>
              <input
                type="text"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2"
              />
              {errors.loginEmail && (
                <p className="text-red-600 text-sm mt-1">{errors.loginEmail}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-600">Password</label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full border rounded px-3 py-2"
              />
              {errors.loginPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.loginPassword}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Login
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-semibold text-red-600 ">Full Name</label>
              <input
                type="text"
                value={signupName}
                onChange={(e) => setSignupName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full border rounded px-3 py-2 "
              />
              {errors.signupName && (
                <p className="text-red-600 text-sm mt-1">{errors.signupName}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-600">Email</label>
              <input
                type="text"
                value={signupEmail}
                onChange={(e) => setSignupEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full border rounded px-3 py-2 "
              />
              {errors.signupEmail && (
                <p className="text-red-600 text-sm mt-1">{errors.signupEmail}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-600">Password</label>
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                placeholder="Create a password"
                className="w-full border rounded px-3 py-2 focus:ring-2"
              />
              {errors.signupPassword && (
                <p className="text-red-600 text-sm mt-1">{errors.signupPassword}</p>
              )}
            </div>

            <div>
              <label className="block mb-1 font-semibold text-red-600">Confirm Password</label>
              <input
                type="password"
                value={signupConfirmPassword}
                onChange={(e) => setSignupConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full border rounded px-3 py-2"
              />
              {errors.signupConfirmPassword && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.signupConfirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
            >
              Sign Up
            </button>
          </form>
        )}

        <div className="text-center mt-6">
          <p className="text-gray-600">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              onClick={toggleForm}
              className="text-red-600 font-semibold hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
