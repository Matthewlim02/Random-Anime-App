import React, { useState } from 'react';
import AddAnime from './AddAnime';

export default class AnimeList extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            title : "",
            animeList: [],
            edit: false,
            editValue: "",

        }

        this.handleChange = this.handleChange.bind(this);

      }


    handleCallback = (anime) =>{
      let array = this.state.animeList.push(anime);
      this.setState({animelist: array})
    }

    handleChange(event) {
        this.setState({editValue: event.target.value});
      }


      removeItem(index) {
        const list = this.state.animeList;
        console.log("test", index)
        list.splice(index, 1);
        console.log("test")
        console.log(this.state.animeList)
        this.setState({animeList: list });
      }

      handleEdit(index){
        const list = this.state.animeList;
        console.log(this.state.editValue);
        list[index] = this.state.editValue;
        this.setState({animeList: list,
         edit: false});
        console.log(this.state.animeList);
      }


render () {


  const {edit} = this.state
        return (
            <div className="animeButtons">
                <AddAnime parentCallback = {this.handleCallback}/>
                {this.state.animeList.filter(anime => anime !== "").map((anime, y) => (
                  <li key={y}>

                   {anime}
                    &nbsp;


                    <button onClick={() => this.removeItem(y)}>Delete</button>

                    <button onClick={() => this.setState({ edit: !this.state.edit })}>Edit</button>

                      {edit &&   (
                          <>
                        <input type="text" onChange={this.handleChange} />
                        <button onClick={() =>  this.handleEdit(y)}>Save</button>
                          </>
                      )

                      }



                  </li>
               ))}

            </div>
          );
      }
}