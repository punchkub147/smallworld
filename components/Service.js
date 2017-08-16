import React, { Component } from 'react';

class Service extends Component {

  render() {
    const datas = [
      {
        img: '/static/img/cleaning-lady.svg',
        title: 'Maid&Nanny',
        description: 'qweqwewqewqewqewqeqweqweqwew',
      },
      {
        img: '/static/img/nurse.svg',
        title: 'Nursery',
        description: 'qweqwewqewqewqewqeqweqweqwew',
      },
      {
        img: '/static/img/female-professor-reading-a-book.svg',
        title: 'Teacher@Home',
        description: 'qweqwewqewqewqewqeqweqweqwew',
      },
    ]
    
    return (
      <div id="Service">
        <h1>OUR SERVICE</h1>
        <br/>
        <h3>descriptiondescriptiondescriptio ndescriptiondescri ptiondescriptiond escriptiondescr iptiondescriptionde scriptiondescriptiondescriptiondescriptiondescription</h3>
        <br/>
        <br/>
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="row">
              {datas.map(data => 
                <div className="card col-md-4">
                  <div className="icon">
                    <img src={data.img} alt=""/>
                  </div>
                  <br/>
                  <div className="title">{data.title}</div>
                  <div className="description">{data.description}</div>
                </div>
              )}
            </div>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default Service;