# openai-sandbox


## Run tests

Run tests to check output of api calls are working as epected. The API isn't super fast to it may take a while and may time out.

```
# export OPENAI_SECRET_KEY=<your-openai-key>
# npm run test

> openai-sandbox@1.0.0 test /Users/gawain/dev/sandbox/openai-sandbox
> npx mocha --timeout 60000 --recursive ./test/

  OpenAI Davinci Tests

Artist: Megadeth

Lyrics:

Aaarrrggghhhh!!!
I can see the light, I must fight to live another day
I can see the light, hope it's not too late to save my soul
Break this chain, I must break this chain
Break this chain, I must break this chain
'Cause I've had enough of pain and sorrow
I'm not gonna live my life in vain
Break this chain, I must break this chain
Break this chain, I must break this chain
'Cause I've had enough of pain and sorrow...

    ✓ completion test (8298ms)
  1 passing (8s)

```
