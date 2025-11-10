<template>
  <div class="container" :class="{'collapsed': collapsed}">
    <div class="left-panel" @click="onClick">左侧内容</div>
    <div class="right-panel">右侧内容（动态跟随左侧宽度）</div>
  </div>
</template>

<script>
import {defineComponent, ref} from 'vue';

export default defineComponent({
  name: 'Weather',
  setup() {
    const collapsed = ref(false);
    const onClick = () => {
      collapsed.value = !collapsed.value;
    };
    return {
      collapsed,
      onClick
    };
  }
});
</script>

<style>
/* 容器：相对定位，避免使用 Flex */
.container {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden; /* 防止右侧内容溢出 */
}

/* 左侧面板：可折叠，启用 GPU 加速 */
.left-panel {
  position: absolute;
  left: 0;
  top: 0;
  width: 200px; /* 默认宽度 */
  height: 100%;
  background: #f0f0f0;
  transition: width 0.3s ease, transform 0.3s ease; /* 平滑过渡 */
  will-change: width; /* 提前告知浏览器优化（可选） */
  transform: translateZ(0); /* 强制启用 GPU 加速 */
}

/* 折叠状态：宽度变为 60px */
.left-panel.collapsed {
  width: 60px;
}

/* 右侧面板：动态跟随左侧宽度 */
.right-panel {
  position: absolute;
  left: 200px; /* 默认左侧宽度（与 .left-panel 初始值一致） */
  top: 0;
  right: 0;
  height: 100%;
  background: #e0e0e0;
  transition: left 0.3s ease, transform 0.3s ease; /* 平滑过渡 */
  transform: translateZ(0); /* 启用 GPU 加速 */
}

/* 左侧折叠时，右侧面板左边缘对齐到 60px */
.left-panel.collapsed + .right-panel { /* 这里用相邻兄弟选择器可能不直接（因为.right-panel不是.left-panel的兄弟的直接后续）, 实际可以通过JS或调整结构*/
  /* 更好的方式是通过 JS 或父容器控制，如下文 JS 示例 */
  left: 60px;
  /* 或者改用以下结构，通过父容器类名控制 */
}

/* 更好的CSS结构控制方式（避免选择器问题）： */
.container.collapsed .left-panel {
  width: 60px;
}
.container.collapsed .right-panel {
  left: 60px;
}
</style>
