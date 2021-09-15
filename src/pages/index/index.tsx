import { PureComponent } from 'react'
import { Input, View, Button } from '@tarojs/components'

import './index.styl'

export default class TestInputFocus extends PureComponent<any> {

  state: any = {
    isSearching: false,
  }

  componentDidMount() {
  }

  handleInputBlur = () => {
    this.setState({
      isSearching: false,
    })
  }

  handleInputShow = () => {
    this.setState({
      isSearching: true,
    })
  }

  render() {

    const {
      isSearching,
    } = this.state

    let inputSearchElem

    if (!isSearching) {
      inputSearchElem = (
        <Button
          onClick={this.handleInputShow}
        >
          搜索
        </Button>
      )
    } else {
      inputSearchElem = (
        <View>
          <Input
            className='search-input'
            type="text"
            placeholder='搜一搜'
            focus={isSearching}
            onBlur={this.handleInputBlur}
          />
        </View>
      )
    }

    return (
      <View className="test-page">
        {inputSearchElem}
      </View>
    )
  }
}

