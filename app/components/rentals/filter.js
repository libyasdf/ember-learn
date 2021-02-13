import Component from '@glimmer/component';

export default class RentalsFilterComponent extends Component {
  get results() {
    let { rentals, query } = this.args;
    console.log('query', query);
    if (query) {
      rentals = rentals.filter((rental) => rental.title.includes(query));
    }
    console.log('12.12:', rentals);
    return rentals;
  }
}
