from socketIO_client import SocketIO, LoggingNamespace


def on_print_response(*args):
    print('response', args)

socketIO = SocketIO('localhost', 3000, LoggingNamespace)
socketIO.emit('add user', 'testfrompython')
socketIO.emit('new message', 'test')
socketIO.on("new message", on_print_response)
    #socketIO.wait(seconds=10) 
socketIO.wait()
