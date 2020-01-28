/* eslint-disable no-shadow */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UserArticleCard from './UserArticleCard';
import { getAuthorArticle } from '../../redux-store/actions/get-author-article';

export const UserArticleList = ({
    isFetching,
    getAuthorArticle,
    userArticles: { userArticles },
}) => {
    useEffect(() => {
        getAuthorArticle();

    }, []);
    return (
        <div className="new-section">
            {!isFetching ? (
                <>
                    {userArticles.length !== 0 ? (
                        userArticles.response.map(articles => (
                            <UserArticleCard
                                key={`${articles.id}`}
                                title={articles.title}
                                body={articles.body}
                                id={articles.id}
                                photo={articles.coverImageUrl}
                            />
                        ))
                    ) : (
                            <div className="empty-state">
                                <p>No data to display</p>
                            </div>
                        )}
                </>
            ) : (
                    <div className="empty-state">
                       
                    </div>
                )}
        </div>
    );
};
export default connect(state => state, { getAuthorArticle })(
    UserArticleList
);
