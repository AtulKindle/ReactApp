export default function Login(){
    return(
        <div className="login-wrapper mt-5 p-5 shadow-lg">
            <form class="row g-3">
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label ">Email address</label>
                    <input type="password" class="form-control mb-3" id="inputPassword2" placeholder="Password"/>
                </div>
                <div class="col-12">
                    <label for="exampleFormControlInput1" class="form-label mb-3">Email address</label>
                    <input type="password" class="form-control mb-3" id="inputPassword2" placeholder="Password"/>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary mb-3">Submit</button>
                </div>
            </form>
        </div>
    );
}