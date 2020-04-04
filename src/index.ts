import server from "./server";
import { logger } from "@shared";

// Server
const port = process.env.PORT || 3001;

server.listen(port, () => {
  logger.info(`Server running on port ${port}`);
});
