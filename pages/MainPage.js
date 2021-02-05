const { I, searchResultPage } = inject();

module.exports = {

  inpSearch: "//input[@type='text']",
  btnSearch: "//input[@type='submit']",

  openMainPage() {
    I.amOnPage('/');
    I.see('Google');
  },

  search(text) {
    I.fillField("//input[@type='text']", text);
    I.click("//input[@value='Поиск в Google']");
    I.wait(1);
    I.waitForElement("#hdtb", 5);
  },

  searchForLuck(text) {
    I.fillField("//input[@type='text']", text);
    I.click("//input[@value='Мне повезёт!']");
  }

}