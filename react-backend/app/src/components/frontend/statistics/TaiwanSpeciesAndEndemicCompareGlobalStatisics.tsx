import React from 'react';
import { speciesOptions } from 'src/components/frontend/statistics/options'
import type { SpeciesCompareProps,KingdomInfoProps } from 'src/types/frontend'
import CompareSpeciesBarChart from 'src/components/frontend/statistics/CompareSpeciesBarChart'

type Props = {
  data: SpeciesCompareProps[],
  handleCompareTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void,
  handleShowCompareTableClick: (status: boolean) => void,
  kingdomInfo:KingdomInfoProps[]
}

const TaiwanSpeciesAndEndemicCompareGlobalStatisics: React.VFC<Props> = (props) => {
  const { data, handleCompareTypeChange,handleShowCompareTableClick,kingdomInfo } = props
  const [kingdomSelected, setKingdomSelect] = React.useState<string[]>(kingdomInfo.map((item: KingdomInfoProps, index: number) => {
    return item.chineseName
  } ))

  const handleKingdomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKingdomSelected = e.target.checked ? [...kingdomSelected, e.target.value] : kingdomSelected.filter((item) => item !== e.target.value)

    setKingdomSelect(newKingdomSelected.map((chineseName) => {
      return chineseName
    }));
  }
  return (
    <div className="item-p2">
      <div className="title-flex-box">
        <div className="left-box">
          <div className="mark-title">
            <img src="/images/title-mark.svg"/>
            <p>臺灣與全球物種數比較</p>
          </div>
          <div className="color-inf">
            <div className="colorbox">
              <div className="color1"></div>
              <p>全球現有種數</p>
            </div>
            <div className="colorbox">
              <div className="color2"></div>
              <p>臺灣現有種數</p>
            </div>
          </div>
        </div>
        <div className="right-select">
          <select name="" id="" onChange={handleCompareTypeChange}>
            {speciesOptions.map((item, index) => <option key={`species-option-${index}`} value={item.value}>{item.label}</option>)}
          </select>
        </div>
      </div>
      <div className="for-canvas ">
        <CompareSpeciesBarChart data={data.filter((item: SpeciesCompareProps, number: number) => kingdomSelected.includes(item.name))} />
        <div className='more-selection-area'>
          <div className='item-box check-set"'>
            <div className="right-check">
              {kingdomInfo?.map((item:KingdomInfoProps, index:number):React.ReactElement => {
                return <label className="check-item mr-[8px]">{item.chineseName}
                  <input type="checkbox" name="alien_type" checked={kingdomSelected.includes(item.chineseName) ? true : false} value={item.chineseName} onChange={handleKingdomChange} />
									<span className="checkmark"></span>
								</label>
              })}

            </div>
          </div>
        </div>
      </div>
      <a href="#" className="btn-more" onClick={() => handleShowCompareTableClick(true)}>
        <p>查看比較總表</p>
        <div className="arr">
          <div className="arline"></div>
          <div className="arrrot">
            <img src="/images/arrlinrot.svg"/>
          </div>
        </div>
      </a>
    </div>
  )
};

export default TaiwanSpeciesAndEndemicCompareGlobalStatisics;
