
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class CicdgithubStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda function definition
    const userDataLambda = new lambda.Function(this, 'UserDataLambda', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'userdata.handler',
      code: lambda.Code.fromAsset('lambda'),
    });

    // API Gateway definition
    const api = new apigateway.LambdaRestApi(this, 'UserDataApi', {
      handler: userDataLambda,
      proxy: false,
    });

    // /userdata endpoint
    const userData = api.root.addResource('userdata');
    userData.addMethod('GET');
  }
}
