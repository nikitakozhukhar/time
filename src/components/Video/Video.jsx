import './video.css'
import { DateTime } from '../DateTime/DateTime'
import { DateTimePretty } from '../HOC/DateTimeProperty'

export function Video({url, date}) {


const MyNewFormatDate = DateTimePretty(DateTime)

  return (
      <div className="video">
          <iframe src={url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          <MyNewFormatDate date={date}/>
      </div>
  )
}
