# test-app
a simple app for experimental reasons
## Overview
Building a simple web application at its root URL it displays a form that accepts three fields as input: "Nickname", "Favorite color" and "Cats or Dogs".
This form saves the result in a relational database and ensure that "Nickname" is unique.
## Technologies
* React.js: to build user interface
* Node.js: to build server side 
* PostgreSQL: to store data
* Docker: to package the application into containers
* Ansible: to deploy the application
## Running application
* To run the application locally:<br>
From the project directory, start up the application by running:<br>
`docker-compose up --build`<br>
**Note:** the built images of this web app (server and client) exist in the [Docker Hub](https://hub.docker.com/) 
## Deploying application with Ansible
### Set up your machine as an Ansible server<br>
`sudo apt-get update`<br>
`sudo apt-get install ansible`<br>
* Make sure that the Ansible server (your machine in that case) should reach the other remote servers via ssh.<br>
* Rename the hosts file and create another one as below<br>
`sudo mv /etc/ansible/hosts /etc/ansible/hosts.orig`<br>
`sudo vim /etc/ansible/hosts`<br>
* Add your remote servers so that your file appear as below<br>
`[webserver]`<br>
`the remote server IP adress here`<br>
* copy the **docker-playbook.yml** to the `/etc/ansible/` directory
* From the `/etc/ansible/` directory, start up the deployment by running:<br>
`ansible-playbook docker-playbook.yml`<br>
* You can confirm running containers by running:<br>
`ansible all -m shell -a 'sudo docker ps'`<br>

Now navigate to your browser, enter `http://your-remote-host-ip:8080`. You should get the web application page from the remote server.
  
**Ps:** Make sure that the port 8080 on the remote nodes is opened.<br>
  
**Ps:** If you don't possess an instance on the cloud you can also try testing deploying the web application locally by changing `all` to `localhost` in the _**docker-playbook.yml**_ file.








