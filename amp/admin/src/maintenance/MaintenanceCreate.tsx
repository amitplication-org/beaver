import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const MaintenanceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="maintenanceType"
          label="maintenanceType"
          choices={[
            { label: "Clean", value: "Clean" },
            { label: "Pest_Control", value: "PestControl" },
            { label: "Gardening", value: "Gardening" },
            { label: "Design", value: "Design" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
