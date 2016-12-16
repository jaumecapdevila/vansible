# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure(2) do |config|

  config.vm.box = "centos/7"
  config.vm.hostname = "devBox"

  config.vm.network :forwarded_port, host: 8080, guest: 8080, auto_correct: true # website
  config.vm.network :forwarded_port, host: 2443, guest: 443, auto_correct: true # ssl
  config.vm.network :forwarded_port, guest: 3306, host: 3306, auto_correct: true # mysql
  config.vm.network :forwarded_port, guest: 9000, host: 9000, auto_correct: true # phpmyadmin

  config.vm.network "private_network", ip: "192.168.33.2"

  config.vm.synced_folder "./projects", "/var/www", owner:"vagrant", group:"apache", mount_options:["dmode=775,fmode=644"], create: true

  config.vm.provider "virtualbox" do |vb|
    vb.gui = false
    vb.name = "devBox"
    vb.memory = "2048"
    vb.cpus   = 2

  end

 config.vm.provision "ansible" do |ansible|
    ansible.playbook = "provision/vagrant.yml"
     ansible.sudo = true
  end
end
