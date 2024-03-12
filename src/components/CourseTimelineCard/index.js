// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, tagsList, duration} = courseDetails
  return (
    <div className="course-card">
      <div className="course-heading-container">
        <h1>{courseTitle}</h1>
        <div className="icon-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(each => (
          <li className="list-item">
            <p>{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default CourseTimelineCard
