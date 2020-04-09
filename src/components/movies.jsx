import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService"
import Pagination from "../components/pagination"
import { paginate } from "../components/paginate"
 
class Movies extends Component {
    state = {  
        movies:getMovies(),
        pageSize: 4,
        currentPage: 1
    }
    handleDelete=movie=>{
       const movies=this.state.movies.filter(m => m._id !==movie._id)
       this.setState({movies})

    }

    handlePageChange=page=>{
        this.setState({currentPage:page})

    }
    render() { 
        const {length:count}= this.state.movies
         const {pageSize,currentPage,movies}=this.state
        if(count ===0)
            
            return <p>There are no movies currently in the database</p>
            const movies = paginate (movies,currentPage,pageSize) 
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
                {movies.map(movie=>(
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
        <Pagination itemsCount={count} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
        </React.Fragment>
        )        
    }
}
 
export default Movies;