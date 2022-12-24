const {Builder, By} = require('selenium-webdriver');
const assert = require('assert');


describe('Test images in card', function() {
    let driver;
    before(async function() {
    driver = await new Builder().forBrowser('safari').build();
    });

    it('should add a product to the cart and assert the product image', async function() {
    await driver.get('https://qa-recruitment-task.netlify.app/');
    await driver.findElement(By.xpath('//*[@id="__next"]/div/main/div/div/div[2]/div/div[1]/div/div[2]/button')).click();
    const productImage = await driver.findElement(By.css('div[style="display: block;"]'));
    assert(productImage.isDisplayed());
    });

    after(async function() {
    await driver.quit();
    });
});



