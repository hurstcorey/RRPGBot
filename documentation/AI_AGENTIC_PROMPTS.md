# AI Agentic Prompts - AI-Generated Roleplaying System

## 🎯 Overview

This document contains AI agentic prompts organized by development phases and epics. Each prompt is designed to guide AI agents through specific development tasks, ensuring systematic progress through the project plan.

## 🚀 Phase 1: Foundation (Months 1-3)

### Prompt 1.1: System Architecture Design
```
You are an expert system architect for an AI-generated roleplaying system. Design a comprehensive system architecture that includes:

1. Multi-database architecture:
   - Graph Database (Neptune) for relationships
   - Document Database (DynamoDB) for unstructured content
   - NoSQL Database (DynamoDB) for structured game data
   - Relational Database (RDS) for metadata and transactions

2. GraphQL API design with:
   - Unified schema for all game elements
   - Real-time subscriptions
   - Complex query optimization
   - Federation support

3. Caching strategy using Redis/ElastiCache

4. Security architecture with:
   - Multi-factor authentication
   - Role-based access control
   - Data encryption
   - API security

5. AI service integration points for:
   - Google Speech-to-Text
   - Google Text-to-Speech
   - Google Veo (NFT generation)
   - OpenAI GPT

Provide detailed technical specifications, database schemas, API endpoints, and security considerations. Include diagrams and code examples where appropriate.
```

### Prompt 1.2: Database Schema Design
```
You are a database architect specializing in multi-database systems. Design comprehensive database schemas for an AI-generated roleplaying system:

1. **Graph Database (Neptune) Schema:**
   - Character relationship mapping
   - Item dependency graphs
   - Quest chain relationships
   - World connection networks
   - Faction relationship matrices

2. **Document Database (DynamoDB) Schema:**
   - Story content structure
   - World descriptions
   - Session logs
   - User-generated content
   - Campaign notes

3. **NoSQL Database (DynamoDB) Schema:**
   - Game items and stats
   - Character data
   - Session information
   - User profiles
   - System configuration

4. **Relational Database (RDS) Schema:**
   - User metadata
   - Transaction history
   - Content ratings
   - System logs
   - Analytics data

Include data models, relationships, indexing strategies, and performance considerations for each database type.
```

### Prompt 1.3: GraphQL Schema Development
```
You are a GraphQL schema designer. Create a comprehensive GraphQL schema for an AI-generated roleplaying system that includes:

1. **Core Types:**
   - User, Character, Item, World, Session
   - Campaign, Quest, NPC, Monster
   - Story, Location, Faction

2. **Queries:**
   - User management
   - Character operations
   - Item management
   - World exploration
   - Session management

3. **Mutations:**
   - User registration/authentication
   - Character creation/updates
   - Item generation/purchase
   - Session creation/management
   - Content creation/publishing

4. **Subscriptions:**
   - Real-time session updates
   - Character changes
   - Marketplace updates
   - System notifications

5. **Advanced Features:**
   - Complex filtering
   - Pagination
   - Search functionality
   - Relationship queries

Provide complete schema definitions with resolvers, input types, and example queries.
```

### Prompt 1.4: Authentication System Implementation
```
You are a security engineer implementing authentication for an AI-generated roleplaying system. Design and implement:

1. **AWS Cognito Integration:**
   - User registration and login
   - Multi-factor authentication
   - Password policies
   - Session management

2. **Role-Based Access Control:**
   - Player, GM, DM, Story Maker, World Builder roles
   - Permission matrices
   - Role assignment workflows
   - Permission enforcement

3. **API Security:**
   - JWT token management
   - API key authentication
   - Rate limiting
   - CORS configuration

4. **Data Protection:**
   - Encryption at rest and in transit
   - GDPR compliance
   - Privacy controls
   - Data retention policies

Provide implementation code, configuration files, and security best practices.
```

## 🚀 Phase 2: Core Features (Months 4-6)

### Prompt 2.1: RPG Mechanics Implementation
```
You are a game developer implementing core RPG mechanics. Create comprehensive systems for:

1. **Character System:**
   - Character creation with stats, abilities, classes, races
   - Experience and leveling mechanics
   - Skill trees and progression
   - Character sheet management

2. **Combat System:**
   - Turn-based and real-time combat
   - Initiative tracking
   - Damage calculation
   - Status effects
   - Combat logs

3. **Magic System:**
   - Spell schools and types
   - Mana/energy systems
   - Spell components
   - Magic item creation

4. **Inventory System:**
   - Item management
   - Weight and capacity
   - Item categories
   - Equipment slots

Provide detailed implementation with database models, API endpoints, and frontend components.
```

