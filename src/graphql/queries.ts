/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getItem = /* GraphQL */ `query GetItem($id: ID!) {
  getItem(id: $id) {
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
` as GeneratedQuery<APITypes.GetItemQueryVariables, APITypes.GetItemQuery>;
export const listItems = /* GraphQL */ `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListItemsQueryVariables, APITypes.ListItemsQuery>;
