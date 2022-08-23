import http.server
import socketserver

port = 8000

httpd = socketserver.TCPServer(("", port), http.server.SimpleHTTPRequestHandler)

print("Server started on http://localhost:" + str(port))
httpd.serve_forever()
