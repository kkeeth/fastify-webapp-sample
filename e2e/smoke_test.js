Feature('スモークテスト');

Scenario('example.comにアクセスする', ({I}) => {
  I.amOnPage('http://example.com');
  I.see('Example Domain');
});