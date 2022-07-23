import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BULLETINBOARD_TITLE_FIELD } from "../bulletinBoard/BulletinBoardTitle";
import { CITY_TITLE_FIELD } from "./CityTitle";

export const CityShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Building"
          target="CityId"
          label="Buildings"
        >
          <Datagrid rowClick="show">
            <TextField label="buildingType" source="buildingType" />
            <ReferenceField
              label="bulletinBoard"
              source="bulletinboard.id"
              reference="BulletinBoard"
            >
              <TextField source={BULLETINBOARD_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="city" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="loacation" source="loacation" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
