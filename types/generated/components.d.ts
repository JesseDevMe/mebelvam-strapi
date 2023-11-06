import type { Schema, Attribute } from '@strapi/strapi';

export interface FieldsCart extends Schema.Component {
  collectionName: 'components_fields_carts';
  info: {
    displayName: 'Cart';
  };
  attributes: {
    furniture: Attribute.Relation<
      'fields.cart',
      'oneToOne',
      'api::furniture.furniture'
    >;
    count: Attribute.Integer & Attribute.Required & Attribute.DefaultTo<1>;
    variant_id: Attribute.Integer;
    attribute_id: Attribute.Integer;
  };
}

export interface FieldsColor extends Schema.Component {
  collectionName: 'components_fields_colors';
  info: {
    displayName: 'Color';
  };
  attributes: {
    color: Attribute.String;
  };
}

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

export interface FieldsSizeAndPrice extends Schema.Component {
  collectionName: 'components_fields_size_and_prices';
  info: {
    displayName: 'Size and Price';
    description: '';
  };
  attributes: {
    price: Attribute.Integer & Attribute.Required;
    width: Attribute.Integer & Attribute.Required;
    depth: Attribute.Integer;
    height: Attribute.Integer & Attribute.Required;
    old_price: Attribute.Integer;
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

export interface FieldsVariants extends Schema.Component {
  collectionName: 'components_fields_variants';
  info: {
    displayName: 'Variants';
    description: '';
  };
  attributes: {
    color: Attribute.String & Attribute.Required;
    attributes: Attribute.Component<'fields.size-and-price', true> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'fields.cart': FieldsCart;
      'fields.color': FieldsColor;
      'fields.module-info': FieldsModuleInfo;
      'fields.size-and-price': FieldsSizeAndPrice;
      'fields.size': FieldsSize;
      'fields.variants': FieldsVariants;
    }
  }
}
