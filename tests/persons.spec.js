import { mount } from '@vue/test-utils'
import Persons from '@/views/Persons.vue'
import PersonsCardList from '@/components/PersonsCardList'
import PersonsCreateForm from '@/components/PersonsCreateForm'

// eslint-disable-next-line no-undef
describe('Testing Persons.vue', () => {
  // eslint-disable-next-line no-undef
  it('should show page title', () => {
    // when
    const wrapper = mount(Persons)

    // then
    // eslint-disable-next-line no-undef
    expect(wrapper.text()).toMatch('Persons')
  })

  // eslint-disable-next-line no-undef
  it('should have persons card list component', () => {
    // when
    const wrapper = mount(Persons)

    // then
    const cardList = wrapper.findComponent(PersonsCardList)
    // eslint-disable-next-line no-undef
    expect(cardList.exists()).toBeTruthy()
  })

  // eslint-disable-next-line no-undef
  it('should have persons create form component', () => {
    // when
    const wrapper = mount(Persons)

    // then
    const createForm = wrapper.findComponent(PersonsCreateForm)
    // eslint-disable-next-line no-undef
    expect(createForm.exists()).toBeTruthy()
  })
})
