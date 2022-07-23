import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BULLETINBOARD_TITLE_FIELD } from "../bulletinBoard/BulletinBoardTitle";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const BuildingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Buildings"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
