import $ from "jquery";
import axios from "axios";
import { backendEndpoint } from "../global";
const login = async () => {
    const login = `
    <!-- Section: Login Design Block -->
    <section class="text-center text-lg-start">
      <style>
        .cascading-right {
          margin-right: -50px;
        }
    
        @media (max-width: 991.98px) {
          .cascading-right {
            margin-right: 0;
          }
        }
      </style>
    
      <!-- Jumbotron -->
      <div class="container py-4">
        <div class="row g-0 align-items-center">
          <div class="col-lg-6 mb-5 mb-lg-0">
            <div class="card cascading-right" style="
                background: hsla(0, 0%, 100%, 0.55);
                backdrop-filter: blur(30px);
                ">
              <div class="card-body p-5 shadow-5 text-center">
                <h2 class="fw-bold mb-5">Log in</h2>
                <form class='needs-validation'>
                  <!-- Email input -->
                  <div class="form-outline mb-4">
                    <input type="email" id="emailInput" class="form-control" />
                    <label class="form-label" for="emailInput">Email address</label>
                    <div class="invalid-input">Please fill the email</div>
                  </div>
    
                  <!-- Password input -->
                  <div class="form-outline mb-4">
                    <input type="password" id="passwordInput" class="form-control" />
                    <label class="form-label" for="passwordInput">Password</label>
                    <div class="invalid-input">Please fill the password</div>
                  </div>
    
                  <!-- Checkbox -->
                  <div class="form-check d-flex justify-content-center mb-4">
                    <input class="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked />
                    <label class="form-check-label" for="form2Example33">
                      Remember me
                    </label>
                  </div>
    
                  <!-- Submit button -->
                  <button id = 'login' type="button" class="btn btn-primary btn-block mb-4">
                    Log in
                  </button>
                </form>
                <h5>Already have an account? <a href="/signup">Sign up</a></h5>
              </div>
            </div>
          </div>
    
          <div class="col-lg-6 mb-5 mb-lg-0">
            <img src="https://imgur.com/DGyBfmj.png" class="w-100 rounded-4 shadow-4"
              alt="" />
          </div>
        </div>
      </div>
      <!-- Jumbotron -->
    </section>
    <!-- Section: Login Design Block -->
`;

  return login;
}

$("#content").on("click", "#login", async (e) => {
  e.preventDefault();
  $("form").addClass("was-validated");
  const email = $("#emailInput").val();
  const password = $("#passwordInput").val();
  if(email == '') return
  if(password == '') return;
  alert("Connection made but no action defined yet");
  const res = await axios.post(backendEndpoint + "/auth/login", {
    email: email,
    password: password,
  }, {withCredentials: true});
  
  
});
export default login;