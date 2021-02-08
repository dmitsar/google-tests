Feature('Map');

const { I, mainPage, searchResultPage } = inject();

Scenario('Spb Map Visual Test (Mock)', () => {
  I.startMocking();
  I.mockRequest('GET', '/maps/*', 200);
  I.openMap("спб");
  I.saveScreenshot("spb.png");
  I.seeVisualDiff("spb.png", {tolerance: 2, prepareBaseImage: false});
  I.stopMocking();
});