import React, { Component } from 'react';
import imageHero from './images/hero.png';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.resp = null;

    this.formRef = React.createRef();

    this.processForm = this.processForm.bind(this);
  }

  /**
   * Component Did Mount
   */

  async componentDidMount() { }

  /**
   * Process Form
   */

  async processForm(evt) {
    evt.preventDefault();

    let resp

    const val = this.formRef.current.value

    try {
      resp = await fetch(`http://backend-backend-s94fto.apps.rhuss-dev.devcluster.openshift.com?name=${val}`)
        .then(response => {
          return response.json()
        })
    } catch (error) {
      console.log(error)
      return;
    }

    console.log(resp)

    this.setState({ resp: JSON.stringify(resp) })

  }

  /**
   * Render
   */

  render() {
    return (
      <div className="container">
        <div className="hero">
          <img src={imageHero} />
        </div>

        <div className="tagline">
          A website with an API powered by Knative running on Red Hat OpenShift Serverless
        </div>

        {!this.state.resp && (
          <form className="formContainer" onSubmit={this.processForm}>
            <input
              type='text'
              className={`form`}
              ref={this.formRef}
            />
            <input type="submit" vaue="submit" />
          </form>
        )}

        {this.state.resp && (
          <div className="resp">{this.state.resp}</div>
        )}

      </div>
    );
  }
}
