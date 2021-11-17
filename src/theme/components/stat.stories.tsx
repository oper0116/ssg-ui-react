import { Stat, StatArrow, StatGroup, StatHelpText, StatLabel, StatNumber } from '@chakra-ui/react';
import React from 'react';

export default {
  title: '디자인시스템 테마/스탯',
};

export const Default = () => {
  return (
    <Stat>
      <StatLabel>레이블</StatLabel>
      <StatNumber>$999.99~(₩99,999)</StatNumber>
      <StatHelpText>(Approximate Price)</StatHelpText>
    </Stat>
  );
};

export const StatWithIndicator = () => (
  <StatGroup textAlign="center">
    <Stat>
      <StatLabel>평점</StatLabel>
      <StatNumber>4.1/5</StatNumber>
      <StatHelpText color="info-increase">
        <StatArrow type="increase" color="info-increase" />
        23.36%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>평균배송일</StatLabel>
      <StatNumber>-</StatNumber>
    </Stat>

    <Stat>
      <StatLabel>응답률</StatLabel>
      <StatNumber>93%</StatNumber>
      <StatHelpText color="info-decrease">
        <StatArrow type="decrease" color="info-decrease" />
        9.05%
      </StatHelpText>
    </Stat>

    <Stat>
      <StatLabel>고객만족</StatLabel>
      <StatNumber>우수</StatNumber>
    </Stat>
  </StatGroup>
);
