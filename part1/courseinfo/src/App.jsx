const Header = (props) => {
  return(
    <div>
      {props.course}
    </div>
  )
}

const Content = (props) =>{
  return(
    <div>
      <Part part = {props.partsa[0].name} exercises = {props.partsa[0].exercises}/>
      <Part part = {props.partsa[1].name} exercises = {props.partsa[1].exercises}/>
      <Part part = {props.partsa[2].name} exercises = {props.partsa[2].exercises}/>
    </div>
  )
}

const Part = (props) =>{
  return(
    <div>
      {props.part} {props.exercises}
    </div>
  )
}

const Total = (props) =>{
  return(
    <div>
      {props.total[0].exercises + props.total[1].exercises + props.total[2].exercises}
    </div>
  )
}

const App = () => {
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React', exercises: 10
      },
      {
        name: 'Using props to pass data', exercises: 7
      },
      {
        name: 'State of a component', exercises: 14
      }
    ]
  }

  
  return (
    <div>
      <Header course = {course.name}/>
      <Content partsa = {course.parts}/>
      <Total total = {course.parts}/>
    </div>
  )
}


export default App