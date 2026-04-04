import React from 'react'
import { Link , Outlet} from 'react-router-dom'
const Courses = () => {
  return (
    <div>

      <h1>Courses Page</h1>
        <p>This is the main courses page. Please select a sub-category.</p>
        <Link to="/courses/academics">Academics</Link>
        <Link to="/courses/extra">Extra</Link>
        <Outlet />
    </div>
  )
}

export default Courses