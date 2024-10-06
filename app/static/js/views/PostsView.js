import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor(params) {
    super();
    this.setTitle('Post detail')
    this.postId = params.id;
  }

  async getHtml() {
    return `
    <h1>Post Detail</h1>
    <p>You are viewing posts Detail ${this.postId}</p>
        `;
  }
}
