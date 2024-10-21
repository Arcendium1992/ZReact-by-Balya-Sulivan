"use client";
import { useState } from 'react';

export default function Form() {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing');

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    } catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  function handleTextareaChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <>
      <h2 className='text-black text-center'>Apa quiz</h2>
      <p className='text-black text-center'>
        apa kalimat yang digunakan untuk bertanya apa?
      </p>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === 'submitting'}
        />
        <br />
        <button disabled={
          answer.length === 0 ||
          status === 'submitting'
        }className='text-black text-center'>
          Submit
        </button>
        {error !== null &&
          <p className="Error">
            {error.message}
          </p>
        }
      </form>
    </>
  );
}

function handleSubmit() {
    const answerInput = document.getElementById('answerInput');
    const answer = answerInput.value;
    
    submitForm(answer).catch((error) => {
      // Jika salah, ubah border menjadi merah
      answerInput.style.border = '2px solid red';
      console.error(error.message);
    });
  }
  
  function submitForm(answer) {
    // Mengambil elemen untuk menampilkan pesan
    const messageElement = document.getElementById('message');
  
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let shouldError = answer.toLowerCase() !== 'apa';
        if (shouldError) {
          messageElement.textContent = 'Good guess but a wrong answer. Try again!';
          reject(new Error('Good guess but a wrong answer. Try again!'));
        } else {
          messageElement.textContent = 'Correct answer!';
          resolve();
        }
      }, 1500);
    });
  }
  