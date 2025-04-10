import { error, log } from 'node:console';
import type { Socket } from 'socket.io';

function connection(socket: Socket, next: (err?: Error) => void): void {
  socket.on('connection', () => {
    log('a user connected', socket.id);
  });

  socket.on('disconnect', () => {
    log('user disconnected', socket.id);
  });

  socket.on('connect_failed', (err: Error) => {
    error(err);
  });

  socket.on('connect_error', (err: Error) => {
    error(err);
  });

  next();
}

export default connection;
