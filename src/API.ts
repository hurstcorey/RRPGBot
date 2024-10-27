/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateItemInput = {
  id?: string | null,
  name?: string | null,
  description?: string | null,
  level?: number | null,
  cost_amount?: number | null,
  rarity_id?: string | null,
  item_type_id?: string | null,
  magic_element_id?: string | null,
  character_attribute_id?: string | null,
  character_attribute_modifer?: number | null,
  cursed_id?: string | null,
  insert_timestamp_UTC?: string | null,
  update_timestamp_UTC?: string | null,
};

export type ModelItemConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelIntInput | null,
  cost_amount?: ModelIntInput | null,
  rarity_id?: ModelStringInput | null,
  item_type_id?: ModelStringInput | null,
  magic_element_id?: ModelStringInput | null,
  character_attribute_id?: ModelStringInput | null,
  character_attribute_modifer?: ModelIntInput | null,
  cursed_id?: ModelStringInput | null,
  insert_timestamp_UTC?: ModelStringInput | null,
  update_timestamp_UTC?: ModelStringInput | null,
  and?: Array< ModelItemConditionInput | null > | null,
  or?: Array< ModelItemConditionInput | null > | null,
  not?: ModelItemConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Item = {
  __typename: "Item",
  id: string,
  name?: string | null,
  description?: string | null,
  level?: number | null,
  cost_amount?: number | null,
  rarity_id?: string | null,
  item_type_id?: string | null,
  magic_element_id?: string | null,
  character_attribute_id?: string | null,
  character_attribute_modifer?: number | null,
  cursed_id?: string | null,
  insert_timestamp_UTC?: string | null,
  update_timestamp_UTC?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateItemInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  level?: number | null,
  cost_amount?: number | null,
  rarity_id?: string | null,
  item_type_id?: string | null,
  magic_element_id?: string | null,
  character_attribute_id?: string | null,
  character_attribute_modifer?: number | null,
  cursed_id?: string | null,
  insert_timestamp_UTC?: string | null,
  update_timestamp_UTC?: string | null,
};

export type DeleteItemInput = {
  id: string,
};

export type ModelItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  level?: ModelIntInput | null,
  cost_amount?: ModelIntInput | null,
  rarity_id?: ModelStringInput | null,
  item_type_id?: ModelStringInput | null,
  magic_element_id?: ModelStringInput | null,
  character_attribute_id?: ModelStringInput | null,
  character_attribute_modifer?: ModelIntInput | null,
  cursed_id?: ModelStringInput | null,
  insert_timestamp_UTC?: ModelStringInput | null,
  update_timestamp_UTC?: ModelStringInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelItemConnection = {
  __typename: "ModelItemConnection",
  items:  Array<Item | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  level?: ModelSubscriptionIntInput | null,
  cost_amount?: ModelSubscriptionIntInput | null,
  rarity_id?: ModelSubscriptionStringInput | null,
  item_type_id?: ModelSubscriptionStringInput | null,
  magic_element_id?: ModelSubscriptionStringInput | null,
  character_attribute_id?: ModelSubscriptionStringInput | null,
  character_attribute_modifer?: ModelSubscriptionIntInput | null,
  cursed_id?: ModelSubscriptionStringInput | null,
  insert_timestamp_UTC?: ModelSubscriptionStringInput | null,
  update_timestamp_UTC?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type CreateItemMutation = {
  createItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
  condition?: ModelItemConditionInput | null,
};

export type UpdateItemMutation = {
  updateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
  condition?: ModelItemConditionInput | null,
};

export type DeleteItemMutation = {
  deleteItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems?:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      name?: string | null,
      description?: string | null,
      level?: number | null,
      cost_amount?: number | null,
      rarity_id?: string | null,
      item_type_id?: string | null,
      magic_element_id?: string | null,
      character_attribute_id?: string | null,
      character_attribute_modifer?: number | null,
      cursed_id?: string | null,
      insert_timestamp_UTC?: string | null,
      update_timestamp_UTC?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnCreateItemSubscription = {
  onCreateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteItemSubscriptionVariables = {
  filter?: ModelSubscriptionItemFilterInput | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem?:  {
    __typename: "Item",
    id: string,
    name?: string | null,
    description?: string | null,
    level?: number | null,
    cost_amount?: number | null,
    rarity_id?: string | null,
    item_type_id?: string | null,
    magic_element_id?: string | null,
    character_attribute_id?: string | null,
    character_attribute_modifer?: number | null,
    cursed_id?: string | null,
    insert_timestamp_UTC?: string | null,
    update_timestamp_UTC?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
