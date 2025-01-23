// schemas/order.js
export default {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'phone',
        title: 'Phone',
        type: 'string',
      },
      {
        name: 'addressLine1',
        title: 'Address Line 1',
        type: 'string',
      },
      {
        name: 'addressLine2',
        title: 'Address Line 2',
        type: 'string',
      },
      {
        name: 'cityLocality',
        title: 'City',
        type: 'string',
      },
      {
        name: 'stateProvince',
        title: 'State',
        type: 'string',
      },
      {
        name: 'postalCode',
        title: 'Postal Code',
        type: 'string',
      },
      {
        name: 'countryCode',
        title: 'Country Code',
        type: 'string',
      },
      {
        name: 'addressResidentialIndicator',
        title: 'Residential Address',
        type: 'string',
        options: {
          list: [
            { title: 'Yes', value: 'yes' },
            { title: 'No', value: 'no' },
          ],
        },
      },
      {
        name: 'cartItems',
        title: 'Cart Items',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              {
                name: 'title',
                title: 'Title',
                type: 'string',
              },
              {
                name: 'price',
                title: 'Price',
                type: 'number',
              },
              {
                name: 'quantity',
                title: 'Quantity',
                type: 'number',
              },
            ],
          },
        ],
      },
    ],
  };