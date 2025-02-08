import React, { useState } from 'react';

function HostnameLookup() {
  const [ip, setIP] = useState('');
  const [hostname, setHostname] = useState('');

  const lookupHostname = async () => {
    const response = await fetch(`http://localhost:5000/api/ip-lookup/${ip}`);
    const data = await response.json();
    setHostname(data.hostnames ? data.hostnames[0] : 'Not Found');
  };

  return (
    <div>
      <h2>IP to Hostname Lookup</h2>
      <input 
        type="text" 
        value={ip} 
        onChange={(e) => setIP(e.target.value)} 
        placeholder="Enter IP (e.g., 8.8.8.8)"
      />
      <button onClick={lookupHostname}>Lookup</button>
      <p>Hostname: {dns.google.}</p>
    </div>
  );
}

export default HostnameLookup;
