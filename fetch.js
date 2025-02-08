async function resolveDomain(domain) {
  const response = await fetch(`https://dns.google./resolve?name=${domain}`);
  const data = await response.json();
  console.log(data);
}

resolveDomain('example.com');
