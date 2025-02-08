const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

// Resolve domain name to IP address
router.get('/:domain', async (req, res) => {
    const { domain } = req.params;
    
    try {
        const response = await fetch(`https://dns.google./resolve?name=${domain}`);
        const data = await response.json();

        if (data.Answer) {
            const ipAddresses = data.Answer.filter(record => record.type === 1).map(record => record.data);
            return res.json({ domain, ip: ipAddresses });
        }

        res.status(404).json({ error: "No IP address found for this domain" });
    } catch (error) {
        res.status(500).json({ error: "Error resolving domain" });
    }
});

module.exports = router;
