import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { BUILDING_TITLE_FIELD } from "./BuildingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { BULLETINBOARD_TITLE_FIELD } from "../bulletinBoard/BulletinBoardTitle";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const BuildingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <ReferenceManyField
          reference="Company"
          target="BuildingId"
          label="Companies"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Building"
              source="building.id"
              reference="Building"
            >
              <TextField source={BUILDING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Report"
          target="BuildingId"
          label="Reports"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="building"
              source="building.id"
              reference="Building"
            >
              <TextField source={BUILDING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
