import { BlockItem } from './BlockItem';
import './mainblock.scss'; // CSS 파일 import

export const MainBlock = () => {
  return (
    <div className="mainBlockWrapper">
      <BlockItem
        number="1"
        title="내 계약서 검토"
        desc={`우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요\n근로 계약서에 유의깊게 봐야할 항목 확인!`}
      />
      <BlockItem
        number="2"
        title="내 근로 정리"
        desc={`지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요.`}
        reverse
      />
      <BlockItem
        number="3"
        title="네편 현답"
        desc={`지피지기 백전백승!\n우선 나의 근로계약서가 제대로 된 계약서인지 검토해 봐야 해요.`}
      />
    </div>
  );
};
