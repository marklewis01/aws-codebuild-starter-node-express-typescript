// import { logger } from "./shared";
import server from "./server";

// Server
const port = process.env.PORT || 3001;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
