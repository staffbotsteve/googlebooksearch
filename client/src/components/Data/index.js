import React from "react";
import API from "../../utils/API";


export function Data(props) {
  function saveBooks(event) {

    let authArray = []
    let authors = event.author
    authors.forEach(author => authArray.push(author))
    
    console.log (JSON.stringify(authArray))

    API.saveBook({
      title: event.title,
      author: authArray.toString(),
      synopsis: event.description,
      image: event.thumbnail,
      link: event.href,
    })
      .then((res) => (window.location = "/books"))
      .catch((err) => console.log(err));
  }


  return (
    <tr>
      <td>
        <a href={props.href}>
          <img src={props.thumbnail} alt={props.title} />
        </a>
      </td>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>{props.description}</td>
      <td>
        <button onClick={() => saveBooks(props)}>Save</button>
      </td>
    </tr>
  );
}