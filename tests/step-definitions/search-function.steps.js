const { I } = inject();
const landPage = require('../page-objects/landing-page');
const descPage = require('../page-objects/description-page');
const { expect, assert } = require('chai');

// Now you can use `expect` and `assert`

Given('I open Playwright documentation from Helper menu', async function(){
    await I.click(locate({ css: landPage.titlebar.helper }).withText('Helpers'));
    await I.waitForVisible(locate({ xpath: landPage.titlebar.listItem }).withText('Playwright').at(2), 5);
    await I.click(locate({ xpath: landPage.titlebar.listItem }).withText('Playwright').at(2));
    expect(await I.grabCurrentUrl()).to.equal('https://codecept.io/helpers/Playwright/')
});
