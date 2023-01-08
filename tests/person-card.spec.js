import { mount } from '@vue/test-utils'
import PersonCard from '@/components/PersonCard'

// eslint-disable-next-line no-undef
describe('Testing PersonCard.vue', () => {
  // eslint-disable-next-line no-undef
  it('should render first name and last name', () => {
    // when
    const wrapper = mount(PersonCard, {
      propsData: {
        person: {
          id: 1,
          firstName: 'Max',
          lastName: 'Mustermann',
          email: 'max@gmail.com',
          rolle: 'KUNDE'
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    // eslint-disable-next-line no-undef
    expect(cardTitle.text()).toBe('Max Mustermann')
  })
})
