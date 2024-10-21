"use client";
import { useState } from 'react';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    // Simulasi submit tanpa memasukkan ke database
    setSubmittedData(`Nama: ${name}, Email: ${email}, Pesan: ${message}`);
    
    // Kosongkan kolom input setelah submit
    setName('');
    setEmail('');
    setMessage('');
  }

  function handleClear() {
    setName('');
    setEmail('');
    setMessage('');
    setSubmittedData(null);
  }

  return (
    <div className='contact-form'>
      {submittedData ? (
        <h2>{submittedData}, data diatas akan segera di input ke database. terimakasih!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Nama:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </label>
          </div>
          <div>
            <label>
              Pesan:
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </label>
          </div>
          <button type="submit" className='submit-button'>
            Submit
          </button>
          <button type="button" onClick={handleClear} className='clear-button'>
            Clear
          </button>
        </form>
      )}
    </div>
  );
}
