import React, { Component } from 'react';

export default class ContactUs extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="contact" style={{ background: '#f7f8ff'}}>
        <div className="row" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
          <div className="columns contact-details">
          <br></br>
            <h1></h1> 
            <h4>Contact us</h4>
            <p className="address">
              <span>{webData.name}</span>
              <br></br>
              <span>Addr: {webData.addr}</span>
              <br></br>
              <span>Email: {webData.email}</span>
            </p>
          </div>
        </div>
      </section>
    );
  }
}