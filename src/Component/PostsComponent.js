import React, { useEffect } from "react";
import { connect } from "react-redux";
import * as PostsActionCreators from "../store/actionCreators/PostsActionCreator";
import "./PostsComponent.css";
const PostsComponent = ({postsList,dataFetched,fetchPostsList})=> {

   useEffect(()=>{
       fetchPostsList();
   },[])

    return (
        <div>
            <div className="d-flex p-2 justify-content-start flex-wrap product-list">
                {dataFetched === true ? (
                    postsList.map((item, index) => {
                        return (
                            <div className="content" key={index}>
                                <label className="posts-header">{item.title}</label>
                                <p className="posts-body">{item.body}</p>
                            </div>
                        );
                    })
                ) : (
                    <h1 className="posts-loading">Loading Data...</h1>
                )}
            </div>
        </div>
    );
}

/*

useEffect(()=>{})

        return (
            <div>
                <div className="d-flex p-2 justify-content-start flex-wrap product-list">
                    {this.props.dataFetched === true ? (
                        this.props.postsList.map((item, index) => {
                            return (
                                <div className="content" key={index}>
                                    <label className="posts-header">{item.title}</label>
                                    <p className="posts-body">{item.body}</p>
                                </div>
                            );
                        })
                    ) : (
                        <h1 className="posts-loading">Loading Data...</h1>
                    )}
                </div>
            </div>
        );
 */
export const mapStateToProps = (state) => {
    return {
        postsList: state.posts,
        dataFetched: state.postsLoaded
    };
};

export const mapDispatchToProps = (dispatch) => {
    return {
        fetchPostsList: () => {
            dispatch(PostsActionCreators.fetchPostsThunk());
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostsComponent);
