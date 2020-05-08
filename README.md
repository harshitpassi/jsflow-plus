# jsflow-plus
An extension of the security-enhanced JavaScript interpreter JSFlow, to support information flow tracking for node.js File System and HTTP APIs

# Installation 
1. make sure you have node.js installed on your system. It can be downloaded from <https://nodejs.org/en/>
2. Install the dependencies with `npm install`.
3. For an interactive terminal, run `./jsflow`.
4. Otherwise, run `./jsflow <filepath>` on a js file.

# Language Based Security Concepts Used
1. Termination-Insensitive Noninterference (TINI) : A security property that guarantees noninterference for executions of an application that terminate, i.e. private input can only be leaked to a public output if the termination behaviour of the application causes the leak.
2. No Sensitive Upgrades (NSU) : a concept that prohibits security labels being changed under secret control.

* The original jsflow library provides a TINI guarantee, and uses the concept of NSU. jsflow-plus extends the same guarantee to node.js APIs.

# Test suite
* Various test files included in the test directory. Run them with `./jsflow <filepath>`.
* The example web app hrafn is also in the test directory.
* I have modified the test application to use the node.js http module instead of the Express framework.
* This is to highlight how a library with server-side information flow control can protect against content injection and cross-site scripting attacks.
* A meaningful extension for jsflow-plus could be providing first-class support for RESTful server middleware such as Express and Hapi. Such middleware has higher levels of abstraction, with a lot of details I relied upon being hidden inside the library.
* To run the test application:
    1. Go into `/test/hrafn/server` and run `npm install` to install the application's dependencies.
    2. Start the server with `node index.js`. By default, the application will run on <http://localhost:5000>
    3. To test the content injection attacks, we need to run the analytics and ad services provided. The ad service is located in `/test/hrafn/adserv`. Again perform an `npm install` in the directory and run `node adserv.js`.
    4. The analytics server in `/test/hrafn/analytics`. Perform an `npm install` and then run `node analytics.js`.
    5. Make sure all three servers are running in three separate console windows.

# Original Contributors for JSFlow project

* Daniel Hedin
* Alexander Sjösten
* Andrei Sabelfeld 

Former contributors:

* Arnar Birgisson
* Luciano Bello

### Node.js Extensions by Harshit Passi (hpp5123@psu.edu) for CSE-597 : Language Based Security
