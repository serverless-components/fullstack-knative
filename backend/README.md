# Knative Fullstack - Backend

This example uses Express as Web framework for echoing a greeting and is supposed to run on OpenShift with OpenShift Serverless enabled or Kubernetes.

See https://github.com/serverless/serverless-knative for details how to use the "knative" component.

The query parameter `name` can be used to set the addressee.
You can edit [src/index.js](./src/index.js) for changing the message and adapting the service.

You need to adapt the credentials in the top-level `.env` for being able to connect to a Kubernetes or OpenShift cluster.
