# Development Environment Management

This project includes automated GitHub Actions workflows for managing development environments on AWS Amplify.

## Quick Start

### 1. Set up AWS Credentials

**Option A: IAM Role (Recommended)**
```bash
# Run the setup script
./scripts/setup-github-actions-role.sh

# Add the role ARN to GitHub secrets:
# Name: AWS_ROLE_ARN
# Value: [ARN from script output]
```

**Option B: Access Keys**
```bash
# Add to GitHub secrets:
# Name: AWS_ACCESS_KEY_ID
# Value: [Your AWS Access Key]
# Name: AWS_SECRET_ACCESS_KEY  
# Value: [Your AWS Secret Key]
```

### 2. Deploy a Development Environment

**Manual Deployment:**
1. Go to GitHub → Actions → "Deploy Development Environment"
2. Click "Run workflow"
3. Enter environment name (e.g., `dev`, `test`, `feature-xyz`)
4. Click "Run workflow"

**Automatic Deployment:**
- Push to `develop` branch (triggers automatic deployment)

### 3. Terminate a Development Environment

1. Go to GitHub → Actions → "Terminate Development Environment"
2. Click "Run workflow"
3. Enter the environment name to terminate
4. Click "Run workflow"

## What Gets Deployed

Each development environment includes:
- **AppSync API** - GraphQL API with API Key authentication
- **Cognito Auth** - User authentication with MFA support
- **S3 Storage** - File storage with configurable access levels
- **CloudFormation Stack** - Infrastructure as code
- **Amplify App** - Application hosting and management

## Environment Types

| Type | Purpose | Auto Deploy | Branch |
|------|---------|-------------|---------|
| `dev` | Development | ✅ | `develop` |
| `test` | Testing | ❌ | `main` |
| `feature-*` | Feature branches | ✅ | `feature/*` |
| `prod` | Production | ❌ | `main` |

## Cost Management

- **Always terminate environments** when not in use
- Monitor AWS billing dashboard
- Use the termination workflow for complete cleanup
- Consider AWS Budgets for cost alerts

## Troubleshooting

**Common Issues:**
- Environment already exists → Use different name or terminate first
- Permission errors → Check AWS credentials and IAM policies
- Stack deletion fails → Check dependencies in AWS Console

**Getting Help:**
- Check workflow logs in GitHub Actions
- Review CloudFormation stack events
- Verify Amplify Console status

## Security Best Practices

- Use IAM roles instead of access keys
- Follow principle of least privilege
- Regularly rotate credentials
- Monitor access logs

## Next Steps

1. **Customize configurations** in `.github/workflows/environment-config.yml`
2. **Set up monitoring** and cost alerts
3. **Configure notifications** (Slack, email)
4. **Review security policies** and adjust as needed

For detailed documentation, see [`.github/workflows/README.md`](.github/workflows/README.md).