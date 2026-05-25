import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'

import vuetify from '@/plugins/vuetify'
import i18n from '@/plugins/i18n'
import MyProfile from '@/views/MyProfile.vue'

const createWrapper = () => mount(MyProfile, { global: { plugins: [vuetify, i18n] } })

describe('MyProfile', () => {
  // it = individual test case
  it('renders the component correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('h1').text()).toBe('Sebastián Ruiz J.')
  })

  it('renders contact chips', () => {
    const wrapper = createWrapper()
    expect(wrapper.findAll('.v-chip')).toHaveLength(4)
    expect(wrapper.findAll('.v-chip')[0]?.text()).toBe('sebastiantianruizj2014@gmail.com')
    expect(wrapper.findAll('.v-chip')[1]?.find('.mdi-file-document').exists()).toBe(true)
    expect(wrapper.findAll('.v-chip')[2]?.find('.mdi-linkedin').exists()).toBe(true)
    expect(wrapper.findAll('.v-chip')[3]?.find('.mdi-github').exists()).toBe(true)
  })
})
