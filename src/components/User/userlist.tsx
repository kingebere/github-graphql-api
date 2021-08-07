import React from 'react';
import { useQuery } from '@apollo/client';
import { SearchResultItemConnection } from '../../Generated/graphql';
import { GET_USERS } from '../../getjobs';
import { Query } from '../../Generated/graphql';
export type Maybe<T> = T | null;

interface Props extends game2 {
    ships?: Maybe<SearchResultItemConnection>;
}

type game2 = {
    game: String;
};
const Userslist: React.FC<Props> = ({ ships, game }: Props) => {
    const { data, fetchMore } = useQuery<Query>(GET_USERS);

    return (
        //mapping the users details here
        <>
            <div className="margint_12px">
                <div className="repo_bottom gap-10px">
                    <p className="bottom-area-h2">
                        {ships?.userCount}
                        <span className="second-area-h3 marginl-8px">users</span>
                    </p>
                    <button
                        onClick={() =>
                            fetchMore({
                                variables: { after: data?.search.pageInfo.endCursor, query: game },
                            })
                        }
                        className="button-load h2"
                    >
                        Load More
                    </button>
                </div>
                {ships?.edges?.map((ships?) =>
                    //condition for outputting nodes of the Users details
                    {
                        if (ships?.node?.__typename === 'User') {
                            //Link to User's profile on github
                            return (
                                <div className="flex1 gap-10px align-items-start border  padding-24px">
                                    <div className="icon_wrapper ">
                                        <img
                                            src={ships?.node?.avatarUrl}
                                            className="border-50"
                                            alt="profile-pictures"
                                        />
                                    </div>
                                    <div className="text-wrapper flex2 gap-4px">
                                        {ships?.node?.name ? (
                                            <a href={`${ships?.node?.url}`}>
                                                <p className="list-text-16px">{ships?.node?.name}</p>
                                            </a>
                                        ) : (
                                            <p className="list-text-16px">No identified Username</p>
                                        )}

                                        <p className="list-text-14px">{ships?.node?.bio}</p>
                                        <div className="flex1 gap-10px">
                                            {ships?.node?.location ? (
                                                <p className="list-text-122px">{ships?.node?.location}</p>
                                            ) : (
                                                <p className="list-text-122px">Unknown Country</p>
                                            )}
                                            <p className="list-text-122px">{ships?.node?.email}</p>
                                            <p className="list-text-122px">
                                                {ships?.node?.repositories?.totalCount} repositories
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        } else {
                            <div>nothing</div>;
                        }
                    },
                )}
            </div>
        </>
    );
};
export default Userslist;
