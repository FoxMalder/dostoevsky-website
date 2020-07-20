import React from "react";
import ClausePartsPage from "./ClausePartsPage";

export default { title: "pages/clause/part", component: ClausePartsPage };

const partOneDescription =
  'Действия, направленные на возбуждение ненависти либо вражды, а также на унижение достоинства человека либо группы лиц по признакам пола, расы, национальности, языка, происхождения, отношения к религии, а равно принадлежности к какой-либо социальной группе, совершенные публично, в том числе с использованием средств массовой информации либо информационно-телекоммуникационных сетей, включая сеть "Интернет", лицом после его привлечения к административной ответственности за аналогичное деяние в течение одного года, – наказываются штрафом в размере от трехсот тысяч до пятисот тысяч рублей или в размере заработной платы или иного дохода осужденного за период от двух до трех лет, либо принудительными работами на срок от одного года до четырех лет с лишением права занимать определенные должности или заниматься определенной деятельностью на срок до трех лет, либо лишением свободы на срок от двух до пяти лет.';

const parts = [
  {
    name: partOneDescription,
    part: "1 часть",
    count: 140,
    byResult: {
      convictedCount: 41,
      acquittalCount: 3,
      dismissalCount: 95,
      compulsoryTreatmentCount: 1,
    },
  },
  {
    part: "2 часть",
    name: "Вторая часть",
    count: 50,
    byResult: {
      convictedCount: 20,
      acquittalCount: 30,
      dismissalCount: 0,
      compulsoryTreatmentCount: 0,
    },
  },
];

const defaultProps = {
  clauseNumber: 282,
  year: 2019,
  parts,
} as const;

export const withTwoParts = (): React.ReactNode => (
  <ClausePartsPage {...defaultProps} />
);