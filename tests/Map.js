Feature('Map').timeout(30000);

const { I, mainPage, searchResultPage } = inject();

Scenario('Spb Map Visual Test', () => {
  I.openMap("спб");
  I.saveScreenshot("spb.png");
  I.seeVisualDiff("spb.png", {tolerance: 8, prepareBaseImage: false});
});