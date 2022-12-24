const {By, Builder} = require('selenium-webdriver');
const assert = require('assert')

describe('Chrome Product Count', function() {
    let driver;
    before(async function() {
    driver = await new Builder().forBrowser('safari').build();
    });

    it('should count an amount of products in the list',async function() {
        await driver.get('https://qa-recruitment-task.netlify.app/');
        async function ProductsCount() {
            let products = await driver.findElements(By.className('dVEpkp'));
            const count = products.length;
            return count;
        }
        async function ProductPagesCount() {
            let paginationElements = await driver.findElements(By.className('PaginationIndicatorstyle__Li-urm45v-1'));
            return paginationElements.length;
        }
        const productCount = await ProductsCount();
        const productPagesCount = await ProductPagesCount();
        if (productPagesCount === 1) {
            assert.fail('There is only one product page');
        } else {
            assert.equal(productCount, 6);
        }
    });

    after(async function() {
    await driver.quit();
    });
});


