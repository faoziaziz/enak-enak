import React, { Component } from 'react';

function Blog(props) {
    const sidebar = (    <ul>
        {props.posts.map((post) =>
          <li key={post.id}>          {post.title}
          </li>
        )}
      </ul>
    );
    const content = props.posts.map((post) =>    <div key={post.id}>      <h3>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
    return (
      <div>
        {sidebar}      <hr />
        {content}    </div>
    );
  }
  
  const posts = [
    {id: 1, title: 'Dataset', content: 'If you wanna make dataset please read this documents'},
    {id: 2, title: 'Use', content: 'if you wana use this dataset please read this documents'}
  ];
  
class Katz extends Component {
    

   
    render() {
        return (<div>
            <h2>Katz</h2> 
            <p>Halaman ini digunakan sebagai halaman utama untuk akses ke dataset. 
                untuk data set yang ingin anda gunakan anda bisa menggunakan link berikut
                <a href="https://faoziaziz.herokuapp.com/cities"> https://faoziaziz.herokuapp.com/cities </a>
                untuk jupyter notebooknya bisa kamu dapatkan disini 
                <a href="https://gitlab.com/azizfaozi/data-kucing/-/blob/master/notebook/AnalisaKucing.ipynb"> https://gitlab.com/azizfaozi/data-kucing/-/blob/master/notebook/AnalisaKucing.ipynb</a>
                <hr />
                <Blog posts={posts} />
                </p>  
            </div>
            );
   
    }


}
export default Katz;