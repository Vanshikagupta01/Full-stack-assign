io.on('connection', (socket) => {
  console.log('A user connected');
  socket.on('updateAttendees', (eventId) => {
    io.emit('refreshEvent', eventId);
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));