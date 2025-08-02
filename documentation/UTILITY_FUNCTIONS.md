# Utility Functions Documentation

This document provides comprehensive documentation for all utility functions in the gaming application.

## Table of Contents

1. [State Management Utilities](#state-management-utilities)
2. [DataStore Utilities](#datastore-utilities)
3. [Authentication Utilities](#authentication-utilities)
4. [Validation Utilities](#validation-utilities)
5. [Date/Time Utilities](#datetime-utilities)
6. [File Utilities](#file-utilities)
7. [Override Utilities](#override-utilities)
8. [Event Constants](#event-constants)

---

## State Management Utilities

### `useStateMutationAction`

A custom React hook for state mutations with automatic event dispatching to the Amplify Hub.

**Signature:**
```typescript
function useStateMutationAction<T>(initialState: T): [T, (newState: T) => void]
```

**Parameters:**
- `initialState: T` - The initial state value

**Returns:**
- `[state, setState]` - A tuple containing the current state and a setter function

**Features:**
- Automatically dispatches state mutation events to Amplify Hub
- Provides both started and finished event notifications
- Maintains React state management patterns
- Type-safe with TypeScript support

**Example:**
```javascript
import { useStateMutationAction } from './utils';

function MyComponent() {
  const [count, setCount] = useStateMutationAction(0);
  
  const increment = () => {
    setCount(count + 1); // Automatically dispatches mutation events
  };
  
  const decrement = () => {
    setCount(count - 1); // Automatically dispatches mutation events
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
```

**Event Dispatching:**
The hook automatically dispatches the following events to Amplify Hub:
- `ACTION_STATE_MUTATION_STARTED` - When state change begins
- `ACTION_STATE_MUTATION_FINISHED` - When state change completes

### `useNavigateAction`

A custom React hook for navigation actions with support for different navigation types.

**Signature:**
```typescript
function useNavigateAction(options: {
  type: "url" | "anchor" | "reload";
  url?: string;
  anchor?: string;
  target?: string;
}): () => void
```

**Parameters:**
- `options.type: "url" | "anchor" | "reload"` - Navigation type
- `options.url?: string` - URL for url navigation type
- `options.anchor?: string` - Anchor for anchor navigation type
- `options.target?: string` - Target window for url navigation type

**Returns:**
- `() => void` - A function that executes the navigation action

**Navigation Types:**
1. **"url"** - Navigate to a URL (opens in new tab/window or same window)
2. **"anchor"** - Navigate to an anchor within the current page
3. **"reload"** - Reload the current page

**Example:**
```javascript
import { useNavigateAction } from './utils';

function MyComponent() {
  // Navigate to external URL
  const navigateToExternal = useNavigateAction({
    type: "url",
    url: "https://example.com",
    target: "_blank"
  });
  
  // Navigate to anchor
  const navigateToAnchor = useNavigateAction({
    type: "anchor",
    anchor: "section-1"
  });
  
  // Reload page
  const reloadPage = useNavigateAction({
    type: "reload"
  });
  
  return (
    <div>
      <button onClick={navigateToExternal}>Go to External Site</button>
      <button onClick={navigateToAnchor}>Go to Section</button>
      <button onClick={reloadPage}>Reload Page</button>
    </div>
  );
}
```

---

## DataStore Utilities

### `useDataStoreCreateAction`

A custom hook for DataStore create operations with automatic event dispatching.

**Signature:**
```typescript
function useDataStoreCreateAction<T>({
  model,
  fields: initialFields,
  schema
}: {
  model: string;
  fields: object;
  schema: object;
}): () => Promise<T>
```

**Parameters:**
- `model: string` - The DataStore model name
- `fields: object` - Initial field values for the new record
- `schema: object` - The model schema definition

**Returns:**
- `() => Promise<T>` - A function that creates a new record

**Features:**
- Automatically dispatches DataStore create events
- Handles validation and error states
- Provides type-safe operations
- Integrates with Amplify Hub for event tracking

**Example:**
```javascript
import { useDataStoreCreateAction } from './utils';

function MyComponent() {
  const createItem = useDataStoreCreateAction({
    model: "Item",
    fields: {
      name: "",
      description: "",
      level: 0
    },
    schema: itemSchema
  });
  
  const handleCreate = async () => {
    try {
      const newItem = await createItem();
      console.log('Item created:', newItem);
    } catch (error) {
      console.error('Create failed:', error);
    }
  };
  
  return <button onClick={handleCreate}>Create Item</button>;
}
```

### `useDataStoreUpdateAction`

A custom hook for DataStore update operations.

**Signature:**
```typescript
function useDataStoreUpdateAction<T>({
  fields: initialFields,
  id,
  model,
  schema
}: {
  fields: object;
  id: string;
  model: string;
  schema: object;
}): () => Promise<T>
```

**Parameters:**
- `fields: object` - Field values to update
- `id: string` - The ID of the record to update
- `model: string` - The DataStore model name
- `schema: object` - The model schema definition

**Returns:**
- `() => Promise<T>` - A function that updates the record

**Example:**
```javascript
import { useDataStoreUpdateAction } from './utils';

function MyComponent({ itemId }) {
  const updateItem = useDataStoreUpdateAction({
    fields: {
      name: "",
      level: 0
    },
    id: itemId,
    model: "Item",
    schema: itemSchema
  });
  
  const handleUpdate = async () => {
    try {
      const updatedItem = await updateItem();
      console.log('Item updated:', updatedItem);
    } catch (error) {
      console.error('Update failed:', error);
    }
  };
  
  return <button onClick={handleUpdate}>Update Item</button>;
}
```

### `useDataStoreDeleteAction`

A custom hook for DataStore delete operations.

**Signature:**
```typescript
function useDataStoreDeleteAction({
  model,
  id
}: {
  model: string;
  id: string;
}): () => Promise<void>
```

**Parameters:**
- `model: string` - The DataStore model name
- `id: string` - The ID of the record to delete

**Returns:**
- `() => Promise<void>` - A function that deletes the record

**Example:**
```javascript
import { useDataStoreDeleteAction } from './utils';

function MyComponent({ itemId }) {
  const deleteItem = useDataStoreDeleteAction({
    model: "Item",
    id: itemId
  });
  
  const handleDelete = async () => {
    try {
      await deleteItem();
      console.log('Item deleted');
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };
  
  return <button onClick={handleDelete}>Delete Item</button>;
}
```

### `useDataStoreCollection`

A custom hook for DataStore collection queries.

**Signature:**
```typescript
function useDataStoreCollection<T>({
  model,
  criteria,
  pagination
}: {
  model: string;
  criteria?: object;
  pagination?: object;
}): [T[], () => void]
```

**Parameters:**
- `model: string` - The DataStore model name
- `criteria?: object` - Query criteria for filtering
- `pagination?: object` - Pagination options

**Returns:**
- `[items, fetch]` - A tuple containing the items array and a fetch function

**Example:**
```javascript
import { useDataStoreCollection } from './utils';

function MyComponent() {
  const [items, fetchItems] = useDataStoreCollection({
    model: "Item",
    criteria: { level: { ge: 10 } },
    pagination: { limit: 20 }
  });
  
  useEffect(() => {
    fetchItems();
  }, []);
  
  return (
    <div>
      {items.map(item => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}
```

### `useDataStoreItem`

A custom hook for DataStore single item queries.

**Signature:**
```typescript
function useDataStoreItem<T>({
  model,
  id
}: {
  model: string;
  id: string;
}): [T | null, () => void]
```

**Parameters:**
- `model: string` - The DataStore model name
- `id: string` - The ID of the record to fetch

**Returns:**
- `[item, fetch]` - A tuple containing the item and a fetch function

**Example:**
```javascript
import { useDataStoreItem } from './utils';

function MyComponent({ itemId }) {
  const [item, fetchItem] = useDataStoreItem({
    model: "Item",
    id: itemId
  });
  
  useEffect(() => {
    fetchItem();
  }, [itemId]);
  
  if (!item) return <div>Loading...</div>;
  
  return <div>{item.name}</div>;
}
```

### `createDataStorePredicate`

Creates a DataStore predicate for complex queries.

**Signature:**
```typescript
function createDataStorePredicate(predicateObject: object): Predicate
```

**Parameters:**
- `predicateObject: object` - The predicate configuration object

**Returns:**
- `Predicate` - A DataStore predicate object

**Example:**
```javascript
import { createDataStorePredicate } from './utils';

const predicate = createDataStorePredicate({
  level: { ge: 10 },
  rarity_id: { eq: "rare" }
});

// Use with DataStore query
const items = await DataStore.query(Item, predicate);
```

---

## Authentication Utilities

### `useAuth`

A custom hook for authentication state management.

**Signature:**
```typescript
function useAuth(): {
  user: any;
  isAuthenticated: boolean;
  isLoading: boolean;
  signOut: () => Promise<void>;
}
```

**Returns:**
- `user: any` - The current authenticated user
- `isAuthenticated: boolean` - Whether the user is authenticated
- `isLoading: boolean` - Whether authentication state is loading
- `signOut: () => Promise<void>` - Function to sign out the user

**Features:**
- Real-time authentication state tracking
- Automatic user attribute fetching
- Loading state management
- Sign out functionality

**Example:**
```javascript
import { useAuth } from './utils';

function MyComponent() {
  const { user, isAuthenticated, isLoading, signOut } = useAuth();
  
  if (isLoading) {
    return <div>Loading authentication...</div>;
  }
  
  if (!isAuthenticated) {
    return <div>Please log in</div>;
  }
  
  return (
    <div>
      <p>Welcome, {user.username}!</p>
      <button onClick={signOut}>Sign Out</button>
    </div>
  );
}
```

### `useAuthSignOutAction`

A custom hook for sign out functionality with event dispatching.

**Signature:**
```typescript
function useAuthSignOutAction(options?: {
  global?: boolean;
}): () => Promise<void>
```

**Parameters:**
- `options.global?: boolean` - Whether to sign out globally

**Returns:**
- `() => Promise<void>` - A function that signs out the user

**Features:**
- Automatically dispatches sign out events
- Supports global sign out
- Integrates with Amplify Hub

**Example:**
```javascript
import { useAuthSignOutAction } from './utils';

function MyComponent() {
  const signOut = useAuthSignOutAction({ global: true });
  
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log('Signed out successfully');
    } catch (error) {
      console.error('Sign out failed:', error);
    }
  };
  
  return <button onClick={handleSignOut}>Sign Out</button>;
}
```

---

## Validation Utilities

### `validateField`

Validates a field value against validation rules.

**Signature:**
```typescript
function validateField(
  value: any,
  validations: Array<ValidationRule>
): string | null
```

**Parameters:**
- `value: any` - The value to validate
- `validations: Array<ValidationRule>` - Array of validation rules

**Returns:**
- `string | null` - Error message if validation fails, null if valid

**Validation Rule Types:**
- `{ type: "Required" }` - Field is required
- `{ type: "Email" }` - Valid email format
- `{ type: "Phone" }` - Valid phone number format
- `{ type: "URL" }` - Valid URL format
- `{ type: "Number" }` - Numeric value
- `{ type: "Integer" }` - Integer value
- `{ type: "Float" }` - Float value
- `{ type: "Date" }` - Valid date format
- `{ type: "Time" }` - Valid time format
- `{ type: "DateTime" }` - Valid datetime format
- `{ type: "JSON" }` - Valid JSON format
- `{ type: "IP" }` - Valid IP address format
- `{ type: "MinLength", value: number }` - Minimum length
- `{ type: "MaxLength", value: number }` - Maximum length
- `{ type: "Min", value: number }` - Minimum value
- `{ type: "Max", value: number }` - Maximum value
- `{ type: "Pattern", value: string }` - Regex pattern match

**Example:**
```javascript
import { validateField } from './utils';

// Validate email
const emailError = validateField("test@example.com", [
  { type: "Required" },
  { type: "Email" }
]);

// Validate number with range
const numberError = validateField(25, [
  { type: "Required" },
  { type: "Number" },
  { type: "Min", value: 0 },
  { type: "Max", value: 100 }
]);

// Validate string with length
const stringError = validateField("hello", [
  { type: "Required" },
  { type: "MinLength", value: 3 },
  { type: "MaxLength", value: 50 }
]);

if (emailError) console.log('Email error:', emailError);
if (numberError) console.log('Number error:', numberError);
if (stringError) console.log('String error:', stringError);
```

### `parseDateValidator`

Parses date validation rules for date fields.

**Signature:**
```typescript
function parseDateValidator(dateValidator: any): any
```

**Parameters:**
- `dateValidator: any` - The date validator configuration

**Returns:**
- `any` - Parsed date validator

**Example:**
```javascript
import { parseDateValidator } from './utils';

const dateValidator = parseDateValidator({
  type: "Date",
  format: "YYYY-MM-DD"
});
```

---

## Date/Time Utilities

### `formatDate`

Formats a date according to the specified format.

**Signature:**
```typescript
function formatDate(date: Date | string, dateFormat: string): string
```

**Parameters:**
- `date: Date | string` - The date to format
- `dateFormat: string` - The format string

**Returns:**
- `string` - The formatted date string

**Supported Formats:**
- `YYYY` - 4-digit year
- `YY` - 2-digit year
- `MM` - 2-digit month
- `M` - Month number
- `DD` - 2-digit day
- `D` - Day number
- `HH` - 2-digit hour (24-hour)
- `H` - Hour number (24-hour)
- `hh` - 2-digit hour (12-hour)
- `h` - Hour number (12-hour)
- `mm` - 2-digit minute
- `m` - Minute number
- `ss` - 2-digit second
- `s` - Second number
- `A` - AM/PM
- `a` - am/pm

**Example:**
```javascript
import { formatDate } from './utils';

const date = new Date('2024-01-15T10:30:00');

console.log(formatDate(date, 'YYYY-MM-DD')); // "2024-01-15"
console.log(formatDate(date, 'MM/DD/YYYY')); // "01/15/2024"
console.log(formatDate(date, 'MMMM D, YYYY')); // "January 15, 2024"
console.log(formatDate(date, 'HH:mm:ss')); // "10:30:00"
```

### `formatTime`

Formats a time according to the specified format.

**Signature:**
```typescript
function formatTime(time: Date | string, timeFormat: string): string
```

**Parameters:**
- `time: Date | string` - The time to format
- `timeFormat: string` - The format string

**Returns:**
- `string` - The formatted time string

**Example:**
```javascript
import { formatTime } from './utils';

const time = new Date('2024-01-15T14:30:45');

console.log(formatTime(time, 'HH:mm')); // "14:30"
console.log(formatTime(time, 'hh:mm A')); // "02:30 PM"
console.log(formatTime(time, 'HH:mm:ss')); // "14:30:45"
```

### `formatDateTime`

Formats a datetime according to the specified format.

**Signature:**
```typescript
function formatDateTime(dateTimeStr: string, dateTimeFormat: string): string
```

**Parameters:**
- `dateTimeStr: string` - The datetime string to format
- `dateTimeFormat: string` - The format string

**Returns:**
- `string` - The formatted datetime string

**Example:**
```javascript
import { formatDateTime } from './utils';

const dateTime = '2024-01-15T14:30:45Z';

console.log(formatDateTime(dateTime, 'YYYY-MM-DD HH:mm:ss')); // "2024-01-15 14:30:45"
console.log(formatDateTime(dateTime, 'MM/DD/YYYY hh:mm A')); // "01/15/2024 02:30 PM"
```

### `formatter`

A general-purpose formatter for various data types.

**Signature:**
```typescript
function formatter(value: any, formatterInput: any): string
```

**Parameters:**
- `value: any` - The value to format
- `formatterInput: any` - The formatter configuration

**Returns:**
- `string` - The formatted value

**Example:**
```javascript
import { formatter } from './utils';

console.log(formatter(1234.56, { type: 'currency', currency: 'USD' })); // "$1,234.56"
console.log(formatter(0.1234, { type: 'percentage', decimals: 2 })); // "12.34%"
```

---

## File Utilities

### `processFile`

Processes a file for upload or other operations.

**Signature:**
```typescript
function processFile({ file }: { file: File }): Promise<any>
```

**Parameters:**
- `file: File` - The file to process

**Returns:**
- `Promise<any>` - The processed file data

**Features:**
- File validation
- File size checking
- File type validation
- File content processing

**Example:**
```javascript
import { processFile } from './utils';

async function handleFileUpload(file) {
  try {
    const processedFile = await processFile({ file });
    console.log('File processed:', processedFile);
  } catch (error) {
    console.error('File processing failed:', error);
  }
}

// Usage with file input
<input 
  type="file" 
  onChange={(e) => handleFileUpload(e.target.files[0])} 
/>
```

---

## Override Utilities

### `getOverrideProps`

Gets override props for component styling based on element hierarchy.

**Signature:**
```typescript
function getOverrideProps(overrides: object, elementHierarchy: string): object
```

**Parameters:**
- `overrides: object` - The override configuration object
- `elementHierarchy: string` - The component hierarchy path

**Returns:**
- `object` - The override props for the specified element

**Example:**
```javascript
import { getOverrideProps } from './utils';

const overrides = {
  Button: {
    backgroundColor: '#007bff',
    color: 'white'
  },
  TextField: {
    borderColor: '#007bff'
  }
};

const buttonProps = getOverrideProps(overrides, 'Button');
const textFieldProps = getOverrideProps(overrides, 'TextField');

console.log(buttonProps); // { backgroundColor: '#007bff', color: 'white' }
console.log(textFieldProps); // { borderColor: '#007bff' }
```

### `findChildOverrides`

Finds child overrides for a component based on hierarchy.

**Signature:**
```typescript
function findChildOverrides(overrides: object, elementHierarchy: string): object
```

**Parameters:**
- `overrides: object` - The override configuration object
- `elementHierarchy: string` - The component hierarchy path

**Returns:**
- `object` - The child overrides for the specified element

**Example:**
```javascript
import { findChildOverrides } from './utils';

const overrides = {
  'Button.Text': {
    fontSize: '16px',
    fontWeight: 'bold'
  },
  'TextField.Label': {
    color: '#333'
  }
};

const buttonTextOverrides = findChildOverrides(overrides, 'Button.Text');
console.log(buttonTextOverrides); // { fontSize: '16px', fontWeight: 'bold' }
```

### `getOverridesFromVariants`

Gets overrides from component variants.

**Signature:**
```typescript
function getOverridesFromVariants(variants: object, props: object): object
```

**Parameters:**
- `variants: object` - The component variants configuration
- `props: object` - The component props

**Returns:**
- `object` - The overrides based on variants and props

**Example:**
```javascript
import { getOverridesFromVariants } from './utils';

const variants = {
  size: {
    small: {
      fontSize: '12px',
      padding: '4px 8px'
    },
    large: {
      fontSize: '18px',
      padding: '12px 24px'
    }
  }
};

const props = { size: 'large' };
const overrides = getOverridesFromVariants(variants, props);

console.log(overrides); // { fontSize: '18px', padding: '12px 24px' }
```

### `mergeVariantsAndOverrides`

Merges variants and overrides for component styling.

**Signature:**
```typescript
function mergeVariantsAndOverrides(variants: object, overrides: object): object
```

**Parameters:**
- `variants: object` - The component variants
- `overrides: object` - The component overrides

**Returns:**
- `object` - The merged styling configuration

**Example:**
```javascript
import { mergeVariantsAndOverrides } from './utils';

const variants = {
  size: 'large',
  variant: 'primary'
};

const overrides = {
  backgroundColor: '#custom-color'
};

const merged = mergeVariantsAndOverrides(variants, overrides);
console.log(merged); // Merged styling configuration
```

---

## Event Constants

The utility module exports various event constants for use with Amplify Hub:

### UI Channel Constants
```javascript
export const UI_CHANNEL = "ui";
export const UI_EVENT_TYPE_ACTIONS = "actions";
```

### Category Constants
```javascript
export const CATEGORY_AUTH = "auth";
export const CATEGORY_DATASTORE = "datastore";
export const CATEGORY_CORE = "core";
```

### Action Constants
```javascript
export const ACTION_AUTH_SIGNOUT = "signout";
export const ACTION_NAVIGATE = "navigate";
export const ACTION_DATASTORE_CREATE = "create";
export const ACTION_DATASTORE_DELETE = "delete";
export const ACTION_DATASTORE_UPDATE = "update";
export const ACTION_STATE_MUTATION = "statemutation";
```

### Status Constants
```javascript
export const STATUS_STARTED = "started";
export const STATUS_FINISHED = "finished";
```

### Event Constants
```javascript
export const EVENT_ACTION_AUTH = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_AUTH}`;
export const EVENT_ACTION_AUTH_SIGNOUT = `${EVENT_ACTION_AUTH}:${ACTION_AUTH_SIGNOUT}`;
export const ACTION_AUTH_SIGNOUT_STARTED = `${EVENT_ACTION_AUTH_SIGNOUT}:${STATUS_STARTED}`;
export const ACTION_AUTH_SIGNOUT_FINISHED = `${EVENT_ACTION_AUTH_SIGNOUT}:${STATUS_FINISHED}`;
export const EVENT_ACTION_CORE = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_CORE}`;
export const EVENT_ACTION_CORE_STATE_MUTATION = `${EVENT_ACTION_CORE}:${ACTION_STATE_MUTATION}`;
export const ACTION_STATE_MUTATION_STARTED = `${EVENT_ACTION_CORE_STATE_MUTATION}:${STATUS_STARTED}`;
export const ACTION_STATE_MUTATION_FINISHED = `${EVENT_ACTION_CORE_STATE_MUTATION}:${STATUS_FINISHED}`;
export const EVENT_ACTION_CORE_NAVIGATE = `${EVENT_ACTION_CORE}:${ACTION_NAVIGATE}`;
export const ACTION_NAVIGATE_STARTED = `${EVENT_ACTION_CORE_NAVIGATE}:${STATUS_STARTED}`;
export const ACTION_NAVIGATE_FINISHED = `${EVENT_ACTION_CORE_NAVIGATE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE = `${UI_EVENT_TYPE_ACTIONS}:${CATEGORY_DATASTORE}`;
export const EVENT_ACTION_DATASTORE_CREATE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_CREATE}`;
export const ACTION_DATASTORE_CREATE_STARTED = `${EVENT_ACTION_DATASTORE_CREATE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_CREATE_FINISHED = `${EVENT_ACTION_DATASTORE_CREATE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE_DELETE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_DELETE}`;
export const ACTION_DATASTORE_DELETE_STARTED = `${EVENT_ACTION_DATASTORE_DELETE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_DELETE_FINISHED = `${EVENT_ACTION_DATASTORE_DELETE}:${STATUS_FINISHED}`;
export const EVENT_ACTION_DATASTORE_UPDATE = `${EVENT_ACTION_DATASTORE}:${ACTION_DATASTORE_UPDATE}`;
export const ACTION_DATASTORE_UPDATE_STARTED = `${EVENT_ACTION_DATASTORE_UPDATE}:${STATUS_STARTED}`;
export const ACTION_DATASTORE_UPDATE_FINISHED = `${EVENT_ACTION_DATASTORE_UPDATE}:${STATUS_FINISHED}`;
```

### Error Constants
```javascript
export const DATASTORE_QUERY_BY_ID_ERROR = "Error querying datastore item by id";
export const AMPLIFY_SYMBOL = typeof Symbol !== "undefined" && typeof Symbol.for === "function"
  ? Symbol.for("amplify_default")
  : "@@amplify_default";
```

### Usage Example
```javascript
import { 
  UI_CHANNEL, 
  EVENT_ACTION_AUTH_SIGNOUT_FINISHED,
  AMPLIFY_SYMBOL 
} from './utils';
import { Hub } from 'aws-amplify/utils';

// Listen for sign out events
Hub.listen(UI_CHANNEL, (data) => {
  if (data.event === EVENT_ACTION_AUTH_SIGNOUT_FINISHED) {
    console.log('User signed out');
  }
}, AMPLIFY_SYMBOL);
```

---

## Error Handling Utilities

### `isErrorWithMessage`

Checks if an object is an error with a message property.

**Signature:**
```typescript
function isErrorWithMessage(error: unknown): error is ErrorWithMessage
```

**Parameters:**
- `error: unknown` - The error to check

**Returns:**
- `boolean` - Whether the error has a message property

### `toErrorWithMessage`

Converts an unknown error to an error with message.

**Signature:**
```typescript
function toErrorWithMessage(maybeError: unknown): ErrorWithMessage
```

**Parameters:**
- `maybeError: unknown` - The error to convert

**Returns:**
- `ErrorWithMessage` - An error with message property

### `getErrorMessage`

Gets the error message from an error object.

**Signature:**
```typescript
function getErrorMessage(error: unknown): string
```

**Parameters:**
- `error: unknown` - The error object

**Returns:**
- `string` - The error message

**Example:**
```javascript
import { getErrorMessage } from './utils';

try {
  // Some operation that might fail
  throw new Error('Something went wrong');
} catch (error) {
  const message = getErrorMessage(error);
  console.log('Error message:', message); // "Something went wrong"
}
```

---

## Best Practices

### 1. Error Handling

Always implement proper error handling when using utility functions:

```javascript
import { validateField, getErrorMessage } from './utils';

try {
  const error = validateField(value, validations);
  if (error) {
    console.error('Validation error:', error);
  }
} catch (error) {
  console.error('Unexpected error:', getErrorMessage(error));
}
```

### 2. Type Safety

Use TypeScript for better type safety:

```typescript
import { useStateMutationAction } from './utils';

interface User {
  id: string;
  name: string;
}

function MyComponent() {
  const [user, setUser] = useStateMutationAction<User | null>(null);
  
  const updateUser = (newUser: User) => {
    setUser(newUser); // Type-safe
  };
}
```

### 3. Performance Optimization

Use memoization for expensive operations:

```javascript
import { useMemo } from 'react';
import { formatDate } from './utils';

function MyComponent({ date }) {
  const formattedDate = useMemo(() => {
    return formatDate(date, 'YYYY-MM-DD');
  }, [date]);
  
  return <div>{formattedDate}</div>;
}
```

### 4. Event Handling

Properly handle events and cleanup:

```javascript
import { useEffect } from 'react';
import { useAuth } from './utils';

function MyComponent() {
  const { user, isAuthenticated } = useAuth();
  
  useEffect(() => {
    if (isAuthenticated) {
      console.log('User authenticated:', user);
    }
  }, [isAuthenticated, user]);
}
```

---

This utility functions documentation provides comprehensive information about all utility functions in the gaming application. For additional support or questions, please refer to the AWS Amplify documentation or contact the development team.