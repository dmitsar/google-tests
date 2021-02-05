
Feature('Main Search').timeout(5000);

const { I, mainPage, searchResultPage } = inject();

const text = "Ozon"

Scenario('Manual Search', () => {
  I.openMainPage();
  I.search(text);
  I.saveScreenshot("resultManualSearch.jpg");
});

Scenario('Manual Search Enter', () => {
  I.openMainPage();
  I.fillField(mainPage.inpSearch, text);
  I.pressKey('Enter');
  I.waitForElement(searchResultPage.menuBar);
  I.saveScreenshot("resultManualSearchEnter.jpg");
});

Scenario('Сopy Paste Search', () => {
  I.openMainPage();
  I.fillField(mainPage.inpSearch, text);
  I.pressKey(['Control','a']);
  I.pressKey(['Control','c']);
  I.refreshPage();
  I.click(mainPage.inpSearch)
  I.pressKey(['Control','v']);
  I.click(mainPage.btnSearch)
  I.waitForElement(searchResultPage.menuBar);
  I.saveScreenshot("resultСopyPasteSearch.jpg");
});

Scenario('Search Luck', () => {
  I.openMainPage();
  I.searchForLuck("Ozon");
  I.waitUrlEquals('https://www.ozon.ru');
  I.saveScreenshot("searchLuck.jpg");
});