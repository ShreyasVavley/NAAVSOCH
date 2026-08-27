const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  await page.goto('https://features-1010.preview.emergentagent.com/');
  await page.waitForTimeout(2000); // wait for initial load

  // Array of links to click
  const links = ['Services', 'Work', 'About', 'Contact'];
  
  for (const linkText of links) {
    console.log(`Clicking ${linkText}...`);
    // Click the nav link
    await page.getByRole('link', { name: linkText, exact: true }).click();
    await page.waitForTimeout(1500); // Wait for transition
    
    // Take full page screenshot
    await page.screenshot({ path: `screenshot_${linkText.toLowerCase()}.png`, fullPage: true });
    
    // Also save the text content to see the copy
    const textContent = await page.evaluate(() => document.body.innerText);
    require('fs').writeFileSync(`${linkText.toLowerCase()}_text.txt`, textContent);
  }

  await browser.close();
})();
