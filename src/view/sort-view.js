import AbstractView from '../framework/view/abstract-view';
import { SortType } from '../const';

const createSortTemplate = () =>
  `<form class="trip-events__trip-sort trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
        <input id="sort-day" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-day" data-sort-type=${SortType.DAY} checked>
        <label class="trip-sort__btn" for="sort-day">Day</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--event">
        <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" data-sort-type=${SortType.EVENT} disabled>
        <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
        <input id="sort-time" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-time" data-sort-type=${SortType.TIME}>
        <label class="trip-sort__btn" for="sort-time">Time</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
        <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type=${SortType.PRICE}>
        <label class="trip-sort__btn" for="sort-price">Price</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--offer">
    <input id="sort-price" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-price" data-sort-type=${SortType.PRICE}>
        <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`;

export default class SortView extends AbstractView {
    #sortButtonClick = null;

    constructor(sortButtonClick) {
      super();

      this.#sortButtonClick = sortButtonClick;
      this.element.addEventListener('click', this.#sortButtonClickHandler);
    }

    get template() {
      return createSortTemplate();
    }

    #sortButtonClickHandler = (evt) => {
      if (evt.target.tagName !== 'INPUT') {
        return;
      }
      this.#sortButtonClick(evt.target.dataset.sortType);
    };
}
