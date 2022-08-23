import http.server
import socketserver
import os

port = 8000

os.chdir('../docs')

httpd = socketserver.TCPServer(("", port), http.server.SimpleHTTPRequestHandler)

print("Server started on http://localhost:" + str(port))
httpd.serve_forever()
