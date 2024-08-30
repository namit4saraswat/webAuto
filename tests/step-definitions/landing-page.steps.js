const { I } = inject();

Given('I navigate to codecept documentation site', async function(){
    await I.amOnPage('/');
});