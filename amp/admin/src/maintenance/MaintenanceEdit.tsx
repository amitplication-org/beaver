import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
} from "react-admin";

export const MaintenanceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