### Prompt 2.2: Random Generation System
```
You are a procedural generation expert. Implement comprehensive random generation systems for:

1. **Item Generation:**
   - Weapons, armor, potions, scrolls, artifacts
   - Stat calculation algorithms
   - Rarity systems
   - Customization options

2. **Character Generation:**
   - NPC personality generation
   - Monster stat generation
   - Character backstory creation
   - Appearance generation

3. **World Generation:**
   - Map and landscape generation
   - City and dungeon generation
   - Weather and atmosphere
   - Economic simulation

4. **Story Generation:**
   - Quest generation
   - Plot hook creation
   - Encounter generation
   - Dialogue generation

Include algorithms, data structures, and integration with external APIs.
```

### Prompt 2.3: AI Integration Implementation
```
You are an AI integration specialist. Implement AI services for the roleplaying system:

1. **Google Speech-to-Text Integration:**
   - Voice command processing
   - Session recording
   - Real-time transcription
   - Privacy controls

2. **Google Text-to-Speech Integration:**
   - NPC voice generation
   - Audio descriptions
   - Multi-language support
   - Voice customization

3. **Google Veo Integration:**
   - NFT image generation
   - Character portrait creation
   - Item visualization
   - World map generation

4. **OpenAI GPT Integration:**
   - Story element generation
   - Character dialogue
   - World descriptions
   - Quest creation

Provide API integration code, error handling, and performance optimization.
```

## 🚀 Phase 3: Advanced Features (Months 7-9)

### Prompt 3.1: AI Dungeon Master Development
```
You are an AI specialist developing an AI Dungeon Master. Create an intelligent system that:

1. **Story Adaptation:**
   - Analyzes player actions
   - Adapts story elements
   - Maintains narrative coherence
   - Generates dynamic responses

2. **NPC Management:**
   - Generates NPC personalities
   - Manages NPC interactions
   - Maintains character consistency
   - Creates memorable characters

3. **World State Tracking:**
   - Tracks player progress
   - Manages world changes
   - Maintains consistency
   - Generates consequences

4. **Encounter Generation:**
   - Creates balanced encounters
   - Adapts difficulty
   - Generates rewards
   - Manages combat flow

Provide AI models, decision trees, and integration with the game system.
```

### Prompt 3.2: Marketplace System Implementation
```
You are a marketplace developer. Implement a comprehensive marketplace system:

1. **Content Management:**
   - Content upload and storage
   - Metadata management
   - Version control
   - Quality review process

2. **Discovery System:**
   - Search and filtering
   - Recommendation engine
   - Content categorization
   - Rating and review system

3. **Transaction System:**
   - Payment processing
   - Licensing management
   - Revenue sharing
   - Refund handling

4. **Creator Tools:**
   - Content creation interfaces
   - Analytics dashboard
   - Revenue tracking
   - Community features

Provide complete marketplace implementation with security and scalability considerations.
```

### Prompt 3.3: Multiplayer System Development
```
You are a multiplayer game developer. Implement real-time multiplayer features:

1. **Session Management:**
   - Session creation and management
   - Player invitation system
   - Real-time state synchronization
   - Session persistence

2. **Real-time Collaboration:**
   - Live character sheet updates
   - Combat tracking
   - Voice chat integration
   - Screen sharing

3. **Communication Systems:**
   - Text chat
   - Voice communication
   - Emote system
   - Notification system

4. **Cross-platform Support:**
   - Web, mobile, desktop
   - Synchronization
   - Offline support
   - Performance optimization

Provide WebSocket implementation, real-time protocols, and scalability solutions.
```

## 🚀 Phase 4: Scale & Optimize (Months 10-12)

### Prompt 4.1: Performance Optimization
```
You are a performance optimization specialist. Optimize the roleplaying system for scale:

1. **Database Optimization:**
   - Query optimization
   - Indexing strategies
   - Caching implementation
   - Connection pooling

2. **API Performance:**
   - GraphQL query optimization
   - Response time improvement
   - Rate limiting
   - Load balancing

3. **Frontend Optimization:**
   - Code splitting
   - Lazy loading
   - Caching strategies
   - Bundle optimization

4. **AI Service Optimization:**
   - Request batching
   - Response caching
   - Cost optimization
   - Fallback strategies

Provide performance metrics, optimization techniques, and monitoring solutions.
```

