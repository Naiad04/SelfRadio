import sys
import http.client, urllib.parse

conn = None
key = "somecoolkey" # Don't forget to also change this in the webserver
webserver = "localhost"

# Function called to initialize your python environment.
# Should return 1 if ok, and 0 if something went wrong.
def ices_init ():
	conn = http.client.HTTPSConnection(webserver)
	data = urllib.parse.urlencode({'key': key})
	headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
	conn.request("POST","/hook/init",data,headers)
	response = conn.getresponse()
	conn.close()
	if response.status == 200:
		return 1
	else:
		return 0

# Function called to shutdown your python enviroment.
# Return 1 if ok, 0 if something went wrong.
def ices_shutdown ():
	conn = http.client.HTTPSConnection(webserver)
	data = urllib.parse.urlencode({'key': key})
	headers = {"Content-type": "application/x-www-form-urlencoded","Accept": "text/plain"}
	conn.request("POST","/hook/shutdown",data,headers)
	response = conn.getresponse()
	conn.close()
	if response.status == 200:
		return 1
	else:
		return 0

# Function called to get the next filename to stream. 
# Should return a string.
def ices_get_next ():
	conn = http.client.HTTPSConnection(webserver)
	conn.request("GET","/hook/next")
	response = conn.getresponse()
	data = response.read()
	conn.close()
	return data.decode("utf-8").strip('\x00')