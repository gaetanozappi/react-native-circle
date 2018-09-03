# React Native: react-native-circle

[![github home](http://img.shields.io/npm/v/react-native-circle.svg?style=flat)](https://www.npmjs.com/package/react-native-circle)
![platforms](https://img.shields.io/badge/platforms-Android%20%7C%20iOS-brightgreen.svg?style=flat&colorB=191A17)
[![github home](https://img.shields.io/badge/gaetanozappi-react--native--circle-blue.svg?style=flat)](https://github.com/gaetanozappi/react-native-circle)
[![npm](https://img.shields.io/npm/dm/react-native-circle.svg?style=flat&colorB=007ec6)](https://www.npmjs.com/package/react-native-circle)

[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-circle.svg?style=flat)](https://github.com/gaetanozappi/react-native-circle/issues)
[![github closed issues](https://img.shields.io/github/issues-closed/gaetanozappi/react-native-circle.svg?style=flat&colorB=44cc11)](https://github.com/gaetanozappi/react-native-circle/issues?q=is%3Aissue+is%3Aclosed)
[![Issue Stats](https://img.shields.io/issuestats/i/github/gaetanozappi/react-native-circle.svg?style=flat&colorB=44cc11)](http://github.com/gaetanozappi/react-native-circle/issues)
[![github license](https://img.shields.io/github/license/gaetanozappi/react-native-circle.svg)]()

![PNG](screenshot/react-native-circle.png)

-   [Usage](#usage)
-   [License](#license)

## 📖 Getting started

`$ npm install react-native-circle --save`

## Usage

```javascript
import React, { Component } from 'react';
import Circle from 'react-native-circle';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'MyFriends',
      array: [
        'https://randomuser.me/api/portraits/women/0.jpg',
        'https://randomuser.me/api/portraits/women/1.jpg',
        'https://randomuser.me/api/portraits/women/2.jpg',
        'https://randomuser.me/api/portraits/women/3.jpg',
        'https://randomuser.me/api/portraits/women/4.jpg',
        'https://randomuser.me/api/portraits/women/5.jpg',
        'https://randomuser.me/api/portraits/women/6.jpg',
        'https://randomuser.me/api/portraits/women/7.jpg',
        'https://randomuser.me/api/portraits/women/8.jpg',
        'https://randomuser.me/api/portraits/women/9.jpg',
        //'https://randomuser.me/api/portraits/women/10.jpg',
        //'https://randomuser.me/api/portraits/women/11.jpg',
        //'https://randomuser.me/api/portraits/women/12.jpg',
        //'https://randomuser.me/api/portraits/women/13.jpg',
        //'https://randomuser.me/api/portraits/women/14.jpg',
        //'https://randomuser.me/api/portraits/women/15.jpg',
        //'https://randomuser.me/api/portraits/women/16.jpg',
        //'https://randomuser.me/api/portraits/women/17.jpg',
        //'https://randomuser.me/api/portraits/women/18.jpg',
        //'https://randomuser.me/api/portraits/women/19.jpg',
        //'https://randomuser.me/api/portraits/women/20.jpg',
      ],
    };
  }

  render() {
    return <Circle title={this.state.title} array={this.state.array} />;
  }
}
```

## 💡 Props

| Prop              | Type       | Default | Note                                                                                                       |
| ----------------- | ---------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| `title`      | `string`   |  | Circle title.
| `array`       | `array`   |  | We need to pass an array of the image, as in the example.

## License
This library is provided under the Apache License.

