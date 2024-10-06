import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Post");
  }

  async getHtml() {
    return `
    <h1>Post</h1>
    <p>You are viewing posts</p>
        `;
  }
}