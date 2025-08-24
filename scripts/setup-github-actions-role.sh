#!/bin/bash

# Script to set up AWS IAM role for GitHub Actions
# This script creates the necessary IAM role and policies for GitHub Actions to deploy/terminate Amplify environments

set -e

# Configuration
ROLE_NAME="GitHubActionsAmplifyRole"
POLICY_NAME="GitHubActionsAmplifyPolicy"
GITHUB_ORG="hurstcorey"  # Replace with your GitHub organization
GITHUB_REPO="rrpgbot"  # Replace with your repository name

echo "Setting up AWS IAM role for GitHub Actions..."

# Create the IAM policy
echo "Creating IAM policy..."
cat > /tmp/github-actions-policy.json << EOF
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
        "logs:*",
        "apigateway:*",
        "dynamodb:*",
        "es:*",
        "elasticache:*",
        "rds:*",
        "ec2:*",
        "ecs:*",
        "ecr:*",
        "ssm:*",
        "secretsmanager:*",
        "kms:*"
      ],
      "Resource": "*"
    }
  ]
}
EOF

aws iam create-policy \
  --policy-name $POLICY_NAME \
  --policy-document file:///tmp/github-actions-policy.json \
  --description "Policy for GitHub Actions to manage Amplify environments" \
  2>/dev/null || echo "Policy already exists or error occurred"

# Create the trust policy for GitHub Actions
echo "Creating trust policy..."
cat > /tmp/trust-policy.json << EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "Federated": "arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):oidc-provider/token.actions.githubusercontent.com"
      },
      "Action": "sts:AssumeRoleWithWebIdentity",
      "Condition": {
        "StringEquals": {
          "token.actions.githubusercontent.com:aud": "sts.amazonaws.com"
        },
        "StringLike": {
          "token.actions.githubusercontent.com:sub": "repo:$GITHUB_ORG/$GITHUB_REPO:*"
        }
      }
    }
  ]
}
EOF

# Create the IAM role
echo "Creating IAM role..."
aws iam create-role \
  --role-name $ROLE_NAME \
  --assume-role-policy-document file:///tmp/trust-policy.json \
  --description "Role for GitHub Actions to manage Amplify environments" \
  2>/dev/null || echo "Role already exists or error occurred"

# Attach the policy to the role
echo "Attaching policy to role..."
aws iam attach-role-policy \
  --role-name $ROLE_NAME \
  --policy-arn arn:aws:iam::$(aws sts get-caller-identity --query Account --output text):policy/$POLICY_NAME

# Get the role ARN
ROLE_ARN=$(aws iam get-role --role-name $ROLE_NAME --query Role.Arn --output text)

echo ""
echo "✅ Setup complete!"
echo ""
echo "Role ARN: $ROLE_ARN"
echo ""
echo "Next steps:"
echo "1. Add the following secret to your GitHub repository:"
echo "   Name: AWS_ROLE_ARN"
echo "   Value: $ROLE_ARN"
echo ""
echo "2. Set up the OIDC provider in AWS (if not already done):"
echo "   aws iam create-open-id-connect-provider \\"
echo "     --url https://token.actions.githubusercontent.com \\"
echo "     --client-id-list sts.amazonaws.com \\"
echo "     --thumbprint-list 6938fd4d98bab03faadb97b34396831e3780aea1"
echo ""
echo "3. Update the GITHUB_ORG and GITHUB_REPO variables in this script if needed"
echo ""

# Cleanup temporary files
rm -f /tmp/github-actions-policy.json /tmp/trust-policy.json