const today = new Date();

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    day: "numeric",
    month: "long",
    weekday: "short",
  }).format(date);
}
export default function Login() {
  const Avatar = "https://loremflickr.com/320/240/dog";
  return (
        <div className="login-wrapper mt-5 p-0 p-md-5 shadow-lg w-100 w-md-50 mx-auto">
     <div className="row">
        <div className="col-lg-12">
    <div className="container">
      <h2>
        <img
          src={Avatar}
          alt=""
          width={64}
          className="rounded-pill img-fluid"
        />{" "}
        Create Your Account
      </h2>
      <form>
        <div className="row">
          <div className="col-lg-12">
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label ">
                Email address
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <label for="exampleFormControlInput1" class="form-label mb-3">
                Email address
              </label>
              <input
                type="password"
                className="form-control mb-3"
                id="inputPassword2"
                placeholder="Password"
              />
            </div>
            <div className="mb-3">
              <button type="submit" className="btn btn-primary mb-3">
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="text-end">
        <p class="fw-light">{formatDate(today)}</p>
      </div>
      </div>
        </div>
     </div>
    </div>
  );
}
