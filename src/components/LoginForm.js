import React, { useState } from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className='wrapper'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="input-box">
          <input
            type="text"
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <FaUser className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        
        <button type="submit">Login</button>
        
        <div className="Register-link">
          <p>Don't have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;

// import React, { useState } from 'react';
// import './Login.css';
// import { FaUser, FaLock } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = () => {
//   const [formType, setFormType] = useState('login'); // State to manage form type: 'login', 'register', or 'forgotPassword'
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [email, setEmail] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (formType === 'login') {
//       // Handle login logic
//       navigate('/dashboard');
//     } else if (formType === 'register') {
//       // Handle register logic
//       console.log('Registered with:', username, password, email);
//       setFormType('login'); // Redirect to login after registration
//     } else if (formType === 'forgotPassword') {
//       // Handle forgot password logic
//       console.log('Reset link sent to:', email);
//       setFormType('login'); // Redirect to login after sending reset link
//     }
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         {formType === 'login' && <h1>Login</h1>}
//         {formType === 'register' && <h1>Register</h1>}
//         {formType === 'forgotPassword' && <h1>Forgot Password</h1>}
        
//         {formType !== 'forgotPassword' && (
//           <div className="input-box">
//             <input
//               type="text"
//               placeholder='Username'
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <FaUser className='icon' />
//           </div>
//         )}

//         {formType !== 'forgotPassword' && (
//           <div className="input-box">
//             <input
//               type="password"
//               placeholder='Password'
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <FaLock className='icon'/>
//           </div>
//         )}

//         {(formType === 'register' || formType === 'forgotPassword') && (
//           <div className="input-box">
//             <input
//               type="email"
//               placeholder='Email'
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//         )}

//         {formType === 'login' && (
//           <div className="remember-forgot">
//             <label><input type="checkbox" />Remember me</label>
//             <a href="#" onClick={() => setFormType('forgotPassword')}>Forgot password?</a>
//           </div>
//         )}

//         <button type="submit">
//           {formType === 'login' ? 'Login' : formType === 'register' ? 'Register' : 'Send Reset Link'}
//         </button>
        
//         <div className="Register-link">
//           {formType === 'login' ? (
//             <p>Don't have an account? <a href="#" onClick={() => setFormType('register')}>Register</a></p>
//           ) : (
//             <p>Already have an account? <a href="#" onClick={() => setFormType('login')}>Login</a></p>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;



















































































































































































































































