# Ansible Role: jeffhung.docker

Ansible playbook to use Docker CE on CentOS/Ubuntu Linux.

Install this playbook:

	ansible-galaxy install jeffhung.docker


## Role Variables

### `docker_variant` (optional)

Select the Docker variant from one of the following:

- `enterprise` (n/a): Docker EE version
- `stable`: Docker CE stable version
- `edge` (n/a): Docker CE edge version
- `cloud` (n/a): Docker Cloud version

See: https://docs.docker.com/engine/installation/#docker-variants

Default: `stable`

### `docker_manage_as_nonroot` (optional)

Manage Docker as a non-root user?

Default: `true`

Warning: The docker group grants privileges equivalent to the root user. For
         details on how this impacts security in your system.
    See: https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface


### `docker_install_method` (optional)

Select the method for installing docker. Could be:

- `repository`
- `package` (n/a)

Default: `repository`

## License

BSD

