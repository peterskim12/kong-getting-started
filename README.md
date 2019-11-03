# kong-getting-started

This project is a quick demonstration of getting Kong up and
running with 3 services: 2 REST APIs and 1 GraphQL API. 

You can also set up:
* a [rate limiting plugin](https://docs.konghq.com/hub/kong-inc/rate-limiting/) to show a simple plugin to control throughput
* a [tcp logging plugin](https://docs.konghq.com/hub/kong-inc/tcp-log/) to send logs to an ELK stack to demonstrate observability

## Pre-reqs

* Install Kong for your platform of choice. https://konghq.com/install/
* Install Insomnia, a REST API client. https://insomnia.rest/
* Install `node` if you haven't already done so. The 3 example services are Node.js applications that require `node`. Easiest way on a Mac is to use Homebrew: `brew install node`. For other platforms, use your preferred package manager.
* (Optional) If you want to use a load runner to simulate applying continuous request traffic, install k6. https://docs.k6.io/docs/installation
* (Optional) If you want to test the logging functionality, you need a functioning ELK stack. You can [spin up a trial on Elastic Cloud](https://www.elastic.co/cloud/) or [download+run it on your own machine](https://www.elastic.co/guide/en/elastic-stack-get-started/current/get-started-elastic-stack.html). 

## Instructions

### Set up services 

The 3 example APIs for this demo need some install/setup. From the root of this repo's directory, run the `install_services.sh` script, which will install each of the 3 services' dependencies.

```
sh install_services.sh
```

### Run services

The 3 services will be started on `localhost` on these ports:

Service name | port
------------ | ----
rest-a | 3000
rest-b | 3001
graphql-a | 4000

Run these services by executing the `run_services.sh` script:

```
sh run_services.sh
```

When you're done, you can stop them using the `kill` command.

### Run Kong

Instructions on running Kong will dependent on the platform/distro chosen. [Refer to those install docs](https://konghq.com/install/) to see how to run Kong.

### Configure Kong services, routes, plugins

Instead of scripting the configuration of Kong services and routes for the 3 example services, this project provides an Insomnia workspace to allow you to explore the Kong API. Import `insomnia_kong_gs_workspace.json` into your Insomnia installation. 

Each service has its own environment. Start with selecting the `graphql service` environment, then run the following APIs in order to set up the service, route, and plugins for that environment:

1. services/add service
1. routes/add route
1. plugins/configure rate limiting plugin
1. plugins/set up tcp log plugin

### Simulate load against Kong gateway

k6 is a load testing tool that allows you to simulate load on services. The provided k6 script will simulate 10 virtual users for 30 seconds, executing requests against all 3 services. 

```
k6 run k6_script.js
```

### Questions/problems?

File an issue if you have any problems. Thanks!
