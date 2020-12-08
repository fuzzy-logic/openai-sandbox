const got = require('got');







'use strict';

const expect = require('expect.js');

if (!process.env.OPENAI_SECRET_KEY) {
  console.log("ERROR: set api key");
  console.log("export OPENAI_SECRET_KEY=<api-key>");
  process.exit(1);
}


describe('OpenAI Davinci Tests',  function () {


  it('completion test', async function () {

    const prompt = `Artist: Megadeth\n\nLyrics:\n`;

    const url = 'https://api.openai.com/v1/engines/davinci/completions';
    const params = {
      "prompt": prompt,
      "max_tokens": 160,
      "temperature": 0.7,
      "frequency_penalty": 0.5
    };
    const headers = {
      'Authorization': `Bearer ${process.env.OPENAI_SECRET_KEY}`,
    };

    try {
      console.log(`Davinci API Conpletion Test: input = '${prompt.replace(/\n/gi, ' ')}'`);
      const response = await got.post(url, { json: params, headers: headers }).json();
      output = `${prompt}${response.choices[0].text}`;
      console.log(output);
      expect(output).to.be.ok();
    } catch (err) {
      console.log(err);
    }

  });

});


