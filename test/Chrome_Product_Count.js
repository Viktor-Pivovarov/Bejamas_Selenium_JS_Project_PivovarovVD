const {By, Builder} = require('selenium-webdriver');
const assert = require('assert')

describe('Chrome Product Count', function() {
    let driver;
    before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    });

    it('should count an amount of products in the list',async function() {
        await driver.get('https://qa-recruitment-task.netlify.app/');
        async function ProductsCount() {
            let products = await driver.findElements(By.className('dVEpkp'));
            const count = products.length;
            return count;}
        const productCount = await ProductsCount();
        assert.equal(productCount, 6);
    });

    after(async function() {
    await driver.quit();
    });
});

