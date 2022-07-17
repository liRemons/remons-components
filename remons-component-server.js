const express = require('express');
const path = require('path');
const app = express();
const port = 8001;
app.use(express.static('docs-dist', { maxAge: 1000 * 3600 }));
app.get('*', (req, res) => {
  const pathUrl = req.url.replace(/\/remons-components/, 'docs-dist');
  res.sendFile(
    path.resolve(__dirname, pathUrl === 'docs-dist/' ? './docs-dist/index.html' : pathUrl),
  );
});

app.listen(port, () => console.log(`Example app listening on port port!`));
