/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getItem } from "../graphql/queries";
import { updateItem } from "../graphql/mutations";
const client = generateClient();
export default function ItemUpdateForm(props) {
  const {
    id: idProp,
    item: itemModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    description: "",
    level: "",
    cost_amount: "",
    rarity_id: "",
    item_type_id: "",
    magic_element_id: "",
    character_attribute_id: "",
    character_attribute_modifer: "",
    cursed_id: "",
    insert_timestamp_UTC: "",
    update_timestamp_UTC: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [level, setLevel] = React.useState(initialValues.level);
  const [cost_amount, setCost_amount] = React.useState(
    initialValues.cost_amount
  );
  const [rarity_id, setRarity_id] = React.useState(initialValues.rarity_id);
  const [item_type_id, setItem_type_id] = React.useState(
    initialValues.item_type_id
  );
  const [magic_element_id, setMagic_element_id] = React.useState(
    initialValues.magic_element_id
  );
  const [character_attribute_id, setCharacter_attribute_id] = React.useState(
    initialValues.character_attribute_id
  );
  const [character_attribute_modifer, setCharacter_attribute_modifer] =
    React.useState(initialValues.character_attribute_modifer);
  const [cursed_id, setCursed_id] = React.useState(initialValues.cursed_id);
  const [insert_timestamp_UTC, setInsert_timestamp_UTC] = React.useState(
    initialValues.insert_timestamp_UTC
  );
  const [update_timestamp_UTC, setUpdate_timestamp_UTC] = React.useState(
    initialValues.update_timestamp_UTC
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = itemRecord
      ? { ...initialValues, ...itemRecord }
      : initialValues;
    setName(cleanValues.name);
    setDescription(cleanValues.description);
    setLevel(cleanValues.level);
    setCost_amount(cleanValues.cost_amount);
    setRarity_id(cleanValues.rarity_id);
    setItem_type_id(cleanValues.item_type_id);
    setMagic_element_id(cleanValues.magic_element_id);
    setCharacter_attribute_id(cleanValues.character_attribute_id);
    setCharacter_attribute_modifer(cleanValues.character_attribute_modifer);
    setCursed_id(cleanValues.cursed_id);
    setInsert_timestamp_UTC(cleanValues.insert_timestamp_UTC);
    setUpdate_timestamp_UTC(cleanValues.update_timestamp_UTC);
    setErrors({});
  };
  const [itemRecord, setItemRecord] = React.useState(itemModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getItem.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getItem
        : itemModelProp;
      setItemRecord(record);
    };
    queryData();
  }, [idProp, itemModelProp]);
  React.useEffect(resetStateValues, [itemRecord]);
  const validations = {
    name: [],
    description: [],
    level: [],
    cost_amount: [],
    rarity_id: [],
    item_type_id: [],
    magic_element_id: [],
    character_attribute_id: [],
    character_attribute_modifer: [],
    cursed_id: [],
    insert_timestamp_UTC: [],
    update_timestamp_UTC: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name: name ?? null,
          description: description ?? null,
          level: level ?? null,
          cost_amount: cost_amount ?? null,
          rarity_id: rarity_id ?? null,
          item_type_id: item_type_id ?? null,
          magic_element_id: magic_element_id ?? null,
          character_attribute_id: character_attribute_id ?? null,
          character_attribute_modifer: character_attribute_modifer ?? null,
          cursed_id: cursed_id ?? null,
          insert_timestamp_UTC: insert_timestamp_UTC ?? null,
          update_timestamp_UTC: update_timestamp_UTC ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateItem.replaceAll("__typename", ""),
            variables: {
              input: {
                id: itemRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "ItemUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description: value,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Level"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={level}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level: value,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.level ?? value;
          }
          if (errors.level?.hasError) {
            runValidationTasks("level", value);
          }
          setLevel(value);
        }}
        onBlur={() => runValidationTasks("level", level)}
        errorMessage={errors.level?.errorMessage}
        hasError={errors.level?.hasError}
        {...getOverrideProps(overrides, "level")}
      ></TextField>
      <TextField
        label="Cost amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={cost_amount}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount: value,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.cost_amount ?? value;
          }
          if (errors.cost_amount?.hasError) {
            runValidationTasks("cost_amount", value);
          }
          setCost_amount(value);
        }}
        onBlur={() => runValidationTasks("cost_amount", cost_amount)}
        errorMessage={errors.cost_amount?.errorMessage}
        hasError={errors.cost_amount?.hasError}
        {...getOverrideProps(overrides, "cost_amount")}
      ></TextField>
      <TextField
        label="Rarity id"
        isRequired={false}
        isReadOnly={false}
        value={rarity_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id: value,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.rarity_id ?? value;
          }
          if (errors.rarity_id?.hasError) {
            runValidationTasks("rarity_id", value);
          }
          setRarity_id(value);
        }}
        onBlur={() => runValidationTasks("rarity_id", rarity_id)}
        errorMessage={errors.rarity_id?.errorMessage}
        hasError={errors.rarity_id?.hasError}
        {...getOverrideProps(overrides, "rarity_id")}
      ></TextField>
      <TextField
        label="Item type id"
        isRequired={false}
        isReadOnly={false}
        value={item_type_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id: value,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.item_type_id ?? value;
          }
          if (errors.item_type_id?.hasError) {
            runValidationTasks("item_type_id", value);
          }
          setItem_type_id(value);
        }}
        onBlur={() => runValidationTasks("item_type_id", item_type_id)}
        errorMessage={errors.item_type_id?.errorMessage}
        hasError={errors.item_type_id?.hasError}
        {...getOverrideProps(overrides, "item_type_id")}
      ></TextField>
      <TextField
        label="Magic element id"
        isRequired={false}
        isReadOnly={false}
        value={magic_element_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id: value,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.magic_element_id ?? value;
          }
          if (errors.magic_element_id?.hasError) {
            runValidationTasks("magic_element_id", value);
          }
          setMagic_element_id(value);
        }}
        onBlur={() => runValidationTasks("magic_element_id", magic_element_id)}
        errorMessage={errors.magic_element_id?.errorMessage}
        hasError={errors.magic_element_id?.hasError}
        {...getOverrideProps(overrides, "magic_element_id")}
      ></TextField>
      <TextField
        label="Character attribute id"
        isRequired={false}
        isReadOnly={false}
        value={character_attribute_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id: value,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.character_attribute_id ?? value;
          }
          if (errors.character_attribute_id?.hasError) {
            runValidationTasks("character_attribute_id", value);
          }
          setCharacter_attribute_id(value);
        }}
        onBlur={() =>
          runValidationTasks("character_attribute_id", character_attribute_id)
        }
        errorMessage={errors.character_attribute_id?.errorMessage}
        hasError={errors.character_attribute_id?.hasError}
        {...getOverrideProps(overrides, "character_attribute_id")}
      ></TextField>
      <TextField
        label="Character attribute modifer"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={character_attribute_modifer}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer: value,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.character_attribute_modifer ?? value;
          }
          if (errors.character_attribute_modifer?.hasError) {
            runValidationTasks("character_attribute_modifer", value);
          }
          setCharacter_attribute_modifer(value);
        }}
        onBlur={() =>
          runValidationTasks(
            "character_attribute_modifer",
            character_attribute_modifer
          )
        }
        errorMessage={errors.character_attribute_modifer?.errorMessage}
        hasError={errors.character_attribute_modifer?.hasError}
        {...getOverrideProps(overrides, "character_attribute_modifer")}
      ></TextField>
      <TextField
        label="Cursed id"
        isRequired={false}
        isReadOnly={false}
        value={cursed_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id: value,
              insert_timestamp_UTC,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.cursed_id ?? value;
          }
          if (errors.cursed_id?.hasError) {
            runValidationTasks("cursed_id", value);
          }
          setCursed_id(value);
        }}
        onBlur={() => runValidationTasks("cursed_id", cursed_id)}
        errorMessage={errors.cursed_id?.errorMessage}
        hasError={errors.cursed_id?.hasError}
        {...getOverrideProps(overrides, "cursed_id")}
      ></TextField>
      <TextField
        label="Insert timestamp utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          insert_timestamp_UTC && convertToLocal(new Date(insert_timestamp_UTC))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC: value,
              update_timestamp_UTC,
            };
            const result = onChange(modelFields);
            value = result?.insert_timestamp_UTC ?? value;
          }
          if (errors.insert_timestamp_UTC?.hasError) {
            runValidationTasks("insert_timestamp_UTC", value);
          }
          setInsert_timestamp_UTC(value);
        }}
        onBlur={() =>
          runValidationTasks("insert_timestamp_UTC", insert_timestamp_UTC)
        }
        errorMessage={errors.insert_timestamp_UTC?.errorMessage}
        hasError={errors.insert_timestamp_UTC?.hasError}
        {...getOverrideProps(overrides, "insert_timestamp_UTC")}
      ></TextField>
      <TextField
        label="Update timestamp utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          update_timestamp_UTC && convertToLocal(new Date(update_timestamp_UTC))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              name,
              description,
              level,
              cost_amount,
              rarity_id,
              item_type_id,
              magic_element_id,
              character_attribute_id,
              character_attribute_modifer,
              cursed_id,
              insert_timestamp_UTC,
              update_timestamp_UTC: value,
            };
            const result = onChange(modelFields);
            value = result?.update_timestamp_UTC ?? value;
          }
          if (errors.update_timestamp_UTC?.hasError) {
            runValidationTasks("update_timestamp_UTC", value);
          }
          setUpdate_timestamp_UTC(value);
        }}
        onBlur={() =>
          runValidationTasks("update_timestamp_UTC", update_timestamp_UTC)
        }
        errorMessage={errors.update_timestamp_UTC?.errorMessage}
        hasError={errors.update_timestamp_UTC?.hasError}
        {...getOverrideProps(overrides, "update_timestamp_UTC")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || itemModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || itemModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
