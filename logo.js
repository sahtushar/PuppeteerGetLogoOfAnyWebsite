const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({
    headless: false
  });
  const page=await browser.newPage();
  await page.goto("http://www.piccadilyhotels.com/"); //add your url
  await page.addScriptTag({ url: 'https://code.jquery.com/jquery-3.2.1.min.js' });
  
  
  const logoArray = await page.evaluate(() => {
  let array=[];

    let y=($("[src*='logo' i] "));
    for(let i=0;i<y.length;i++) {
      if((y[i].src.search(/facebook/ ))==-1 && (y[i].src.search(/twitter/ ))==-1 && (y[i].src.search(/social/))==-1 && (y[i].src.search(/instagram/))==-1 && (y[i].src.search(/pinterest/))==-1)
      {
        array.push(y[i].src);
      }
    }
   
    return array;
 
});

  console.log(logoArray);


})();
