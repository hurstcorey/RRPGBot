/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createItem = /* GraphQL */ `mutation CreateItem(
  $input: CreateItemInput!
  $condition: ModelItemConditionInput
) {
  createItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateItemMutationVariables,
  APITypes.CreateItemMutation
>;
export const updateItem = /* GraphQL */ `mutation UpdateItem(
  $input: UpdateItemInput!
  $condition: ModelItemConditionInput
) {
  updateItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateItemMutationVariables,
  APITypes.UpdateItemMutation
>;
export const deleteItem = /* GraphQL */ `mutation DeleteItem(
  $input: DeleteItemInput!
  $condition: ModelItemConditionInput
) {
  deleteItem(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteItemMutationVariables,
  APITypes.DeleteItemMutation
>;
