import { useRef, useState, useEffect } from "react";
import "./Register.css";

export default function Login() {
  const userRef = useRef();
  // const errorRef = useRef();

  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [valid, setValid] = useState(false);
  // const [errorMesg, setErrorMesg] = useState('')

  useEffect(() => {
    userRef.current.focus();
  }, []);

  // useEffect(() => {
  //   setErrorMesg("");
  // }, [user, pw]);

  const handleSubmit = async (e) => {
    // handle api call
    e.preventDefault();
    // console.log(`the user:\n`, user, `\nsuper secret information:\n`, pw);
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
        <section>
          {/* validation messege */}
          {/* <p
            ref={errorRef}
            className={errorMesg ? "error-messege" : "offscreen"}
            aria-live="assertive"
          >
            {errorMesg}
          </p> */}

          <h1>Create an account</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              ref={userRef}
              placeholder="Username"
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPw(e.target.value)}
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
      )}
    </>
  );
}
