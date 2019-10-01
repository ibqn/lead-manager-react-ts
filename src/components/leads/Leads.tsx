import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { LeadsState } from '../../reducers/leads/types';
import { thunkGetLeads } from '../../thunks';

interface LeadsProps {
  thunkGetLeads: any;
  leads: LeadsState;
}

export class Leads extends Component<LeadsProps> {
  componentDidMount() {
    this.props.thunkGetLeads();
  }

  render() {
    return (
      <div>
        <h1>Leads List</h1>
        <table className="table table-stripped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.props.leads.leads.map(lead => (
              <tr key={lead.id}>
                <td>{lead.id}</td>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.message}</td>
                <td>
                  <button className="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: AppState) => ({
  leads: state.leads
});

export default connect(
  mapStateToProps,
  { thunkGetLeads }
)(Leads);
