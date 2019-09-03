# Smart Building Lab 1 / Part 2: Z-Wave #

This is a template of a Python flask-based application for controlling a
Z-Wave IoT deployment.

The `backend.py` file is to be completed in the parts marked by:

```
#### COMPLETE THIS METHOD ####
```

Once done, you can start your server with the command
```
python2 flask-main.py
```
then, wait ~1 minute for the network to stabilize, and check the connection with a browser,
normally at the URL:
```
http://192.168.1.2:5000
```

## Raspberry set-up ##

In order to share a network card as an internet gateway in Linux, ip
[forwarding and masquerading must be setup](https://wiki.archlinux.org/index.php/Internet_sharing). The
`util/internet-sharing` script does the trick:

```
#!/bin/bash
################################################################################
# internet-sharing
#
# Forward outbound traffic from a client interface to an internet gateway
# interface.
#
# <https://wiki.archlinux.org/index.php/Internet_sharing>
# <https://linoxide.com/firewall/ip-forwarding-connecting-private-interface-internet/>
################################################################################
gwint=${1:-'net0'}  # internet gateway interface -- all outbound traffic
clint=${2:-'net1'}  # client interface -- input traffic

sysctl net.ipv4.ip_forward=1 net.ipv6.conf.default.forwarding=1 net.ipv6.conf.all.forwarding=1

iptables -t nat -A POSTROUTING -o $gwint -j MASQUERADE
iptables -A FORWARD -m conntrack --ctstate RELATED,ESTABLISHED -j ACCEPT
iptables -A FORWARD -i $clint -o $gwint -j ACCEPT
```

By default, it expects two interfaces named `net0` and `net1` for,
respectively, the internet gateway and the client inbound interface. So, if
you want to reroute all incoming traffic from, say, `eth0` (where your
Raspberry is connected to) through your wireless connection `wlan0`, you'd call
the script like this (as **superuser**):

```
# ./internet-sharing wlan0 eth0
```

To make the changes persistent, consult your Linux distribution's documentation.

## Testing ##

A CL-based client script is available: `post_client.py`. See how to use it with
```
python3 post_client.py -h
```
