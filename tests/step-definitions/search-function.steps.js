const { I } = inject();
const descPage = require('../page-objects/description-page');

Given('I list all methods including {string} validations', async function(text){
    let URLHeadersCount = await I.grabNumberOfVisibleElements(locate({css: descPage.sidebarHeading}).withText(text))
    let functionArray = [];
    for(let i=1;i<URLHeadersCount;i++){
        functionArray.push(await I.grabTextFrom(locate({css: descPage.sidebarHeading}).withText(text).at(i)))
    }
    console.log(functionArray)
});


