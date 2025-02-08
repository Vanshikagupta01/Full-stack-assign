import React, { useState } from 'react';

function DomainLookup() {
  const [domain, setDomain] = useState('');
  const [ip, setIP] = useState('');

  const lookupIP = async () => {
    const response = await fetch(`http://localhost:5000/api/domain-lookup/${domain}`);
    const data = await response.json();
    setIP(data.ip ? data.ip.join(', ') : 'Not Found');
  };

  return (
    <div>
      <h2>Domain to IP Lookup</h2>
      <input 
        type="text" 
        value={domain} 
        onChange={(e) => setDomain(e.target.value)} 
        placeholder="Enter domain (e.g., example.com)"
      />
      <button onClick={lookupIP}>Lookup</button>
      <p>IP Address: {ip}</p>
    </div>
  );
}

export default DomainLokup;
