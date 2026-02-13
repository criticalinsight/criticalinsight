const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // 1. Check Repository Page
  console.log('Checking Repo Page...');
  await page.goto('https://github.com/criticalinsight/criticalinsight');
  try {
    await page.waitForSelector('text=Sovereign Stack', { timeout: 5000 });
    console.log('REPO_PAGE: PASS');
  } catch(e) {
    console.log('REPO_PAGE: FAIL');
    await page.screenshot({ path: 'repo_failed.png' });
  }

  // 2. Check Profile Page
  console.log('Checking Profile Page...');
  await page.goto('https://github.com/criticalinsight');
  try {
    await page.waitForSelector('text=Sovereign Stack', { timeout: 5000 });
    console.log('PROFILE_PAGE: PASS');
  } catch(e) {
    console.log('PROFILE_PAGE: FAIL');
    await page.screenshot({ path: 'profile_failed_retry.png' });
  }

  await browser.close();
})();
