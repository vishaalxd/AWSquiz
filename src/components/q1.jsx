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
        question: 'Can we attach an EBS volume to more than one EC2 instance at the same time?',
        Answer: 'No',
        A: 'Only EC2-optimized EBS volumes',
        B: 'Only in read mode',
        C: 'No',
        D: 'Yes',
        Comments: 'C: NO',
      },

      {
        id: 2,
        question: 'When you run a DB Instance as a Multi-AZ deployment, the “______” serves database writes and reads',
        Answer: 'Primary',
        A: 'Secondary',
        B: 'Backup',
        C: 'Stand by',
        D: 'Primary',
        Comments: 'D: Primary',
      },
      {
        id: 3,
        question: 'EBS can always tolerate an Availability Zone failure?',
        Answer: 'No, all EBS volume is stored in a single Availability Zone',
        A: 'Depends on how it is setup',
        B: 'Yes, EBS volume has multiple copies so it should be fine',
        C: 'No, all EBS volume is stored in a single Availability Zone',
        D: 'Depends on the Region where EBS volume is initiatedOne of the known fallacies of EBS is that all the data of a single volume lives in a single Availability Zone. Thus it cannot withstand Availability zone failures.',
        Comments: 'C: No, all EBS volume is stored in a single Availability Zone, One of the known fallacies of EBS is that all the data of a single volume lives in a single Availability Zone. Thus it cannot withstand Availability zone failures.',
      },
      {
        id: 4,
        question: 'You have an application running in us-west-2 that requires six Amazon Elastic Compute Cloud (EC2) instances running at all times. With three AZs available in that region (us-west-2a, us-west-2b, and us-west-2c), which of the following deployments provides 100 percent fault tolerance if any single AZ in us-west-2 becomes unavailable?',
        Answer: 'Us-west-2a with six EC2 instances, us-west-2b with six EC2 instances, and us-west-2c with no EC2 instances',
        A: 'Us-west-2a with four EC2 instances, us-west-2b with two EC2 instances, and us-west-2c with two EC2-instances',
        B: 'Us-west-2a with two EC2 instances, us-west-2b with two EC2 instances, and us-west-2c with two EC2 instances',
        C: 'Us-west-2a with three EC2 instances, us-west-2b with three EC2 instances, and us-west-2c with no EC2 instances',
        D: 'Us-west-2a with six EC2 instances, us-west-2b with six EC2 instances, and us-west-2c with no EC2 instances',
        Comments: 'D: Us-west-2a with six EC2 instances, us-west-2b with six EC2 instances, and us-west-2c with no EC2 instances',
      },
      {
        id: 5,
        question: 'Can you create IAM security credentials for existing users?',
        Answer: 'Yes, existing users can have security credentials associated with their account',
        A: 'No, IAM requires that all users who have credentials set up are not existing users',
        B: 'Yes, but only IAM credentials, not ordinary security credentials.',
        C: 'No, security credentials are created within GROUPS, and then users are associated to GROUPS at a later time.',
        D: 'Yes, existing users can have security credentials associated with their account',
        Comments: 'D: Yes, existing users can have security credentials associated with their account',
      },
      {
        id: 6,
        question: 'Is data stored in S3 is always encrypted?',
        Answer: 'Yes, but only when right APIs are called',
        A: 'Yes, but only when right APIs are called',
        B: 'No, there is no such feature',
        C: 'Yes, S3 always encrypts data for security',
        D: 'Yes, but only in Gov Cloud datacenters',
        Comments: 'A: Yes, but only when right APIs are called. S3 by default do not encrypt the data stored into its service. But using Server Side Encryption feature, if proper headers are passes (in REST)',
      },
      {
        id: 7,
        question: 'You are setting up a VPC and you need to set up a public subnet within that VPC. What following requirement must be met for this subnet to be considered a public subnet?',
        Answer: "Subnet's traffic is routed to an Internet gateway",
        A: "Subnet's traffic is not routed to an Internet gateway",
        B: "Subnet's traffic is not routed to an Internet gateway but has its traffic routed to a virtual private gateway.",
        C: "Subnet's traffic is routed to an Internet gateway",
        D: 'None of these answers can be considered a public subnet',
        Comments: "C: Subnet's traffic is routed to an Internet gateway",
      },
      {
        id: 8,
        question: 'What about below is false for AWS SLA ?',
        Answer: 'S3 availability is guarantee to 99.99%',
        A: 'EC2 availability is guarantee to 99.95%',
        B: 'RDS multi-AZ is guarantee to 99.95%',
        C: 'EBS availability is guarantee to 99.95%',
        D: 'S3 availability is guarantee to 99.99%',
        Comments: 'D: S3 availability is guarantee to 99.99%',
      },
      {
        id: 9,
        question: 'A customer’s nightly EMR job processes a single 2TB data file stored on Amazon Simple Storage Service (S3). The Amazon Elastic Map Reduce (EMR) job runs on two On-Demand core nodes and three On-Demand task nodes. Which of the following may help reduce the EMR job completion time?',
        Answer: 'Change the input split size in the MapReduce job configuration. Adjust the number of simultaneous mapper tasks.',
        A: 'Change the input split size in the MapReduce job configuration. Adjust the number of simultaneous mapper tasks.',
        B: 'Use a bootstrap action the present the S3 bucket as a local filesystem.',
        C: 'Use three Spot Instances rather than three On-Demand instances for the taks nodes',
        D: 'Launch the core nodes and task nodes within an Amazon Virtual Cloud',
        Comments: 'A: Change the input split size in the MapReduce job configuration. Adjust the number of simultaneous mapper tasks.',
      },
      {
        id: 10,
        question: 'What is the maximum size of a single S3 object?',
        Answer: '5TB',
        A: '5GB',
        B: 'No such limitation',
        C: '5TB',
        D: '100GB',
        Comments: 'C: 5TB',
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
                  style={{textAlign: 'center', marginTop: 10, marginBottom: 60}}
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
                      style={{
                        display: 'inline',
                        width: 1100,
                        textAlign: 'left',
                      }}
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
                      style={{
                        display: 'inline',
                        width: 1100,
                        textAlign: 'left',
                      }}
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
                      style={{
                        display: 'inline',
                        width: 1100,
                        textAlign: 'left',
                      }}
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
                      style={{
                        display: 'inline',
                        width: 1100,
                        textAlign: 'left',
                      }}
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
                        fontSize: 18,
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
                        style={{width: 100, marginInlineEnd: 500}}
                        className="blue ui vertical animated button "
                        id="Finish"
                      >
                        <div class="visible content">Finish</div>
                        <div class="hidden content">Go Home</div>
                      </button>
                    </Link>
                    {' '}
                    <h3
                      style={{display: 'none', color: 'rgb(241, 13, 127)'}}
                      id="score"
                    >
                      Correct! Score :{this.state.val}
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
      : alert ('Wrong!');
    document.getElementById ('checked1').disabled = true;
    document.getElementById ('checked2').disabled = true;
    document.getElementById ('checked3').disabled = true;
    document.getElementById ('checked4').disabled = true;
    // document.getElementById ('checkanswer').style.display = 'inline';
    document.getElementById ('solution').style.display = 'block';
    document.getElementById ('score').style.display = 'inline';
    // document.getElementById ('checkanswerwrong').style.display = 'inline';
  };

  next = event => {
    if (this.state.count < 9) {
      document.getElementById ('next').disabled = false;
      this.setState ({count: this.state.count + 1});
      document.getElementById ('prev').disabled = false;
      if (this.state.visited === 0) {
        document.getElementById ('solution').style.display = 'none';
        document.getElementById ('score').style.display = 'none';
        document.getElementById ('checked1').disabled = false;
        document.getElementById ('checked2').disabled = false;
        document.getElementById ('checked3').disabled = false;
        document.getElementById ('checked4').disabled = false;
      }
    } else {
      document.getElementById ('next').disabled = true;
    }
  };

  prev = event => {
    if (this.state.count > 0) {
      document.getElementById ('prev').disabled = false;
      this.setState ({count: this.state.count - 1});
      document.getElementById ('next').disabled = false;
    } else {
      document.getElementById ('prev').disabled = true;
    }
  };
}

export default Quiz;
