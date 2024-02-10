const express = require('express');
const app = express();
const PORT = 4000;
const url = require('url');


app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
})
