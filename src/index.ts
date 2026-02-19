import { connection, events } from './events';

import { Server } from 'socket.io';
import { createServer } from 'node:http';
import { log } from 'node:console';

const DEFAULT_PORT = 3000;
const PORT = process.env.PORT ?? DEFAULT_PORT;
const OPTIONS = {
  cors: {
    methods: ['GET', 'POST'],
    origin: '*',
  },
};

const server = createServer();

const io = new Server(server, OPTIONS);
io.use(connection);
io.use(events);

server.listen(PORT, () => {
  log(`Server running at http://localhost:${PORT}/`);
});
