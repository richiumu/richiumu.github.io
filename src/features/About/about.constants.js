import React from 'react'; // Add React import for JSX

export const languagesData = [
  { name: '中文', level: '母語 但我國文學測只有11級分' },
  { name: 'English', level: '聽得懂' },
  { name: '日本語', level: '很破' },
];

export const experiencesData = [
  {
    title: '譜面設計',
    description: React.createElement(
      React.Fragment,
      null,
      '前面說了，在幫L開頭跟R開頭的遊戲寫譜。',
      React.createElement('br'),
      '馬甲不公開。'
    ),
    period: '2022 - 至今'
  },
];