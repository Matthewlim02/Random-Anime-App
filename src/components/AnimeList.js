import React from 'react';
import AddAnime from './AddAnime';

export default class AnimeList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            title : "",
            animeList: [],
        }
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
      }
    
    
    handleCallback = (anime) =>{
      this.setState({ title : anime })  
    } 
    
    handleChange(event) {
        this.setState({title: event.target.value});
      }

    handleSubmit(event) {
        console.log(this.state.title);
        
        this.state.animeList.splice(this.state.animeList.indexOf(this.state.title), 1)
        let array = this.state.animeList;
        console.log('After deletion');
        console.log(this.state.animeList);
        event.preventDefault();
        this.setState({ animeList : array})
        this.forceUpdateHandler()
      }

      forceUpdateHandler(){
        this.forceUpdate();
      };

      render () {
          
          if (!this.state.animeList.includes(this.state.title)) {
                this.state.animeList.push(this.state.title);
          }
          console.log('Rendered List')
          console.log(this.state.animeList)
          console.log(this.state.title)
        return (
            <div>
                <AddAnime parentCallback = {this.handleCallback}/>
                {this.state.animeList.filter(anime => anime !== "").map(anime => (
                  <li>
                   {anime}
                  </li>
               ))}
               <form onSubmit={this.handleSubmit}>
              <label>
                Delete Anime:
                <input type="text" />
              </label>
              <input type="submit" value="Submit" />
              <div>

              </div>
            </form> 
            </div>
          );
      } 
}