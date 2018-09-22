import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="banner">
          <div className="container-fluid ">

            <h1
              style={{
                textAlign: 'center',
                color: 'whitesmoke',
                fontSize: '32',
                letterSpacing: 1,
                marginBottom: 10,
              }}
              className="ui header"
            >
              <br />
              AWS Cloud Solutions Architect{' '}
            </h1> <p
              style={{
                fontSize: 24,
                color: 'whitesmoke',
                textAlign: 'center',
                marginTop: 10,
              }}
            >
              <i>
                {' '}Preparation Test.<span
                  style={{fontWeight: 'revert', color: 'black'}}
                >
                  {' '} 65 questions / 2 hours
                </span>{' '}
              </i>

            </p> <br />
          </div>{' '}
        </div>

        <div className="ui grid">
          <div className="row">
            <div
              style={{marginTop: 40}}
              className="twelve wide column centered"
            >

              <div class="ui raised segment">
                <h2
                  style={{textAlign: 'center', marginTop: 10}}
                  class="ui header"
                >
                  Examination Rules & Tips
                </h2>

                <p style={{textAlign: 'justify'}}>
                  The AWS Certified Solutions Architect - Associate test is replaced by AWS Certified Solutions Architect Associate (Released February 2018) exam beginning August of 2018. The new exam covers updated procedures and best practices.
                  To prepare for the exam, candidates can attend preparation classes, purchase exam guides, or apply real world practice.
                </p>
                <div className="ui grid">
                  <div className="nine wide column centered">
                    <div
                      style={{marginTop: 20, marginBottom: 40}}
                      class="ui list"
                    >
                      <div class="item">
                        <i class="question circle outline icon" />
                        <div class="content">
                          <a class="header">Number of Questions</a>
                          <div class="description">
                            <span style={{fontWeight: 'bolder'}}>
                              65 questions
                            </span>
                            {' '}
                            (55 questions in the old exam).
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <i class="clock outline icon" />
                        <div class="content">
                          <a class="header">Time Duration</a>
                          <div class="description">
                            <span style={{fontWeight: 'bolder'}}>
                              130 minutes
                            </span>
                            {' '}
                            (80 minutes for the old exam) to complete the exam.
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <i class="dollar sign icon" />
                        <div class="content">
                          <a class="header">Cost</a>
                          <div class="description">
                            The cost to take the AWS Certified Solutions Architect Associate exam is
                            {' '}
                            <span style={{fontWeight: 'bolder'}}>150 USD</span>
                            .
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <i class="file alternate outline icon" />
                        <div class="content">
                          <a class="header">Mock Exams</a>
                          <div class="description">
                            Practice exam registration fee is
                            {' '}
                            <span style={{fontWeight: 'bolder'}}>20 USD</span>
                            .
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="https://d1.awsstatic.com/training-and-certification/docs-sa-assoc/AWS_Certified_Solutions_Architect_Associate_Feb_2018_%20Exam_Guide_v1.5.2.pdf?refid=gs_card">
                      <button
                        style={{marginLeft: 200}}
                        className="blue ui horizontal animated button"
                      >
                        <div class="visible content">Exam guide</div>
                        <div class="hidden content">Download</div>
                      </button>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Quiz components */}

        <div className="ui grid">
          <div className="row">
            <div
              style={{marginTop: 20}}
              className="twelve wide column centered"
            >
              <div class="ui raised segment">
                <h2
                  style={{textAlign: 'center', marginTop: 10, marginBottom: 20}}
                  class="ui header"
                >
                  Quizes & References
                </h2>
                <p
                  style={{
                    textAlign: 'center',
                    padding: 0,
                    fontSize: 14,
                    marginBottom: 60,
                  }}
                >
                  Amazon Web Services continues to grow rapidly, and it's easy to confuse its many offerings. Test your AWS IaaS knowledge with these questions.
                  {' '}
                </p>
                <div className="ui grid">
                  <div className="row centered">
                    <div className="six wide column">
                      <div class="ui relaxed divided list">
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <Link to="/q1" style={{textDecoration: 'none'}}>
                              <a class="header">Question Paper - 1</a>
                            </Link>
                            <div class="description">Updated 10 mins ago</div>
                          </div>
                        </div>
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <a class="header">Question Paper - 2</a>
                            <div class="description">Updated 22 mins ago</div>
                          </div>
                        </div>
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <a class="header">
                              Question Paper - 3
                            </a>
                            <div class="description">Updated 34 mins ago</div>
                          </div>
                        </div>
                      </div>

                    </div>

                    <div className="six wide column">
                      <div class="ui relaxed divided list">
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <a class="header">Question Paper - 4</a>
                            <div class="description">Updated 10 mins ago</div>
                          </div>
                        </div>
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <a class="header">
                              Question Paper - 5
                            </a>
                            <div class="description">Updated 22 mins ago</div>
                          </div>
                        </div>
                        <div class="item">
                          <i class="newspaper outline middle aligned icon" />
                          <div class="content">
                            <a class="header">
                              Question Paper - 6
                            </a>
                            <div class="description">Updated 34 mins ago</div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
