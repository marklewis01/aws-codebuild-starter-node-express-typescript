import http from "http";

import app from "./app";

// Server
const port = process.env.PORT || 3001;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
