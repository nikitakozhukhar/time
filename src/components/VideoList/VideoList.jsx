import { Video } from "../Video/Video";

export function VideoList({list}) {
  return list.map((item, index) => <Video key={index} url={item.url} date={item.date} />);
}
