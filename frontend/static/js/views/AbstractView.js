export default class {
  constructor(params) {
    this.params = params;

    // console.log(this.params); -- Test Params ID (posts/:id = 1)
  }

  setTitle(title) {
    document.title = title;
  }

  async getHtml() {
    return "";
  }
}
