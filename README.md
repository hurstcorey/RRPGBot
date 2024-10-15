# AWS Amplify Gen 2 Concepts

AWS Amplify Gen 2 introduces a TypeScript-based, code-first developer experience for defining backends. This README provides an overview of the key concepts and capabilities of Amplify Gen 2.

## Key Features

1. **Build Fullstack Apps with TypeScript**: Provision backend infrastructure using TypeScript code.
2. **Faster Local Development**: Isolated cloud development environments for each developer.
3. **Fullstack Git-based Environments**: 1:1 mapping of shared environments to Git branches.
4. **Unified Management Console**: Single place to manage builds, hosting, deployed resources, and environment variables.

## Core Capabilities

### Data

- Define data schemas using TypeScript in `amplify/data/resource.ts`.
- Automatically generates typed real-time APIs and NoSQL databases.
- Use `generateClient` for typed CRUD operations in frontend code.

Example:
```typescript
const schema = a.schema({
  Chat: a.model({
    name: a.string(),
    message: a.hasMany('Message', 'chatId'),
  }),
  Message: a.model({
    text: a.string(),
    chat: a.belongsTo('Chat', 'chatId'),
    chatId: a.id()
  }),
});
```

### Auth

- Configure authentication settings in `amplify/auth/resource.ts`.
- Customize authentication flows, MFA, and third-party social providers.
- Integrates with Amazon Cognito.

Example:
```typescript
export const auth = defineAuth({
  loginWith: {
    email: {
      verificationEmailSubject: 'Welcome 👋 Verify your email!'
    }
  }
});
```

### UI Building

- Utilize Amplify UI component library for rapid development.
- Leverage Figma-to-code generation and CRUD form-generation capabilities.

## Extending Amplify

- Add custom AWS resources using AWS CDK constructs.
- Connect to existing AWS resources seamlessly.

## Getting Started

To get started with AWS Amplify Gen 2:

1. Install the Amplify CLI.
2. Initialize your project with Amplify.
3. Define your data schema and authentication settings.
4. Use Amplify libraries and components in your frontend code.

For a detailed tutorial, visit the [Amplify Quickstart Guide](https://docs.amplify.aws/react/start/quickstart/).

## Documentation

For comprehensive documentation, visit [AWS Amplify Documentation](https://docs.amplify.aws/).
