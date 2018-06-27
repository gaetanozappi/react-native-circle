# React Native: Circle

[![github home](https://img.shields.io/badge/gaetanozappi-react--native--circle-blue.svg?style=flat-square)](https://github.com/gaetanozappi/react-native-circle)
[![github issues](https://img.shields.io/github/issues/gaetanozappi/react-native-circle.svg?style=flat-square)](https://github.com/gaetanozappi/react-native-circle/issues)

![PNG](screenshot/react-native-circle.png)

-   [Usage](#usage)
-   [License](#license)

## Usage

```javascript
import React, { Component } from 'react';
import Circle from './Circle';

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
    return <Circle array={this.state.array} title={this.state.title} />;
  }
}
```

## License
This library is provided under the Apache License.

