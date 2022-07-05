export class APIService {
  static STUDIO_GHIBLI_URL = "https://ghibliapi.herokuapp.com";
  static controller = new AbortController();

  static async getList(listName) {
    let res = await fetch(
      `${this.STUDIO_GHIBLI_URL}/${listName.toLowerCase()}`,
      { signal: this.controller.signal }
    );

    if (res.ok) {
      return await res.json();
    } else {
      return false;
    }
  }

  static async getItem(listName, id) {
    let res = await fetch(
      `${this.STUDIO_GHIBLI_URL}/${listName.toLowerCase()}/${id}`,
      { signal: this.controller.signal }
    );

    if (res.ok) {
      return await res.json();
    } else {
      return false;
    }
  }
}
