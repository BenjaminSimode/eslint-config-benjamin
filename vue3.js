'use strict';

module.exports = {
  extends: require.resolve('./base'),
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  },
  plugins: ['plugin:vue/vue3-recommended']
};
