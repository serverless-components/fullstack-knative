# Fullstack-Knative

This fullstack application contains a back-end that runs Express.js on Knative via RedHat OpenShift Serverless.  It also uses AWS resources for hosting a front-end (AWS S3, AWS Cloudfront) and a database (AWS IAM, AWS DynamoDB).

This is a great option to leverage the power of Knative as well as AWS services, especially if you are using Redhat's new OpenShift AWS Service.

## Quick-Start

Create an `.env` file in your root folder.  And add the following credentials:

```
# Learn more about about the credentials needed
# to deploy your app https://github.com/serverless/components#credentials

# AWS:
# AWS_ACCESS_KEY_ID=<your access key>
# AWS_SECRET_ACCESS_KEY=<your secret access key>

# Connections parameters for connecting to an Kuvernetes/OpenShift cluster
KUBERNETES_ENDPOINT=https://cluster-url-without-port.com
KUBERNETES_PORT=6443
# Token to use (for OpenShift: Use "oc whoami --show-token" when being connected)
KUBERNETES_SERVICE_ACCOUNT_TOKEN=foobar
KUBERNETES_SKIP_TLS_VERIFY=true
```

In the root folder of this project, run `serverless deploy`

...
