import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";

import { BuildingTitle } from "../building/BuildingTitle";
import { BulletinBoardTitle } from "../bulletinBoard/BulletinBoardTitle";
import { UserTitle } from "../user/UserTitle";

export const MessageEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput
          source="bulletinboard.id"
          reference="BulletinBoard"
          label="BulletinBoard"
        >
          <SelectInput optionText={BulletinBoardTitle} />
        </ReferenceInput>
        <TextInput label="content" multiline source="content" />
        <TextInput label="title" source="title" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
