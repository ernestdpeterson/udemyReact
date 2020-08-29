import React, {Component} from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    }
  }
  componentDidCatch(error, info) {
    this.setState({hasError: true})
  }
  render() {
    if (this.state.hasError) {
      return <h1>Uh Oh! Something Bad Happend. <span role="img" aria-label="sick face emoji">&#x1f912;</span></h1>
    }
    return this.props.children
  }
}

export default ErrorBoundry;