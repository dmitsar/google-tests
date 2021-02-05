Feature('Calculator').timeout(5000);

const { I, mainPage, searchResultPage } = inject();

Scenario('Calculator Visual Test', () => {
  I.openCalculator("2+3");
  I.saveScreenshot("Calculator.png");
  I.seeVisualDiff("Calculator.png", {tolerance: 7, prepareBaseImage: false});
});

Scenario('Calculator Mock', () => {
    I.openCalculator("2+3");
    I.click("//div[@jsname='N10B9']");
    I.click("//div[@jsname='XSr6wc']");
    I.click("//div[@jsname='T7PMFe']");
    I.click("//div[@jsname='Pt8tGc']");
    I.saveScreenshot("Summ.png");
});