import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../datas/articlesList.json";

// Find the article by its id
const getArticleById = (id) => {
  return datas.find((article) => article.id === id);
};

const ArticleDetails = () => {
  const [article, setArticle] = useState(null); // Initially set to null, not an array

  const { id } = useParams(); // Get the id from the route

  useEffect(() => {
    const fetchArticle = async () => {
      const articleData = await getArticleById(id); // Fetch the article by id
      setArticle(articleData); // Set the found article to state
    };
    fetchArticle();
  }, [id]);

  // Render a loading state if the article is not yet fetched
  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="content">
      <div className="article-container">
        <div className="article-header">
          <h1>{article.title}</h1>
          <h4>{article.summary}</h4>
          <img src={article.featured_image} alt="preview" />
        </div>
        <div dangerouslySetInnerHTML={{ __html: article.main_content }} />
      </div>
    </div>
  );
};

export default ArticleDetails;
