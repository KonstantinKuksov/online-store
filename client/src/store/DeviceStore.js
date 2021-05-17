import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Refs' },
      { id: 2, name: 'Smartphones' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ];
    this._devices = [
      {
        id: 1,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 2,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 3,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 4,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
    ];
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }
}
