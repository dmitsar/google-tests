const { I, MainPage } = inject();

module.exports = {

  menuBar: "#hdtb",

  openCalculator(text) {
    I.openMainPage();
    I.search(text);
    I.wait(1);
    I.waitForElement('//*[@id="rso"]/div[1]/div/div/div[1]/div/div', 5);
  },

  openMap(text) {
    I.openMainPage();
    I.search(text);
    I.click("#hdtb-msb > div:nth-child(1) > div > div:nth-child(2) > a");
    I.wait(2);
    //I.waitForElement('//*[@id="pane"]/div/div[1]/div/div/div[2]', 10);
    //I.waitForElement('//*[@id="pane"]/div/div[1]/div/div/div[1]/div[1]/button/img', 10);
  }

}