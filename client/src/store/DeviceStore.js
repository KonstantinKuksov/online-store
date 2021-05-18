import { makeAutoObservable } from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
      { id: 3, name: 'Телевизоры' },
      { id: 4, name: 'Ноутбуки' },
      { id: 5, name: 'Аксессуары' },
    ];
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
      { id: 3, name: 'Lenovo' },
      { id: 4, name: 'Asus' },
      { id: 5, name: 'Xiaomi' },
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
      {
        id: 5,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 6,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 7,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 8,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
      {
        id: 9,
        name: 'Some device name',
        price: 10500,
        rating: 5,
        img: 'https://ultrahd.su/wp-content/uploads/2017/12/ultrahd.su-Smart-TV-i-OS.jpg',
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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

  setSelectedType(type) {
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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

  get selectedType() {
    return this._selectedType;
  }

  get selectedBrand() {
    return this._selectedBrand;
  }
}
