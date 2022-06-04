import React, { Component } from 'react';
import FeedBackOptions from './FeedBackOptions';
import Section from './Section';
import Statistics from './Statistics';
import Notification from './Notification';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickButton = e => {
    const option = e.target.name;
    if (option) {
      this.setState(prevState => ({ [option]: prevState[option] + 1 }));
    }
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedback = () => {
    const totalFeedback = this.countTotalFeedback();
    const goodFeedback = this.state.good;

    let result = 0;
    if (totalFeedback > 0) {
      result = Math.ceil((goodFeedback * 100) / totalFeedback);
    }

    return ` ${result} %`;
  };
  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);
    const countTotalFeedback = this.countTotalFeedback();
    return (
      <div>
        <Section title="Please leave feedback">
          <FeedBackOptions
            options={options}
            onLeaveFeedback={this.handleClickButton}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={this.countPositiveFeedback()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
