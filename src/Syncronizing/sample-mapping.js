const Mapping = [
  {
    start: 0,
    end: 9,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n \n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 10,
    end: 14,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button></button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 15,
    end: 19,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 20,
    end: 24,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 25,
    end: 29,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick=''>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 30,
    end: 39,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 40,
    end: 49,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: ""
  },
  {
    start: 50,
    end: 89,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n \n}"
  },
  {
    start: 90,
    end: 136,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n  \n}"
  },
  {
    start: 137,
    end: 163,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').style.color='white';\n \n}"
  },
  {
    start: 164,
    end: 185,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial </h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1')[0].style.color='white';\n \n}"
  },
  {
    start: 186,
    end: 229,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1')[0].style.color='white';\n \n}"
  },
  {
    start: 230,
    end: 266,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 267,
    end: 280,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorBlack()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 281,
    end: 290,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorWhite()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 291,
    end: 293,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorWhite()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n} \n \n function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 294,
    end: 299,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorWhite()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n} \n \n function colorWhite()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 300,
    end: 305,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorWhite()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n} \n \n function colorWhite()\n {\n \n document.body.style.background='white';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n}"
  },
  {
    start: 306,
    end: 333,
    html: "<!DOCTYPE html>\n <html>\n <title>Javascript Tutorials</title>\n <head>\n </head>\n <body>\n \n \n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <h1>Welcome to JavaScript Tutorial</h1>\n <button onClick='colorBlack()'>Black</button>\n <button onClick='colorWhite()'>White<button>\n \n \n </body>\n </html>\n ",
    css: "",
    js: "function colorBlack()\n {\n \n document.body.style.background='black';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='white');\n \n} \n \n function colorWhite()\n {\n \n document.body.style.background='white';\n \n document.querySelectorAll('h1').forEach(e=>e.style.color='black');\n \n}"
  }
];


export default Mapping;

 