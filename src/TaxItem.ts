import Item from "./Item";

export default abstract class TaxItem extends Item {
  constructor(category: string, description: string, price: number) {
    super(category, description, price)
  }

  calculateTax() {
    return (this.price * this.getTax()) / 100
  }

  abstract getTax(): number
}
