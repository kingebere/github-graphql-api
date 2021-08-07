import React from 'react';
import { format } from 'date-fns';
import { useQuery } from '@apollo/client';
import { SearchResultItemConnection } from '../../Generated/graphql';
import { Query } from '../../Generated/graphql';
import { GET_JOBLIST } from '../../getjobs';
interface Props2 extends game2 {
    names: SearchResultItemConnection;
}
type game2 = {
    game: String;
};
const Jobslist: React.FC<Props2> = ({ names, game }: Props2) => {
    const { data, loading, fetchMore } = useQuery<Query>(GET_JOBLIST);

    if (loading) return <div>loading</div>;

    return (
        <>
            <div className="margint_12px">
                <div className="repo_bottom gap-10px ">
                    <p className="bottom-area-h2">
                        {names.repositoryCount} <span className="second-area-h3">repositories</span>
                    </p>{' '}
                    <button
                        onClick={() =>
                            fetchMore({
                                variables: { after: data?.search.pageInfo.endCursor, query: game },
                            })
                        }
                        className="button-load"
                    >
                        Load More
                    </button>
                </div>
                {names.edges?.map((ships?) => {
                    if (ships?.node?.__typename === 'Repository') {
                        return (
                            <div
                                className="flex1 gap-10px align-items-start border  padding-24px "
                                key={ships?.node?.id}
                            >
                                <div className="icon_wrapper ">
                                    <svg
                                        aria-hidden="true"
                                        viewBox="0 0 16 16"
                                        version="1.1"
                                        data-view-component="true"
                                        height="16"
                                        width="16"
                                        className="icon-repo marginr-4px"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"
                                        ></path>
                                    </svg>
                                </div>
                                <div className="text-wrapper flex2 gap-4px">
                                    <a className="list-text-16px" href={`${ships?.node?.projectsUrl}`}>
                                        <p>{ships?.node?.name}</p>
                                    </a>

                                    <p className="list-text-14px">{ships?.node?.description}</p>

                                    <p className="list-text-12px ">
                                        {ships?.node?.languages?.edges?.map((lan) => lan?.node?.name)}
                                    </p>
                                    <div className="flex1 gap-10px">
                                        <p className="list-text-14px flex1">
                                            <svg
                                                aria-label="star"
                                                role="img"
                                                viewBox="0 0 16 16"
                                                version="1.1"
                                                data-view-component="true"
                                                height="16"
                                                width="16"
                                                className="icon-repo marginr-4px"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z"
                                                ></path>
                                            </svg>
                                            {ships?.node?.stargazerCount}
                                        </p>
                                        <p className="list-text-14px">
                                            Updated at: {format(ships?.node?.pushedAt, 'MM-YYYY')}
                                        </p>
                                        <p> </p>
                                    </div>
                                </div>
                            </div>
                        );
                    } else {
                        <div>nothing</div>;
                    }
                })}
            </div>
        </>
    );
};
export default Jobslist;
