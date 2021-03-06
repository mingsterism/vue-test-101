import {mount} from '@vue/test-utils'
import Todo from './Todo.vue'

test('renders a todo', () => {
    const wrapper = mount(Todo)

    const todo = wrapper.get('[data-test="todo"]')

    expect(todo.text()).toBe('Learn Vue.js 3')
})
