import datas from "../../datas/articlesList.json";
import ArticleWidget from "./ArticleWidget";
import "../../styles/article.css";
import { useNavigate } from "react-router-dom";

const ListArticlesWidget = () => {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div className="articles-widget-container">
        <button className="gosubmit-button">
          <span>
            <svg
              height="24"
              width="24"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                fill="currentColor"
              ></path>
            </svg>
            Soumettre un nouvel article
          </span>
        </button>

        {datas.map((article, index) => (
          <ArticleWidget key={index} index={index} article={article} />
        ))}
      </div>
    </div>
  );
};

export default ListArticlesWidget;
