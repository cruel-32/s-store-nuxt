import { mount } from '@vue/test-utils';
import AnswerDialog from '@/components/AnswerDialog.vue';

describe('AnswerDialog', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(AnswerDialog)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  
})