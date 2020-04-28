# jsflow-plus
An extension of the security-enhanced JavaScript interpreter JSFlow, to support information flow tracking for node.js File System and HTTP APIs

# Installation 
1. Install the dependencies with `npm install`.
2. For an interactive terminal, run `./jsflow`.
3. Otherwise, run `./jsflow <filepath>` on a js file.

# Language Based Security Concepts Used
1. Termination-Insensitive Noninterference (TINI) : A security property that guarantees noninterference for executions of an application that terminate, i.e. private input can only be leaked to a public output if the termination behaviour of the application causes the leak.
2. No Sensitive Upgrades (NSU) : a concept that prohibits security labels being changed under secret control.

* The original jsflow library provides a TINI guarantee, and uses the concept of NSU. jsflow-plus extends the same guarantee to node.js APIs.

# Original Contributors for JSFlow project

* Daniel Hedin
* Alexander Sjösten
* Andrei Sabelfeld 

Former contributors:

* Arnar Birgisson
* Luciano Bello

### Node.js Extensions by Harshit Passi (hpp5123@psu.edu) for CSE-597 : Language Based Security
