import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { CompanyTitle } from "../company/CompanyTitle";
import { UserTitle } from "../user/UserTitle";

export const CustomerCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="company.id" reference="Company" label="company">
          <SelectInput optionText={CompanyTitle} />
        </ReferenceInput>
        <SelectInput
          source="customerType"
          label="customerType"
          choices={[
            { label: "Gold", value: "Gold" },
            { label: "Silver", value: "Silver" },
            { label: "Bronze", value: "Bronze" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="firstName" source="firstName" />
        <TextInput label="lastName" source="lastName" />
        <ReferenceInput source="user.id" reference="User" label="user">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
