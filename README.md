# Technical Screening

Check out the [live example](https://github.com/facebook/create-react-app).

## Requirements

- [x] create 2 inputs
- [x] use references
- [x] build in the React hooks api
- [x] add a conditional rendering

---

### `Documentation`

#### `useRef`

```js
const userRef = useRef();
const errorRef = useRef();
```

userRef was created to set the focus on the username input on render.
errorRef is used to send an alert in the top of the screen when the credetials are invalid. it is mostly scafolding until the api is wired in.

---

#### `useState`

```js
const [user, setUser] = useState("");
const [pw, setPw] = useState("");
const [errorMesg, setErrorMesg] = useState("");
const [valid, setValid] = useState(false);
```

**user/setUser** and **pw/setPw** are wired in to their corrisponding input fields to hold the value. The **errorMesg** is used to set the invalid value. The **valid/setValid** state is at the moment used for the conditional rendering. In the future, will be replaced with **React Router**.

---

#### `useEffect`

```js
useEffect(() => {
  userRef.current.focus();
}, []);

useEffect(() => {
  setErrorMesg("");
}, [user, pw]);
```

The first useEffect is used to set the focus on the username field on component mount. The second useEffect is used to clear out the error messege state if the user chooses to change the credentials.

---

#### `submitHandler`

```js
const handleSubmit = async (e) => {
  e.preventDefault();
  setUser("");
  setPw("");
  setValid((prev) => !prev);
};
```

#### `jsx`

```jsx
<>
  {valid ? (
    <section>
      <h1>{user} has been created!</h1>
      <p>
        <a href="/">Home</a>
      </p>
    </section>
  ) : (
    <section>
      <p
        ref={errorRef}
        className={errorMesg ? "error-messege" : "offscreen"}
        aria-live="assertive"
      >
        {errorMesg}
      </p>

      <h1>Register</h1>
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
        Have an Account?
        <span className="line">
          <a href="#"> Sign In</a>
        </span>
      </p>
    </section>
  )}
</>
```

The page has a conditional rendering depending on a successful entry. At the top, we display the username entered with a welcome messege.

The second page renders the simple registration page. The top of it holds the error message toast that displays when an errorMesg is added.

```css
.error-messege {
    background-color: lightpink;
    color: firebrick;
    font-weight: bold;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
} */
```

Otherwise, it should sit offscreen

```css
.offscreen {
  position: absolute;
  left: -9999px;
}
```

The 2 inputs are wired into their states onChange while passing the event value. The username input field is ref by userRef to make it focus on first render. The required tag is added for the nice UI when registering without any inputs.

---

![Hired](https://media.giphy.com/media/3ohhwIqvzoZI2O4o9O/giphy.gif)
