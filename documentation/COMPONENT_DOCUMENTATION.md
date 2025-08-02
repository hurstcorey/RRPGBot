# Component Documentation

This document provides detailed documentation for all React components in the gaming application.

## Table of Contents

1. [ItemCreateForm](#itemcreateform)
2. [ItemUpdateForm](#itemupdateform)
3. [GameSessionCreateForm](#gamesessioncreateform)
4. [GameSessionUpdateForm](#gamesessionupdateform)
5. [Utility Components](#utility-components)

---

## ItemCreateForm

A comprehensive React component for creating new game items with full form validation and AWS Amplify integration.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `clearOnSuccess` | `boolean` | `true` | No | Whether to clear form after successful submission |
| `onSuccess` | `(data: any) => void` | - | No | Callback function called after successful item creation |
| `onError` | `(error: any) => void` | - | No | Callback function called when an error occurs |
| `onSubmit` | `(data: any) => void` | - | No | Callback function called before form submission |
| `onValidate` | `(data: any) => boolean` | - | No | Custom validation function |
| `onChange` | `(data: any) => void` | - | No | Callback function called when form data changes |
| `overrides` | `object` | - | No | Custom styling overrides for component elements |

### Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `name` | `string` | No | Item name |
| `description` | `string` | No | Item description |
| `level` | `number` | No | Item level requirement |
| `cost_amount` | `number` | No | Item cost in game currency |
| `rarity_id` | `string` | No | Item rarity identifier |
| `item_type_id` | `string` | No | Item type identifier |
| `magic_element_id` | `string` | No | Magic element identifier |
| `character_attribute_id` | `string` | No | Character attribute identifier |
| `character_attribute_modifer` | `number` | No | Attribute modifier value |
| `cursed_id` | `string` | No | Curse identifier |
| `insert_timestamp_UTC` | `string` | No | Insert timestamp in UTC |
| `update_timestamp_UTC` | `string` | No | Update timestamp in UTC |

### Features

- **Automatic Form Validation**: Validates all fields according to their type and constraints
- **Real-time Error Display**: Shows validation errors immediately as user types
- **State Management**: Handles all form state internally
- **AWS Amplify Integration**: Seamlessly integrates with GraphQL API
- **Customizable Styling**: Supports override props for custom styling
- **Event Callbacks**: Provides hooks for success, error, and change events
- **Form Reset**: Automatically clears form after successful submission

### Usage Examples

#### Basic Usage
```jsx
import { ItemCreateForm } from './ui-components';

function MyComponent() {
  return (
    <ItemCreateForm
      onSuccess={(data) => console.log('Item created:', data)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

#### With Custom Validation
```jsx
import { ItemCreateForm } from './ui-components';

function MyComponent() {
  const customValidation = (data) => {
    if (data.level && data.level > 100) {
      return false; // Prevent submission
    }
    return true;
  };

  return (
    <ItemCreateForm
      onValidate={customValidation}
      onSuccess={(data) => console.log('Item created:', data)}
    />
  );
}
```

#### With Custom Styling
```jsx
import { ItemCreateForm } from './ui-components';

function MyComponent() {
  const customOverrides = {
    Button: {
      backgroundColor: '#007bff',
      color: 'white',
      borderRadius: '8px'
    },
    TextField: {
      borderColor: '#007bff',
      borderRadius: '4px'
    }
  };

  return (
    <ItemCreateForm
      overrides={customOverrides}
      onSuccess={(data) => console.log('Item created:', data)}
    />
  );
}
```

#### With Change Tracking
```jsx
import { ItemCreateForm } from './ui-components';

function MyComponent() {
  const handleChange = (data) => {
    console.log('Form data changed:', data);
    // Track form changes for analytics or other purposes
  };

  return (
    <ItemCreateForm
      onChange={handleChange}
      onSuccess={(data) => console.log('Item created:', data)}
    />
  );
}
```

### Error Handling

The component automatically handles various types of errors:

1. **Validation Errors**: Field-level validation errors are displayed inline
2. **Network Errors**: API connection issues are caught and reported
3. **Authentication Errors**: Unauthorized access is handled gracefully
4. **Server Errors**: Backend errors are captured and displayed

### Styling Overrides

The component supports extensive styling customization through the `overrides` prop:

```jsx
const overrides = {
  // Override specific elements
  Button: {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
    padding: '12px 24px'
  },
  TextField: {
    borderColor: '#007bff',
    borderRadius: '4px',
    fontSize: '16px'
  },
  Flex: {
    gap: '16px'
  },
  Grid: {
    gap: '12px'
  }
};
```

---

## ItemUpdateForm

A React component for updating existing game items with pre-populated form data and validation.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `id` | `string` | - | **Yes** | ID of the item to update |
| `clearOnSuccess` | `boolean` | `true` | No | Whether to clear form after successful submission |
| `onSuccess` | `(data: any) => void` | - | No | Callback function called after successful item update |
| `onError` | `(error: any) => void` | - | No | Callback function called when an error occurs |
| `onSubmit` | `(data: any) => void` | - | No | Callback function called before form submission |
| `onValidate` | `(data: any) => boolean` | - | No | Custom validation function |
| `onChange` | `(data: any) => void` | - | No | Callback function called when form data changes |
| `overrides` | `object` | - | No | Custom styling overrides for component elements |

### Features

- **Pre-populated Data**: Automatically loads and displays existing item data
- **Form Validation**: Validates all fields according to their type and constraints
- **Real-time Error Display**: Shows validation errors immediately as user types
- **State Management**: Handles all form state internally
- **AWS Amplify Integration**: Seamlessly integrates with GraphQL API
- **Customizable Styling**: Supports override props for custom styling
- **Event Callbacks**: Provides hooks for success, error, and change events
- **Loading States**: Shows loading indicators while fetching item data

### Usage Examples

#### Basic Usage
```jsx
import { ItemUpdateForm } from './ui-components';

function MyComponent() {
  return (
    <ItemUpdateForm
      id="item-123"
      onSuccess={(data) => console.log('Item updated:', data)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

#### With Custom Validation
```jsx
import { ItemUpdateForm } from './ui-components';

function MyComponent() {
  const customValidation = (data) => {
    if (data.cost_amount && data.cost_amount < 0) {
      return false; // Prevent negative costs
    }
    return true;
  };

  return (
    <ItemUpdateForm
      id="item-123"
      onValidate={customValidation}
      onSuccess={(data) => console.log('Item updated:', data)}
    />
  );
}
```

#### With Loading State Handling
```jsx
import { ItemUpdateForm } from './ui-components';

function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && <div>Loading item data...</div>}
      <ItemUpdateForm
        id="item-123"
        onSuccess={(data) => {
          console.log('Item updated:', data);
          setIsLoading(false);
        }}
        onError={(error) => {
          console.error('Error:', error);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
```

### Data Loading

The component automatically fetches the item data when mounted:

1. **Initial Load**: Fetches item data using the provided ID
2. **Loading State**: Shows loading indicators during data fetch
3. **Error Handling**: Handles fetch errors gracefully
4. **Form Population**: Pre-populates all form fields with fetched data

### Update Process

1. **Validation**: Validates all form fields before submission
2. **API Call**: Sends update request to GraphQL API
3. **Success Handling**: Calls onSuccess callback with updated data
4. **Error Handling**: Calls onError callback if update fails
5. **Form Reset**: Optionally clears form after successful update

---

## GameSessionCreateForm

A React component for creating new game sessions with comprehensive form validation.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `clearOnSuccess` | `boolean` | `true` | No | Whether to clear form after successful submission |
| `onSuccess` | `(data: any) => void` | - | No | Callback function called after successful session creation |
| `onError` | `(error: any) => void` | - | No | Callback function called when an error occurs |
| `onSubmit` | `(data: any) => void` | - | No | Callback function called before form submission |
| `onValidate` | `(data: any) => boolean` | - | No | Custom validation function |
| `onChange` | `(data: any) => void` | - | No | Callback function called when form data changes |
| `overrides` | `object` | - | No | Custom styling overrides for component elements |

### Form Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `user_id` | `string` | **Yes** | User identifier |
| `character_id` | `string` | **Yes** | Character identifier |
| `campign_id` | `string` | No | Campaign identifier |
| `adventure_id` | `string` | **Yes** | Adventure identifier |
| `villian_id` | `string` | No | Villain identifier |
| `setting_id` | `string` | **Yes** | Setting identifier |
| `play_time_sec` | `number` | No | Play time in seconds |
| `play_time_start_utc` | `string` | No | Session start time in UTC |
| `play_time_end_utc` | `string` | No | Session end time in UTC |
| `insert_user_id` | `string` | No | User who created the session |
| `insert_dt_utc` | `string` | No | Insert timestamp in UTC |
| `update_user_id` | `string` | No | User who last updated the session |
| `update_dt_utc` | `string` | No | Update timestamp in UTC |

### Features

- **Required Field Validation**: Enforces required field constraints
- **Date/Time Handling**: Proper handling of UTC timestamps
- **Form Validation**: Comprehensive validation for all fields
- **Real-time Error Display**: Shows validation errors immediately
- **State Management**: Handles all form state internally
- **AWS Amplify Integration**: Seamlessly integrates with GraphQL API
- **Customizable Styling**: Supports override props for custom styling
- **Event Callbacks**: Provides hooks for success, error, and change events

### Usage Examples

#### Basic Usage
```jsx
import { GameSessionCreateForm } from './ui-components';

function MyComponent() {
  return (
    <GameSessionCreateForm
      onSuccess={(data) => console.log('Session created:', data)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

#### With Pre-filled Data
```jsx
import { GameSessionCreateForm } from './ui-components';

function MyComponent() {
  const handleSubmit = (data) => {
    // Pre-fill some fields
    data.user_id = "current-user-id";
    data.insert_user_id = "current-user-id";
    data.insert_dt_utc = new Date().toISOString();
  };

  return (
    <GameSessionCreateForm
      onSubmit={handleSubmit}
      onSuccess={(data) => console.log('Session created:', data)}
    />
  );
}
```

#### With Custom Validation
```jsx
import { GameSessionCreateForm } from './ui-components';

function MyComponent() {
  const customValidation = (data) => {
    if (data.play_time_sec && data.play_time_sec < 0) {
      return false; // Prevent negative play time
    }
    return true;
  };

  return (
    <GameSessionCreateForm
      onValidate={customValidation}
      onSuccess={(data) => console.log('Session created:', data)}
    />
  );
}
```

### Validation Rules

The component enforces the following validation rules:

1. **Required Fields**: `user_id`, `character_id`, `adventure_id`, `setting_id`
2. **Data Types**: Ensures proper data types for all fields
3. **Date Formats**: Validates UTC timestamp formats
4. **Numeric Ranges**: Validates numeric fields for reasonable ranges

---

## GameSessionUpdateForm

A React component for updating existing game sessions with pre-populated form data.

### Props

| Prop | Type | Default | Required | Description |
|------|------|---------|----------|-------------|
| `id` | `string` | - | **Yes** | ID of the game session to update |
| `clearOnSuccess` | `boolean` | `true` | No | Whether to clear form after successful submission |
| `onSuccess` | `(data: any) => void` | - | No | Callback function called after successful session update |
| `onError` | `(error: any) => void` | - | No | Callback function called when an error occurs |
| `onSubmit` | `(data: any) => void` | - | No | Callback function called before form submission |
| `onValidate` | `(data: any) => boolean` | - | No | Custom validation function |
| `onChange` | `(data: any) => void` | - | No | Callback function called when form data changes |
| `overrides` | `object` | - | No | Custom styling overrides for component elements |

### Features

- **Pre-populated Data**: Automatically loads and displays existing session data
- **Form Validation**: Validates all fields according to their type and constraints
- **Real-time Error Display**: Shows validation errors immediately as user types
- **State Management**: Handles all form state internally
- **AWS Amplify Integration**: Seamlessly integrates with GraphQL API
- **Customizable Styling**: Supports override props for custom styling
- **Event Callbacks**: Provides hooks for success, error, and change events
- **Loading States**: Shows loading indicators while fetching session data

### Usage Examples

#### Basic Usage
```jsx
import { GameSessionUpdateForm } from './ui-components';

function MyComponent() {
  return (
    <GameSessionUpdateForm
      id="session-123"
      onSuccess={(data) => console.log('Session updated:', data)}
      onError={(error) => console.error('Error:', error)}
    />
  );
}
```

#### With Custom Validation
```jsx
import { GameSessionUpdateForm } from './ui-components';

function MyComponent() {
  const customValidation = (data) => {
    if (data.play_time_end_utc && data.play_time_start_utc) {
      const start = new Date(data.play_time_start_utc);
      const end = new Date(data.play_time_end_utc);
      if (end <= start) {
        return false; // End time must be after start time
      }
    }
    return true;
  };

  return (
    <GameSessionUpdateForm
      id="session-123"
      onValidate={customValidation}
      onSuccess={(data) => console.log('Session updated:', data)}
    />
  );
}
```

#### With Auto-update Timestamps
```jsx
import { GameSessionUpdateForm } from './ui-components';

function MyComponent() {
  const handleSubmit = (data) => {
    // Auto-update timestamps
    data.update_user_id = "current-user-id";
    data.update_dt_utc = new Date().toISOString();
  };

  return (
    <GameSessionUpdateForm
      id="session-123"
      onSubmit={handleSubmit}
      onSuccess={(data) => console.log('Session updated:', data)}
    />
  );
}
```

### Data Loading Process

1. **Initial Load**: Fetches session data using the provided ID
2. **Loading State**: Shows loading indicators during data fetch
3. **Error Handling**: Handles fetch errors gracefully
4. **Form Population**: Pre-populates all form fields with fetched data

### Update Process

1. **Validation**: Validates all form fields before submission
2. **API Call**: Sends update request to GraphQL API
3. **Success Handling**: Calls onSuccess callback with updated data
4. **Error Handling**: Calls onError callback if update fails
5. **Form Reset**: Optionally clears form after successful update

---

## Utility Components

### Theme Component

#### `studioTheme`

A comprehensive theme object for AWS Amplify UI components.

**Usage:**
```jsx
import { studioTheme } from './ui-components';
import { ThemeProvider } from '@aws-amplify/ui-react';

function App() {
  return (
    <ThemeProvider theme={studioTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
}
```

**Features:**
- **Consistent Styling**: Provides consistent styling across all components
- **Customizable**: Can be extended or modified as needed
- **AWS Amplify Compatible**: Designed specifically for AWS Amplify UI components
- **Responsive Design**: Includes responsive design tokens
- **Accessibility**: Includes accessibility-focused design tokens

### Utility Functions

#### `getOverrideProps`

Gets override props for component styling.

**Parameters:**
- `overrides: object` - Override configuration object
- `elementHierarchy: string` - Component hierarchy path

**Returns:**
- `object` - Override props for the specified element

**Example:**
```jsx
import { getOverrideProps } from './ui-components/utils';

const overrides = {
  Button: {
    backgroundColor: '#007bff'
  }
};

const buttonProps = getOverrideProps(overrides, 'Button');
```

#### `validateField`

Validates a field value against validation rules.

**Parameters:**
- `value: any` - Value to validate
- `validations: Array<ValidationRule>` - Validation rules

**Returns:**
- `string | null` - Error message or null if valid

**Example:**
```jsx
import { validateField } from './ui-components/utils';

const error = validateField("test@example.com", [
  { type: "Required" },
  { type: "Email" }
]);

if (error) {
  console.log('Validation error:', error);
}
```

#### `fetchByPath`

Fetches nested object values by path.

**Parameters:**
- `input: object` - Input object
- `path: string` - Path to fetch
- `accumulator: Array` - Accumulator array (optional)

**Returns:**
- `Array` - Array of values found at the specified path

**Example:**
```jsx
import { fetchByPath } from './ui-components/utils';

const data = {
  user: {
    profile: {
      name: "John Doe"
    }
  }
};

const names = fetchByPath(data, 'user.profile.name');
console.log(names); // ["John Doe"]
```

---

## Component Best Practices

### 1. Error Handling

Always implement proper error handling in your components:

```jsx
function MyComponent() {
  const handleError = (error) => {
    console.error('Component error:', error);
    // Show user-friendly error message
    alert('An error occurred. Please try again.');
  };

  return (
    <ItemCreateForm
      onError={handleError}
      onSuccess={(data) => console.log('Success:', data)}
    />
  );
}
```

### 2. Loading States

Implement loading states for better user experience:

```jsx
function MyComponent() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <ItemUpdateForm
        id="item-123"
        onSuccess={(data) => {
          console.log('Success:', data);
          setIsLoading(false);
        }}
        onError={(error) => {
          console.error('Error:', error);
          setIsLoading(false);
        }}
      />
    </div>
  );
}
```

### 3. Form Validation

Implement custom validation when needed:

```jsx
function MyComponent() {
  const customValidation = (data) => {
    // Custom business logic validation
    if (data.level && data.level > 100) {
      return false;
    }
    return true;
  };

  return (
    <ItemCreateForm
      onValidate={customValidation}
      onSuccess={(data) => console.log('Success:', data)}
    />
  );
}
```

### 4. Styling Overrides

Use styling overrides for consistent theming:

```jsx
const themeOverrides = {
  Button: {
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '8px',
    padding: '12px 24px'
  },
  TextField: {
    borderColor: '#007bff',
    borderRadius: '4px'
  }
};

function MyComponent() {
  return (
    <ItemCreateForm
      overrides={themeOverrides}
      onSuccess={(data) => console.log('Success:', data)}
    />
  );
}
```

### 5. Event Handling

Implement proper event handling:

```jsx
function MyComponent() {
  const handleChange = (data) => {
    // Track form changes
    console.log('Form data changed:', data);
  };

  const handleSubmit = (data) => {
    // Pre-process data before submission
    data.timestamp = new Date().toISOString();
  };

  return (
    <ItemCreateForm
      onChange={handleChange}
      onSubmit={handleSubmit}
      onSuccess={(data) => console.log('Success:', data)}
    />
  );
}
```

---

## Accessibility Considerations

All components include built-in accessibility features:

1. **ARIA Labels**: Proper ARIA labels for form fields
2. **Keyboard Navigation**: Full keyboard navigation support
3. **Screen Reader Support**: Compatible with screen readers
4. **Focus Management**: Proper focus management
5. **Error Announcements**: Screen reader announcements for errors
6. **High Contrast Support**: High contrast mode support

---

## Performance Optimization

### 1. Memoization

Use React.memo for expensive components:

```jsx
const MemoizedItemForm = React.memo(ItemCreateForm);

function MyComponent() {
  return <MemoizedItemForm onSuccess={handleSuccess} />;
}
```

### 2. Lazy Loading

Lazy load components when possible:

```jsx
const LazyItemForm = React.lazy(() => import('./ui-components/ItemCreateForm'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyItemForm onSuccess={handleSuccess} />
    </Suspense>
  );
}
```

### 3. Debouncing

Implement debouncing for search and filter operations:

```jsx
import { debounce } from 'lodash';

function MyComponent() {
  const debouncedSearch = debounce((searchTerm) => {
    // Perform search operation
  }, 300);

  return (
    <ItemCreateForm
      onChange={(data) => debouncedSearch(data.name)}
    />
  );
}
```

---

This component documentation provides comprehensive information about all React components in the gaming application. For additional support or questions, please refer to the AWS Amplify documentation or contact the development team.