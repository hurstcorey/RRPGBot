import * as cdk from "aws-cdk-lib";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import { Construct } from "constructs";

export class CDKStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a new secret
    const secret = new secretsmanager.Secret(this, "MySecret", {
      secretName: "my-app-secret",
      description: "Secret for my application",
      generateSecretString: {
        secretStringTemplate: JSON.stringify({ username: "user" }),
        generateStringKey: "password",
        excludePunctuation: true,
        includeSpace: false,
        passwordLength: 16,
      },
    });

    // Output the secret ARN
    new cdk.CfnOutput(this, "SecretArn", {
      value: secret.secretArn,
      description: "The ARN of the secret in Secrets Manager",
    });
  }
}
