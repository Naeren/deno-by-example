(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{117:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return d}));var a=t(2),r=t(6),i=(t(0),t(121)),l={id:"advance_readline",title:"Read Line by Line as Data Stream",sidebar_label:"Read Line by Line"},o={id:"advance_readline",title:"Read Line by Line as Data Stream",description:"Deno provides multiple APIs to read files. You can read the entire file using Deno.readAll and Deno.readTextFile. However, reading line by line is still not available in std library. Here in this tutorial, I will explain, How you can read the entire file line by line(Stream).",source:"@site/website/advance_readline.md",permalink:"/deno-by-example/advance_readline",editUrl:"https://github.com/deepakshrma/deno-by-example/edit/master/website/advance_readline.md",sidebar_label:"Read Line by Line",sidebar:"someSidebar",previous:{title:"Implementing JQ equivalent in Deno",permalink:"/deno-by-example/advance_jq"}},c=[{value:"Read Idrid",id:"read-idrid",children:[{value:"Sample: open file",id:"sample-open-file",children:[]},{value:"Example: 1",id:"example-1",children:[]},{value:"Example: 2",id:"example-2",children:[]},{value:"Example: 3",id:"example-3",children:[]},{value:"Basic sample for Async Iterator",id:"basic-sample-for-async-iterator",children:[]},{value:"Example: Final code",id:"example-final-code",children:[]}]}],s={rightToc:c};function d(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Deno")," provides multiple APIs to read files. You can read the entire file using ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.readAll")," and ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.readTextFile"),". However, reading line by line is still not available in std library. Here in this tutorial, I will explain, How you can read the entire file line by line(Stream)."),Object(i.b)("img",{src:"https://deepakshrma.github.io/deno-by-example/img/data_flow.png",width:"800",height:"400"}),Object(i.b)("p",null,"Before going to actual code, Let's understand the standard library first with examples."),Object(i.b)("h2",{id:"read-idrid"},"Read Id","[rid]"),Object(i.b)("p",null,"Deno provides ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.open")," API to open a file. This is the async API. Meaning, you need to ",Object(i.b)("inlineCode",{parentName:"p"},"await"),". In return you will get ",Object(i.b)("inlineCode",{parentName:"p"},"File")," which contains ",Object(i.b)("inlineCode",{parentName:"p"},"rid"),"."),Object(i.b)("h3",{id:"sample-open-file"},"Sample: open file"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    console.log(file);\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),Object(i.b)("p",null,"[Run]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n## Output:\n# File { rid: 3 }\n")),Object(i.b)("p",null,"You can see ",Object(i.b)("inlineCode",{parentName:"p"},"rid")," in return. Let's use this ",Object(i.b)("inlineCode",{parentName:"p"},"rid")," to get the chunk of data. Reading chunk requires API ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.read")),Object(i.b)("h3",{id:"example-1"},"Example: 1"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(100);\n    const numOfByteRead = await Deno.read(file?.rid, buf);\n    console.log(numOfByteRead);\n    console.log(decoder.decode(buf));\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),Object(i.b)("p",null,"[Run]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n# 100\n# {\n#   "id": 1,\n#   "version": "1.0.1",\n#   "contributors": [\n#     "deepak",\n#     "gary"\n#   ],\n#   "actor": {\n')),Object(i.b)("p",null,"Here, as you can see, Every time you call ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.read")," it returns the number of bytes that have been read. If ",Object(i.b)("inlineCode",{parentName:"p"},"numOfByteRead")," is ",Object(i.b)("inlineCode",{parentName:"p"},"null")," meaning it is end of file","[EOF]","."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"new Uint8Array(100);")," is Uint8Array to be filled while calling read. The buffer size could be anything. The reader will read bytes until buffer size."),Object(i.b)("p",null,"If you notice, the read file is not a complete file. You need to increase the buff size to read all files."),Object(i.b)("h3",{id:"example-2"},"Example: 2"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(1000); // 353\n    const numOfByteRead = await Deno.read(file?.rid, buf);\n    console.log(numOfByteRead);\n    console.log(decoder.decode(buf));\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),Object(i.b)("p",null,"[Run]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n# 353\n## JSON here..\n")),Object(i.b)("p",null,"Here in this example, I have increased buffer size to 1000, which is more than 353. So I can read the entire JSON file."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"[NOTE]",":")," You should avoid large buffer sizes. Reading a big file can create memory issues. and at the same time it will be hard to predict actual size."),Object(i.b)("p",null,"To read the entire file chunk by chunk, we can use recursion on ",Object(i.b)("inlineCode",{parentName:"p"},"then"),"able API."),Object(i.b)("h3",{id:"example-3"},"Example: 3"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"// examples/06_readfile_chunk.ts\nasync function main(name?: string) {\n  if (name) {\n    const file = await Deno.open(name);\n    const decoder = new TextDecoder();\n    let buf = new Uint8Array(100);\n    let chunk = new Uint8Array(0);\n    Deno.read(file?.rid, buf).then(function readByte(numOfByteRead) {\n      if (numOfByteRead) {\n        chunk = _append(chunk, buf, numOfByteRead);\n        Deno.read(file?.rid, buf).then(readByte);\n      } else {\n        console.log(decoder.decode(chunk));\n      }\n    });\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n")),Object(i.b)("p",null,"[Run]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": [\n    "deepak",\n    "gary"\n  ],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": [\n      "Top Gun",\n      "Mission: Impossible",\n      "Oblivion"\n    ],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),Object(i.b)("h4",{id:"breakdown"},"[Breakdown]"),Object(i.b)("p",null,"Here in this code, when I call ",Object(i.b)("inlineCode",{parentName:"p"},"Deno.read(file?.rid, buf).then"),". It will trigger a named function ",Object(i.b)("inlineCode",{parentName:"p"},"function readByte(numOfByteRead)"),". This will internally check for ",Object(i.b)("inlineCode",{parentName:"p"},"numOfByteRead")," each time. You can either append text return after decode by ",Object(i.b)("inlineCode",{parentName:"p"},"decoder.decode"),". I am appending as Uint8Array. To appened Uint8Array arrays, I found a good sample on ",Object(i.b)("inlineCode",{parentName:"p"},"StackOverflow"),"."),Object(i.b)("h4",{id:"_append"},"[_append]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"function _append(a: Uint8Array, b: Uint8Array, numOfByteRead: number) {\n  var c = new Uint8Array(a.length + numOfByteRead);\n  c.set(a, 0);\n  c.set(b.slice(0, numOfByteRead), a.length);\n  return c;\n}\n")),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"[NOTE]",":")," If you don't pass ",Object(i.b)("inlineCode",{parentName:"p"},"numOfByteRead"),", you may garbage value read for last time."),Object(i.b)("p",null,"Nice \ud83d\ude42, all looks fine. However, still we are away from reading line by line. For that we will use an async iterator."),Object(i.b)("h3",{id:"basic-sample-for-async-iterator"},"Basic sample for Async Iterator"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"let range = {\n  from: 1,\n  to: 5,\n  [Symbol.asyncIterator]() {\n    return {\n      current: this.from,\n      last: this.to,\n      async next() {\n        const value = await new Promise<number>((resolve) =>\n          setTimeout(() => {\n            resolve(this.current++);\n          }, 1000)\n        );\n        if (value <= this.last) {\n          return { done: false, value };\n        } else {\n          return { done: true };\n        }\n      },\n    };\n  },\n};\n(async () => {\n  for await (let value of range) {\n    console.log(value); // 1,2,3,4,5\n  }\n})();\n")),Object(i.b)("p",null,"Just like ",Object(i.b)("inlineCode",{parentName:"p"},"Symbol.iterator"),", we can use ",Object(i.b)("inlineCode",{parentName:"p"},"Symbol.asyncIterator")," to create an async Iterator. Since typescript supports async iterator out of the box. We can use this API. To understand more, you can read ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://javascript.info/async-iterators-generators"}),"async-iterators-generators"),"."),Object(i.b)("p",null,"To read line by line, I have created two utility methods ",Object(i.b)("inlineCode",{parentName:"p"},"_readTillDone")," and ",Object(i.b)("inlineCode",{parentName:"p"},"readLine"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'const _readTillDone = async (\n  rid: number,\n  text: string = ""\n): Promise<[string, string, boolean]> => {\n  let buf = new Uint8Array(100);\n  let indexOfLine = text.indexOf("\\n");\n  if (indexOfLine === -1) {\n    const num = await Deno.read(rid, buf);\n    if (num) {\n      text = text + decoder.decode(buf.slice(0, num));\n      return _readTillDone(rid, text);\n    } else {\n      return [text, "", true];\n    }\n  } else {\n    return [text.slice(0, indexOfLine), text.slice(indexOfLine + 1), false];\n  }\n};\n\nconst readLine = async (fileName: string) => {\n  const file = await Deno.open(fileName);\n  let text = "";\n  let done = false;\n  return {\n    [Symbol.asyncIterator]() {\n      return {\n        async next() {\n          const [t, rest, d] = await _readTillDone(file?.rid, text);\n          if (done) {\n            return { done: true, value: t };\n          } else {\n            text = rest;\n            done = d;\n            return { done: false, value: t };\n          }\n        },\n      };\n    },\n  };\n};\n')),Object(i.b)("h4",{id:"breakdown-1"},"[Breakdown]"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"readLine")," is very simple. On each async iterator call it will call ",Object(i.b)("inlineCode",{parentName:"p"},"_readTillDone")," and return the line. However, ","_","readTillDone is a little complex. I am using ",Object(i.b)("inlineCode",{parentName:"p"},"file.rid")," to keep track of the file read."),Object(i.b)("p",null,"Whenever i call ",Object(i.b)("inlineCode",{parentName:"p"},"_readTillDone")," with ",Object(i.b)("inlineCode",{parentName:"p"},"file?.rid, text"),". It tries to split text with ",Object(i.b)("inlineCode",{parentName:"p"},"newLine"),". I could not be able to find newLine. It tries to read more lines till the end. ",Object(i.b)("inlineCode",{parentName:"p"},"_readTillDone")," returns three parameters ",Object(i.b)("inlineCode",{parentName:"p"},"[t, rest, d]"),". Here ",Object(i.b)("inlineCode",{parentName:"p"},"t"),", text read by line,",Object(i.b)("inlineCode",{parentName:"p"},"rest")," is as buffer text and ",Object(i.b)("inlineCode",{parentName:"p"},"d")," return as done."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},Object(i.b)("em",{parentName:"strong"},"Let's complete the tutorial.\nOnce we have these utils, the implementation is very simple."))),Object(i.b)("h3",{id:"example-final-code"},"Example: Final code"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),'// examples/06_readfile_chunk.ts\nimport { readLine } from "https://raw.githubusercontent.com/deepakshrma/deno-by-example/master/examples/file_reader.ts";\n\nasync function main(name?: string) {\n  if (name) {\n    // Example 6\n    const reader = await readLine(name);\n    for await (let value of reader) {\n      console.log(value);\n    }\n  }\n}\nconst [fileName] = Deno.args;\nmain(fileName);\n')),Object(i.b)("p",null,"[Run]"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ deno  run --allow-read  examples/06_readfile_chunk.ts examples/tom.json\n\n# Output\n{\n  "id": 1,\n  "version": "1.0.1",\n  "contributors": [\n    "deepak",\n    "gary"\n  ],\n  "actor": {\n    "name": "Tom Cruise",\n    "age": 56,\n    "Born At": "Syracuse, NY",\n    "Birthdate": "July 3 1962",\n    "movies": [\n      "Top Gun",\n      "Mission: Impossible",\n      "Oblivion"\n    ],\n    "photo": "https://jsonformatter.org/img/tom-cruise.jpg"\n  }\n}\n')),Object(i.b)("p",null,"TaDa! \ud83d\udc4f\ud83d\udc4f Now you can read the entire file line by line."),Object(i.b)("p",null,"I hope you like this tutorial. let me know your feedback in the comment. Please support(\ud83d\ude4f\ud83d\ude4f) by subscribing and clapping on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/@deepak_v/"}),"medium"),"."),Object(i.b)("p",null,"All working examples can be found in my Github: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/deepakshrma/deno-by-example/tree/master/examples"}),"https://github.com/deepakshrma/deno-by-example/tree/master/examples")))}d.isMDXComponent=!0},121:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),d=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o({},n,{},e)),t},p=function(e){var n=d(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},b={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=d(t),u=a,m=p["".concat(l,".").concat(u)]||p[u]||b[u]||i;return t?r.a.createElement(m,o({ref:n},s,{components:t})):r.a.createElement(m,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"}}]);