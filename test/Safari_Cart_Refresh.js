const {By, Builder} = require('selenium-webdriver');
const assert = require('assert')

describe('Chrome Cart Refresh', function() {
    let driver;
    before(async function() {
    driver = await new Builder().forBrowser('safari').build();
    });

    it('should add a product to the cart and assert if it there after reload',async function() {
        await driver.get('https://qa-recruitment-task.netlify.app/');
        await driver.findElement(By.xpath('//*[@id="__next"]/div/main/div/div/div[2]/div/div[1]/div/div[2]/button')).click();
        let cart = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div[2]/button/span')).getText();
        await driver.navigate().refresh();
        await driver.findElement(By.xpath('//*[@id="__next"]/div/div/div/div[2]/button/span')).click();
        let cartRefresh = await driver.findElement(By.xpath('/html/body/div[2]/div/div/div/div[2]/button/span')).getText();
        assert.equal(cart, cartRefresh);
    });

    after(async function() {
    await driver.quit();
    });
});


