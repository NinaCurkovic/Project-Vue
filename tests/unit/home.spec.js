import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

describe('Home.vue', () => {
  it('renders p tag', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.find("p").text()).equal("FREE SHIPPING ON ORDERS OVER 50$"
    );
  });
  it('button has correct text rendered', () =>{
    const wrapper = shallowMount(Home)
    expect(wrapper.find('#button1').text()).equal('Shop Now');
  })
})
