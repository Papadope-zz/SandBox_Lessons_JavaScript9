import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Article from './components/Article';
import Loader from 'react-loader-spinner';
import Circle from './components/Circle';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './style.css';

function Welcome( props ){
  return ( 
    <>
      <h1 style={{ backgroundColor: "hotpink" }}>WELCOME</h1> 
      <p>USER: { props.match.params.users }</p>
      <p>ID: { props.match.params.id }</p>
    </>
  );
}
function Contact(){
  return ( <h1 style={{ backgroundColor: "orange" }}>Contact</h1> );
}
function Home(){
  return ( <h1>*** HOME ***</h1> );
}

function App(){

  const [ isLoading, setIsLoading ] = useState(false); // [ false, FUNCTION ]
  const [ articles, setArticles ] = useState([]); // [ [], FUNCTION ]

  useEffect(function(){
    console.log("Only runs on initial render!");
    // Fetch
    // setIsLoading( !isLoading ); // LET'S FIGURE THIS OUT!
    setIsLoading( true );
    fetch("https://api.jsonbin.io/b/5ea9bf5d66e603359fe0d707")
    .then(function(response){
      return response.json();
    })
    .then(function(data){
      console.log(data);
      setArticles( data );
    })
    .catch(function(err){
      console.log(err);
    })
    .finally(function(){
      setIsLoading( false );
      console.log("Finally!");
    });
  }, []);

  function load(){
    // START LOADER!
    setIsLoading( !isLoading );
    fetch("https://api.jsonbin.io/b/5ea9bf5d66e603359fe0d707")
    .then( res => res.json() )
    // .then( data => setArticles(data) ) // Replace current data
    .then( data => {
      setArticles([ ...data, ...articles ]) 
    }) // Append to current data
    .catch( err => {
      console.log(err) 
    })
    // STOP LOADER HERE!
    .finally(()=> setIsLoading( !isLoading ) );
  }

  return (
    <>
      <Circle color="red" />
      <Link to="/">Home</Link> |
      <Link to="/welcome"> Welcome</Link> | <Link to="/contact">Contact Us </Link> 
      | <a href="https://google.com" target="_blank" rel="noopener noreferrer">Google</a><br/>

      <Route exact path="/" component={Home} />
      <Route exact path="/welcome" component={Welcome} />
      <Route path="/welcome/:users/:id" component={Welcome} />
      <Route path="/contact" component={Contact} />

      { isLoading && <mark>TOGGLE</mark> }
      <button onClick={()=> setIsLoading( !isLoading )}>TOGGLE</button>
      <button onClick={load}>Load More</button>

      { isLoading && <Loader type="ThreeDots" color="indigo" height="30" width="100" /> }

      { articles.map(function(article){
        return <Article key={article.id} data={article.lang} />;
      }) }
    </>
  );

}

ReactDOM.render( 
  <Router>
    <App/>
  </Router>,
  document.querySelector("#root") 
);