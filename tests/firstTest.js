module.exports = {
  'simple Google Search' : function (browser) {
    browser
      .url('https://google.com/')
      .waitForElementPresent('body', 1000);
  },
  'part two' : function(browser) {
    browser
      .setValue('input[type=text]', ['nightwatch', browser.Keys.ENTER])
      .pause(1000)
      .assert.containsText('#main', 'The Night Watch')
      .end();
  }
};
