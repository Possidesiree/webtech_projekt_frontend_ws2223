import { mount } from '@vue/test-utils'
import PersonsCardList from '@/components/PersonsCardList'
import PersonCard from '@/components/PersonCard'

// eslint-disable-next-line no-undef
describe('Testing PersonsCardList.vue', () => {
  // eslint-disable-next-line no-undef
  it('should render a person card for each person', () => {
    // when
    const wrapper = mount(PersonsCardList, {
      propsData: {
        persons: [
          {
            id: 1,
            firstName: 'Max',
            lastName: 'Mustermann',
            email: 'max@gmail.com',
            rolle: 'KUNDE'
          },
          {
            id: 2,
            firstName: 'Maxima',
            lastName: 'Musterfrau',
            email: 'maximu@gmail.com',
            rolle: 'MITARBEITER'
          }
        ]
      }
    })

    // then
    const personCards = wrapper.findAllComponents(PersonCard)
    // eslint-disable-next-line no-undef
    expect(personCards.length).toBe(2)
  })
})
