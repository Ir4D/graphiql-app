// Запрос:
// const Schema = `
//   query {
//     __schema {
//       queryType {
//         fields {
//           name
//         }
//       }
//     }
//   }
// `;

// Ответ:
// {
//   "__schema": {
//     "queryType": {
//       "fields": [
//         {
//           "name": "character"
//         },
//         {
//           "name": "characters"
//         },
//         {
//           "name": "charactersByIds"
//         },
//         {
//           "name": "location"
//         },
//         {
//           "name": "locations"
//         },
//         {
//           "name": "locationsByIds"
//         },
//         {
//           "name": "episode"
//         },
//         {
//           "name": "episodes"
//         },
//         {
//           "name": "episodesByIds"
//         }
//       ]
//     }
//   }
// }

const Schema = `
  fragment FullType on __Type {
    kind
    name
    fields(includeDeprecated: true) {
      name
      args {
        ...InputValue
      }
      type {
        ...TypeRef
      }
      isDeprecated
      deprecationReason
    }
    inputFields {
      ...InputValue
    }
    interfaces {
      ...TypeRef
    }
    enumValues(includeDeprecated: true) {
      name
      isDeprecated
      deprecationReason
    }
    possibleTypes {
      ...TypeRef
    }
  }
  fragment InputValue on __InputValue {
    name
    type {
      ...TypeRef
    }
    defaultValue
  }
  fragment TypeRef on __Type {
    kind
    name
    ofType {
      kind
      name
      ofType {
        kind
        name
        ofType {
          kind
          name
          ofType {
            kind
            name
            ofType {
              kind
              name
              ofType {
                kind
                name
                ofType {
                  kind
                  name
                }
              }
            }
          }
        }
      }
    }
  }
  query IntrospectionQuery {
    __schema {
      queryType {
        name
      }
      mutationType {
        name
      }
      types {
        ...FullType
      }
      directives {
        name
        locations
        args {
          ...InputValue
        }
      }
    }
  }
`;

export default Schema;

