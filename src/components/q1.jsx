import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import '../App.css';

class Quiz extends Component {
  state = {
    count: 0,
    val: 0,
    visited: 0,
    data: [
      {
        id: 1,
        question: 'What is your name ?',
        Answer: 'A. John',
        A: 'A. John',
        B: 'B. Samsung',
        C: 'C. Apple',
        D: 'D. Windows',
        Comments: 'John is the name of the user.',
      },
      {
        id: 2,
        question: 'What is your job ?',
        Answer: 'C. Engineer',
        A: 'A. Apple',
        B: 'B. Samsung',
        C: 'C. Engineer',
        D: 'D. Windows',
        Comments: 'Engineer',
      },
    ],
  };

  render () {
    return (
      <div>
        <div className="ui grid">
          <div className="row">
            <div
              style={{marginTop: 40}}
              className="fourteen wide column centered"
            >

              <div class="ui raised segment">
                <h2
                  style={{textAlign: 'center', marginTop: 10, marginBottom: 90}}
                  class="ui header"
                >
                  Question Paper - I
                </h2>

                <h5
                  style={{
                    textAlign: 'justify',
                    marginTop: 10,
                    marginBottom: 30,
                  }}
                >
                  {this.state.data[this.state.count].id}
                  .
                  {' '}
                  {this.state.data[this.state.count].question}
                </h5>

                <div className="ui form">
                  <div className="field">

                    <button
                      style={{display: 'inline', width: 200, textAlign: 'left'}}
                      value={this.state.data[this.state.count].A}
                      className="basic ui button"
                      id="checked1"
                      onClick={this.validate.bind (this)}
                    >
                      {this.state.data[this.state.count].A}
                    </button>

                    <i
                      style={{marginLeft: 10}}
                      className="large green check icon "
                      id="checkanswer"
                    />
                  </div>

                  <div className="field">

                    <button
                      style={{display: 'inline', width: 200, textAlign: 'left'}}
                      className="basic ui button"
                      value={this.state.data[this.state.count].B}
                      id="checked2"
                      onClick={this.validate.bind (this)}
                    >
                      {this.state.data[this.state.count].B}
                    </button>
                    <i
                      style={{marginLeft: 10, display: 'none'}}
                      className="large red times icon "
                      id="checkanswerwrong"
                    />

                  </div>
                  <div className="field">

                    <button
                      style={{display: 'inline', width: 200, textAlign: 'left'}}
                      value={this.state.data[this.state.count].C}
                      className="basic ui button"
                      id="checked3"
                      onClick={this.validate.bind (this)}
                    >
                      {this.state.data[this.state.count].C}
                    </button>

                  </div>
                  <div className="field">

                    <button
                      style={{display: 'inline', width: 200, textAlign: 'left'}}
                      value={this.state.data[this.state.count].D}
                      className="basic ui button"
                      id="checked4"
                      onClick={this.validate.bind (this)}
                    >
                      {this.state.data[this.state.count].D}
                    </button>
                    <br />

                    <h5
                      className="fluid container"
                      style={{
                        display: 'none',
                        fontSize: 20,
                        textAlign: 'center',
                        marginTop: 20,
                        // backgroundColor: '#06BA63',
                        // color: 'white',
                        borderRadius: 5,
                      }}
                      id="solution"
                    >
                      <code>
                        {this.state.data[this.state.count].Comments}
                      </code>
                    </h5>
                    <br />
                    <hr />

                    <button
                      style={{width: 100, marginInlineEnd: 30}}
                      className="blue ui button"
                      onClick={this.prev}
                      id="prev"
                    >
                      <div class="visible content">Previous</div>

                    </button>

                    <button
                      style={{width: 100, marginInlineEnd: 30}}
                      className="blue ui button "
                      onClick={this.next}
                      id="next"
                    >
                      <div class="visible content">Next</div>

                    </button>

                    <Link to="/">
                      <button
                        style={{width: 100, marginInlineEnd: 650}}
                        className="blue ui vertical animated button "
                        id="Finish"
                      >
                        <div class="visible content">Finish</div>
                        <div class="hidden content">Go Home</div>
                      </button>
                    </Link>
                    {' '}
                    <h3 style={{display: 'inline'}}>
                      Score: {this.state.val}
                    </h3>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }

  // validate = event => {
  //   var val = event.target.value;
  //   console.log (val);
  //   if (event.target.value === this.state.data[this.state.count].Answer) {
  //     document.getElementById ('checkanswer').style.display = 'visible';
  //   }
  // };

  validate = event => {
    let value = event.target.value;
    let answer = this.state.data[this.state.count].Answer;
    value === answer
      ? this.setState ({val: this.state.val + 1})
      : alert ('Wrong');
    document.getElementById ('checked1').disabled = true;
    document.getElementById ('checked2').disabled = true;
    document.getElementById ('checked3').disabled = true;
    document.getElementById ('checked4').disabled = true;
    // document.getElementById ('checkanswer').style.display = 'inline';
    document.getElementById ('solution').style.display = 'block';
    // document.getElementById ('checkanswerwrong').style.display = 'inline';
  };

  next = event => {
    if (this.state.visited === 0) {
      this.setState ({visited: this.state.visited + 1});

      if (this.state.count === 1) {
        document.getElementById ('next').disabled = true;
      } else {
        this.setState ({count: this.state.count + 1});
        document.getElementById ('prev').disabled = false;
        document.getElementById ('checked1').disabled = false;
        document.getElementById ('checked2').disabled = false;
        document.getElementById ('checked3').disabled = false;
        document.getElementById ('checked4').disabled = false;
        // document.getElementById ('checkanswer').style.display = 'none';
        document.getElementById ('solution').style.display = 'none';
        // document.getElementById ('checkanswerwrong').style.display = 'none';
      }
    } else {
      if (this.state.count === 1) {
        document.getElementById ('next').disabled = true;
      }
    }
  };

  prev = event => {
    if (this.state.count === 0) {
      document.getElementById ('prev').disabled = true;
    } else {
      document.getElementById ('next').disabled = false;
      document.getElementById ('checked1').disabled = true;
      document.getElementById ('checked2').disabled = true;
      document.getElementById ('checked3').disabled = true;
      document.getElementById ('checked4').disabled = true;
      this.setState ({count: this.state.count - 1});
      document.getElementById ('checkanswer').style.display = 'none';
      document.getElementById ('solution').style.display = 'block';

      document.getElementById ('checkanswerwrong').style.display = 'none';
    }
  };
}

export default Quiz;
