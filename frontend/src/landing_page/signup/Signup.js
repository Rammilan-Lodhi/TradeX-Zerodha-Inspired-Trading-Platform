import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BACKEND_URL, DASHBOARD_URL } from '../../config';
function Signup() {
  const location = useLocation();
  const navigate = useNavigate();

  const [mode, setMode] = useState(
    location.pathname === '/login' ? 'login' : 'signup',
  );
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setStep(1);
    setOtp('');
    setMessage('');
    navigate(nextMode === 'login' ? '/login' : '/signup');
  };

  async function requestOTP(e) {
    e.preventDefault();
    setMessage('');

    if (mode === 'signup' && !name.trim()) {
      setMessage('Please enter your full name.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setMessage('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/${mode}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim().toLowerCase(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'Unable to send OTP.');
        return;
      }

      setStep(2);
      setOtp('');
      setMessage(data.message);
    } catch (error) {
      setMessage(
        'Cannot connect to server. Make sure backend is running on port 3002.',
      );
    } finally {
      setLoading(false);
    }
  }

  async function verifyOTP(e) {
    e.preventDefault();
    setMessage('');

    if (!/^\d{6}$/.test(otp)) {
      setMessage('Enter the complete 6-digit OTP.');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(`${BACKEND_URL}/auth/verify-otp`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.trim().toLowerCase(),
          otp,
          purpose: mode,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || 'OTP verification failed.');
        return;
      }

      // Pass token to the separate dashboard origin using URL fragment.
      // Dashboard will consume the token and remove it from the URL.
      window.location.replace(
        `${data.dashboardUrl || DASHBOARD_URL}/#token=${encodeURIComponent(data.token)}`,
      );
    } catch (error) {
      setMessage('Unable to verify OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      className='signup-page'
      style={{
        minHeight: '75vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '30px 16px',
      }}
    >
      <div
        className='signup-card'
        style={{
          width: '100%',
          maxWidth: '430px',
          padding: '32px',
          border: '1px solid #e5e5e5',
          borderRadius: '12px',
          background: '#fff',
        }}
      >
        <h2 style={{ color: '#387ed1', textAlign: 'center' }}>zerodha</h2>

        <h3 style={{ textAlign: 'center', marginTop: '24px' }}>
          {step === 2
            ? 'Verify your email'
            : mode === 'signup'
              ? 'Create your account'
              : 'Login to your account'}
        </h3>

        <p style={{ color: '#666', textAlign: 'center' }}>
          {step === 2
            ? `Enter the 6-digit code sent to ${email}`
            : mode === 'signup'
              ? 'Enter your name and email to get started.'
              : 'Enter your registered email to receive a login code.'}
        </p>

        {message && (
          <p
            role='status'
            aria-live='polite'
            style={{
              padding: '10px',
              background: '#f5f7fa',
              borderRadius: '6px',
              overflowWrap: 'anywhere',
            }}
          >
            {message}
          </p>
        )}

        {step === 1 && (
          <form onSubmit={requestOTP}>
            {mode === 'signup' && (
              <div style={{ marginBottom: '18px' }}>
                <label htmlFor='name'>Full name</label>
                <input
                  id='name'
                  type='text'
                  autoComplete='name'
                  placeholder='Enter your full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength={100}
                  required
                  style={inputStyle}
                />
              </div>
            )}

            <div style={{ marginBottom: '18px' }}>
              <label htmlFor='email'>Email address</label>
              <input
                id='email'
                type='email'
                autoComplete='email'
                placeholder='Enter your email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={inputStyle}
              />
            </div>

            <button type='submit' disabled={loading} style={buttonStyle}>
              {loading
                ? 'Please wait...'
                : mode === 'signup'
                  ? 'Send verification code'
                  : 'Send login code'}
            </button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={verifyOTP}>
            <div style={{ marginBottom: '18px' }}>
              <label htmlFor='otp'>6-digit verification code</label>
              <input
                id='otp'
                type='text'
                inputMode='numeric'
                autoComplete='one-time-code'
                placeholder='Enter OTP'
                value={otp}
                onChange={(e) =>
                  setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))
                }
                maxLength={6}
                required
                style={inputStyle}
              />
            </div>

            <button type='submit' disabled={loading} style={buttonStyle}>
              {loading ? 'Verifying...' : 'Verify & Continue'}
            </button>

            <button
              type='button'
              disabled={loading}
              onClick={() => {
                setStep(1);
                setOtp('');
                setMessage('');
              }}
              style={{
                ...buttonStyle,
                background: '#fff',
                color: '#387ed1',
                border: '1px solid #387ed1',
                marginTop: '10px',
              }}
            >
              Back
            </button>

            <button
              type='button'
              disabled={loading}
              onClick={requestOTP}
              style={{
                display: 'block',
                margin: '16px auto 0',
                border: 'none',
                background: 'none',
                color: '#387ed1',
                cursor: 'pointer',
              }}
            >
              Resend code
            </button>
          </form>
        )}

        <hr style={{ margin: '24px 0' }} />

        <p style={{ textAlign: 'center' }}>
          {mode === 'signup'
            ? 'Already have an account?'
            : 'New to Zerodha Clone?'}{' '}
          <button
            type='button'
            onClick={() => switchMode(mode === 'signup' ? 'login' : 'signup')}
            style={{
              border: 'none',
              background: 'none',
              color: '#387ed1',
              cursor: 'pointer',
              fontWeight: 600,
            }}
          >
            {mode === 'signup' ? 'Login' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );
}

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  marginTop: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  boxSizing: 'border-box',
};

const buttonStyle = {
  display: 'block',
  width: '100%',
  padding: '12px',
  border: 'none',
  borderRadius: '5px',
  background: '#387ed1',
  color: '#fff',
  cursor: 'pointer',
};

export default Signup;
