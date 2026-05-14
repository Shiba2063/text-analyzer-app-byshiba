import React from 'react';

export default function About(props) {
  return (
    <div
      className="container my-4"
      style={{
        color: props.mode === 'dark' ? 'white' : '#042743'
      }}
    >
      <h1 className="mb-3">Welcome to Text Counter</h1>

      <p>
        This app helps you analyze and modify your text easily.
      </p>

      <ul>
        <li>Count words and characters</li>
        <li>Convert text to uppercase</li>
        <li>Convert text to lowercase</li>
        <li>Copy text instantly</li>
        <li>Clear text quickly</li>
      </ul>

    </div>
  );
}