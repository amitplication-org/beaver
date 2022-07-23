import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";
import { UserTitle } from "../user/UserTitle";

export const PollEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="buildings"
          reference="Building"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BuildingTitle} />
        </ReferenceArrayInput>
        <div />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <SelectInput
          source="pollType"
          label="pollType"
          choices={[
            { label: "General", value: "General" },
            { label: "Maintenance", value: "Maintenance" },
            { label: "Committee", value: "Committee" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
