
# AWS CDK Lambda API Project with CI/CD

This project uses AWS CDK (TypeScript) to deploy a Node.js Lambda function and an API Gateway endpoint that returns user data. It is integrated with GitHub Actions for CI/CD, so every commit to the `main` branch will automatically deploy the Lambda and API Gateway to AWS.

## Lambda Function
The Lambda function is located in `lambda/userdata.js` and returns a sample user object as JSON.

## API Gateway
An API Gateway is created with a `/userdata` endpoint that triggers the Lambda function.

## CI/CD
GitHub Actions workflow is defined in `.github/workflows/ci-cd.yml` to deploy the stack on every commit to `main`.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template
