import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  ReferenceInput,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { BulletinBoardTitle } from "../bulletinBoard/BulletinBoardTitle";
import { CityTitle } from "../city/CityTitle";
import { CompanyTitle } from "../company/CompanyTitle";
import { MessageTitle } from "../message/MessageTitle";
import { PollTitle } from "../poll/PollTitle";
import { ReportTitle } from "../report/ReportTitle";

export const BuildingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <SelectInput
          source="buildingType"
          label="buildingType"
          choices={[
            { label: "Residence", value: "Residence" },
            { label: "Office", value: "Office" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="bulletinboard.id"
          reference="BulletinBoard"
          label="bulletinBoard"
        >
          <SelectInput optionText={BulletinBoardTitle} />
        </ReferenceInput>
        <ReferenceInput source="city.id" reference="City" label="city">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="companies"
          reference="Company"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CompanyTitle} />
        </ReferenceArrayInput>
        <TextInput label="loacation" source="loacation" />
        <ReferenceArrayInput
          source="message"
          reference="Message"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MessageTitle} />
        </ReferenceArrayInput>
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="poll"
          reference="Poll"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PollTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="reports"
          reference="Report"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReportTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
