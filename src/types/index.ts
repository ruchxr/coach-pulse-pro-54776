export interface Representative {
  id: string;
  name: string;
  territory: string;
  photo?: string;
  salesAchievement: number;
  activityCompletion: number;
  crmQualityScore: number;
  status: 'green' | 'yellow' | 'red';
  tenure: number;
  targetCoverage: number;
}

export interface Insight {
  id: string;
  title: string;
  description: string;
  metrics: {
    label: string;
    value: string;
    comparison?: string;
    trend?: 'up' | 'down' | 'stable';
  }[];
  dataSource: 'Activity' | 'Sales' | 'CRM';
}

export interface Suggestion {
  id: string;
  title: string;
  action: string;
  expectedOutcome: string;
  priority: 'high' | 'medium' | 'low';
  rationale: string;
  timeframe?: string;
  resources?: string;
}

export interface RepresentativeDetail extends Representative {
  strengths: Insight[];
  improvements: Insight[];
  suggestions: Suggestion[];
  activityData: {
    callFrequency: number;
    territoryCoverage: number;
    meetingTypes: { type: string; count: number }[];
  };
  salesData: {
    productPerformance: { product: string; achievement: number }[];
    accountTrends: { month: string; revenue: number }[];
  };
  crmData: {
    completenessScore: number;
    interactionCount: number;
    opportunityPipeline: number;
  };
}
