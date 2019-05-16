import React from 'react'

function Child(props){
    console.log(props.students)
    return(
        <div>
            {props.students.map((student, i) => {
                return(
                    <div key={i}>
                        <h1 className='name'>{student.name}</h1>
                        <h4>{student.favorite_taco}</h4>
                        <button onClick={() => props.delete(i)}>Delete, you stink</button>
                    </div>
                )
            })}
        </div>
    )
}

export default Child