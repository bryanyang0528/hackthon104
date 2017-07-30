from socketIO_client import SocketIO, LoggingNamespace


def on_print_response(*args):
    print('response', args)


def on_press_key(*args):
    print('press_key', args)
    #do something data.message
    

socketIO = SocketIO('localhost', 3000, LoggingNamespace)
socketIO.emit('add user', 'testfrompython')
socketIO.emit('new message', 'test')
socketIO.on("new message", on_print_response)
    #socketIO.wait(seconds=10) 
socketIO.on("press key", on_press_key)


socketIO.wait()
