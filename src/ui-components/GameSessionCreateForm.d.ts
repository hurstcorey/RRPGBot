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
export declare type GameSessionCreateFormInputValues = {
    user_id?: string;
    character_id?: string;
    campign_id?: string;
    adventure_id?: string;
    villian_id?: string;
    setting_id?: string;
    play_time_sec?: number;
    play_time_start_utc?: string;
    play_time_end_utc?: string;
    insert_user_id?: string;
    insert_dt_utc?: string;
    update_user_id?: string;
    update_dt_utc?: string;
};
export declare type GameSessionCreateFormValidationValues = {
    user_id?: ValidationFunction<string>;
    character_id?: ValidationFunction<string>;
    campign_id?: ValidationFunction<string>;
    adventure_id?: ValidationFunction<string>;
    villian_id?: ValidationFunction<string>;
    setting_id?: ValidationFunction<string>;
    play_time_sec?: ValidationFunction<number>;
    play_time_start_utc?: ValidationFunction<string>;
    play_time_end_utc?: ValidationFunction<string>;
    insert_user_id?: ValidationFunction<string>;
    insert_dt_utc?: ValidationFunction<string>;
    update_user_id?: ValidationFunction<string>;
    update_dt_utc?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type GameSessionCreateFormOverridesProps = {
    GameSessionCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user_id?: PrimitiveOverrideProps<TextFieldProps>;
    character_id?: PrimitiveOverrideProps<TextFieldProps>;
    campign_id?: PrimitiveOverrideProps<TextFieldProps>;
    adventure_id?: PrimitiveOverrideProps<TextFieldProps>;
    villian_id?: PrimitiveOverrideProps<TextFieldProps>;
    setting_id?: PrimitiveOverrideProps<TextFieldProps>;
    play_time_sec?: PrimitiveOverrideProps<TextFieldProps>;
    play_time_start_utc?: PrimitiveOverrideProps<TextFieldProps>;
    play_time_end_utc?: PrimitiveOverrideProps<TextFieldProps>;
    insert_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    insert_dt_utc?: PrimitiveOverrideProps<TextFieldProps>;
    update_user_id?: PrimitiveOverrideProps<TextFieldProps>;
    update_dt_utc?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type GameSessionCreateFormProps = React.PropsWithChildren<{
    overrides?: GameSessionCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: GameSessionCreateFormInputValues) => GameSessionCreateFormInputValues;
    onSuccess?: (fields: GameSessionCreateFormInputValues) => void;
    onError?: (fields: GameSessionCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: GameSessionCreateFormInputValues) => GameSessionCreateFormInputValues;
    onValidate?: GameSessionCreateFormValidationValues;
} & React.CSSProperties>;
export default function GameSessionCreateForm(props: GameSessionCreateFormProps): React.ReactElement;
