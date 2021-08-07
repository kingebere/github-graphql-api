import React, { FunctionComponent, useState ,useEffect} from 'react';
import '../JobsWrapper.css';
import { useLazyQuery } from '@apollo/client';
import Userslist from '../../components/User/userlist';
import { GET_USERS } from '../../getjobs';
import { Query } from '../../Generated/graphql';

const UserSearch: FunctionComponent<{}> = () => {
    const [query, setquery] = useState<String>('');

    const [searchuserquery, { data }] = useLazyQuery<Query>(GET_USERS);
   
    useEffect(()=>{},[])
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchuserquery({ variables: { query: query } });
        setquery(query);
    };

    return (
        //submit form for inputting user's name
        <div className="site-wrapper">
            <div className="User-section">
                <div className="repo_bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form id="add-book" onSubmit={onSubmit}>
                                <div className="form_wrapper flex flex1 space-between align-items-center">
                                    <input
                                        placeholder="Enter Username"
                                        onChange={(e) => setquery(e.target.value)}
                                        type="text"
                                    />
                                    <button type="submit" className="button">Search</button>
                                </div>
                            </form>
                            {data === null || data === undefined ? (
                                <div>loading...</div>
                            ) : (
                                <div>{<Userslist ships={data.search} game={query} />}</div>
                            )}{' '}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserSearch;
