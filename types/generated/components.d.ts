import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsModuleInfo extends Schema.Component {
  collectionName: 'components_fields_module_infos';
  info: {
    displayName: 'modules';
    description: '';
  };
  attributes: {
    furniture: Attribute.Relation<
      'fields.module-info',
      'oneToOne',
      'api::furniture.furniture'
    >;
    count: Attribute.Integer &
      Attribute.Required &
      Attribute.SetMinMax<{
        min: 1;
      }> &
      Attribute.DefaultTo<1>;
  };
}

export interface FieldsSize extends Schema.Component {
  collectionName: 'components_fields_sizes';
  info: {
    displayName: 'Size';
  };
  attributes: {
    width: Attribute.Integer;
    height: Attribute.Integer;
    depth: Attribute.Integer;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'fields.module-info': FieldsModuleInfo;
      'fields.size': FieldsSize;
    }
  }
}
