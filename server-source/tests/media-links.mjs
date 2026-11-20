import fs from 'node:fs';import vm from 'node:vm';import assert from 'node:assert/strict';
const element=()=>({setAttribute(){},addEventListener(){},append(){},querySelector(){return element()},className:'',innerHTML:''});
const context={document:{createElement:element,body:{append(){}}},window:{},URL};vm.createContext(context);vm.runInContext(fs.readFileSync('public/media-browser.js','utf8'),context);
const parse=context.window.BRMediaBrowser.youtubeId;
assert.equal(parse('https://www.youtube.com/watch?v=dQw4w9WgXcQ'),'dQw4w9WgXcQ');assert.equal(parse('https://youtu.be/dQw4w9WgXcQ?t=42'),'dQw4w9WgXcQ');assert.equal(parse('https://youtube.com/shorts/dQw4w9WgXcQ'),'dQw4w9WgXcQ');assert.equal(parse('https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ'),'dQw4w9WgXcQ');assert.equal(parse('https://youtube.com.evil.test/watch?v=dQw4w9WgXcQ'),null);assert.equal(parse('https://example.test/embed/dQw4w9WgXcQ'),null);assert.equal(parse('javascript:alert(1)'),null);assert.equal(parse('https://youtube.com/watch?v=bad'),null);
console.log('Passed: supported YouTube link formats and rejection of lookalike or unsafe URLs.');

const cover=context.window.BRMediaBrowser.youtubeCover;assert.equal(cover('https://youtu.be/dQw4w9WgXcQ'),'https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg');assert.equal(cover('https://example.test/video'),'');console.log('Passed: automatic video thumbnail URLs and invalid-link fallback.');
