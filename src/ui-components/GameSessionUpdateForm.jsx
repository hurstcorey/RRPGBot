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
import { getGameSession } from "../graphql/queries";
import { updateGameSession } from "../graphql/mutations";
const client = generateClient();
export default function GameSessionUpdateForm(props) {
  const {
    id: idProp,
    gameSession: gameSessionModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user_id: "",
    character_id: "",
    campign_id: "",
    adventure_id: "",
    villian_id: "",
    setting_id: "",
    play_time_sec: "",
    play_time_start_utc: "",
    play_time_end_utc: "",
    insert_user_id: "",
    insert_dt_utc: "",
    update_user_id: "",
    update_dt_utc: "",
  };
  const [user_id, setUser_id] = React.useState(initialValues.user_id);
  const [character_id, setCharacter_id] = React.useState(
    initialValues.character_id
  );
  const [campign_id, setCampign_id] = React.useState(initialValues.campign_id);
  const [adventure_id, setAdventure_id] = React.useState(
    initialValues.adventure_id
  );
  const [villian_id, setVillian_id] = React.useState(initialValues.villian_id);
  const [setting_id, setSetting_id] = React.useState(initialValues.setting_id);
  const [play_time_sec, setPlay_time_sec] = React.useState(
    initialValues.play_time_sec
  );
  const [play_time_start_utc, setPlay_time_start_utc] = React.useState(
    initialValues.play_time_start_utc
  );
  const [play_time_end_utc, setPlay_time_end_utc] = React.useState(
    initialValues.play_time_end_utc
  );
  const [insert_user_id, setInsert_user_id] = React.useState(
    initialValues.insert_user_id
  );
  const [insert_dt_utc, setInsert_dt_utc] = React.useState(
    initialValues.insert_dt_utc
  );
  const [update_user_id, setUpdate_user_id] = React.useState(
    initialValues.update_user_id
  );
  const [update_dt_utc, setUpdate_dt_utc] = React.useState(
    initialValues.update_dt_utc
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = gameSessionRecord
      ? { ...initialValues, ...gameSessionRecord }
      : initialValues;
    setUser_id(cleanValues.user_id);
    setCharacter_id(cleanValues.character_id);
    setCampign_id(cleanValues.campign_id);
    setAdventure_id(cleanValues.adventure_id);
    setVillian_id(cleanValues.villian_id);
    setSetting_id(cleanValues.setting_id);
    setPlay_time_sec(cleanValues.play_time_sec);
    setPlay_time_start_utc(cleanValues.play_time_start_utc);
    setPlay_time_end_utc(cleanValues.play_time_end_utc);
    setInsert_user_id(cleanValues.insert_user_id);
    setInsert_dt_utc(cleanValues.insert_dt_utc);
    setUpdate_user_id(cleanValues.update_user_id);
    setUpdate_dt_utc(cleanValues.update_dt_utc);
    setErrors({});
  };
  const [gameSessionRecord, setGameSessionRecord] =
    React.useState(gameSessionModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getGameSession.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getGameSession
        : gameSessionModelProp;
      setGameSessionRecord(record);
    };
    queryData();
  }, [idProp, gameSessionModelProp]);
  React.useEffect(resetStateValues, [gameSessionRecord]);
  const validations = {
    user_id: [{ type: "Required" }],
    character_id: [{ type: "Required" }],
    campign_id: [],
    adventure_id: [{ type: "Required" }],
    villian_id: [],
    setting_id: [{ type: "Required" }],
    play_time_sec: [],
    play_time_start_utc: [],
    play_time_end_utc: [],
    insert_user_id: [],
    insert_dt_utc: [],
    update_user_id: [],
    update_dt_utc: [],
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
          user_id,
          character_id,
          campign_id: campign_id ?? null,
          adventure_id,
          villian_id: villian_id ?? null,
          setting_id,
          play_time_sec: play_time_sec ?? null,
          play_time_start_utc: play_time_start_utc ?? null,
          play_time_end_utc: play_time_end_utc ?? null,
          insert_user_id: insert_user_id ?? null,
          insert_dt_utc: insert_dt_utc ?? null,
          update_user_id: update_user_id ?? null,
          update_dt_utc: update_dt_utc ?? null,
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
            query: updateGameSession.replaceAll("__typename", ""),
            variables: {
              input: {
                id: gameSessionRecord.id,
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
      {...getOverrideProps(overrides, "GameSessionUpdateForm")}
      {...rest}
    >
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={user_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id: value,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.user_id ?? value;
          }
          if (errors.user_id?.hasError) {
            runValidationTasks("user_id", value);
          }
          setUser_id(value);
        }}
        onBlur={() => runValidationTasks("user_id", user_id)}
        errorMessage={errors.user_id?.errorMessage}
        hasError={errors.user_id?.hasError}
        {...getOverrideProps(overrides, "user_id")}
      ></TextField>
      <TextField
        label="Character id"
        isRequired={true}
        isReadOnly={false}
        value={character_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              character_id: value,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.character_id ?? value;
          }
          if (errors.character_id?.hasError) {
            runValidationTasks("character_id", value);
          }
          setCharacter_id(value);
        }}
        onBlur={() => runValidationTasks("character_id", character_id)}
        errorMessage={errors.character_id?.errorMessage}
        hasError={errors.character_id?.hasError}
        {...getOverrideProps(overrides, "character_id")}
      ></TextField>
      <TextField
        label="Campign id"
        isRequired={false}
        isReadOnly={false}
        value={campign_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id: value,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.campign_id ?? value;
          }
          if (errors.campign_id?.hasError) {
            runValidationTasks("campign_id", value);
          }
          setCampign_id(value);
        }}
        onBlur={() => runValidationTasks("campign_id", campign_id)}
        errorMessage={errors.campign_id?.errorMessage}
        hasError={errors.campign_id?.hasError}
        {...getOverrideProps(overrides, "campign_id")}
      ></TextField>
      <TextField
        label="Adventure id"
        isRequired={true}
        isReadOnly={false}
        value={adventure_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id: value,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.adventure_id ?? value;
          }
          if (errors.adventure_id?.hasError) {
            runValidationTasks("adventure_id", value);
          }
          setAdventure_id(value);
        }}
        onBlur={() => runValidationTasks("adventure_id", adventure_id)}
        errorMessage={errors.adventure_id?.errorMessage}
        hasError={errors.adventure_id?.hasError}
        {...getOverrideProps(overrides, "adventure_id")}
      ></TextField>
      <TextField
        label="Villian id"
        isRequired={false}
        isReadOnly={false}
        value={villian_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id: value,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.villian_id ?? value;
          }
          if (errors.villian_id?.hasError) {
            runValidationTasks("villian_id", value);
          }
          setVillian_id(value);
        }}
        onBlur={() => runValidationTasks("villian_id", villian_id)}
        errorMessage={errors.villian_id?.errorMessage}
        hasError={errors.villian_id?.hasError}
        {...getOverrideProps(overrides, "villian_id")}
      ></TextField>
      <TextField
        label="Setting id"
        isRequired={true}
        isReadOnly={false}
        value={setting_id}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id: value,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.setting_id ?? value;
          }
          if (errors.setting_id?.hasError) {
            runValidationTasks("setting_id", value);
          }
          setSetting_id(value);
        }}
        onBlur={() => runValidationTasks("setting_id", setting_id)}
        errorMessage={errors.setting_id?.errorMessage}
        hasError={errors.setting_id?.hasError}
        {...getOverrideProps(overrides, "setting_id")}
      ></TextField>
      <TextField
        label="Play time sec"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={play_time_sec}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec: value,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.play_time_sec ?? value;
          }
          if (errors.play_time_sec?.hasError) {
            runValidationTasks("play_time_sec", value);
          }
          setPlay_time_sec(value);
        }}
        onBlur={() => runValidationTasks("play_time_sec", play_time_sec)}
        errorMessage={errors.play_time_sec?.errorMessage}
        hasError={errors.play_time_sec?.hasError}
        {...getOverrideProps(overrides, "play_time_sec")}
      ></TextField>
      <TextField
        label="Play time start utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={
          play_time_start_utc && convertToLocal(new Date(play_time_start_utc))
        }
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc: value,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.play_time_start_utc ?? value;
          }
          if (errors.play_time_start_utc?.hasError) {
            runValidationTasks("play_time_start_utc", value);
          }
          setPlay_time_start_utc(value);
        }}
        onBlur={() =>
          runValidationTasks("play_time_start_utc", play_time_start_utc)
        }
        errorMessage={errors.play_time_start_utc?.errorMessage}
        hasError={errors.play_time_start_utc?.hasError}
        {...getOverrideProps(overrides, "play_time_start_utc")}
      ></TextField>
      <TextField
        label="Play time end utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={play_time_end_utc && convertToLocal(new Date(play_time_end_utc))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc: value,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.play_time_end_utc ?? value;
          }
          if (errors.play_time_end_utc?.hasError) {
            runValidationTasks("play_time_end_utc", value);
          }
          setPlay_time_end_utc(value);
        }}
        onBlur={() =>
          runValidationTasks("play_time_end_utc", play_time_end_utc)
        }
        errorMessage={errors.play_time_end_utc?.errorMessage}
        hasError={errors.play_time_end_utc?.hasError}
        {...getOverrideProps(overrides, "play_time_end_utc")}
      ></TextField>
      <TextField
        label="Insert user id"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={insert_user_id && convertToLocal(new Date(insert_user_id))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id: value,
              insert_dt_utc,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.insert_user_id ?? value;
          }
          if (errors.insert_user_id?.hasError) {
            runValidationTasks("insert_user_id", value);
          }
          setInsert_user_id(value);
        }}
        onBlur={() => runValidationTasks("insert_user_id", insert_user_id)}
        errorMessage={errors.insert_user_id?.errorMessage}
        hasError={errors.insert_user_id?.hasError}
        {...getOverrideProps(overrides, "insert_user_id")}
      ></TextField>
      <TextField
        label="Insert dt utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={insert_dt_utc && convertToLocal(new Date(insert_dt_utc))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc: value,
              update_user_id,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.insert_dt_utc ?? value;
          }
          if (errors.insert_dt_utc?.hasError) {
            runValidationTasks("insert_dt_utc", value);
          }
          setInsert_dt_utc(value);
        }}
        onBlur={() => runValidationTasks("insert_dt_utc", insert_dt_utc)}
        errorMessage={errors.insert_dt_utc?.errorMessage}
        hasError={errors.insert_dt_utc?.hasError}
        {...getOverrideProps(overrides, "insert_dt_utc")}
      ></TextField>
      <TextField
        label="Update user id"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={update_user_id && convertToLocal(new Date(update_user_id))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id: value,
              update_dt_utc,
            };
            const result = onChange(modelFields);
            value = result?.update_user_id ?? value;
          }
          if (errors.update_user_id?.hasError) {
            runValidationTasks("update_user_id", value);
          }
          setUpdate_user_id(value);
        }}
        onBlur={() => runValidationTasks("update_user_id", update_user_id)}
        errorMessage={errors.update_user_id?.errorMessage}
        hasError={errors.update_user_id?.hasError}
        {...getOverrideProps(overrides, "update_user_id")}
      ></TextField>
      <TextField
        label="Update dt utc"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={update_dt_utc && convertToLocal(new Date(update_dt_utc))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              user_id,
              character_id,
              campign_id,
              adventure_id,
              villian_id,
              setting_id,
              play_time_sec,
              play_time_start_utc,
              play_time_end_utc,
              insert_user_id,
              insert_dt_utc,
              update_user_id,
              update_dt_utc: value,
            };
            const result = onChange(modelFields);
            value = result?.update_dt_utc ?? value;
          }
          if (errors.update_dt_utc?.hasError) {
            runValidationTasks("update_dt_utc", value);
          }
          setUpdate_dt_utc(value);
        }}
        onBlur={() => runValidationTasks("update_dt_utc", update_dt_utc)}
        errorMessage={errors.update_dt_utc?.errorMessage}
        hasError={errors.update_dt_utc?.hasError}
        {...getOverrideProps(overrides, "update_dt_utc")}
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
          isDisabled={!(idProp || gameSessionModelProp)}
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
              !(idProp || gameSessionModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
