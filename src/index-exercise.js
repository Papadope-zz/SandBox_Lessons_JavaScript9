import React from 'react';
import ReactDOM from 'react-dom';
import MainHeader, { MainFooter } from './components/MainHeader';
import Post from './components/Post';

const Posts = [ 
  { id: 1, content: "Post 1", likes: 10 },
  { id: 2, content: "Post 2", likes: 3 },
  { id: 3, content: "Post 3", likes: 44 } 
];

// EXERCISE: Load various YouTube video ids from an Array and display these YouTube videos
// using map and a <YouTube /> Component
// EXTRAS: Can you pass a Like counter and a Like button for each video?

function App(){
  return (
    <>
      <MainHeader />
      <h1>Videos:</h1>
      {/* TURN THIS */}
      <iframe width="560" height="315" src="https://www.youtube.com/embed/6JwEYamjXpA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/OT-qAQLGkGo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bVG2OQp6jEQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      {/* INTO THIS: Loop + display <YouTube /> */}
      {/* <YouTube /> */}

      <h1>My App</h1>
      <h2>Subtitle</h2>
      {Posts.map(function(post){
        return <Post key={post.id} post={post} content={post.content} likes={post.likes} />
      })}
      {/* <-- COMMENTS IN JSX. REMEMBER: HTML COMMENTS ARE NOT AVAILABLE
      <Post content="Post 1" />
      <Post content="Post 2"></Post>
      <Post content="Post 3"/> 
      */}
      <MainFooter />
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
);