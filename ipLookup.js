const express = require('express');
const dns = require('dns');

const router = express.Router();

// Resolve IP to Hostname
router.get('/:ip', (req, res) => {
    const { ip } = req.params;

    dns.reverse(ip, (err, hostnames) => {
        if (err || !hostnames.length) {
            return res.status(400).json({ error: "Invalid or Unresolvable IP" });
        }
        res.json({ ip, hostnames });
    });
});

module.exports = router;
