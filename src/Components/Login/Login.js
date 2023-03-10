import React from 'react'
import styles from './Login.module.css'
function Login() {
  return (
    <div className="modal fade" id="login" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered d-flex justify-content-center">
        <div className="modal-content " style={{ borderRadius: "1rem" }}>
          <section className={"gradient-custom " + styles.gradientCustom}>
            <div className="container p-0">
              <div>
                <div>
                  <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                    <div className="card-body p-5 text-center">

                      <div className="mb-md-4 pb-1">
                        <h2 className="mb-2 text-uppercase" style={{ fontFamily: "BNRegular" }} > Login</h2>
                      <p className="text-white-50 mb-5">Please enter your login and password!</p>

                      <div className="form-outline form-white mb-4">
                        <input type="email" id="typeEmailX" className="form-control form-control-lg" />
                        <label className="form-label h5" htmlFor="typeEmailX" style={{ fontFamily: "BNRegular" }} >Email</label>
                      </div>

                      <div className="form-outline form-white mb-4">
                        <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                        <label className="form-label h5" htmlFor="typePasswordX" style={{ fontFamily: "BNRegular" }} >Password</label>
                      </div>

                      <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                      <button className="btn btn-outline-light btn-lg px-5" type="submit" style={{ fontFamily: "BNRegular" }} >Login</button>

                      <div className="d-flex justify-content-center text-center mt-4 pt-1">
                        <button href="#!" className="btn btn-lg text-white"><i className="bi bi-facebook p-2"></i></button>
                        <button href="#!" className="btn btn-lg text-white"><i className="bi bi-twitter p-2"></i></button>
                        <button href="#!" className="btn btn-lg text-white"><i className="bi bi-google p-2"></i></button>
                      </div>

                    </div>

                    <div>
                      <p className="mb-0">Don't have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a>
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
      </div >
    </div >
  )
}

export default Login