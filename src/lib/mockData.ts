import { Representative, RepresentativeDetail } from '@/types';

export const mockRepresentatives: Representative[] = [
  {
    id: '1',
    name: 'Jennifer Hilton',
    territory: 'Seattle-WA',
    salesAchievement: 229,
    activityCompletion: 80,
    crmQualityScore: 92,
    status: 'green',
    tenure: 4.5,
    targetCoverage: 85
  },
  {
    id: '2',
    name: 'Alba Balice',
    territory: 'San Francisco-CA',
    salesAchievement: 136,
    activityCompletion: 56,
    crmQualityScore: 85,
    status: 'yellow',
    tenure: 2.8,
    targetCoverage: 65
  },
  {
    id: '3',
    name: 'Joseph Wilkes',
    territory: 'Los Angeles-CA',
    salesAchievement: 136,
    activityCompletion: 69,
    crmQualityScore: 90,
    status: 'green',
    tenure: 3.2,
    targetCoverage: 70
  },
  {
    id: '4',
    name: 'Grant Hein',
    territory: 'San Diego-CA',
    salesAchievement: 176,
    activityCompletion: 77,
    crmQualityScore: 68,
    status: 'red',
    tenure: 1.5,
    targetCoverage: 73
  },
  {
    id: '5',
    name: 'Joe Tonda',
    territory: 'Sacramento-CA',
    salesAchievement: 159,
    activityCompletion: 72,
    crmQualityScore: 88,
    status: 'green',
    tenure: 5.1,
    targetCoverage: 70
  },
  {
    id: '6',
    name: 'Robert Jenkins',
    territory: 'Orange County-CA',
    salesAchievement: 206,
    activityCompletion: 78,
    crmQualityScore: 79,
    status: 'yellow',
    tenure: 3.7,
    targetCoverage: 74
  }
];

