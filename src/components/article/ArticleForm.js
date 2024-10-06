import React from "react";

class ArticleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { titre: "", contenu: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ titre: event.target.titre, contenu: event.target.contenu });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            value={this.state.titre}
            onChange={this.handleChange}
            placeholder="Titre"
            className="new-article-form-input"
          />
        </label>
        <br />
        <label>
          <textarea
            onChange={this.handleChange}
            value={this.state.contenu}
            placeholder="Ecris ton article"
            className="new-article-form-input"
          />
        </label>

        <br />
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
            Envoyer l'article
          </span>
        </button>
      </form>
    );
  }
}

export default ArticleForm;
