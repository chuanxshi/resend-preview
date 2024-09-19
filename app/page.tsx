// app/page.tsx
"use client";

import React, { useState, useEffect } from 'react';
import EmailTemplate from '../components/email-template'; // Adjust the path as needed

const Page: React.FC = () => {
  const [username, setUsername] = useState('alanturing');
  const [generatedHTML, setGeneratedHTML] = useState('');

  useEffect(() => {
    // Dynamically import 'react-dom/server' to avoid issues
    (async () => {
      const { renderToStaticMarkup } = await import('react-dom/server');
      const html = renderToStaticMarkup(<EmailTemplate username={username} />);
      setGeneratedHTML(html);
    })();
  }, [username]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Email Template Preview</h1>
      {/* Input to change the username */}
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub Username"
          style={styles.input}
        />
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Live Preview</h2>
        <div style={styles.preview}>
          <EmailTemplate username={username} isPreview={true} />
        </div>
      </div>
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>Generated HTML</h2>
        <pre style={styles.codeBlock}>
          {generatedHTML}
        </pre>
      </div>
    </div>
  );
};

export default Page;

// Inline styles for simplicity
const styles = {
  container: {
    maxWidth: '800px',
    margin: '40px auto',
    padding: '0 20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  title: {
    textAlign: 'center' as const,
    fontSize: '2.5em',
    marginBottom: '20px',
    color: '#0d6efd',
  },
  inputContainer: {
    textAlign: 'center' as const,
    marginBottom: '30px',
  },
  input: {
    width: '300px',
    padding: '10px 15px',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  section: {
    marginBottom: '40px',
  },
  sectionTitle: {
    fontSize: '1.5em',
    borderBottom: '2px solid #0d6efd',
    paddingBottom: '10px',
    marginBottom: '20px',
  },
  preview: {
    border: '1px solid #dee2e6',
    borderRadius: '5px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
  },
  codeBlock: {
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '5px',
    overflowX: 'auto' as const,
    fontFamily: 'Consolas, "Courier New", monospace',
    fontSize: '0.9em',
    lineHeight: '1.5',
  },
};
