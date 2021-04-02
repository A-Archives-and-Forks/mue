export default class MarketplaceFunctions {
  // based on https://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links
  static urlParser (input) {
    const urlPattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_+.~#?&//=]*)/;
    return input.replace(urlPattern, '<a href="$&" target="_blank">$&</a>');
  }

  static uninstall(name, type) {

  }

  static install(type, input, sideload) {
  }
}
