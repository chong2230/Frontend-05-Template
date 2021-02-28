// iPhoneX模式打开百度

// 此处会报错，Error: Cannot find module 'puppeteer/DeviceDescriptors'
// const devices = require('puppeteer/DeviceDescriptors');

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });

    const page = await browser.newPage();
    await page.emulate(puppeteer.devices['iPhone 6']);
    // await page.emulate(devices['iPhoneX']);
    await page.goto('https://www.baidu.com');
    // await page.type('#index-kw', 'puppeteer');
    // await page.click('#index-bn');
    // await page.waitForNavigation({ timeout: 3000 });
    await page.screenshot({
        path: 'baidu-iPhoneX.png'
    });
    await browser.close();

})();