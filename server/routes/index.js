const router = require('express').Router();
const path = require('path');
const transactionRoutes = require('./api');

router.use('/api', transactionRoutes);

// serve up react front-end in production
router.use((req, res) => {
  res.sendFile(path.join(__dirname, '../../client/build/index.html'));
});

module.exports = router;
