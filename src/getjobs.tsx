// graphql query for job listing

import gql from 'graphql-tag';

const GET_JOBLIST = gql`
    query repositoryquery($after: String, $query: String!) {
        search(query: $query, type: REPOSITORY, first: 10, after: $after) {
            repositoryCount
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            }
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        description
                        stargazerCount
                        owner {
                            url
                        }
                        languages(first: 1) {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                        projectsUrl
                        url
                        nameWithOwner
                        pushedAt
                    }
                }
            }
        }
    }
`;
const GET_USERS = gql`
    query userquery($after: String, $query: String!) {
        search(query: $query, type: USER, first: 10, after: $after) {
            userCount
            pageInfo {
                hasNextPage
                hasPreviousPage
                endCursor
                startCursor
            }
            edges {
                node {
                    ... on User {
                        id
                        email
                        bio
                        avatarUrl(size: 30)
                        name
                        repositories {
                            totalCount
                        }
                        url
                        location
                    }
                }
            }
            repositoryCount
        }
    }
`;
export { GET_JOBLIST, GET_USERS };
