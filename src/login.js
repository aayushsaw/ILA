export function createLoginComponent() {
  const loginContainer = document.createElement('div');
  loginContainer.className = 'login-container';

  loginContainer.innerHTML = `
    <div class="login-form">
      <h2>Login</h2>
      <form id="loginForm">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" required>
        </div>
        <button type="submit" class="login-btn">Login</button>
      </form>
      <p class="signup-link">Don't have an account? <a href="#" id="signupLink">Sign up</a></p>
    </div>
  `;

  // Add event listener for form submission
  const form = loginContainer.querySelector('#loginForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;
    console.log('Login attempt:', { email, password });
    // Here you would typically send the data to your backend
    alert('Login functionality would be implemented here');
  });

  // Add event listener for signup link
  const signupLink = loginContainer.querySelector('#signupLink');
  signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('Navigate to signup page');
    // Here you would navigate to signup page
  });

  return loginContainer;
}