import { useRef, useState, useEffect } from "react";
import "./Register.css";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PW_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export default () => {
  const userRef = useRef();
  const errorRef = useRef();

  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [valid, setValid] = useState(false);
  const [errorMesg, setErrorMesg] = useState("");

  const [values, setValues] = useState({
    username: user,
    password: pw,
  });

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrorMesg("");
  }, [user, pw]);

  const handleChangeDebugger = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(`the user:\n`, user, `\nsuper secret information:\n`, pw);
    const v1 = USER_REGEX.test(user);
    const v2 = PW_REGEX.test(pw);
    if (!v1 || !v2) {
      !v1 ? setErrorMesg("Username must have at least 1 capital character and between 3 to 23 characters") : setErrorMesg("Password must be 8 characters long, have a special character, have at least 1 capitalized character, and at least 1 number")
      return;
    }
    // setUser("");
    setPw("");
    setValid((prev) => !prev);
  };

  return (
    <>
      {valid ? (
        <section>
          <h1>{user} has been created!</h1>
          <p>
            {/* router link */}
            <a href="/">Home</a>
          </p>
        </section>
      ) : (
        <>
          <pre>{JSON.stringify(values, undefined, 2)}</pre>
          <section>
            {/* validation messege */}
            <p
              ref={errorRef}
              className={errorMesg ? "error-messege" : "offscreen"}
              aria-live="assertive"
            >
              {errorMesg}
            </p>
            <h1>Create an account</h1>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                ref={userRef}
                name="username"
                placeholder="Username"
                autoComplete="off"
                onChange={(e) => {
                  handleChangeDebugger(e);
                  setUser(e.target.value);
                }}
                value={user}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={(e) => {
                  handleChangeDebugger(e);
                  setPw(e.target.value);
                }}
                value={pw}
                required
              />
              <button>Register</button>
            </form>
            <p>
              Have an Account? <br />
              <span className="line">
                {/* router link  */}
                <a href="#"> Sign In</a>
              </span>
            </p>
          </section>
        </>
      )}
    </>
  );
};
