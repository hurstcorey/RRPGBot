/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateItem = /* GraphQL */ `subscription OnCreateItem($filter: ModelSubscriptionItemFilterInput) {
  onCreateItem(filter: $filter) {
    id
    name
    description
    level
    cost_amount
    rarity_id
    item_type_id
    magic_element_id
    character_attribute_id
    character_attribute_modifer
    cursed_id
    insert_timestamp_UTC
    update_timestamp_UTC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateItemSubscriptionVariables,
  APITypes.OnCreateItemSubscription
>;
export const onUpdateItem = /* GraphQL */ `subscription OnUpdateItem($filter: ModelSubscriptionItemFilterInput) {
  onUpdateItem(filter: $filter) {
    id
    name
    description
    level
    cost_amount
    rarity_id
    item_type_id
    magic_element_id
    character_attribute_id
    character_attribute_modifer
    cursed_id
    insert_timestamp_UTC
    update_timestamp_UTC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateItemSubscriptionVariables,
  APITypes.OnUpdateItemSubscription
>;
export const onDeleteItem = /* GraphQL */ `subscription OnDeleteItem($filter: ModelSubscriptionItemFilterInput) {
  onDeleteItem(filter: $filter) {
    id
    name
    description
    level
    cost_amount
    rarity_id
    item_type_id
    magic_element_id
    character_attribute_id
    character_attribute_modifer
    cursed_id
    insert_timestamp_UTC
    update_timestamp_UTC
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteItemSubscriptionVariables,
  APITypes.OnDeleteItemSubscription
>;
