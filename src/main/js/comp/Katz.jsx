import React, { Component } from 'react';


class Katz extends Component {

   
    render() {
        return (<div>
            <h2>Katz</h2> 
            <p>Halaman ini digunakan sebagai halaman utama untuk akses ke dataset. 
                untuk data set yang ingin anda gunakan anda bisa menggunakan link berikut
                <a href="https://faoziaziz.herokuapp.com/cities"> https://faoziaziz.herokuapp.com/cities </a>
                untuk jupyter notebooknya bisa kamu dapatkan disini 
                <a href="https://gitlab.com/azizfaozi/data-kucing/-/blob/master/notebook/AnalisaKucing.ipynb"> https://gitlab.com/azizfaozi/data-kucing/-/blob/master/notebook/AnalisaKucing.ipynb</a>
                </p>  
            </div>
            );
   
    }


}
export default Katz;