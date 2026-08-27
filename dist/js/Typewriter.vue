<template>
  <div class="typewriter">
    <div v-html="displayText"></div>
  </div>
</template>

<script>
import {ref, watch, computed, onMounted, onBeforeUnmount, defineComponent, getCurrentInstance} from 'vue';

export default defineComponent({
  name: 'Typewriter',
  props: {
    text: {
      type: String,
      required: true,
      default: '这是一个增强版的打字效果演示，包含光标和重新开始功能！'
    },
    speed: {
      type: Number,
      default: 20
    },
    showControls: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: false
    },
    initData: Object,
    action: Function,
  },
  setup(props) {
    const {proxy} = getCurrentInstance();
    const content = computed(() => {
      return proxy.$tpl(props.text, props.initData);
    });
    const displayText = ref('');
    const currentIndex = ref(0);
    const isBlinking = ref(true);
    const isComplete = ref(false);
    const isPaused = ref(false);
    const typingInterval = ref(null);
    const blinkInterval = ref(null);
    const processHtmlTags = (text, startIndex) => {
      if (text[startIndex] === '<') {
        const tagEnd = text.indexOf('>', startIndex);
        if (tagEnd !== -1) {
          return {
            processedText: text.slice(startIndex, tagEnd + 1),
            newIndex: tagEnd + 1
          };
        }
      }
      return null;
    };
    const typeWriter = () => {
      if (isPaused.value || isComplete.value) {
        return;
      }

      if (currentIndex.value < content.value.length) {
        const htmlResult = processHtmlTags(content.value, currentIndex.value);

        if (htmlResult) {
          displayText.value += htmlResult.processedText;
          currentIndex.value = htmlResult.newIndex;
        } else {
          displayText.value += content.value.charAt(currentIndex.value);
          currentIndex.value++;
        }

        // 随机速度变化使效果更自然
        const delay = props.speed + (Math.random() * props.speed / 2);
        typingInterval.value = setTimeout(typeWriter, delay);
      } else {
        isComplete.value = true;
        clearInterval(blinkInterval.value);
        isBlinking.value = false;

        if (props.loop) {
          setTimeout(() => {
            restartTyping();
          }, 2000);
        }
      }
    };
    const startBlinking = () => {
      blinkInterval.value = setInterval(() => {
        isBlinking.value = !isBlinking.value;
      }, 500);
    };
    const restartTyping = () => {
      displayText.value = '';
      currentIndex.value = 0;
      isComplete.value = false;
      isPaused.value = false;
      isBlinking.value = true;
      startBlinking();
      typeWriter();
    };
    const togglePause = () => {
      if (isComplete.value) {
        return;
      }

      isPaused.value = !isPaused.value;
      if (!isPaused.value) {
        typeWriter();
      }
    };
    const cleanup = () => {
      if (typingInterval.value) {
        clearTimeout(typingInterval.value);
        typingInterval.value = null;
      }
      if (blinkInterval.value) {
        clearInterval(blinkInterval.value);
        blinkInterval.value = null;
      }
    };
    watch(() => content.value, (newText) => {
      if (newText && !typingInterval.value) {
        restartTyping();
      }
    });
    onMounted(() => {
      startBlinking();
      typeWriter();
    });
    onBeforeUnmount(() => {
      cleanup();
    });
    return {
      displayText,
      isBlinking,
      restartTyping,
      togglePause,
      isComplete,
      isPaused,
      content
    };
  }
});
</script>

<style scoped>
.typewriter {
  font-family: monospace;
  line-height: 1.5;
}

.cursor {
  display: inline-block;
  margin-left: 2px;
}

.blink {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  from, to {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

.controls {
  margin-top: 1em;
}

button {
  padding: 0.5em 1em;
  margin-right: 0.5em;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:not(:disabled):hover {
  background-color: #3aa876;
}
</style>