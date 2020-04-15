import React, { Component } from 'react';
import {getMovies} from "../services/fakeMovieService"
import Pagination from "../components/pagination"
import { paginate } from "../components/paginate"
import ListGroup from '../components/listGroup'
import {getGenres} from '../services/fakeGenreService'
 
class Movies extends Component {
    state = {  
        movies:[],
        genres:[],
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

    componentDidMount(){
        this.setState({movies: getMovies(),genres:getGenres()})

    }

    handleGenreSelect=genre=>{
       this.setState({selectedGenre:genre})
    }


    render() { 
        const {length:count}= this.state.movies
        const {pageSize,currentPage,movies:allMovies,selectedGenre}=this.state
        if(count ===0)
        return <p>There are no movies currently in the database</p>
            const filtered=selectedGenre ? allMovies.filter(m=>m.genre._id == selectedGenre._id) :allMovies
            const movies = paginate (filtered,currentPage,pageSize) 
        return (
         <div className="row">
             <div className="col-3">
                 <ListGroup items={this.state.genres} selectedItem={this.state.selectedGenre} onItemSelect={this.handleGenreSelect}  />
             </div>
             
             
             <div className="col">

        <p>Showing {filtered.length} movies from the database. </p>
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
        <Pagination itemsCount={filtered.length} currentPage={currentPage} pageSize={pageSize} onPageChange={this.handlePageChange}/>
             </div>




        </div>
        )        
    }
}
 
export default Movies;