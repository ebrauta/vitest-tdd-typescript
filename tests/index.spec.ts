import { test, assert } from 'vitest'
import Order from '../src/Order'
import Beer from '../src/Beer'
import Whisky from '../src/Whisky'
import Water from '../src/Water'
import MessageDataFile from '../src/MessageDataFile'

test('Deve criar um pedido e calcular um total', () => {
  //given - Dado que
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Heineken', 10))
  order.addItem(new Whisky('Jack Daniels', 100))
  order.addItem(new Water('Crystal', 5))
  // when - Quando
  const total = order.getTotal()
  // then  - Então
  assert.equal(total, 115)
})

test('Deve criar um pedido e calcular os impostos', () => {
  //given - Dado que
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Heineken', 10)) //10%
  order.addItem(new Whisky('Jack Daniels', 100)) //20%
  order.addItem(new Water('Crystal', 5)) //isenta
  // when - Quando
  const taxes = order.getTaxes()
  // then  - Então
  assert.equal(taxes, 21)
})

test('Deve criar um pedido e imprimir uma mensagem em português', async () => {
  //given - Dado que
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Heineken', 10)) //10%
  order.addItem(new Whisky('Jack Daniels', 100)) //20%
  order.addItem(new Water('Crystal', 5)) //isenta
  // when - Quando
  const message = await order.printMessage('pt');
  // then  - Então
  assert.equal(
    message,
    'O total foi de R$115, os impostos foram R$21. Obrigado pelo seu pedido!',
  )
})

test('Deve criar um pedido e imprimir uma mensagem em inglês', async () => {
  //given - Dado que
  const order = new Order(new MessageDataFile())
  order.addItem(new Beer('Heineken', 10)) //10%
  order.addItem(new Whisky('Jack Daniels', 100)) //20%
  order.addItem(new Water('Crystal', 5)) //isenta
  // when - Quando
  const message = await order.printMessage('en');
  // then  - Então
  assert.equal(
    message,
    'The total was R$115, the taxes was R$21. Thank you for your order!',
  )
})
