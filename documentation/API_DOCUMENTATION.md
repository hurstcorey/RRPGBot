# API Documentation

This document provides comprehensive documentation for all public APIs, functions, and components in the gaming application.

## Table of Contents

1. [GraphQL API](#graphql-api)
2. [TypeScript Types](#typescript-types)
3. [React Components](#react-components)
4. [Utility Functions](#utility-functions)
5. [Usage Examples](#usage-examples)

---

## GraphQL API

### Queries

#### `getItem`
Retrieves a single item by its ID.

**Parameters:**
- `id: string` (required) - The unique identifier of the item

**Returns:**
```typescript
{
  id: string,
  name?: string,
  description?: string,
  level?: number,
  cost_amount?: number,
  rarity_id?: string,
  item_type_id?: string,
  magic_element_id?: string,
  character_attribute_id?: string,
  character_attribute_modifer?: number,
  cursed_id?: string,
  insert_timestamp_UTC?: string,
  update_timestamp_UTC?: string,
  createdAt: string,
  updatedAt: string
}
```

**Example:**
```typescript
import { getItem } from '../graphql/queries';
import { generateClient } from 'aws-amplify/api';

const client = generateClient();
const result = await client.graphql({
  query: getItem,
  variables: { id: "item-123" }
});
```

#### `listItems`
Retrieves a list of items with optional filtering and pagination.

**Parameters:**
- `filter?: ModelItemFilterInput` (optional) - Filter criteria for items
- `limit?: number` (optional) - Maximum number of items to return
- `nextToken?: string` (optional) - Pagination token for next page

**Returns:**
```typescript
{
  items: Array<Item>,
  nextToken?: string
}
```

**Example:**
```typescript
import { listItems } from '../graphql/queries';

const result = await client.graphql({
  query: listItems,
  variables: {
    filter: { level: { ge: 5 } },
    limit: 10
  }
});
```

### Mutations

#### `createItem`
Creates a new item in the database.

**Parameters:**
- `input: CreateItemInput` (required) - Item data to create
- `condition?: ModelItemConditionInput` (optional) - Conditional creation criteria

**Input Type:**
```typescript
{
  id?: string,
  name?: string,
  description?: string,
  level?: number,
  cost_amount?: number,
  rarity_id?: string,
  item_type_id?: string,
  magic_element_id?: string,
  character_attribute_id?: string,
  character_attribute_modifer?: number,
  cursed_id?: string,
  insert_timestamp_UTC?: string,
  update_timestamp_UTC?: string
}
```

**Example:**
```typescript
import { createItem } from '../graphql/mutations';

const result = await client.graphql({
  query: createItem,
  variables: {
    input: {
      name: "Sword of Power",
      description: "A legendary sword",
      level: 10,
      cost_amount: 1000,
      rarity_id: "rare"
    }
  }
});
```

#### `updateItem`
Updates an existing item in the database.

**Parameters:**
- `input: UpdateItemInput` (required) - Item data to update (must include id)
- `condition?: ModelItemConditionInput` (optional) - Conditional update criteria

**Example:**
```typescript
import { updateItem } from '../graphql/mutations';

const result = await client.graphql({
  query: updateItem,
  variables: {
    input: {
      id: "item-123",
      level: 15,
      cost_amount: 1500
    }
  }
});
```

#### `deleteItem`
Deletes an item from the database.

**Parameters:**
- `input: DeleteItemInput` (required) - Item ID to delete
- `condition?: ModelItemConditionInput` (optional) - Conditional deletion criteria

**Example:**
```typescript
import { deleteItem } from '../graphql/mutations';

const result = await client.graphql({
  query: deleteItem,
  variables: {
    input: { id: "item-123" }
  }
});
```

### Subscriptions

#### `onCreateItem`
Subscribes to item creation events.

**Parameters:**
- `filter?: ModelSubscriptionItemFilterInput` (optional) - Filter for specific events

**Example:**
```typescript
import { onCreateItem } from '../graphql/subscriptions';

const subscription = client.graphql({
  query: onCreateItem,
  variables: {
    filter: { level: { ge: 10 } }
  }
}).subscribe({
  next: ({ data }) => {
    console.log('New high-level item created:', data.onCreateItem);
  },
  error: (error) => console.error('Subscription error:', error)
});
```

#### `onUpdateItem`
Subscribes to item update events.

**Example:**
```typescript
import { onUpdateItem } from '../graphql/subscriptions';

const subscription = client.graphql({
  query: onUpdateItem
}).subscribe({
  next: ({ data }) => {
    console.log('Item updated:', data.onUpdateItem);
  }
});
```

#### `onDeleteItem`
Subscribes to item deletion events.

**Example:**
```typescript
import { onDeleteItem } from '../graphql/subscriptions';

const subscription = client.graphql({
  query: onDeleteItem
}).subscribe({
  next: ({ data }) => {
    console.log('Item deleted:', data.onDeleteItem);
  }
});
```

---

## TypeScript Types

### Core Types

#### `Item`
Represents a game item with all its properties.

```typescript
{
  __typename: "Item",
  id: string,
  name?: string,
  description?: string,
  level?: number,
  cost_amount?: number,
  rarity_id?: string,
  item_type_id?: string,
  magic_element_id?: string,
  character_attribute_id?: string,
  character_attribute_modifer?: number,
  cursed_id?: string,
  insert_timestamp_UTC?: string,
  update_timestamp_UTC?: string,
  createdAt: string,
  updatedAt: string
}
```

#### `CreateItemInput`
Input type for creating new items.

```typescript
{
  id?: string,
  name?: string,
  description?: string,
  level?: number,
  cost_amount?: number,
  rarity_id?: string,
  item_type_id?: string,
  magic_element_id?: string,
  character_attribute_id?: string,
  character_attribute_modifer?: number,
  cursed_id?: string,
  insert_timestamp_UTC?: string,
  update_timestamp_UTC?: string
}
```

#### `UpdateItemInput`
Input type for updating existing items.

```typescript
{
  id: string, // Required
  name?: string,
  description?: string,
  level?: number,
  cost_amount?: number,
  rarity_id?: string,
  item_type_id?: string,
  magic_element_id?: string,
  character_attribute_id?: string,
  character_attribute_modifer?: number,
  cursed_id?: string,
  insert_timestamp_UTC?: string,
  update_timestamp_UTC?: string
}
```

#### `DeleteItemInput`
Input type for deleting items.

```typescript
{
  id: string
}
```

### Filter Types

#### `ModelItemFilterInput`
Filter criteria for querying items.

```typescript
{
  id?: ModelIDInput,
  name?: ModelStringInput,
  description?: ModelStringInput,
  level?: ModelIntInput,
  cost_amount?: ModelIntInput,
  rarity_id?: ModelStringInput,
  item_type_id?: ModelStringInput,
  magic_element_id?: ModelStringInput,
  character_attribute_id?: ModelStringInput,
  character_attribute_modifer?: ModelIntInput,
  cursed_id?: ModelStringInput,
  insert_timestamp_UTC?: ModelStringInput,
  update_timestamp_UTC?: ModelStringInput,
  and?: Array<ModelItemFilterInput>,
  or?: Array<ModelItemFilterInput>,
  not?: ModelItemFilterInput
}
```

#### `ModelStringInput`
String comparison operators for filtering.

```typescript
{
  ne?: string,        // not equal
  eq?: string,        // equal
  le?: string,        // less than or equal
  lt?: string,        // less than
  ge?: string,        // greater than or equal
  gt?: string,        // greater than
  contains?: string,  // contains substring
  notContains?: string, // does not contain
  between?: Array<string>, // between values
  beginsWith?: string, // starts with
  attributeExists?: boolean,
  attributeType?: ModelAttributeTypes,
  size?: ModelSizeInput
}
```

#### `ModelIntInput`
Integer comparison operators for filtering.

```typescript
{
  ne?: number,        // not equal
  eq?: number,        // equal
  le?: number,        // less than or equal
  lt?: number,        // less than
  ge?: number,        // greater than or equal
  gt?: number,        // greater than
  between?: Array<number>, // between values
  attributeExists?: boolean,
  attributeType?: ModelAttributeTypes
}
```

### Enum Types

#### `ModelAttributeTypes`
Supported attribute types for DynamoDB.

```typescript
enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null"
}
```

---

## React Components

### ItemCreateForm

A React component for creating new items with form validation and AWS Amplify integration.

**Props:**
```typescript
{
  clearOnSuccess?: boolean,    // Default: true
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void,
  onSubmit?: (data: any) => void,
  onValidate?: (data: any) => boolean,
  onChange?: (data: any) => void,
  overrides?: object,
  ...rest
}
```

**Features:**
- Form validation for all fields
- Automatic state management
- Error handling and display
- Success callbacks
- Customizable styling through overrides
- Integration with AWS Amplify GraphQL API

**Example:**
```jsx
import { ItemCreateForm } from './ui-components';

function MyComponent() {
  const handleSuccess = (data) => {
    console.log('Item created:', data);
  };

  const handleError = (error) => {
    console.error('Creation failed:', error);
  };

  return (
    <ItemCreateForm
      onSuccess={handleSuccess}
      onError={handleError}
      clearOnSuccess={true}
    />
  );
}
```

### ItemUpdateForm

A React component for updating existing items with form validation and AWS Amplify integration.

**Props:**
```typescript
{
  id: string,                  // Required: ID of item to update
  clearOnSuccess?: boolean,    // Default: true
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void,
  onSubmit?: (data: any) => void,
  onValidate?: (data: any) => boolean,
  onChange?: (data: any) => void,
  overrides?: object,
  ...rest
}
```

**Features:**
- Pre-populates form with existing item data
- Form validation for all fields
- Automatic state management
- Error handling and display
- Success callbacks
- Customizable styling through overrides

**Example:**
```jsx
import { ItemUpdateForm } from './ui-components';

function MyComponent() {
  return (
    <ItemUpdateForm
      id="item-123"
      onSuccess={(data) => console.log('Item updated:', data)}
      onError={(error) => console.error('Update failed:', error)}
    />
  );
}
```

### GameSessionCreateForm

A React component for creating new game sessions.

**Props:**
```typescript
{
  clearOnSuccess?: boolean,    // Default: true
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void,
  onSubmit?: (data: any) => void,
  onValidate?: (data: any) => boolean,
  onChange?: (data: any) => void,
  overrides?: object,
  ...rest
}
```

**Form Fields:**
- `user_id` (required)
- `character_id` (required)
- `campign_id` (optional)
- `adventure_id` (required)
- `villian_id` (optional)
- `setting_id` (required)
- `play_time_sec` (optional)
- `play_time_start_utc` (optional)
- `play_time_end_utc` (optional)
- `insert_user_id` (optional)
- `insert_dt_utc` (optional)
- `update_user_id` (optional)
- `update_dt_utc` (optional)

### GameSessionUpdateForm

A React component for updating existing game sessions.

**Props:**
```typescript
{
  id: string,                  // Required: ID of game session to update
  clearOnSuccess?: boolean,    // Default: true
  onSuccess?: (data: any) => void,
  onError?: (error: any) => void,
  onSubmit?: (data: any) => void,
  onValidate?: (data: any) => boolean,
  onChange?: (data: any) => void,
  overrides?: object,
  ...rest
}
```

---

## Utility Functions

### State Management

#### `useStateMutationAction`
Custom React hook for state mutations with event dispatching.

**Parameters:**
- `initialState: any` - Initial state value

**Returns:**
- `[state, setState]` - State and setter function

**Example:**
```javascript
import { useStateMutationAction } from './utils';

function MyComponent() {
  const [count, setCount] = useStateMutationAction(0);
  
  const increment = () => {
    setCount(count + 1); // Dispatches mutation events automatically
  };
}
```

#### `useNavigateAction`
Custom React hook for navigation actions.

**Parameters:**
```typescript
{
  type: "url" | "anchor" | "reload",
  url?: string,
  anchor?: string,
  target?: string
}
```

**Example:**
```javascript
import { useNavigateAction } from './utils';

function MyComponent() {
  const navigate = useNavigateAction({
    type: "url",
    url: "/dashboard",
    target: "_self"
  });
  
  return <button onClick={navigate}>Go to Dashboard</button>;
}
```

### DataStore Utilities

#### `useDataStoreCreateAction`
Custom hook for DataStore create operations.

**Parameters:**
```typescript
{
  model: string,
  fields: object,
  schema: object
}
```

#### `useDataStoreUpdateAction`
Custom hook for DataStore update operations.

**Parameters:**
```typescript
{
  fields: object,
  id: string,
  model: string,
  schema: object
}
```

#### `useDataStoreDeleteAction`
Custom hook for DataStore delete operations.

**Parameters:**
```typescript
{
  model: string,
  id: string
}
```

#### `useDataStoreCollection`
Custom hook for DataStore collection queries.

**Parameters:**
```typescript
{
  model: string,
  criteria?: object,
  pagination?: object
}
```

#### `useDataStoreItem`
Custom hook for DataStore single item queries.

**Parameters:**
```typescript
{
  model: string,
  id: string
}
```

### Authentication Utilities

#### `useAuth`
Custom hook for authentication state management.

**Returns:**
```typescript
{
  user: any,
  isAuthenticated: boolean,
  isLoading: boolean,
  signOut: () => Promise<void>
}
```

#### `useAuthSignOutAction`
Custom hook for sign out functionality.

**Parameters:**
```typescript
{
  global?: boolean
}
```

### Validation Utilities

#### `validateField`
Validates a field value against validation rules.

**Parameters:**
- `value: any` - Value to validate
- `validations: Array<ValidationRule>` - Validation rules

**Returns:**
- `string | null` - Error message or null if valid

**Example:**
```javascript
import { validateField } from './utils';

const error = validateField("test@example.com", [
  { type: "Required" },
  { type: "Email" }
]);

if (error) {
  console.log('Validation error:', error);
}
```

### Date/Time Utilities

#### `formatDate`
Formats a date according to specified format.

**Parameters:**
- `date: Date | string` - Date to format
- `dateFormat: string` - Format string

**Example:**
```javascript
import { formatDate } from './utils';

const formatted = formatDate(new Date(), "YYYY-MM-DD");
console.log(formatted); // "2024-01-15"
```

#### `formatTime`
Formats a time according to specified format.

**Parameters:**
- `time: Date | string` - Time to format
- `timeFormat: string` - Format string

#### `formatDateTime`
Formats a datetime according to specified format.

**Parameters:**
- `dateTimeStr: string` - DateTime string
- `dateTimeFormat: string` - Format string

### File Utilities

#### `processFile`
Processes a file for upload or other operations.

**Parameters:**
```typescript
{
  file: File
}
```

### Override Utilities

#### `getOverrideProps`
Gets override props for a component hierarchy.

**Parameters:**
- `overrides: object` - Override configuration
- `elementHierarchy: string` - Component hierarchy path

#### `findChildOverrides`
Finds child overrides for a component.

**Parameters:**
- `overrides: object` - Override configuration
- `elementHierarchy: string` - Component hierarchy path

#### `getOverridesFromVariants`
Gets overrides from component variants.

**Parameters:**
- `variants: object` - Component variants
- `props: object` - Component props

---

## Usage Examples

### Complete Item Management Example

```javascript
import React, { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getItem, listItems, createItem, updateItem, deleteItem } from './graphql';
import { ItemCreateForm, ItemUpdateForm } from './ui-components';

const client = generateClient();

function ItemManager() {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  // Fetch all items
  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const result = await client.graphql({
        query: listItems,
        variables: { limit: 100 }
      });
      setItems(result.data.listItems.items);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  // Get single item
  const fetchItem = async (id) => {
    try {
      const result = await client.graphql({
        query: getItem,
        variables: { id }
      });
      return result.data.getItem;
    } catch (error) {
      console.error('Error fetching item:', error);
    }
  };

  // Create item
  const handleCreateSuccess = (data) => {
    console.log('Item created:', data);
    fetchItems(); // Refresh list
  };

  // Update item
  const handleUpdateSuccess = (data) => {
    console.log('Item updated:', data);
    fetchItems(); // Refresh list
  };

  // Delete item
  const handleDelete = async (id) => {
    try {
      await client.graphql({
        query: deleteItem,
        variables: { input: { id } }
      });
      console.log('Item deleted');
      fetchItems(); // Refresh list
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
      <h1>Item Manager</h1>
      
      {/* Create Form */}
      <div>
        <h2>Create New Item</h2>
        <ItemCreateForm
          onSuccess={handleCreateSuccess}
          onError={(error) => console.error('Create error:', error)}
        />
      </div>

      {/* Update Form */}
      {selectedItem && (
        <div>
          <h2>Update Item</h2>
          <ItemUpdateForm
            id={selectedItem.id}
            onSuccess={handleUpdateSuccess}
            onError={(error) => console.error('Update error:', error)}
          />
        </div>
      )}

      {/* Items List */}
      <div>
        <h2>Items</h2>
        {items.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p>Level: {item.level}</p>
            <p>Cost: {item.cost_amount}</p>
            <button onClick={() => setSelectedItem(item)}>Edit</button>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemManager;
```

### Real-time Updates with Subscriptions

```javascript
import React, { useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { onCreateItem, onUpdateItem, onDeleteItem } from './graphql';

const client = generateClient();

function ItemSubscriptionManager() {
  useEffect(() => {
    // Subscribe to item creation
    const createSubscription = client.graphql({
      query: onCreateItem
    }).subscribe({
      next: ({ data }) => {
        console.log('New item created:', data.onCreateItem);
        // Update UI or trigger refresh
      },
      error: (error) => console.error('Create subscription error:', error)
    });

    // Subscribe to item updates
    const updateSubscription = client.graphql({
      query: onUpdateItem
    }).subscribe({
      next: ({ data }) => {
        console.log('Item updated:', data.onUpdateItem);
        // Update UI or trigger refresh
      },
      error: (error) => console.error('Update subscription error:', error)
    });

    // Subscribe to item deletions
    const deleteSubscription = client.graphql({
      query: onDeleteItem
    }).subscribe({
      next: ({ data }) => {
        console.log('Item deleted:', data.onDeleteItem);
        // Update UI or trigger refresh
      },
      error: (error) => console.error('Delete subscription error:', error)
    });

    // Cleanup subscriptions
    return () => {
      createSubscription.unsubscribe();
      updateSubscription.unsubscribe();
      deleteSubscription.unsubscribe();
    };
  }, []);

  return <div>Listening for real-time item updates...</div>;
}

export default ItemSubscriptionManager;
```

### Advanced Filtering Example

```javascript
import React, { useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listItems } from './graphql';

const client = generateClient();

function ItemFilter() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState({});

  const applyFilter = async (filterCriteria) => {
    try {
      const result = await client.graphql({
        query: listItems,
        variables: {
          filter: filterCriteria,
          limit: 50
        }
      });
      setItems(result.data.listItems.items);
    } catch (error) {
      console.error('Error filtering items:', error);
    }
  };

  const filterByLevel = (minLevel, maxLevel) => {
    const filterCriteria = {
      level: {
        ge: minLevel,
        le: maxLevel
      }
    };
    applyFilter(filterCriteria);
  };

  const filterByRarity = (rarityId) => {
    const filterCriteria = {
      rarity_id: {
        eq: rarityId
      }
    };
    applyFilter(filterCriteria);
  };

  const filterByCost = (minCost, maxCost) => {
    const filterCriteria = {
      cost_amount: {
        ge: minCost,
        le: maxCost
      }
    };
    applyFilter(filterCriteria);
  };

  const complexFilter = () => {
    const filterCriteria = {
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
    };
    applyFilter(filterCriteria);
  };

  return (
    <div>
      <h2>Item Filter</h2>
      
      <div>
        <button onClick={() => filterByLevel(1, 10)}>Level 1-10</button>
        <button onClick={() => filterByLevel(11, 20)}>Level 11-20</button>
        <button onClick={() => filterByRarity("rare")}>Rare Items</button>
        <button onClick={() => filterByCost(0, 1000)}>Under 1000</button>
        <button onClick={complexFilter}>Complex Filter</button>
      </div>

      <div>
        {items.map(item => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Level: {item.level}, Cost: {item.cost_amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemFilter;
```

---

## Error Handling

### Common Error Patterns

1. **Authentication Errors**
   ```javascript
   try {
     const result = await client.graphql({ query: createItem, variables: { input } });
   } catch (error) {
     if (error.errors?.[0]?.message?.includes('Unauthorized')) {
       // Handle authentication error
       console.log('Please log in to create items');
     }
   }
   ```

2. **Validation Errors**
   ```javascript
   try {
     const result = await client.graphql({ query: createItem, variables: { input } });
   } catch (error) {
     if (error.errors?.[0]?.message?.includes('Validation')) {
       // Handle validation error
       console.log('Please check your input data');
     }
   }
   ```

3. **Network Errors**
   ```javascript
   try {
     const result = await client.graphql({ query: listItems });
   } catch (error) {
     if (error.message?.includes('Network')) {
       // Handle network error
       console.log('Please check your internet connection');
     }
   }
   ```

### Best Practices

1. **Always handle errors** in async operations
2. **Use try-catch blocks** for all GraphQL operations
3. **Provide user-friendly error messages**
4. **Implement retry logic** for transient failures
5. **Log errors** for debugging purposes
6. **Validate input data** before sending to API
7. **Use loading states** to improve user experience

---

## Performance Considerations

1. **Use pagination** for large datasets
2. **Implement caching** for frequently accessed data
3. **Optimize queries** by selecting only needed fields
4. **Use subscriptions** sparingly to avoid excessive real-time updates
5. **Implement debouncing** for search and filter operations
6. **Use React.memo** for expensive components
7. **Lazy load** components and data when possible

---

## Security Considerations

1. **Validate all input data** on both client and server
2. **Use proper authentication** for all operations
3. **Implement authorization** checks for sensitive operations
4. **Sanitize user input** to prevent injection attacks
5. **Use HTTPS** for all API communications
6. **Implement rate limiting** to prevent abuse
7. **Log security events** for monitoring

---

This documentation provides a comprehensive guide to all public APIs, functions, and components in the gaming application. For additional support or questions, please refer to the AWS Amplify documentation or contact the development team.