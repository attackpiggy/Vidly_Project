import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService"
import Pagination from "./components/pagination"

class Movies extends Component {
    state = {  
        movies:getMovies(),
        pageSize: 4
    }
    handleDelete=movie=>{
       const movies=this.state.movies.filter(m => m._id !==movie._id)
       this.setState({movies})

    }

    handlePageChange=page=>{
        console.log("Page handle working")

    }
    render() { 
        const {length:count}= this.state.movies
        if(count ===0)
            return <p>There are no movies currently in the database</p>
        return (
         <React.Fragment>   
        <p>Showing {count} movies from the database. </p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Movie</th>
                    <th>Genre</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>(
                <tr key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button onClick={()=>this.handleDelete(movie)} className="btn btn-danger btn-sm">Delete</button></td>
                </tr>
               ) )}
            </tbody>
        </table>
        <Pagination itemsCount={count} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
        </React.Fragment>
        )        
    }
}
 
export default Movies;