// Ответ:
// {
//   "__schema": {
//     "queryType": {
//       "name": "Query"
//     },
//     "mutationType": null,
//     "types": [
//       {
//         "kind": "OBJECT",
//         "name": "Query",
//         "fields": [
//           {
//             "name": "character",
//             "args": [
//               {
//                 "name": "id",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "SCALAR",
//                     "name": "ID",
//                     "ofType": null
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Character",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "characters",
//             "args": [
//               {
//                 "name": "page",
//                 "type": {
//                   "kind": "SCALAR",
//                   "name": "Int",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               },
//               {
//                 "name": "filter",
//                 "type": {
//                   "kind": "INPUT_OBJECT",
//                   "name": "FilterCharacter",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Characters",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "charactersByIds",
//             "args": [
//               {
//                 "name": "ids",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "LIST",
//                     "name": null,
//                     "ofType": {
//                       "kind": "NON_NULL",
//                       "name": null,
//                       "ofType": {
//                         "kind": "SCALAR",
//                         "name": "ID",
//                         "ofType": null
//                       }
//                     }
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Character",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "location",
//             "args": [
//               {
//                 "name": "id",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "SCALAR",
//                     "name": "ID",
//                     "ofType": null
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Location",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "locations",
//             "args": [
//               {
//                 "name": "page",
//                 "type": {
//                   "kind": "SCALAR",
//                   "name": "Int",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               },
//               {
//                 "name": "filter",
//                 "type": {
//                   "kind": "INPUT_OBJECT",
//                   "name": "FilterLocation",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Locations",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "locationsByIds",
//             "args": [
//               {
//                 "name": "ids",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "LIST",
//                     "name": null,
//                     "ofType": {
//                       "kind": "NON_NULL",
//                       "name": null,
//                       "ofType": {
//                         "kind": "SCALAR",
//                         "name": "ID",
//                         "ofType": null
//                       }
//                     }
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Location",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "episode",
//             "args": [
//               {
//                 "name": "id",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "SCALAR",
//                     "name": "ID",
//                     "ofType": null
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Episode",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "episodes",
//             "args": [
//               {
//                 "name": "page",
//                 "type": {
//                   "kind": "SCALAR",
//                   "name": "Int",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               },
//               {
//                 "name": "filter",
//                 "type": {
//                   "kind": "INPUT_OBJECT",
//                   "name": "FilterEpisode",
//                   "ofType": null
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Episodes",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "episodesByIds",
//             "args": [
//               {
//                 "name": "ids",
//                 "type": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "LIST",
//                     "name": null,
//                     "ofType": {
//                       "kind": "NON_NULL",
//                       "name": null,
//                       "ofType": {
//                         "kind": "SCALAR",
//                         "name": "ID",
//                         "ofType": null
//                       }
//                     }
//                   }
//                 },
//                 "defaultValue": null
//               }
//             ],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Episode",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "SCALAR",
//         "name": "ID",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Character",
//         "fields": [
//           {
//             "name": "id",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "ID",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "status",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "species",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "type",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "gender",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "origin",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Location",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "location",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Location",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "image",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "episode",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "Episode",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "created",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "SCALAR",
//         "name": "String",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Location",
//         "fields": [
//           {
//             "name": "id",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "ID",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "type",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "dimension",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "residents",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "Character",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "created",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Episode",
//         "fields": [
//           {
//             "name": "id",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "ID",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "air_date",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "episode",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "characters",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "Character",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "created",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "SCALAR",
//         "name": "Int",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "INPUT_OBJECT",
//         "name": "FilterCharacter",
//         "fields": null,
//         "inputFields": [
//           {
//             "name": "name",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "status",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "species",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "type",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "gender",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           }
//         ],
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Characters",
//         "fields": [
//           {
//             "name": "info",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Info",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "results",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Character",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Info",
//         "fields": [
//           {
//             "name": "count",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "Int",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "pages",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "Int",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "next",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "Int",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "prev",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "Int",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "INPUT_OBJECT",
//         "name": "FilterLocation",
//         "fields": null,
//         "inputFields": [
//           {
//             "name": "name",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "type",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "dimension",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           }
//         ],
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Locations",
//         "fields": [
//           {
//             "name": "info",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Info",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "results",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Location",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "INPUT_OBJECT",
//         "name": "FilterEpisode",
//         "fields": null,
//         "inputFields": [
//           {
//             "name": "name",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "episode",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": null
//           }
//         ],
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "Episodes",
//         "fields": [
//           {
//             "name": "info",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "Info",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "results",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "Episode",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__Schema",
//         "fields": [
//           {
//             "name": "types",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "OBJECT",
//                     "name": "__Type",
//                     "ofType": null
//                   }
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "queryType",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "__Type",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "mutationType",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "__Type",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "subscriptionType",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "__Type",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "directives",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "OBJECT",
//                     "name": "__Directive",
//                     "ofType": null
//                   }
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__Type",
//         "fields": [
//           {
//             "name": "kind",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "ENUM",
//                 "name": "__TypeKind",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "description",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "fields",
//             "args": [
//               {
//                 "name": "includeDeprecated",
//                 "type": {
//                   "kind": "SCALAR",
//                   "name": "Boolean",
//                   "ofType": null
//                 },
//                 "defaultValue": "false"
//               }
//             ],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "NON_NULL",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "__Field",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "interfaces",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "NON_NULL",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "__Type",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "possibleTypes",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "NON_NULL",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "__Type",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "enumValues",
//             "args": [
//               {
//                 "name": "includeDeprecated",
//                 "type": {
//                   "kind": "SCALAR",
//                   "name": "Boolean",
//                   "ofType": null
//                 },
//                 "defaultValue": "false"
//               }
//             ],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "NON_NULL",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "__EnumValue",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "inputFields",
//             "args": [],
//             "type": {
//               "kind": "LIST",
//               "name": null,
//               "ofType": {
//                 "kind": "NON_NULL",
//                 "name": null,
//                 "ofType": {
//                   "kind": "OBJECT",
//                   "name": "__InputValue",
//                   "ofType": null
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "ofType",
//             "args": [],
//             "type": {
//               "kind": "OBJECT",
//               "name": "__Type",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "ENUM",
//         "name": "__TypeKind",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": [
//           {
//             "name": "SCALAR",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "OBJECT",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INTERFACE",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "UNION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "ENUM",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INPUT_OBJECT",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "LIST",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "NON_NULL",
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "possibleTypes": null
//       },
//       {
//         "kind": "SCALAR",
//         "name": "Boolean",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__Field",
//         "fields": [
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "String",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "description",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "args",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "OBJECT",
//                     "name": "__InputValue",
//                     "ofType": null
//                   }
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "type",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "__Type",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "isDeprecated",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "Boolean",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "deprecationReason",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__InputValue",
//         "fields": [
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "String",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "description",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "type",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "OBJECT",
//                 "name": "__Type",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "defaultValue",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__EnumValue",
//         "fields": [
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "String",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "description",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "isDeprecated",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "Boolean",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "deprecationReason",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "OBJECT",
//         "name": "__Directive",
//         "fields": [
//           {
//             "name": "name",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "String",
//                 "ofType": null
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "description",
//             "args": [],
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "locations",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "ENUM",
//                     "name": "__DirectiveLocation",
//                     "ofType": null
//                   }
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "args",
//             "args": [],
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "LIST",
//                 "name": null,
//                 "ofType": {
//                   "kind": "NON_NULL",
//                   "name": null,
//                   "ofType": {
//                     "kind": "OBJECT",
//                     "name": "__InputValue",
//                     "ofType": null
//                   }
//                 }
//               }
//             },
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "inputFields": null,
//         "interfaces": [],
//         "enumValues": null,
//         "possibleTypes": null
//       },
//       {
//         "kind": "ENUM",
//         "name": "__DirectiveLocation",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": [
//           {
//             "name": "QUERY",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "MUTATION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "SUBSCRIPTION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "FIELD",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "FRAGMENT_DEFINITION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "FRAGMENT_SPREAD",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INLINE_FRAGMENT",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "VARIABLE_DEFINITION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "SCHEMA",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "SCALAR",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "OBJECT",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "FIELD_DEFINITION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "ARGUMENT_DEFINITION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INTERFACE",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "UNION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "ENUM",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "ENUM_VALUE",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INPUT_OBJECT",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "INPUT_FIELD_DEFINITION",
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "possibleTypes": null
//       },
//       {
//         "kind": "ENUM",
//         "name": "CacheControlScope",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": [
//           {
//             "name": "PUBLIC",
//             "isDeprecated": false,
//             "deprecationReason": null
//           },
//           {
//             "name": "PRIVATE",
//             "isDeprecated": false,
//             "deprecationReason": null
//           }
//         ],
//         "possibleTypes": null
//       },
//       {
//         "kind": "SCALAR",
//         "name": "Upload",
//         "fields": null,
//         "inputFields": null,
//         "interfaces": null,
//         "enumValues": null,
//         "possibleTypes": null
//       }
//     ],
//     "directives": [
//       {
//         "name": "cacheControl",
//         "locations": [
//           "FIELD_DEFINITION",
//           "OBJECT",
//           "INTERFACE"
//         ],
//         "args": [
//           {
//             "name": "maxAge",
//             "type": {
//               "kind": "SCALAR",
//               "name": "Int",
//               "ofType": null
//             },
//             "defaultValue": null
//           },
//           {
//             "name": "scope",
//             "type": {
//               "kind": "ENUM",
//               "name": "CacheControlScope",
//               "ofType": null
//             },
//             "defaultValue": null
//           }
//         ]
//       },
//       {
//         "name": "skip",
//         "locations": [
//           "FIELD",
//           "FRAGMENT_SPREAD",
//           "INLINE_FRAGMENT"
//         ],
//         "args": [
//           {
//             "name": "if",
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "Boolean",
//                 "ofType": null
//               }
//             },
//             "defaultValue": null
//           }
//         ]
//       },
//       {
//         "name": "include",
//         "locations": [
//           "FIELD",
//           "FRAGMENT_SPREAD",
//           "INLINE_FRAGMENT"
//         ],
//         "args": [
//           {
//             "name": "if",
//             "type": {
//               "kind": "NON_NULL",
//               "name": null,
//               "ofType": {
//                 "kind": "SCALAR",
//                 "name": "Boolean",
//                 "ofType": null
//               }
//             },
//             "defaultValue": null
//           }
//         ]
//       },
//       {
//         "name": "deprecated",
//         "locations": [
//           "FIELD_DEFINITION",
//           "ENUM_VALUE"
//         ],
//         "args": [
//           {
//             "name": "reason",
//             "type": {
//               "kind": "SCALAR",
//               "name": "String",
//               "ofType": null
//             },
//             "defaultValue": "\"No longer supported\""
//           }
//         ]
//       }
//     ]
//   }
// }
