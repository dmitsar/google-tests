const MainPage = require("./pages/MainPage");
const SearchResultPage = require("./pages/SearchResultPage");

module.exports = function() {
  return actor({

    search:function(text) {
      MainPage.search(text)
    },

    openMainPage:function() {
      MainPage.openMainPage()
    },

    searchForLuck:function(text) {
      MainPage.searchForLuck(text)
    },

    openCalculator:function(text) {
      SearchResultPage.openCalculator(text)
    },

    openMap:function(text) {
      SearchResultPage.openMap(text)
    }
    
  });
}
