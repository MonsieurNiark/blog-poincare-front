import { Link } from "react-router-dom";
import "../../styles/article.css";

const ArticleWidget = ({ article }) => {
  return (
    <div className="article-widget-container">
      <div className="article-widget-header">
        <img src={article.featured_image} alt="" />
      </div>
      <div className="article-widget-body">
        <span className="article-widget-tag">{article.category}</span>
        <h4>
          <Link to={`/article/${article.id}`}>{article.title}</Link>
        </h4>
        <p>{article.summary}</p>
        <div className="article-widget-user">
          <img src={article.user.profile_pic} alt="user" />
          <div className="article-widget-user-info">
            <h5>{article.user.first_name}</h5>
            <small>{article.user.created_at}</small>
          </div>
        </div>
      </div>
      {/* <div>
        <h2>{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: main_content }} />
      </div> */}
    </div>
  );
};

export default ArticleWidget;
