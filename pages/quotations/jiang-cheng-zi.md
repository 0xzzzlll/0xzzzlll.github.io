---
title: 江城子
date: 2026-11-16T21:05
author: 苏轼
author_dynasty: 宋
layout: post
---

<script setup>
import { ref } from 'vue'
import UiButton from '@/ui/Button.vue'
const punctuation = ref(false)
</script>

<UiButton id="toggle" @click="punctuation = !punctuation" square>
  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 32 32">
    <path v-show="!punctuation" fill="currentColor" d="M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3"/>
    <path v-show="punctuation" fill="currentColor" d="M9 14a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5M4 26.586L26.585 4L28 5.415L5.414 28zM23 28a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5"/>
  </svg>
</UiButton>

<div id="poem" class="poem-grid" :class="{ punctuation }">
  <p class="start" data-title="江城子·密州出猎">
    <span data-punctuation="，">老夫聊发少年狂</span>
    <span data-punctuation="，">左牵黄</span>
    <span data-punctuation="，">右擎苍</span>
    <span data-punctuation="，">锦帽貂裘</span>
    <span data-punctuation="。">千骑卷平冈</span>
    <span data-punctuation="，">为报倾城随太守</span>
    <span data-punctuation="，">亲射虎</span>
    <span data-punctuation="。">看孙郎</span>
    <br>
    <span data-punctuation="。">酒酣胸胆尚开张</span>
    <span data-punctuation="，">鬓微霜</span>
    <span data-punctuation="！">又何妨</span>
    <span data-punctuation="，">持节云中</span>
    <span data-punctuation="？">何日遣冯唐</span>
    <span data-punctuation="，">会挽雕弓如满月</span>
    <span data-punctuation="，">西北望</span>
    <span data-punctuation="。">射天狼</span>
  </p>
  <p class="end" data-title="江城子·乙卯正月二十日夜记梦">
    <span data-punctuation="，">十年生死两茫茫</span>
    <span data-punctuation="，">不思量</span>
    <span data-punctuation="。">自难忘</span>
    <span data-punctuation="，">千里孤坟</span>
    <span data-punctuation="。">无处话凄凉</span>
    <span data-punctuation="，">纵使相逢应不识</span>
    <span data-punctuation="，">尘满面</span>
    <span data-punctuation="。">鬓如霜</span>
    <br>
    <span data-punctuation="，">夜来幽梦忽还乡</span>
    <span data-punctuation="，">小轩窗</span>
    <span data-punctuation="。">正梳妆</span>
    <span data-punctuation="，">相顾无言</span>
    <span data-punctuation="。">惟有泪千行</span>
    <span data-punctuation="，">料得年年肠断处</span>
    <span data-punctuation="，">明月夜</span>
    <span data-punctuation="。">短松冈</span>
  </p>
</div>

<style scoped>
.poem-grid {
  display: flex;
  font: 18px/1.5 SimSun, STSong, "AR_PL_UKai_CN", "Source Han Serif SC", serif;
  font-size: clamp(18px, 1.75vw, 22px);
  background: linear-gradient(90deg, #73241f 50%, #26334e 50%);
  color: #e2e2e2;
  padding: 2rem 1rem;
}

@supports (corner-shape: squircle) {
  .poem-grid {
    border-radius: .75rem;
    corner-shape: scoop;
  }
}

#toggle {
  position: absolute;
  top: -3.5rem;
  right: 0;
}

p {
  display: flex;
  flex-direction: column;
  flex: 0 0 50%;
  margin: 0;
}

p > span {
  padding-right: 4px;
  padding-left: 4px;
}

.start {
  align-items: flex-end;
  align-items: end;
}

.dark .poem-grid {
  background: linear-gradient(90deg, #581b17 50%, #1c263a 50%);
}

.poem-grid.punctuation > p > span::after {
  content: attr(data-punctuation);
}
</style>
