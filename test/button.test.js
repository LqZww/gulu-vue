const expect = chai.expect;
import Vue from 'vue'
import Button from '../src/button'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Button', () => {
  it('存在.', () => {
    expect(Button).to.be.ok
  })
  it('可以设置icon.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#i-settings')
    vm.$destroy()
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        loading: true
      }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#i-loading')
    vm.$destroy()
  })
  it('icon 默认的 order 是 1', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('1')
    vm.$el.remove()
    vm.$destroy()
  })
  it('设置 iconPosition 可以改变 order', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
        iconPosition: 'right'
      }
    }).$mount(div)
    const icon = vm.$el.querySelector('svg')
    expect(getComputedStyle(icon).order).to.eq('2')
    vm.$el.remove()
    vm.$destroy()
  })
  it('点击 button 触发 click 事件', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
      propsData: {
        icon: 'settings',
      }
    }).$mount()

    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called

  })
})

// // 单元测试
// // import { expect } from 'chai';
// import chai from 'chai';
// const expect = chai.expect

// import spies from 'chai-spies';
// chai.use(spies)


// // 1. 测试 icon
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   // console.log(vm);
//   vm.$mount()

//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-settings')
//   // 清理 button 内存
//   vm.$el.remove()
//   vm.$destroy()
// }

// // 2. 测试 loading
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       loading: true
//     }
//   })
//   vm.$mount()

//   let useElement = vm.$el.querySelector('use')
//   let href = useElement.getAttribute('xlink:href')
//   expect(href).to.eq('#i-loading')
//   vm.$el.remove()
//   vm.$destroy()
// }

// // 3. 测试 iconPosition order 为 1
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)

//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount(div)

//   let svg = vm.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq('1')
//   vm.$el.remove()
//   vm.$destroy()
// }
// // 4. 测试 iconPosition order 为 2
// {
//   const div = document.createElement('div')
//   document.body.appendChild(div)

//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings',
//       iconPosition: 'right'
//     }
//   })
//   vm.$mount(div)

//   let svg = vm.$el.querySelector('svg')
//   let { order } = window.getComputedStyle(svg)
//   expect(order).to.eq('2')
//   vm.$el.remove()
//   vm.$destroy()
// }
// // 5. 测试 click
// {
//   const Constructor = Vue.extend(Button)
//   const vm = new Constructor({
//     propsData: {
//       icon: 'settings'
//     }
//   })
//   vm.$mount()
//   let spy = chai.spy(() => {

//   })
//   vm.$on('click', spy)

//   let button = vm.$el
//   button.click()
//   expect(spy).to.have.been.called()
// }