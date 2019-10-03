import React, { Component, FormEvent, ChangeEvent } from 'react';
import { LeadShallow } from '../../reducers/leads/types';
import { connect } from 'react-redux';
import { thunkAddLead } from '../../thunks';

interface FormState extends LeadShallow {}

interface FormProps {
  thunkAddLead: any;
}

export class Form extends Component<FormProps, FormState> {
  constructor(props: FormProps) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: ''
    } as FormState;
  }

  onSubmit = (e: FormEvent) => {
    e.preventDefault();
    this.props.thunkAddLead(this.state);
  };

  onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value
    });

  render() {
    const { name, email, message } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h1>Add Lead</h1>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              onChange={this.onChange}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              onChange={this.onChange}
              value={message}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { thunkAddLead }
)(Form);
