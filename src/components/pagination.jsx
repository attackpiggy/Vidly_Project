import React, { Component } from 'react'




const Pagination=props=>{
    const {itemsCount,pageSize}=props

    return <nav>
        <ul className="pagination">
            <li className="page-item">
                <a  className="page-link">1</a></li>
        </ul>
    </nav>;
}
// class Pagination extends Component {
//     constructor(props) {
 
//     }



//     render() { 
//         return (  <div>

//                     <nav aria-label="Page navigation example">
//                     <ul className="pagination">
//                         <li className="page-item"><a className="page-link" href="#">Previous</a></li>
//                         <li className="page-item"><a className="page-link" href="#">1</a></li>
//                         <li className="page-item"><a className="page-link" href="#">2</a></li>
//                         <li className="page-item"><a className="page-link" href="#">3</a></li>
//                         <li className="page-item"><a className="page-link" href="#">Next</a></li>
//                     </ul>
//                     </nav>

            





//         </div>);
//     }
// }
 
export default Pagination;