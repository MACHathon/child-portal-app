import { LoggedInUserClient } from "../Clients/APIClient";

const getDeliveryOptionKey = (option: string) => {
  if (option == 'to post') return 'post'
  if (option == 'to drop off locally ( within 5 miles )') return 'drop off locally'
  if (option == 'to deliver ( within 20 miles )') return 'deliver'
  return 'collection'
}


export const createItem =  async(categoryId: string, name: string, description:string, postCode: string, childid: string, ageRange: string, condition: string, deliveryOptions: string[], brand: string) => {
  
  // This is horrible.. very sorry.
  console.log(deliveryOptions)
  deliveryOptions = deliveryOptions.map(option => getDeliveryOptionKey(option));

  let slug = name.replace(/\s+/g, "-").toLowerCase();
  let toyType = "6102b311-bdc5-4760-b43f-ab7061cf74ea";

  let createdProduct = await LoggedInUserClient.products()
    .post({
      body: {
        productType: {
          id: toyType,
          typeId: "product-type",
        },
        categories: [
          {
            typeId: "category",
            id: categoryId,
          },
        ],
        name: {
          "en-GB": name,
          "de-DE": name,
        },
        slug: {
          "en-GB": slug,
          "de-DE": slug,
        },
        masterVariant: {
          sku: `${childid}-${slug}`,
          attributes: [
            {
              name: "age-range",
              value: ageRange,
            },
            {
              name: "toy-condition",
              value: condition,
            },
            {
              name: "brand",
              value: brand,
            },
            {
              name: "description",
              value: description,
            },
            {
              name: "child-id",
              value: childid,
            },
            {
              name: "donator-postcode",
              value: postCode,
            },
            {
              name: "delivery-option",
              value:deliveryOptions
            },
          ],
          // prices: [
          //   {
          //     value: {
          //       currencyCode: "EUR",
          //       centAmount: 4200,
          //     },
          //   },
          // ],
          images: [
            {
              url: "http://my.custom.cdn.net/master.png",
              label: "Master Image",
              dimensions: {
                w: 303,
                h: 197,
              },
            },
          ],
        },
        // variants: [
        //   {
        //     attributes: [
        //       {
        //         name: "age-range",
        //         value: "5-8",
        //       },
        //       {
        //         name: "toy-condition",
        //         value: "Used - good",
        //       },
        //       {
        //         name: "brand",
        //         value: "Barbie",
        //       },
        //     ],
        //     images: [
        //       {
        //         url: "http://my.custom.cdn.net/variant.png",
        //         label: "Variant Image",
        //         dimensions: {
        //           w: 303,
        //           h: 197,
        //         },
        //       },
        //     ],
        //   },
        // ],
      },
    })
    .execute();

    LoggedInUserClient.products().withId({ ID: createdProduct.body.id }).post( { body: {
      version: createdProduct.body.version, 
      actions: [
         {
           action: "publish",
           scope: "All"       
         }
       ]
     }}).execute();

     return createdProduct;
};

// const getProductProjectionByQuery = ({
//   locale,
//   slug,
// }: GetProductQueryParams): Promise<
//   ClientResponse<ProductProjectionPagedQueryResponse>
// > => {
//   return AnonUserClient.productProjections()
//     .get({
//       queryArgs: {
//         priceCurrency: "GBP",
//         localeProjection: locale,
//         where: 'id="1d89308d-a70f-4f1d-9cd0-6e6227f1bdd0"',
//         limit: 1,
//         expand: "productType",
//       },
//     })
//     .execute();
// };

// export const getProduct = async (
//   queryParams: GetProductQueryParams
// ): Promise<ProductProjection | null> => {
//   try {
//     const {
//       count,
//       results: [product],
//     } = (await getProductProjectionByQuery(queryParams)).body;

//     return count !== 0 ? product : null;
//   } catch (error) {
//     if (error.statusCode !== 404) throw error;

//     return null;
//   }
// };
