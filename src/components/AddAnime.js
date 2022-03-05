import { PropTypes } from 'react';

export default class AddAnime extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        this.props.parentCallback(this.state.value);
        event.preventDefault();
      }
      render () {
        return (
            <form onSubmit={this.handleSubmit}>
              <label>
                Anime Title:
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
              <div>

              </div>
            </form>
            
          );
    }} 