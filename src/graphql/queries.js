/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLeaf = /* GraphQL */ `
  query GetLeaf($id: ID!) {
    getLeaf(id: $id) {
      id
      message
      createdAt
      updatedAt
    }
  }
`;
export const listLeaves = /* GraphQL */ `
  query ListLeaves(
    $filter: ModelLeafFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLeaves(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
