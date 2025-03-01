import React from 'react';
import {RankProps} from 'src/types/frontend'
import RankCount from 'src/components/frontend/statistics/RankCount'

type Props = {
  data:RankProps[]
}

const classNames: string[] = [
  'rank-1-red',
  'rank-2-org',
  'rank-3-yell',
  'rank-4-green',
  'rank-5-blue',
  'rank-6-deepblue',
  'rank-7-purple',
]

type zhTWTitles = {
  [key: string]: string
}
const zhTWTitles:zhTWTitles = {
  Kingdom: '界',
  Phylum: '門',
  Class: '綱',
  Order: '目',
  Family: '科',
  Genus: '屬',
  Species: '種',
}

const RankCountStatisics: React.VFC<Props> = (props) => {
  const {data} = props

  return (
    <div className="item-p1">
      <div className="mark-title">
        <img src="/images/title-mark.svg"/>
        <p>各階層數量統計</p>
      </div>
      <ul className="stsrank-area">
        {data.map((item:RankProps, index:number) => <RankCount {...item} zhTWTitle={zhTWTitles[item.enTitle]} className={classNames[index]} key={`class-count-${index}`} />)}

      </ul>
    </div>
  )
};

export default RankCountStatisics;
