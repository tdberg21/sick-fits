import App, { Container } from 'next/app';
import Page from '../components/Page.js';

class MyApp extends App {
  render () {
    const { Component } = this.props;
    return (
      <Page>
        <Container>
          <Component />
        </Container>
      </Page>    
    )
  }
}

export default MyApp;