export const getRepresentativeDetails = (id: string): RepresentativeDetail | null => {
  const rep = mockRepresentatives.find(r => r.id === id);
  if (!rep) return null;

  const details: { [key: string]: RepresentativeDetail } = {
    '1': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Jennifer, first off, I want to acknowledge your strong performance in maintaining Hemora sales across the Seattle territory. Despite fluctuations across the West region, you have shown consistent strength and discipline in driving results. Your total sales of 229.9 units are 31.7% above the regional average, which is a commendable achievement. The steady growth from 33 units in January to 42.9 units in May, an increase of 30%, highlights your ability to build lasting customer relationships and translate effort into tangible outcomes.',
          title_2: 'What could be different',
          description_2: 'I also noticed a slight dip in June sales, from 42.9 to 35.2 units, which presents an opportunity to sustain momentum through the later months of the quarter. Expanding your call reach by around 10–15% and maintaining follow-up cadence with emerging accounts can help stabilize growth and maintain consistency. This focus on proactive engagement will ensure your territory continues to perform strongly even when market dynamics shift.',
          title_3: 'Forward-looking suggestions',
          description_3: 'You have set a solid standard for performance within the West region, and your dedication is clearly paying off. As you continue to build on this foundation, maintaining a balance between nurturing established accounts and expanding outreach to newer prescribers will be key. I am confident that with your focus and consistency, you will continue to excel, and I am here to support you every step of the way.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 42,
        territoryCoverage: 85,
        meetingTypes: [
          { type: 'In-Person', count: 28 },
          { type: 'Virtual', count: 14 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 125 },
          { product: 'Product B', achievement: 115 },
          { product: 'Product C', achievement: 112 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 185000 },
          { month: 'Aug', revenue: 192000 },
          { month: 'Sep', revenue: 198000 },
          { month: 'Oct', revenue: 205000 }
        ]
      },
      crmData: {
        completenessScore: 92,
        interactionCount: 156,
        opportunityPipeline: 12
      }
    },
    '2': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Alba, first off, I want to acknowledge your steady progress in building Hemora performance across the San Francisco territory. Your total sales of 136.4 units are 22% below the regional average, but your trajectory shows meaningful improvement. Sales have grown from 16.5 units in January to 24.2 units in June, marking a 47% increase over six months. This reflects your focused effort in establishing prescriber relationships and gradually strengthening territory engagement.',
          title_2: 'What could be different',
          description_2: 'While the upward momentum is encouraging, there is an opportunity to drive greater consistency through the mid-quarter months. Sales stabilized during April and May, indicating that a few additional touchpoints could make a significant difference. Expanding your call coverage and sampling activity by 10–12% can help you convert more emerging accounts into regular prescribers and lift overall performance toward the regional average.',
          title_3: 'Forward-looking suggestions',
          description_3: 'You are building a solid foundation in your territory, and your progress is moving in the right direction. By maintaining your focus and continuing to expand your engagement base, you can accelerate your momentum and close the performance gap within the West region. I am confident that with your persistence and commitment, you will continue to strengthen your results, and I am here to support you throughout this journey.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 28,
        territoryCoverage: 65,
        meetingTypes: [
          { type: 'In-Person', count: 16 },
          { type: 'Virtual', count: 12 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 92 },
          { product: 'Product B', achievement: 85 },
          { product: 'Product C', achievement: 84 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 145000 },
          { month: 'Aug', revenue: 142000 },
          { month: 'Sep', revenue: 138000 },
          { month: 'Oct', revenue: 135000 }
        ]
      },
      crmData: {
        completenessScore: 85,
        interactionCount: 98,
        opportunityPipeline: 8
      }
    },
    '3': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Joseph, first off, I want to acknowledge your ongoing efforts in driving Hemora growth across the Los Angeles territory. Your total sales of 136.75 units are 21.5% below the West region average, but you have shown steady improvement through the first half of the year. From January to March, you delivered a 17.4% increase, and by May your performance was 10.3% higher than at the start of the year, reflecting a strong foundation built on consistent prescriber engagement.',
          title_2: 'What could be different',
          description_2: 'June showed a modest 5.3% decline compared to May, which highlights an opportunity to keep momentum consistent throughout the quarter. Expanding call coverage and sampling reach by about 10% could help balance performance and maintain continuity with both established and developing accounts. Strengthening follow-up rhythm after each interaction will also help convert engagement into sustained prescriptions.',
          title_3: 'Forward-looking suggestions',
          description_3: 'Your focus and discipline are evident in how you’ve managed your territory so far. The progress you’ve made sets a strong base to build on, and maintaining steady engagement will be key to narrowing the performance gap within the West region. I’m confident that with your continued focus and effort, you’ll see stronger growth ahead, and I’m here to support you every step of the way',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 38,
        territoryCoverage: 70,
        meetingTypes: [
          { type: 'In-Person', count: 26 },
          { type: 'Virtual', count: 12 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 108 },
          { product: 'Product B', achievement: 104 },
          { product: 'Product C', achievement: 103 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 168000 },
          { month: 'Aug', revenue: 172000 },
          { month: 'Sep', revenue: 175000 },
          { month: 'Oct', revenue: 178000 }
        ]
      },
      crmData: {
        completenessScore: 90,
        interactionCount: 142,
        opportunityPipeline: 10
      }
    },
    '4': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Grant, first off, I want to acknowledge your consistent contributions to Hemora’s performance across the San Diego territory. Your total sales of 176.46 units are slightly above the West region average, showing steady engagement and strong account relationships. From January to March, you achieved a 37.7% increase in sales, which highlights your focus on building momentum early in the year and maintaining consistent execution with key prescribers.',
          title_2: 'What could be different',
          description_2: 'While May showed a strong close at 32.9 units, June dipped by around 20%, presenting an opportunity to sustain performance through better balance between top and mid-tier accounts. Expanding your call reach by about 10–12% and maintaining regular sampling with secondary accounts can help drive a more even trend across months. This consistency will ensure your territory remains among the region’s steady performers.',
          title_3: 'Forward-looking suggestions',
          description_3: 'You have established a solid foundation with clear potential for continued growth. By maintaining a rhythm of engagement and strengthening relationships across a wider base of prescribers, you can convert early-year momentum into sustained success. I am confident that with your dedication and focus, you will continue to deliver strong results, and I am here to support you as you build on this progress.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 22,
        territoryCoverage: 73,
        meetingTypes: [
          { type: 'In-Person', count: 14 },
          { type: 'Virtual', count: 8 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 75 },
          { product: 'Product B', achievement: 70 },
          { product: 'Product C', achievement: 71 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 98000 },
          { month: 'Aug', revenue: 102000 },
          { month: 'Sep', revenue: 108000 },
          { month: 'Oct', revenue: 115000 }
        ]
      },
      crmData: {
        completenessScore: 68,
        interactionCount: 76,
        opportunityPipeline: 5
      }
    },
    '5': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Joe, first off, I want to recognize the steady progress you’ve made in driving Hemora performance across the Sacramento territory. Your total sales of 159.39 units are slightly below the West region average, but your early-year results show strong intent and solid territory execution. From January to March, your performance grew by 12.5%, reflecting your ability to maintain consistency and effectively manage customer relationships.',
          title_2: 'What could be different',
          description_2: 'April and May showed stable results, followed by a 26.9% increase in June, marking one of the strongest finishes across the region. This rebound demonstrates your ability to respond to performance trends and turn effort into tangible results. Continuing to build on this momentum by expanding call coverage and increasing sampling by 10–12% can help further solidify your position and bring your overall performance closer to the regional benchmark.',
          title_3: 'Forward-looking suggestions',
          description_3: 'You’ve built a strong foundation for growth, and your recent turnaround highlights what’s possible with focus and persistence. Maintaining this energy while deepening engagement with both established and emerging accounts will be key to sustaining progress. I am confident that with your continued drive and attention to consistency, you’ll build even stronger results ahead, and I’m here to support you every step of the way.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 40,
        territoryCoverage: 70,
        meetingTypes: [
          { type: 'In-Person', count: 30 },
          { type: 'Virtual', count: 10 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 128 },
          { product: 'Product B', achievement: 108 },
          { product: 'Product C', achievement: 105 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 178000 },
          { month: 'Aug', revenue: 184000 },
          { month: 'Sep', revenue: 188000 },
          { month: 'Oct', revenue: 195000 }
        ]
      },
      crmData: {
        completenessScore: 88,
        interactionCount: 148,
        opportunityPipeline: 11
      }
    },
    '6': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title_1: "What's working well ",
          description_1: 'Robert, first off, I want to acknowledge the strong base you have built for Hemora across the Las Vegas territory. Your total sales of 206.8 units are 18.7% above the West region average of 174.28 units, which reflects steady execution and solid relationships with your key prescribers. From January to March, you grew 7.7%, and you maintained healthy volumes into late spring with a solid May performance at 39.6 units.',
          title_2: 'What could be different',
          description_2: 'June softened slightly to 36.3 units, an 8.3% dip versus May, which signals an opportunity to keep momentum consistent through the end of the quarter. Expanding your call reach and sampling activity by about 8 to 10% and tightening follow-ups after details can help stabilize monthly trends and strengthen conversion across mid-tier and emerging accounts.',
          title_3: 'Forward-looking suggestions',
          description_3: 'You are well-positioned to stay ahead of the regional average by balancing time between your reliable prescribers and newer targets. With your disciplined approach and a bit more consistency in coverage, you can extend your lead in the West region. I am confident you will continue to deliver strong results, and I am here to support you every step of the way.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [],
      suggestions: [],
      activityData: {
        callFrequency: 34,
        territoryCoverage: 74,
        meetingTypes: [
          { type: 'In-Person', count: 18 },
          { type: 'Virtual', count: 16 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 98 },
          { product: 'Product B', achievement: 95 },
          { product: 'Product C', achievement: 68 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 152000 },
          { month: 'Aug', revenue: 155000 },
          { month: 'Sep', revenue: 158000 },
          { month: 'Oct', revenue: 160000 }
        ]
      },
      crmData: {
        completenessScore: 79,
        interactionCount: 118,
        opportunityPipeline: 9
      }
    }
  };

  return details[id] || null;
};
