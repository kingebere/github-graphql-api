
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import {GET_JOBLIST } from '../../getjobs';
import JobsWrapper from "./JobsWrapper";

const mocks = [
    {
        request: {
            query: GET_JOBLIST,
            variables: {
                query: 'Buck',
            },
        },
        result: {
            data: {
               search: {
    repositoryCount:"6",
    pageInfo: {
      hasNextPage:"2",
      hasPreviousPage:"8",
      endCursor:"9",
      startCursor:"5",
    },
    edges:[ {
      node: {
         Repository: {
          id:"9",
          name:"ojk",
          description:"ujhnjn",
          stargazerCount:"9",
          owner :{
            url:"hihijni",
          },
          languages: {
            edges:[ {
              node: {
                name:"ihu",
              }
            }]
          },
          projectsUrl:"hju",
          url:"hjk",
          nameWithOwner:"ihujij",
          pushedAt:"646546",
        }
      }
    }]
  }
            },
        },
    },
];  // We'll fill this in next

it('renders without error', () => {
  const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
          <JobsWrapper />
      </MockedProvider>,
  );

});