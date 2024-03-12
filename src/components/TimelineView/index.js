import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'

const TimelineView = props => {
  const {timelineItemsList} = props
  const courseData = timelineItemsList.filter(
    each => each.categoryId === 'COURSE',
  )
  const projectData = timelineItemsList.filter(
    each => each.categoryId === 'PROJECT',
  )
  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
        {courseData.map(each => (
          <CourseTimelineCard courseDetails={each} key={each.id} />
        ))}
        {projectData.map(each => (
          <ProjectTimelineCard projectDetails={each} key={each.id} />
        ))}
      </Chrono>
    </div>
  )
}
export default TimelineView
