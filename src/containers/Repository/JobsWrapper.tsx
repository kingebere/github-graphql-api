import React, { FunctionComponent, useState, useEffect } from 'react';
import '../JobsWrapper.css';
import { useLazyQuery } from '@apollo/client';
import Jobslist from '../../components/Repository/joblist';
import { GET_JOBLIST } from '../../getjobs';
import { Query } from '../../Generated/graphql';

const JobsWrapper: FunctionComponent<{}> = () => {
    const [query, setquery] = useState<string>('');

    const [searchquery, { data }] = useLazyQuery<Query>(GET_JOBLIST);
    useEffect(() => {}, []);

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        searchquery({ variables: { query: query } });
    };

    // passing data to the component Jobslist
    return (
        <div className="site-wrapper">
            <div className="Repo-section">
                <div className="repo_bottom"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form onSubmit={onSubmit}>
                                <div className="form_wrapper flex flex1 space-between align-items-center">
                                    <input
                                        placeholder="Enter Repository"
                                        onChange={(e) => setquery(e.target.value)}
                                        type="text"
                                        value={query}
                                    />
                                    <button type="submit" className="button">
                                        Search
                                    </button>
                                </div>
                            </form>
                            <div>
                                {!data || data === undefined ? (
                                    <div>loading...</div>
                                ) : (
                                    <div>{<Jobslist names={data.search} game={query} />}</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobsWrapper;
