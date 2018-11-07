import '../style/app.scss';

import React from 'react';
import superagent from 'superagent';

// This JSON pretty component requires the window to work
// When we're using next.js to render on the server, we need
// to use next.js' dynamic loader to delay it rendering.
// Otherwise, this would be:
//  import ReactJson from ('react-json-view')
import dynamic from 'next/dynamic'
const ReactJson = dynamic(() => import('react-json-view'), {
  ssr: false
});

export default class Index extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      url: '',
      method: 'get',
      requestBody: '',
      header: {},
      body: {}
    };

  }

  changeURL = (event) => {
    let url = event.target.value;
    this.setState({url});
  };

  changeMethod = (event) => {
    let method = event.target.value;
    this.setState({method});
  };

  changeBody = (event) => {
    let requestBody = event.target.value;
    this.setState({requestBody});
  };

  callAPI = (event) => {
    event.preventDefault();
    try {
      let body = this.state.requestBody && JSON.parse(this.state.requestBody);
      superagent(this.state.method, this.state.url)
      .send(body)
      .then( response => {
        let body = response.body;
        this.setState({body});
        console.log(this.state);
      })
    } catch(e) { console.error('Invalid JSON Body', this.state.requestBody); }


  };


  render() {

    return (
      <section>
        <form onSubmit={this.callAPI}>
          <select name="method" onChange={this.changeMethod}>
            <option value="get">GET</option>
            <option value="post">POST</option>
            <option value="put">PUT</option>
            <option value="patch">PATCH</option>
            <option value="delete">DELETE</option>
          </select>
          <input placeholder="URL" onChange={this.changeURL}/>
          <button>Go!</button>
          <div>
            <textarea onChange={this.changeBody} name="requestBody"></textarea>
          </div>
        </form>
        <ReactJson src={this.state.body} />
      </section>
    );
  }

}
