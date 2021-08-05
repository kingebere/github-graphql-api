
import TestRenderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import {GET_USERS} from '../../getjobs';
import UserSearch from "./UserSearch";

const mocks = [
    {
        request: {
            query: GET_USERS,
            variables: {
                query: 'Buck',
            },
        },
        result: {
            data: {
               search: {
    userCount:"9",
    pageInfo :{
      hasNextPage:"9",
      hasPreviousPage:"8",
      endCursor:"9",
      startCursor:"9",
    }
    edges: {
      node: {
         User :{
          id:"9",
          email:"jnj",
          bio:"ijj",
          avatarUrl:"dsdcd",
          name:"jj",
          repositories: {
            totalCount:"9",
          },
          url:"rrrff",
          location:"dcdc",  
        }
      }
    }
    repositoryCount:"5",
        
        }
      }
    }
    },
];  // We'll fill this in next

it('renders without error', () => {
  const component = TestRenderer.create(
      <MockedProvider mocks={mocks} addTypename={false}>
          <UserSearch />
      </MockedProvider>,
  );

});