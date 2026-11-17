import { _ as _export_sfc, o as openBlock, c as createElementBlock, e as createVNode, w as withCtx, f as withDirectives, b as createBaseVNode, v as vShow, U as UiButton, a as createStaticVNode, n as normalizeClass, g as ref } from "./app.Y2aXxmAW.js";
const _hoisted_1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10",
  viewBox: "0 0 32 32"
};
const _hoisted_2 = {
  fill: "currentColor",
  d: "M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"
};
const _hoisted_3 = {
  fill: "currentColor",
  d: "M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5"
};
const __pageData = JSON.parse('{"title":"江城子","description":"","frontmatter":{"title":"江城子","date":"2026-11-16T21:05","author":"苏轼","author_dynasty":"宋","layout":"post"},"headers":[],"relativePath":"quotations/jiang-cheng-zi.md","filePath":"quotations/jiang-cheng-zi.md","lastUpdated":1794890088000}');
const __default__ = { name: "quotations/jiang-cheng-zi.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  setup(__props) {
    const punctuation = ref(false);
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createVNode(UiButton, {
          id: "toggle",
          onClick: _cache[0] || (_cache[0] = ($event) => punctuation.value = !punctuation.value),
          square: ""
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("svg", _hoisted_1, [
              withDirectives(createBaseVNode("path", _hoisted_2, null, 512), [
                [vShow, !punctuation.value]
              ]),
              withDirectives(createBaseVNode("path", _hoisted_3, null, 512), [
                [vShow, punctuation.value]
              ])
            ]))
          ]),
          _: 1
        }),
        createBaseVNode("div", {
          id: "poem",
          class: normalizeClass(["poem-grid", { punctuation: punctuation.value }])
        }, [..._cache[1] || (_cache[1] = [
          createStaticVNode('<p class="start" data-title="江城子·密州出猎" data-v-23360251><span data-punctuation="，" data-v-23360251>老夫聊发少年狂</span><span data-punctuation="，" data-v-23360251>左牵黄</span><span data-punctuation="，" data-v-23360251>右擎苍</span><span data-punctuation="，" data-v-23360251>锦帽貂裘</span><span data-punctuation="。" data-v-23360251>千骑卷平冈</span><span data-punctuation="，" data-v-23360251>为报倾城随太守</span><span data-punctuation="，" data-v-23360251>亲射虎</span><span data-punctuation="。" data-v-23360251>看孙郎</span><br data-v-23360251><span data-punctuation="。" data-v-23360251>酒酣胸胆尚开张</span><span data-punctuation="，" data-v-23360251>鬓微霜</span><span data-punctuation="！" data-v-23360251>又何妨</span><span data-punctuation="，" data-v-23360251>持节云中</span><span data-punctuation="？" data-v-23360251>何日遣冯唐</span><span data-punctuation="，" data-v-23360251>会挽雕弓如满月</span><span data-punctuation="，" data-v-23360251>西北望</span><span data-punctuation="。" data-v-23360251>射天狼</span></p><p class="end" data-title="江城子·乙卯正月二十日夜记梦" data-v-23360251><span data-punctuation="，" data-v-23360251>十年生死两茫茫</span><span data-punctuation="，" data-v-23360251>不思量</span><span data-punctuation="。" data-v-23360251>自难忘</span><span data-punctuation="，" data-v-23360251>千里孤坟</span><span data-punctuation="。" data-v-23360251>无处话凄凉</span><span data-punctuation="，" data-v-23360251>纵使相逢应不识</span><span data-punctuation="，" data-v-23360251>尘满面</span><span data-punctuation="。" data-v-23360251>鬓如霜</span><br data-v-23360251><span data-punctuation="，" data-v-23360251>夜来幽梦忽还乡</span><span data-punctuation="，" data-v-23360251>小轩窗</span><span data-punctuation="。" data-v-23360251>正梳妆</span><span data-punctuation="，" data-v-23360251>相顾无言</span><span data-punctuation="。" data-v-23360251>惟有泪千行</span><span data-punctuation="，" data-v-23360251>料得年年肠断处</span><span data-punctuation="，" data-v-23360251>明月夜</span><span data-punctuation="。" data-v-23360251>短松冈</span></p>', 2)
        ])], 2)
      ]);
    };
  }
});
const jiangChengZi = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-23360251"]]);
export {
  __pageData,
  jiangChengZi as default
};