### Prompt 4.2: Advanced Analytics Implementation
```
You are a data analyst implementing advanced analytics for the roleplaying system:

1. **User Analytics:**
   - User behavior tracking
   - Engagement metrics
   - Retention analysis
   - Conversion tracking

2. **Content Analytics:**
   - Content performance
   - Creator analytics
   - Marketplace insights
   - Revenue analysis

3. **System Analytics:**
   - Performance monitoring
   - Error tracking
   - Usage patterns
   - Cost analysis

4. **Predictive Analytics:**
   - User recommendations
   - Content suggestions
   - Revenue forecasting
   - System optimization

Provide analytics implementation, dashboard creation, and data visualization.
```

### Prompt 4.3: Mobile Application Development
```
You are a mobile app developer. Create a comprehensive mobile application:

1. **React Native Implementation:**
   - Cross-platform development
   - Native performance
   - Offline functionality
   - Push notifications

2. **Mobile-Specific Features:**
   - Touch-optimized interface
   - Voice commands
   - Camera integration
   - Location services

3. **Performance Optimization:**
   - App size optimization
   - Battery efficiency
   - Network optimization
   - Memory management

4. **App Store Deployment:**
   - Store listing optimization
   - Review management
   - Update strategies
   - Analytics integration

Provide complete mobile app implementation with testing and deployment strategies.
```

## 🎯 Specialized Prompts

### Prompt S.1: Security Audit
```
You are a security auditor. Conduct a comprehensive security audit of the roleplaying system:

1. **Authentication Security:**
   - Multi-factor authentication review
   - Session management security
   - Password policy assessment
   - API security analysis

2. **Data Protection:**
   - Encryption implementation review
   - GDPR compliance audit
   - Data retention policy
   - Privacy controls assessment

3. **Content Moderation:**
   - Automated filtering review
   - Manual review processes
   - User reporting systems
   - Appeal process security

4. **Payment Security:**
   - Payment processing security
   - PCI compliance
   - Fraud detection
   - Refund security

Provide security recommendations, vulnerability assessments, and compliance reports.
```

### Prompt S.2: Accessibility Implementation
```
You are an accessibility specialist. Implement comprehensive accessibility features:

1. **Screen Reader Support:**
   - ARIA labels and roles
   - Semantic HTML structure
   - Keyboard navigation
   - Focus management

2. **Visual Accessibility:**
   - High contrast mode
   - Color blind support
   - Font size adjustment
   - Visual indicators

3. **Audio Accessibility:**
   - Caption support
   - Audio descriptions
   - Volume controls
   - Audio alternatives

4. **Cognitive Accessibility:**
   - Clear navigation
   - Consistent interface
   - Error prevention
   - Help systems

Provide accessibility implementation with testing and compliance verification.
```

### Prompt S.3: Internationalization
```
You are an internationalization specialist. Implement multi-language support:

1. **Translation System:**
   - Multi-language content
   - Dynamic translation
   - Cultural adaptation
   - Localization tools

2. **Regional Features:**
   - Currency conversion
   - Date/time formatting
   - Regional content
   - Cultural considerations

3. **Technical Implementation:**
   - i18n framework
   - RTL language support
   - Unicode handling
   - Performance optimization

4. **Content Management:**
   - Translation workflows
   - Quality assurance
   - Version control
   - Community translation

Provide complete internationalization implementation with testing and deployment strategies.
```

## 📊 Prompt Usage Guidelines

### 1. **Sequential Execution**
- Execute prompts in order by phase
- Complete all prompts in a phase before moving to the next
- Validate outputs before proceeding

### 2. **Integration Points**
- Ensure outputs from different prompts integrate properly
- Maintain consistency across implementations
- Update documentation as you progress

### 3. **Testing Strategy**
- Test each component as it's developed
- Integrate testing into each prompt
- Maintain test coverage throughout development

### 4. **Documentation Updates**
- Update technical documentation with each implementation
- Maintain user guides and API documentation
- Keep project status current

### 5. **Quality Assurance**
- Review all AI-generated code
- Validate against requirements
- Ensure security and performance standards
- Conduct code reviews

---

These AI agentic prompts provide a systematic approach to developing the AI-generated roleplaying system. Each prompt is designed to be executed by AI agents with specific expertise in the relevant domain.