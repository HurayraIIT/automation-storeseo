"use strict";
const {Builder, By, Key, until} = require('selenium-webdriver');
const res = require("./config.json");

async function example() {
    let driver = await new Builder().forBrowser('firefox').build();
    
    await driver.get(res.url_partner);
    await driver.findElement(By.id('account_email')).sendKeys(res.login_email);
    
    await driver.sleep(4000);
    
    await driver.findElement(By.name('commit')).click();
    
    await driver.sleep(4000);
    
    await driver.findElement(By.id('account_password')).sendKeys(res.login_password);
    
    await driver.sleep(4000);
    
    await driver.findElement(By.name('commit')).click();
    
    await driver.get(res.url_partner_stores);
    await driver.findElement(By.id('PolarisTextField1')).sendKeys('live');
}

example();