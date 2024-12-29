import { FC } from "react";
import { Post } from "../../api/Post";

interface PostViewProps {
    psot: Post,
}

export const PostView: FC<PostViewProps> = ( {post} ) => {
    return (
        <div className="post-view">
            <img className="post-view__image" src="" alt="" />
            <div className="post-view__inner">
                <div className="post-view__inner-text">
                    <p className="post-view__inner-text-title">Один зимний день в&nbsp;Венеции</p>
                    <p className="post-view__inner-text-description">Говорят, что Венецию покинуло 70% местных жителей. Говорят, что это из-за сверх туризма. Еще говорят, что Венеци&hellip;</p>
                </div>
                <div className="post-view__inner-bottom">
                    <span className="post-view__inner-bottom-location">Италия, Венеция</span>
                    <a className="post-view__inner-bottom-link" href="">Подробнее</a>
                </div>
            </div>
        </div>
    )
}