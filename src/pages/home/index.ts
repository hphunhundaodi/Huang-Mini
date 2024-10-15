import { defineComponent, ref } from '@vue-mini/core';

defineComponent(() => {
  const greeting = ref('欢迎使用 Vue Mini');
  const bg = ref('bg-[#3532ff] h-[323px] text-[#fafafa] flex items-center');
  const search = (value: string) => {
    console.log('search', greeting);
    console.log('search', value);
    // greeting.value = `欢迎使用 ${value}`;
  }
  const selectResult = (e: any) => {
    console.log('select result', e.detail)
  }
  return {
    greeting,
    bg,
    search,
    selectResult,
  };
});
