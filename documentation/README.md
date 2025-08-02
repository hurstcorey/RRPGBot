# Gaming Application Documentation

Welcome to the comprehensive documentation for the gaming application built with AWS Amplify. This documentation provides detailed information about all public APIs, functions, components, and utilities.

## 📚 Documentation Structure

### Core Documentation
- **[API Documentation](./API_DOCUMENTATION.md)** - Complete GraphQL API reference with queries, mutations, subscriptions, and TypeScript types
- **[Component Documentation](./COMPONENT_DOCUMENTATION.md)** - Detailed React component documentation with props, examples, and usage patterns
- **[Utility Functions Documentation](./UTILITY_FUNCTIONS.md)** - Comprehensive guide to all utility functions and hooks

### Additional Resources
- **[DevOps Documentation](./devOps/)** - AWS Amplify setup and deployment guides
- **[TypeScript Types](./API_DOCUMENTATION.md#typescript-types)** - Complete type definitions and interfaces

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- AWS CLI configured
- AWS Amplify CLI installed

### Installation
```bash
# Install dependencies
npm install

# Configure Amplify
amplify configure

# Initialize the project
amplify init

# Push the backend
amplify push
```

### Running the Application
```bash
# Start development server
npm start

# Build for production
npm run build
```

## 🏗️ Architecture Overview

This gaming application is built using:

- **Frontend**: React with TypeScript
- **Backend**: AWS Amplify with GraphQL API
- **Database**: Amazon DynamoDB
- **Authentication**: AWS Cognito
- **Real-time**: GraphQL Subscriptions
- **UI Components**: AWS Amplify UI React

### Key Features
- **Item Management**: Create, read, update, and delete game items
- **Game Sessions**: Track player sessions and game progress
- **Real-time Updates**: Live updates via GraphQL subscriptions
- **Form Validation**: Comprehensive client-side validation
- **Authentication**: Secure user authentication and authorization
- **Responsive Design**: Mobile-first responsive UI

## 📖 API Reference

### GraphQL Operations

#### Queries
- `getItem(id: string)` - Retrieve a single item
- `listItems(filter?, limit?, nextToken?)` - List items with filtering and pagination

#### Mutations
- `createItem(input: CreateItemInput)` - Create a new item
- `updateItem(input: UpdateItemInput)` - Update an existing item
- `deleteItem(input: DeleteItemInput)` - Delete an item

#### Subscriptions
- `onCreateItem(filter?)` - Subscribe to item creation events
- `onUpdateItem(filter?)` - Subscribe to item update events
- `onDeleteItem(filter?)` - Subscribe to item deletion events

### TypeScript Types

The application includes comprehensive TypeScript definitions:

```typescript
// Core Item type
interface Item {
  id: string;
  name?: string;
  description?: string;
  level?: number;
  cost_amount?: number;
  rarity_id?: string;
  item_type_id?: string;
  magic_element_id?: string;
  character_attribute_id?: string;
  character_attribute_modifer?: number;
  cursed_id?: string;
  insert_timestamp_UTC?: string;
  update_timestamp_UTC?: string;
  createdAt: string;
  updatedAt: string;
}

// Input types for mutations
interface CreateItemInput {
  id?: string;
  name?: string;
  description?: string;
  level?: number;
  cost_amount?: number;
  rarity_id?: string;
  item_type_id?: string;
  magic_element_id?: string;
  character_attribute_id?: string;
  character_attribute_modifer?: number;
  cursed_id?: string;
  insert_timestamp_UTC?: string;
  update_timestamp_UTC?: string;
}
```

## 🧩 React Components

### Form Components
- **ItemCreateForm** - Create new game items
- **ItemUpdateForm** - Update existing game items
- **GameSessionCreateForm** - Create new game sessions
- **GameSessionUpdateForm** - Update existing game sessions

### Utility Components
- **studioTheme** - AWS Amplify UI theme configuration

### Component Features
- ✅ Form validation
- ✅ Error handling
- ✅ Loading states
- ✅ Real-time updates
- ✅ Customizable styling
- ✅ Accessibility support
- ✅ TypeScript support

## 🛠️ Utility Functions

### State Management
- `useStateMutationAction()` - State mutations with event dispatching
- `useNavigateAction()` - Navigation actions

### DataStore Operations
- `useDataStoreCreateAction()` - Create operations
- `useDataStoreUpdateAction()` - Update operations
- `useDataStoreDeleteAction()` - Delete operations
- `useDataStoreCollection()` - Collection queries
- `useDataStoreItem()` - Single item queries

### Authentication
- `useAuth()` - Authentication state management
- `useAuthSignOutAction()` - Sign out functionality

### Validation
- `validateField()` - Field validation
- `parseDateValidator()` - Date validation

### Date/Time
- `formatDate()` - Date formatting
- `formatTime()` - Time formatting
- `formatDateTime()` - DateTime formatting

### File Operations
- `processFile()` - File processing

### Styling
- `getOverrideProps()` - Component styling overrides
- `findChildOverrides()` - Child component overrides
- `getOverridesFromVariants()` - Variant-based styling

## 📝 Usage Examples

### Basic Item Management
```javascript
import { generateClient } from 'aws-amplify/api';
import { getItem, createItem, updateItem, deleteItem } from './graphql';

const client = generateClient();

// Create an item
const newItem = await client.graphql({
  query: createItem,
  variables: {
    input: {
      name: "Sword of Power",
      description: "A legendary sword",
      level: 10,
      cost_amount: 1000
    }
  }
});

// Get an item
const item = await client.graphql({
  query: getItem,
  variables: { id: "item-123" }
});

// Update an item
const updatedItem = await client.graphql({
  query: updateItem,
  variables: {
    input: {
      id: "item-123",
      level: 15
    }
  }
});

// Delete an item
await client.graphql({
  query: deleteItem,
  variables: { input: { id: "item-123" } }
});
```

### Using React Components
```jsx
import { ItemCreateForm, ItemUpdateForm } from './ui-components';

function MyComponent() {
  return (
    <div>
      <h2>Create New Item</h2>
      <ItemCreateForm
        onSuccess={(data) => console.log('Item created:', data)}
        onError={(error) => console.error('Error:', error)}
      />
      
      <h2>Update Item</h2>
      <ItemUpdateForm
        id="item-123"
        onSuccess={(data) => console.log('Item updated:', data)}
        onError={(error) => console.error('Error:', error)}
      />
    </div>
  );
}
```

### Real-time Subscriptions
```javascript
import { onCreateItem, onUpdateItem, onDeleteItem } from './graphql';

// Subscribe to item creation
const createSubscription = client.graphql({
  query: onCreateItem
}).subscribe({
  next: ({ data }) => {
    console.log('New item created:', data.onCreateItem);
  },
  error: (error) => console.error('Subscription error:', error)
});

// Subscribe to item updates
const updateSubscription = client.graphql({
  query: onUpdateItem
}).subscribe({
  next: ({ data }) => {
    console.log('Item updated:', data.onUpdateItem);
  }
});

// Subscribe to item deletions
const deleteSubscription = client.graphql({
  query: onDeleteItem
}).subscribe({
  next: ({ data }) => {
    console.log('Item deleted:', data.onDeleteItem);
  }
});

// Cleanup subscriptions
createSubscription.unsubscribe();
updateSubscription.unsubscribe();
deleteSubscription.unsubscribe();
```

### Advanced Filtering
```javascript
import { listItems } from './graphql';

// Filter by level range
const highLevelItems = await client.graphql({
  query: listItems,
  variables: {
    filter: {
      level: {
        ge: 10,
        le: 50
      }
    },
    limit: 20
  }
});

// Filter by rarity
const rareItems = await client.graphql({
  query: listItems,
  variables: {
    filter: {
      rarity_id: {
        eq: "rare"
      }
    }
  }
});

// Complex filtering
const complexFilter = await client.graphql({
  query: listItems,
  variables: {
    filter: {
      and: [
        { level: { ge: 10 } },
        { cost_amount: { le: 5000 } },
        {
          or: [
            { rarity_id: { eq: "rare" } },
            { rarity_id: { eq: "legendary" } }
          ]
        }
      ]
    }
  }
});
```

## 🔧 Configuration

### AWS Amplify Configuration
```javascript
// amplifyconfiguration.js
const amplifyConfig = {
  aws_project_region: "us-east-1",
  aws_appsync_graphqlEndpoint: "https://your-api-endpoint.appsync-api.us-east-1.amazonaws.com/graphql",
  aws_appsync_region: "us-east-1",
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
  aws_cognito_identity_pool_id: "us-east-1:your-identity-pool-id",
  aws_cognito_region: "us-east-1",
  aws_user_pools_id: "us-east-1_your-user-pool-id",
  aws_user_pools_web_client_id: "your-client-id"
};
```

### Environment Variables
```bash
# .env
REACT_APP_AWS_REGION=us-east-1
REACT_APP_APPSYNC_ENDPOINT=https://your-api-endpoint.appsync-api.us-east-1.amazonaws.com/graphql
REACT_APP_USER_POOLS_ID=us-east-1_your-user-pool-id
REACT_APP_USER_POOLS_WEB_CLIENT_ID=your-client-id
```

## 🧪 Testing

### Unit Tests
```bash
# Run unit tests
npm test

# Run tests with coverage
npm test -- --coverage
```

### Integration Tests
```bash
# Run integration tests
npm run test:integration
```

### E2E Tests
```bash
# Run end-to-end tests
npm run test:e2e
```

## 🚀 Deployment

### Development
```bash
# Deploy to development environment
amplify push

# Start development server
npm start
```

### Production
```bash
# Build for production
npm run build

# Deploy to production
amplify push --env prod
```

## 🔒 Security

### Authentication
- AWS Cognito User Pools for user authentication
- JWT tokens for API authorization
- Secure password policies
- Multi-factor authentication support

### Authorization
- GraphQL schema-level authorization
- Field-level access control
- Role-based permissions
- API key management

### Data Protection
- Data encryption at rest
- Data encryption in transit
- Secure API endpoints
- Input validation and sanitization

## 📊 Monitoring and Logging

### CloudWatch Integration
- API Gateway logs
- DynamoDB access logs
- Lambda function logs
- Application performance monitoring

### Error Tracking
- Real-time error monitoring
- Performance metrics
- User behavior analytics
- Custom error reporting

## 🤝 Contributing

### Development Setup
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Update documentation
6. Submit a pull request

### Code Standards
- Follow TypeScript best practices
- Use ESLint and Prettier
- Write comprehensive tests
- Update documentation for new features
- Follow the existing code style

### Pull Request Process
1. Ensure all tests pass
2. Update documentation if needed
3. Provide clear commit messages
4. Include screenshots for UI changes
5. Describe the changes in detail

## 📞 Support

### Getting Help
- **Documentation**: Check the comprehensive documentation above
- **Issues**: Create an issue in the repository
- **Discussions**: Use GitHub Discussions for questions
- **Email**: Contact the development team

### Common Issues
- **Authentication Problems**: Check AWS Cognito configuration
- **API Errors**: Verify GraphQL schema and resolvers
- **Build Issues**: Ensure all dependencies are installed
- **Deployment Problems**: Check AWS Amplify CLI configuration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- AWS Amplify team for the excellent framework
- React team for the amazing library
- GraphQL community for the powerful query language
- All contributors who have helped improve this project

---

**Last Updated**: January 2024  
**Version**: 1.0.0  
**Maintainers**: Development Team

For the most up-to-date information, please refer to the individual documentation files or contact the development team.