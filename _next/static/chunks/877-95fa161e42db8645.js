(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[877],{40947:function(t,e,n){"use strict";n.d(e,{f:function(){return f}}),"function"==typeof SuppressedError&&SuppressedError;var i=new Uint32Array([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),r=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],o=function(){function t(){this.state=Int32Array.from(r),this.temp=new Int32Array(64),this.buffer=new Uint8Array(64),this.bufferLength=0,this.bytesHashed=0,this.finished=!1}return t.prototype.update=function(t){if(this.finished)throw Error("Attempted to update an already finished hash.");var e=0,n=t.byteLength;if(this.bytesHashed+=n,8*this.bytesHashed>9007199254740991)throw Error("Cannot hash more than 2^53 - 1 bits");for(;n>0;)this.buffer[this.bufferLength++]=t[e++],n--,64===this.bufferLength&&(this.hashBuffer(),this.bufferLength=0)},t.prototype.digest=function(){if(!this.finished){var t=8*this.bytesHashed,e=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),n=this.bufferLength;if(e.setUint8(this.bufferLength++,128),n%64>=56){for(var i=this.bufferLength;i<64;i++)e.setUint8(i,0);this.hashBuffer(),this.bufferLength=0}for(var i=this.bufferLength;i<56;i++)e.setUint8(i,0);e.setUint32(56,Math.floor(t/4294967296),!0),e.setUint32(60,t),this.hashBuffer(),this.finished=!0}for(var r=new Uint8Array(32),i=0;i<8;i++)r[4*i]=this.state[i]>>>24&255,r[4*i+1]=this.state[i]>>>16&255,r[4*i+2]=this.state[i]>>>8&255,r[4*i+3]=this.state[i]>>>0&255;return r},t.prototype.hashBuffer=function(){for(var t=this.buffer,e=this.state,n=e[0],r=e[1],o=e[2],s=e[3],h=e[4],u=e[5],f=e[6],a=e[7],c=0;c<64;c++){if(c<16)this.temp[c]=(255&t[4*c])<<24|(255&t[4*c+1])<<16|(255&t[4*c+2])<<8|255&t[4*c+3];else{var l=this.temp[c-2],d=(l>>>17|l<<15)^(l>>>19|l<<13)^l>>>10,p=((l=this.temp[c-15])>>>7|l<<25)^(l>>>18|l<<14)^l>>>3;this.temp[c]=(d+this.temp[c-7]|0)+(p+this.temp[c-16]|0)}var b=(((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(h&u^~h&f)|0)+(a+(i[c]+this.temp[c]|0)|0)|0,y=((n>>>2|n<<30)^(n>>>13|n<<19)^(n>>>22|n<<10))+(n&r^n&o^r&o)|0;a=f,f=u,u=h,h=s+b|0,s=o,o=r,r=n,n=b+y|0}e[0]+=n,e[1]+=r,e[2]+=o,e[3]+=s,e[4]+=h,e[5]+=u,e[6]+=f,e[7]+=a},t}(),s=n(21876).Buffer,h=void 0!==s&&s.from?function(t){return s.from(t,"utf8")}:t=>new TextEncoder().encode(t);function u(t){return t instanceof Uint8Array?t:"string"==typeof t?h(t):ArrayBuffer.isView(t)?new Uint8Array(t.buffer,t.byteOffset,t.byteLength/Uint8Array.BYTES_PER_ELEMENT):new Uint8Array(t)}var f=function(){function t(t){this.secret=t,this.hash=new o,this.reset()}return t.prototype.update=function(t){if(("string"==typeof t?0!==t.length:0!==t.byteLength)&&!this.error)try{this.hash.update(u(t))}catch(t){this.error=t}},t.prototype.digestSync=function(){if(this.error)throw this.error;return this.outer?(this.outer.finished||this.outer.update(this.hash.digest()),this.outer.digest()):this.hash.digest()},t.prototype.digest=function(){var t,e,n,i;return t=this,e=void 0,n=void 0,i=function(){return function(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:h(0),throw:h(1),return:h(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function h(h){return function(u){return function(h){if(n)throw TypeError("Generator is already executing.");for(;o&&(o=0,h[0]&&(s=0)),s;)try{if(n=1,i&&(r=2&h[0]?i.return:h[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,h[1])).done)return r;switch(i=0,r&&(h=[2&h[0],r.value]),h[0]){case 0:case 1:r=h;break;case 4:return s.label++,{value:h[1],done:!1};case 5:s.label++,i=h[1],h=[0];continue;case 7:h=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===h[0]||2===h[0])){s=0;continue}if(3===h[0]&&(!r||h[1]>r[0]&&h[1]<r[3])){s.label=h[1];break}if(6===h[0]&&s.label<r[1]){s.label=r[1],r=h;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(h);break}r[2]&&s.ops.pop(),s.trys.pop();continue}h=e.call(t,s)}catch(t){h=[6,t],i=0}finally{n=r=0}if(5&h[0])throw h[1];return{value:h[0]?h[1]:void 0,done:!0}}([h,u])}}}(this,function(t){return[2,this.digestSync()]})},new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function h(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(s,h)}u((i=i.apply(t,e||[])).next())})},t.prototype.reset=function(){if(this.hash=new o,this.secret){this.outer=new o;var t=function(t){var e=u(t);if(e.byteLength>64){var n=new o;n.update(e),e=n.digest()}var i=new Uint8Array(64);return i.set(e),i}(this.secret),e=new Uint8Array(64);e.set(t);for(var n=0;n<64;n++)t[n]^=54,e[n]^=92;this.hash.update(t),this.outer.update(e);for(var n=0;n<t.byteLength;n++)t[n]=0}},t}()},63395:function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function h(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(s,h)}u((i=i.apply(t,e||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.getHttpV4Endpoint=e.getHttpV4Endpoints=e.getHttpEndpoint=e.getHttpEndpoints=e.Access=void 0;let r=n(27773);class o{constructor(){this.host="ton.access.orbs.network",this.urlVersion=1,this.nodes=new r.Nodes}init(){return i(this,void 0,void 0,function*(){let t=n(19543);yield this.nodes.init(`https://${this.host}/mngr/nodes?npm_version=${t.version}`)})}makeProtonet(t,e){let n="";switch(t){case"toncenter-api-v2":n+="v2-";break;case"ton-api-v4":n+="v4-"}return n+e}weightedRandom(t){let e=0;for(let n of t)e+=n.Weight;let n=Math.floor(Math.random()*e),i=0;for(let e of t){if(n>=i&&n<i+e.Weight)return e;i+=e.Weight}}buildUrls(t,e,n,i){n||(n=""),e||(e="toncenter-api-v2"),t||(t="mainnet"),n.length&&(n=n.replace(/^\/+/,""));let r=[],o=this.makeProtonet(e,t),s=this.nodes.getHealthyFor(o);if(!(null==s?void 0:s.length))throw Error(`no healthy nodes for ${o}`);if(i&&s.length){let t=this.weightedRandom(s);if(t)s=[t];else throw Error("weightedRandom return empty")}for(let i of s){let o=`https://${this.host}/${i.NodeId}/${this.urlVersion}/${t}/${e}`;n.length&&(o+=`/${n}`),r.push(o)}return r}}function s(t,e,n,r){return i(this,void 0,void 0,function*(){let i=new o;return yield i.init(),i.buildUrls(t,e,n,r)})}function h(t,e){return i(this,void 0,void 0,function*(){let n=(null==t?void 0:t.network)?t.network:"mainnet",i="jsonRPC";return(null==t?void 0:t.protocol)==="rest"&&(i=""),yield s(n,"toncenter-api-v2",i,e)})}function u(t,e){return i(this,void 0,void 0,function*(){let n=(null==t?void 0:t.network)?t.network:"mainnet";if((null==t?void 0:t.protocol)==="json-rpc")throw Error("config.protocol json-rpc is not supported for getTonApiV4Endpoints");return yield s(n,"ton-api-v4","",e)})}e.Access=o,e.getHttpEndpoints=h,e.getHttpEndpoint=function(t){return i(this,void 0,void 0,function*(){return(yield h(t,!0))[0]})},e.getHttpV4Endpoints=u,e.getHttpV4Endpoint=function(t){return i(this,void 0,void 0,function*(){return(yield u(t,!0))[0]})}},27773:function(t,e,n){"use strict";var i=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(t){o(t)}}function h(t){try{u(i.throw(t))}catch(t){o(t)}}function u(t){var e;t.done?r(t.value):((e=t.value)instanceof n?e:new n(function(t){t(e)})).then(s,h)}u((i=i.apply(t,e||[])).next())})};Object.defineProperty(e,"__esModule",{value:!0}),e.Nodes=void 0,n(94301);class r{constructor(){this.nodeIndex=-1,this.committee=new Set,this.topology=[],this.initTime=0}init(t){return i(this,void 0,void 0,function*(){this.nodeIndex=-1,this.committee.clear(),this.topology=[],this.initTime=Date.now();let e=[];try{let n=yield fetch(t);e=yield n.json()}catch(e){throw Error(`exception in fetch(${t}): ${e}`)}for(let t of e)"1"===t.Healthy&&this.topology.push(t);if(0===this.topology.length)throw Error(`no healthy nodes in ${t}`)})}getHealthyFor(t){var e;let n=[];for(let i of this.topology)i.Weight>0&&(null===(e=i.Mngr)||void 0===e?void 0:e.health[t])&&n.push(i);return n}}e.Nodes=r},94301:function(t,e,n){n(66477),t.exports=self.fetch.bind(self)},66477:function(t,e){"use strict";e.Headers=self.Headers,e.Request=self.Request,e.Response=self.Response,e.fetch=self.fetch},19543:function(t){"use strict";t.exports=JSON.parse('{"name":"@orbs-network/ton-access","version":"2.3.3","description":"Unthrottled anonymous RPC access to TON blockchain via a robust decentralized network","source":"lib/index.js","main":"lib/index.js","types":"lib/index.d.ts","files":["lib/**/*"],"scripts":{"test":"env mocha -r ts-node/register test/**/*.ts","test:v2":"env mocha -r ts-node/register test/ton-v2.ts","test:v4":"env mocha -r ts-node/register test/ton-v4.ts","cleanup":"rimraf ./lib","build:web:reg":"esbuild ./lib/web.js --bundle  --sourcemap --target=es2015 --outfile=./dist/index.js","build:web:min":"esbuild ./lib/web.js --bundle  --minify    --target=es2015 --outfile=./dist/index.min.js","build:web":"rimraf ./dist && npm run build:web:reg && npm run build:web:min","build":"npm run lint && rimraf ./lib && tsc && npm run build:web","format":"prettier --write \\"src/**/*.ts\\"","lint":"tslint -p tsconfig.json","prepare":"npm run build","prepublishOnly":"npm test && npm run lint","preversion":"npm run lint","version":"npm run format && git add -A src","postversion":"git push && git push --tags"},"repository":{"type":"git","url":"git+https://github.com/orbs-network/ton-access.git"},"author":"yuval@orbs.com","license":"MIT","bugs":{"url":"https://github.com/orbs-network/ton-access/issues"},"homepage":"https://github.com/orbs-network/ton-access#readme","dependencies":{"isomorphic-fetch":"^3.0.0"},"devDependencies":{"@types/bn.js":"^5.1.1","@types/chai":"^4.3.4","@types/isomorphic-fetch":"^0.0.36","@types/mocha":"^10.0.0","buffer":"^6.0.3","chai":"^4.3.7","esbuild":"^0.15.14","mocha":"^10.1.0","prettier":"^2.7.1","rimraf":"^3.0.2","ton":"^12.1.3","ton-lite-client":"npm:@truecarry/ton-lite-client@^1.6.1","tonweb":"^0.0.58","ts-node":"^10.9.1","tslib":"^2.4.0","tslint":"^6.1.3","tslint-config-prettier":"^1.18.0"}}')}}]);