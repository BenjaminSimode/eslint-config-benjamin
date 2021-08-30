'use strict';

module.exports = {
  extends: [
    require.resolve('./base'),
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    sourceType: 'module'
  },
  globals: {
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly'
  }
};
