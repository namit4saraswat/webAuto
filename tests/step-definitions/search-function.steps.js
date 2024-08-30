const { I } = inject();
const descPage = require('../page-objects/description-page');
const dataHelper = require('../../helper/fakeData');

Given('I list all methods including {string} validations', async function(text){
    let URLHeadersCount = await I.grabNumberOfVisibleElements(locate({css: descPage.sidebarHeading}).withText(text))
    let functionArray = [];
    for(let i=1;i<URLHeadersCount;i++){
        functionArray.push(await I.grabTextFrom(locate({css: descPage.sidebarHeading}).withText(text).at(i)))
    }
    console.log(functionArray)
});


Given('I print fake data', async function(text){
    console.log('name--' + await dataHelper.getName())
    console.log('country--' +await dataHelper.getCountry())
    console.log('gender--' + await dataHelper.getGender())
    console.log('phone--' + await dataHelper.getPhoneNumber())
})

