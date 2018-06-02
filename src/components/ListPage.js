import React from 'react'
import { ScrollView, View, Text, Button } from 'react-native'
import { withRouter } from 'react-router-native'
​
class ListPage extends React.Component {

  constructor() {
      this.state = {};
      this.getReviews = this.getReviews.bind(this);
  }

  getReviews() {}

  render () {
    return (
      <View>
        <ScrollView>
          <View
            style={
              {
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              }
            }
              >
            // here is where we will render our reviews
          </View>
        </ScrollView>
        <Button
          onPress={this.createPost}
          title="Search for Reviews"
        />
      </View>
    )
  }
​
  createReview = () => {
    this.props.router.push('/create');
  }
}