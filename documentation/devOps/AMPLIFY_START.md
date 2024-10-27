# Getting Started with AWS Amplify Gen 2

This guide will help you set up your local development environment for working with AWS Amplify Gen 2.

## Prerequisites

1. **Node.js**: Install Node.js version 14.x or later. [Download Node.js](https://nodejs.org/)

2. **AWS Account**: You need an AWS account. [Create an AWS Account](https://aws.amazon.com/free/)

3. **IDE**: We recommend using Visual Studio Code. [Download VS Code](https://code.visualstudio.com/)

## Local Setup

1. **Install AWS CLI**:
   - Download and install the AWS CLI. [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
   - Configure AWS CLI with your credentials:

     ```BASH
     aws configure
     ```

2. **Install Amplify CLI**:

   ```BASH
   npm install -g @aws-amplify/cli@latest
   ```

3. **Configure Amplify**:

   ```BASH
   amplify configure
   ```

   Follow the prompts to set up an IAM user.

## Project Setup

1. **Create a new React project**:

   ```BASH
   npx create-react-app@latest amplify-app
   cd amplify-app
   ```

2. **Initialize Amplify in your project**:

   ```BASH
   amplify init
   ```

3. **Add Amplify libraries**:

   ```BASH
   npm install aws-amplify
   ```

## Developing with Amplify

1. **Define your data schema** in `amplify/data/resource.ts`

2. **Configure authentication** in `amplify/auth/resource.ts`

3. **Use Amplify in your React components**:

   ```javascript
   import { Amplify } from 'aws-amplify';
   import config from './amplifyconfiguration.json';
   Amplify.configure(config);
   ```

4. **Generate API client**:

   ```javascript
   import { generateClient } from 'aws-amplify/api';
   const client = generateClient();
   ```

5. **Use the client for data operations**:

   ```javascript
   const result = await client.models.Todo.create({
     content: 'Hello world!',
     done: false,
   });
   ```

## Useful Commands

- `amplify status`: Check the status of your Amplify project
- `amplify push`: Deploy your local changes to the cloud
- `amplify pull`: Pull the latest changes from the cloud
- `amplify add <category>`: Add a new resource (e.g., `amplify add api`)
- `amplify remove <category>`: Remove a resource

## Additional Resources

- [AWS Amplify Documentation](https://docs.amplify.aws/)
- [AWS Amplify GitHub Repository](https://github.com/aws-amplify/amplify-js)
- [AWS Amplify Community](https://amplify.aws/community/)

Remember to never commit sensitive information like AWS credentials to your repository. Use environment variables or AWS Secrets Manager for managing sensitive data.

- Copy "./.env.example" to a "./.env" file
- Replace the parameters with local dev values.
  - See AWS_SECRET_MANAGER_README.md
