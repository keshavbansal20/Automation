const puppeteer = require("puppeteer");
let answers = require("./codes");
let cTab;
(async function fn(){
    let browseropenPromise = puppeteer.launch({
        headless: false , 
        defaultViewport: null , 
        args:["--start-maximized"]
    })
    let browser = await browseropenPromise;
    let allTabsArr = await  browser.pages();
    cTab = allTabsArr[0];
    await cTab.goto("https://www.hackerrank.com/auth/login");
    await cTab.type("input[name='username']" , "cawav12570@kindbest.com" , {delay:20});
    await cTab.type("input[name='password']" , "qwerty123456" , {delay:20});
    await cTab.click("button[data-analytics='LoginPassword");
    await  waitAndClick(".ui-btn.ui-btn-normal.ui-btn-large.ui-btn-primary.ui-btn-link.ui-btn-styled");
    await cTab.waitForSelector("a[data-analytics='ChallengeListChallengeName']", { visible: true });
    
})();

async function waitAndClick(selector){
    try{
    await cTab.waitForSelector(selector , {visible:true});
    await  cTab.click(selector);
    console.log("done");
    }
    catch(err){
        return new Error(err);
    }
}