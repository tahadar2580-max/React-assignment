import React from 'react'


function App() {
  const name = "Hello world!";
  
  const obj = {name : "hello world object"};

  const data = ['We', 'Are', 'United'];

  const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}];

  const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs' , 'Ionic']}] 

  return (
    <div>
      <h1>{name}</h1>

      <h1>{obj.name}</h1>

      {data.map((item, index)=> (
        <h2 key={index}>{item}</h2>
      ))}

      {list.map((item, index) => (
        <p key={index}>{item.name}</p>
      ))}

      <table border={1} cellPadding={10}>
        <thead>
          <tr>
            <th>company</th>
            <th>jobs</th>
          </tr>
        </thead>
        <tbody>
          {complex.map((item, index) => (
            <tr key={index}>
              <td>{item.company}</td>
              <td>{item.jobs.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}

export default App
