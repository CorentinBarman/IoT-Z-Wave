# Smart Building Lab 1 / Part 2: Z-Wave #

This is a template of a Python flask-based REST application for controlling a
Z-Wave IoT deployment.

The `backend.py` file implements an
[OpenZWave-based](http://www.openzwave.com/dev/index.html) control layer and
is to be completed in the parts marked by:

```
#### COMPLETE THIS METHOD ####
```

The REST API documentation is in [`doc/index.html`](doc/index.html). It can
be regenerated by running the following command (you need to install the
package [`apidoc`](http://apidocjs.com/)) inside your Git checkout directory:

```
$ apidoc
```

Once done, you can start your server with the command
```
$ python2 flask-main.py
```
then, wait ~1 minute for the network to stabilize, and check the connection with a browser,
normally at the URL:
```
http://192.168.1.2:5000
```

## Raspberry set-up ##

In order to share a network card as an internet gateway in Linux, ip
[forwarding and masquerading must be
setup](https://wiki.archlinux.org/index.php/Internet_sharing). The
[`util/internet-sharing`](util/internet-sharing) script does the trick. By
default, it expects two interfaces named `net0` and `net1` for, respectively,
the internet gateway and the client inbound interface. So, if you want to
reroute all incoming traffic from, say, `eth0` (where your Raspberry is
connected to) through your wireless connection `wlan0`, you'd call the script
like this (as **superuser**):
```
# ./util/internet-sharing wlan0 eth0
```

To make the changes persistent, consult your Linux distribution's documentation.

## Testing ##

A CLI-based client script is available: `post_client.py`. See how to use it with:
```
$ python3 post_client.py -h
```