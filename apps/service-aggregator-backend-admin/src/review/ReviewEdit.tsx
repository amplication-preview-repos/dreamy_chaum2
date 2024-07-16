import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { ServiceListingTitle } from "../serviceListing/ServiceListingTitle";

export const ReviewEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="rating" source="rating" />
        <TextInput label="comment" multiline source="comment" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="serviceListing.id"
          reference="ServiceListing"
          label="ServiceListing"
        >
          <SelectInput optionText={ServiceListingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
