# Development Environment Workflows

This directory contains GitHub Actions workflows for managing development environments for the AWS Amplify application.

## Workflows

### 1. Deploy Development Environment (`deploy-dev.yml`)

Deploys a new development environment with all necessary AWS resources.

**Triggers:**
- Manual trigger via workflow dispatch
- Automatic trigger on pushes to the `develop` branch (excluding markdown and documentation changes)

**Inputs:**
- `environment_name`: Name of the development environment (default: `dev`)
- `region`: AWS region for deployment (default: `us-east-2`)

**What it does:**
1. Sets up Node.js and installs dependencies
2. Configures AWS credentials
3. Installs Amplify CLI
4. Creates a new Amplify environment
5. Deploys the backend (AppSync API, Cognito Auth, S3 Storage)
6. Captures deployment outputs (API endpoints, stack names)
7. Creates a deployment summary
8. Comments on PRs with deployment details

### 2. Terminate Development Environment (`terminate-dev.yml`)

Completely removes a development environment and cleans up all associated AWS resources.

**Triggers:**
- Manual trigger via workflow dispatch only

**Inputs:**
- `environment_name`: Name of the environment to terminate (default: `dev`)
- `region`: AWS region (default: `us-east-2`)
- `force_delete`: Force delete even if resources are in use (default: `false`)

**What it does:**
1. Checks if the environment exists
2. Removes the Amplify environment
3. Deletes the CloudFormation stack
4. Removes the Amplify App
5. Cleans up the S3 deployment bucket
6. Creates a termination summary
7. Comments on PRs with cleanup details

## Prerequisites

### Required GitHub Secrets

Set up the following secrets in your GitHub repository:

1. **AWS_ROLE_ARN** (Recommended for production)
   - ARN of an IAM role that GitHub Actions can assume
   - Must have permissions for Amplify, CloudFormation, S3, and other AWS services

2. **AWS_ACCESS_KEY_ID** and **AWS_SECRET_ACCESS_KEY** (Alternative)
   - AWS access keys with appropriate permissions
   - Less secure than role-based authentication

### Required AWS Permissions

The AWS credentials must have permissions for:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "amplify:*",
        "cloudformation:*",
        "s3:*",
        "iam:*",
        "cognito-idp:*",
        "appsync:*",
        "lambda:*",
        "logs:*"
      ],
      "Resource": "*"
    }
  ]
}
```

## Usage

### Deploying a Development Environment

1. **Manual Deployment:**
   - Go to Actions tab in GitHub
   - Select "Deploy Development Environment"
   - Click "Run workflow"
   - Fill in the environment name and region
   - Click "Run workflow"

2. **Automatic Deployment:**
   - Push changes to the `develop` branch
   - Workflow will automatically trigger (excluding markdown and documentation changes)

### Terminating a Development Environment

1. Go to Actions tab in GitHub
2. Select "Terminate Development Environment"
3. Click "Run workflow"
4. Fill in the environment name to terminate
5. Click "Run workflow"

## Environment Naming Convention

- Use descriptive names like `dev`, `test`, `feature-xyz`
- Avoid special characters except hyphens and underscores
- Keep names short but meaningful

## Best Practices

1. **Resource Cleanup:**
   - Always terminate development environments when no longer needed
   - Monitor AWS costs regularly
   - Use the termination workflow to ensure complete cleanup

2. **Security:**
   - Use IAM roles instead of access keys when possible
   - Regularly rotate credentials
   - Follow the principle of least privilege

3. **Monitoring:**
   - Check workflow logs for any errors
   - Monitor CloudFormation stack status
   - Verify resource cleanup in AWS Console

## Troubleshooting

### Common Issues

1. **Environment already exists:**
   - Use a different environment name
   - Or terminate the existing environment first

2. **Permission errors:**
   - Verify AWS credentials have sufficient permissions
   - Check IAM role policies

3. **CloudFormation stack deletion fails:**
   - Some resources may have dependencies
   - Check AWS Console for manual cleanup
   - Use the force delete option if available

### Getting Help

- Check the workflow logs for detailed error messages
- Verify AWS credentials and permissions
- Review CloudFormation stack events in AWS Console
- Check Amplify Console for app status

## Cost Optimization

- Terminate environments promptly when not in use
- Use the termination workflow to ensure complete cleanup
- Monitor AWS billing dashboard regularly
- Consider using AWS Budgets for cost alerts