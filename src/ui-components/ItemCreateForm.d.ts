/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ItemCreateFormInputValues = {
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
};
export declare type ItemCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    level?: ValidationFunction<number>;
    cost_amount?: ValidationFunction<number>;
    rarity_id?: ValidationFunction<string>;
    item_type_id?: ValidationFunction<string>;
    magic_element_id?: ValidationFunction<string>;
    character_attribute_id?: ValidationFunction<string>;
    character_attribute_modifer?: ValidationFunction<number>;
    cursed_id?: ValidationFunction<string>;
    insert_timestamp_UTC?: ValidationFunction<string>;
    update_timestamp_UTC?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ItemCreateFormOverridesProps = {
    ItemCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    level?: PrimitiveOverrideProps<TextFieldProps>;
    cost_amount?: PrimitiveOverrideProps<TextFieldProps>;
    rarity_id?: PrimitiveOverrideProps<TextFieldProps>;
    item_type_id?: PrimitiveOverrideProps<TextFieldProps>;
    magic_element_id?: PrimitiveOverrideProps<TextFieldProps>;
    character_attribute_id?: PrimitiveOverrideProps<TextFieldProps>;
    character_attribute_modifer?: PrimitiveOverrideProps<TextFieldProps>;
    cursed_id?: PrimitiveOverrideProps<TextFieldProps>;
    insert_timestamp_UTC?: PrimitiveOverrideProps<TextFieldProps>;
    update_timestamp_UTC?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type ItemCreateFormProps = React.PropsWithChildren<{
    overrides?: ItemCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onSuccess?: (fields: ItemCreateFormInputValues) => void;
    onError?: (fields: ItemCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ItemCreateFormInputValues) => ItemCreateFormInputValues;
    onValidate?: ItemCreateFormValidationValues;
} & React.CSSProperties>;
export default function ItemCreateForm(props: ItemCreateFormProps): React.ReactElement;
