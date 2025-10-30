import { Representative, RepresentativeDetail } from '@/types';

export const mockRepresentatives: Representative[] = [
  {
    id: '1',
    name: 'Jennifer Martinez',
    territory: 'Seattle Metro',
    salesAchievement: 132,
    activityCompletion: 95,
    crmQualityScore: 92,
    status: 'green',
    tenure: 4.5,
    targetCoverage: 98,
    consolidatedInsight: "Jennifer, first off, I want to acknowledge your strong performance in maintaining Hemora sales across the Seattle territory. Despite fluctuations across the West region, you have shown consistent strength and discipline in driving results. Your total sales of 229.9 units are 31.7% above the regional average, which is commendable. The steady growth from 33 units in January to 42.9 units in May, an increase of 30%, highlights your ability to build lasting customer relationships and translate effort into tangible outcomes.\n\nI also noticed a slight dip in June sales, from 42.9 to 35.2 units, which presents an opportunity to sustain momentum through the later months of the quarter. Expanding your call reach by around 10–15% and maintaining follow-up cadence with emerging accounts can help stabilize growth and maintain consistency. This focus on proactive engagement will ensure your territory continues to perform strongly even when market dynamics shift.\n\nYou have set a solid standard for performance within the West region, and your dedication is clearly paying off. As you continue to build on this foundation, maintaining a balance between nurturing established accounts and expanding outreach to newer prescribers will be key. I am confident that with your focus and consistency, you will continue to excel, and I am here to support you every step of the way."
  },
  {
    id: '2',
    name: 'Michael Chen',
    territory: 'Portland Region',
    salesAchievement: 118,
    activityCompletion: 92,
    crmQualityScore: 85,
    status: 'green',
    tenure: 2.8,
    targetCoverage: 82,
    consolidatedInsight: "Michael, your performance in the Portland Region continues to demonstrate excellence across multiple dimensions. Your sales achievement of 118% against target, combined with a 92% activity completion rate, shows strong execution and commitment to your territory. Keep leveraging your systematic approach to account management—it's clearly driving results."
  },
  {
    id: '3',
    name: 'Sarah Williams',
    territory: 'San Francisco Bay',
    salesAchievement: 98,
    activityCompletion: 88,
    crmQualityScore: 90,
    status: 'yellow',
    tenure: 3.2,
    targetCoverage: 94,
    consolidatedInsight: "Sarah, you're performing solidly in the competitive San Francisco Bay market. While you're slightly below target at 98%, your consistent activity rate of 88% demonstrates dedication. Focus on converting more of your customer interactions into sales opportunities, particularly with high-potential accounts in the biotech corridor."
  },
  {
    id: '4',
    name: 'David Thompson',
    territory: 'Los Angeles Metro',
    salesAchievement: 105,
    activityCompletion: 85,
    crmQualityScore: 68,
    status: 'yellow',
    tenure: 1.5,
    targetCoverage: 71,
    consolidatedInsight: "David, you're exceeding your sales target at 105% in the challenging LA Metro territory. Your results speak to your ability to navigate a complex market. I'd like to see your CRM quality score improve from 68% to ensure we're capturing all customer insights that could drive even stronger performance."
  },
  {
    id: '5',
    name: 'Emily Rodriguez',
    territory: 'San Diego County',
    salesAchievement: 78,
    activityCompletion: 82,
    crmQualityScore: 91,
    status: 'red',
    tenure: 5.1,
    targetCoverage: 96,
    consolidatedInsight: "Emily, I want to acknowledge your outstanding CRM quality at 91%—you're setting the standard for the team. However, your sales achievement at 78% indicates we need to work together on converting your strong organizational skills into more sales results. Let's schedule time to review your account strategy and identify key opportunities."
  },
  {
    id: '6',
    name: 'James Wilson',
    territory: 'Sacramento Valley',
    salesAchievement: 115,
    activityCompletion: 90,
    crmQualityScore: 86,
    status: 'green',
    tenure: 3.7,
    targetCoverage: 87,
    consolidatedInsight: "James, excellent work in Sacramento Valley. Your 115% sales achievement combined with 90% activity completion shows you're maximizing every customer interaction. Your balanced approach to territory management is exactly what we want to see. Keep up the momentum and continue sharing your best practices with the team."
  },
  {
    id: '7',
    name: 'Lisa Anderson',
    territory: 'Orange County',
    salesAchievement: 92,
    activityCompletion: 87,
    crmQualityScore: 91,
    status: 'yellow',
    tenure: 4.0,
    targetCoverage: 93,
    consolidatedInsight: "Lisa, you're showing solid, steady performance in Orange County with 92% sales achievement. Your activity completion at 87% is good, and I see opportunities to push toward excellence by focusing on key account penetration and increasing face-time with top-tier prescribers. Let's discuss strategies to close that gap to target."
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
          title: 'Exceptional High-Value Account Engagement',
          description: 'Maintains consistent meeting frequency with top accounts, significantly above team average.',
          metrics: [
            { label: 'Top 10 Account Meetings', value: '95%', comparison: 'Team avg: 72%', trend: 'up' }
          ],
          dataSource: 'Activity'
        },
        {
          id: 's2',
          title: 'Superior Territory Coverage',
          description: 'Excellent geographic distribution and account reach across assigned territory.',
          metrics: [
            { label: 'Territory Coverage', value: '98%', comparison: 'Target: 90%', trend: 'stable' }
          ],
          dataSource: 'Activity'
        },
        {
          id: 's3',
          title: 'Outstanding CRM Data Quality',
          description: 'Comprehensive and timely documentation of customer interactions.',
          metrics: [
            { label: 'Data Completeness', value: '92%', comparison: 'Team avg: 78%', trend: 'up' }
          ],
          dataSource: 'CRM'
        }
      ],
      improvements: [],
      suggestions: [
        {
          id: 'sg1',
          title: 'Mentor New Team Members',
          action: 'Schedule shadowing sessions with David Thompson to share best practices.',
          expectedOutcome: 'Elevate team performance and strengthen territory coverage strategies.',
          priority: 'medium',
          rationale: 'Sarah\'s exceptional results make her ideal for peer coaching.',
          timeframe: 'Next 30 days'
        }
      ],
      activityData: {
        callFrequency: 42,
        territoryCoverage: 98,
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
          title: 'Strong Digital Tool Adoption',
          description: 'Early adopter of new CRM features and digital engagement tools.',
          metrics: [
            { label: 'Digital Tool Usage', value: '88%', comparison: 'Team avg: 65%', trend: 'up' }
          ],
          dataSource: 'CRM'
        }
      ],
      improvements: [
        {
          id: 'i1',
          title: 'Below-Target Sales Achievement',
          description: 'Current sales performance is 13% below quarterly target.',
          metrics: [
            { label: 'Sales vs Target', value: '87%', comparison: 'Target: 100%', trend: 'down' }
          ],
          dataSource: 'Sales'
        },
        {
          id: 'i2',
          title: 'Inconsistent Call Frequency',
          description: 'Call activity has declined in the past two months.',
          metrics: [
            { label: 'Monthly Calls', value: '28', comparison: 'Team avg: 35', trend: 'down' }
          ],
          dataSource: 'Activity'
        }
      ],
      suggestions: [
        {
          id: 'sg1',
          title: 'Increase Focus on Specialty Segment',
          action: 'Reallocate 20% of calls from low-potential to high-potential specialty accounts.',
          expectedOutcome: 'Improve sales achievement by targeting higher-value opportunities.',
          priority: 'high',
          rationale: 'Specialty segment shows stronger conversion rates in territory.',
          timeframe: 'Next 60 days',
          resources: 'Specialty product training materials'
        },
        {
          id: 'sg2',
          title: 'Enhance Call Planning Discipline',
          action: 'Implement weekly call planning sessions using territory analytics.',
          expectedOutcome: 'Increase call frequency to team average and improve account prioritization.',
          priority: 'high',
          rationale: 'Data shows gaps in coverage of mid-tier accounts.',
          timeframe: 'Immediate'
        }
      ],
      activityData: {
        callFrequency: 28,
        territoryCoverage: 82,
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
          title: 'Excellent Customer Relationship Scores',
          description: 'Consistently high satisfaction ratings from key accounts.',
          metrics: [
            { label: 'Customer Satisfaction', value: '4.8/5', comparison: 'Team avg: 4.2/5', trend: 'stable' }
          ],
          dataSource: 'CRM'
        },
        {
          id: 's2',
          title: 'Strong Product Mix Performance',
          description: 'Balanced achievement across all product lines.',
          metrics: [
            { label: 'Product Mix Index', value: '105%', comparison: 'Target: 100%', trend: 'up' }
          ],
          dataSource: 'Sales'
        }
      ],
      improvements: [
        {
          id: 'i1',
          title: 'Opportunity for New Account Development',
          description: 'Focus primarily on existing accounts with limited new business generation.',
          metrics: [
            { label: 'New Account Revenue', value: '12%', comparison: 'Team avg: 22%', trend: 'stable' }
          ],
          dataSource: 'Sales'
        }
      ],
      suggestions: [
        {
          id: 'sg1',
          title: 'Develop New Account Strategy',
          action: 'Dedicate 15% of weekly activities to prospecting new accounts in underserved segments.',
          expectedOutcome: 'Increase new business contribution and reduce dependency on existing accounts.',
          priority: 'medium',
          rationale: 'Strong relationship skills can translate to new account success.',
          timeframe: 'Next 90 days'
        }
      ],
      activityData: {
        callFrequency: 38,
        territoryCoverage: 94,
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
          title: 'Positive Trend in Recent Weeks',
          description: 'Showing improvement in activity levels over the past month.',
          metrics: [
            { label: 'Activity Growth', value: '+18%', comparison: 'vs. previous month', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [
        {
          id: 'i1',
          title: 'Significant Sales Gap',
          description: 'Performance is 28% below target across all product lines.',
          metrics: [
            { label: 'Sales Achievement', value: '72%', comparison: 'Target: 100%', trend: 'stable' }
          ],
          dataSource: 'Sales'
        },
        {
          id: 'i2',
          title: 'Incomplete Territory Coverage',
          description: 'Many assigned accounts not yet contacted this quarter.',
          metrics: [
            { label: 'Account Coverage', value: '71%', comparison: 'Target: 90%', trend: 'up' }
          ],
          dataSource: 'Activity'
        },
        {
          id: 'i3',
          title: 'CRM Data Gaps',
          description: 'Missing key information in customer records.',
          metrics: [
            { label: 'Data Completeness', value: '68%', comparison: 'Team avg: 78%', trend: 'stable' }
          ],
          dataSource: 'CRM'
        }
      ],
      suggestions: [
        {
          id: 'sg1',
          title: 'Intensive Onboarding Support',
          action: 'Schedule weekly coaching sessions and shadow top performer for 3 full days.',
          expectedOutcome: 'Accelerate learning curve and build foundational skills.',
          priority: 'high',
          rationale: 'New tenure requires structured support for success.',
          timeframe: 'Next 30 days',
          resources: 'Mentorship from Sarah Johnson'
        },
        {
          id: 'sg2',
          title: 'Product Knowledge Training',
          action: 'Complete all core product certifications within 45 days.',
          expectedOutcome: 'Improve confidence and effectiveness in customer conversations.',
          priority: 'high',
          rationale: 'Product knowledge gaps limiting sales conversations.',
          timeframe: '45 days'
        },
        {
          id: 'sg3',
          title: 'Simplify Territory Plan',
          action: 'Focus on top 20 accounts only for next 60 days to build momentum.',
          expectedOutcome: 'Achieve early wins and establish consistent activity patterns.',
          priority: 'high',
          rationale: 'Narrower focus will enable better execution.',
          timeframe: 'Next 60 days'
        }
      ],
      activityData: {
        callFrequency: 22,
        territoryCoverage: 71,
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
          title: 'Exceptional Product A Performance',
          description: 'Leading the team in flagship product sales.',
          metrics: [
            { label: 'Product A Achievement', value: '128%', comparison: 'Team avg: 102%', trend: 'up' }
          ],
          dataSource: 'Sales'
        },
        {
          id: 's2',
          title: 'Strategic Account Management',
          description: 'Excellent penetration of key strategic accounts.',
          metrics: [
            { label: 'Strategic Account Coverage', value: '96%', comparison: 'Target: 85%', trend: 'stable' }
          ],
          dataSource: 'Activity'
        },
        {
          id: 's3',
          title: 'Veteran Territory Knowledge',
          description: 'Deep understanding of territory dynamics and customer needs.',
          metrics: [
            { label: 'Years in Territory', value: '5.1', comparison: 'Team avg: 3.5', trend: 'stable' }
          ],
          dataSource: 'CRM'
        }
      ],
      improvements: [],
      suggestions: [
        {
          id: 'sg1',
          title: 'Share Strategic Account Playbook',
          action: 'Document and present strategic account approach at team meeting.',
          expectedOutcome: 'Elevate team capabilities in managing complex accounts.',
          priority: 'low',
          rationale: 'Lisa\'s methods can benefit entire team.',
          timeframe: 'Next 60 days'
        }
      ],
      activityData: {
        callFrequency: 40,
        territoryCoverage: 96,
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
          title: 'Effective Virtual Engagement',
          description: 'High success rate with virtual customer interactions.',
          metrics: [
            { label: 'Virtual Meeting Success', value: '89%', comparison: 'Team avg: 75%', trend: 'up' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [
        {
          id: 'i1',
          title: 'Underperformance on Product C',
          description: 'Significantly below target on newest product line.',
          metrics: [
            { label: 'Product C Achievement', value: '68%', comparison: 'Target: 100%', trend: 'stable' }
          ],
          dataSource: 'Sales'
        },
        {
          id: 'i2',
          title: 'CRM Documentation Delays',
          description: 'Call reports often submitted 3-5 days after customer interactions.',
          metrics: [
            { label: 'Timely CRM Updates', value: '79%', comparison: 'Target: 90%', trend: 'down' }
          ],
          dataSource: 'CRM'
        }
      ],
      suggestions: [
        {
          id: 'sg1',
          title: 'Product C Certification and Practice',
          action: 'Complete advanced Product C training and practice presentations with manager.',
          expectedOutcome: 'Increase confidence and sales effectiveness for Product C.',
          priority: 'high',
          rationale: 'Knowledge gap identified in customer conversations.',
          timeframe: 'Next 30 days',
          resources: 'Product C certification program'
        },
        {
          id: 'sg2',
          title: 'Real-Time CRM Entry Habit',
          action: 'Use mobile CRM app to document calls immediately after meetings.',
          expectedOutcome: 'Improve data quality and timeliness by 20%.',
          priority: 'medium',
          rationale: 'Fresh documentation is more accurate and actionable.',
          timeframe: 'Immediate'
        }
      ],
      activityData: {
        callFrequency: 34,
        territoryCoverage: 87,
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
    },
    '7': {
      ...rep,
      strengths: [
        {
          id: 's1',
          title: 'Strong New Business Development',
          description: 'Excellent track record of opening new accounts.',
          metrics: [
            { label: 'New Account Revenue', value: '28%', comparison: 'Team avg: 22%', trend: 'up' }
          ],
          dataSource: 'Sales'
        },
        {
          id: 's2',
          title: 'Balanced Activity Distribution',
          description: 'Optimal mix of prospecting and account maintenance activities.',
          metrics: [
            { label: 'Activity Balance Score', value: '89%', comparison: 'Team avg: 82%', trend: 'stable' }
          ],
          dataSource: 'Activity'
        }
      ],
      improvements: [
        {
          id: 'i1',
          title: 'Opportunity Pipeline Development',
          description: 'Lower number of active opportunities compared to sales volume.',
          metrics: [
            { label: 'Active Opportunities', value: '7', comparison: 'Team avg: 10', trend: 'stable' }
          ],
          dataSource: 'CRM'
        }
      ],
      suggestions: [
        {
          id: 'sg1',
          title: 'Strengthen Pipeline Management',
          action: 'Identify and qualify 5 new opportunities per month in existing accounts.',
          expectedOutcome: 'Build more predictable revenue stream and reduce quarter-end pressure.',
          priority: 'medium',
          rationale: 'Current success rate high but volume can be improved.',
          timeframe: 'Next 90 days'
        }
      ],
      activityData: {
        callFrequency: 37,
        territoryCoverage: 93,
        meetingTypes: [
          { type: 'In-Person', count: 24 },
          { type: 'Virtual', count: 13 }
        ]
      },
      salesData: {
        productPerformance: [
          { product: 'Product A', achievement: 112 },
          { product: 'Product B', achievement: 106 },
          { product: 'Product C', achievement: 105 }
        ],
        accountTrends: [
          { month: 'Jul', revenue: 172000 },
          { month: 'Aug', revenue: 176000 },
          { month: 'Sep', revenue: 180000 },
          { month: 'Oct', revenue: 184000 }
        ]
      },
      crmData: {
        completenessScore: 91,
        interactionCount: 134,
        opportunityPipeline: 7
      }
    }
  };

  return details[id] || null;
};
