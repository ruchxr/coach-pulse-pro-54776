import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { getRepresentativeDetails, mockRepresentatives } from '@/lib/mockData';
import { BarChart3, ArrowLeft, LogOut, ChevronLeft, ChevronRight, CheckCircle, AlertCircle, Lightbulb, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { useEffect, useState } from 'react';

const RepresentativeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated, managerName, logout } = useAuth();
  const [notes, setNotes] = useState('');

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const repDetail = id ? getRepresentativeDetails(id) : null;
  const currentIndex = mockRepresentatives.findIndex(r => r.id === id);
  const prevRep = currentIndex > 0 ? mockRepresentatives[currentIndex - 1] : null;
  const nextRep = currentIndex < mockRepresentatives.length - 1 ? mockRepresentatives[currentIndex + 1] : null;

  if (!repDetail) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="p-6">
            <p>Representative not found</p>
            <Button onClick={() => navigate('/dashboard')} className="mt-4">
              Back to Dashboard
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getTrendIcon = (trend?: 'up' | 'down' | 'stable') => {
    if (trend === 'up') return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend === 'down') return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-destructive text-destructive-foreground';
      case 'medium':
        return 'bg-warning text-warning-foreground';
      case 'low':
        return 'bg-info text-info-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">SuperCoach-M</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{managerName}</p>
                <p className="text-xs text-muted-foreground">Field Manager</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => { logout(); navigate('/'); }}>
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
          
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Button variant="ghost" size="sm" onClick={() => navigate('/dashboard')}>
                Dashboard
              </Button>
              <span>/</span>
              <span className="font-medium text-foreground">{repDetail.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => prevRep && navigate(`/representative/${prevRep.id}`)}
                disabled={!prevRep}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => nextRep && navigate(`/representative/${nextRep.id}`)}
                disabled={!nextRep}
              >
                Next
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline" size="sm" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Dashboard
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-start justify-between flex-wrap gap-4">
              <div>
                <CardTitle className="text-2xl mb-2">{repDetail.name}</CardTitle>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>{repDetail.territory}</p>
                  <p>Tenure: {repDetail.tenure} years</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{repDetail.salesAchievement}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Sales Achievement</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{repDetail.activityCompletion}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Activity Rate</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{repDetail.crmQualityScore}%</p>
                  <p className="text-xs text-muted-foreground mt-1">CRM Quality</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold">{repDetail.targetCoverage}%</p>
                  <p className="text-xs text-muted-foreground mt-1">Coverage</p>
                </div>
              </div>
            </div>
          </CardHeader>
        </Card>

        <div className="space-y-6 mb-8">
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-6 h-6 text-success" />
              <h2 className="text-2xl font-bold">What's Working Well</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {repDetail.strengths.map((insight) => (
                <Card key={insight.id} className="border-l-4 border-l-success">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{insight.title}</CardTitle>
                      <Badge variant="outline" className="text-xs">
                        {insight.dataSource}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                    {insight.metrics.map((metric, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{metric.label}</span>
                          {metric.trend && getTrendIcon(metric.trend)}
                        </div>
                        <p className="text-lg font-bold text-success">{metric.value}</p>
                        {metric.comparison && (
                          <p className="text-xs text-muted-foreground">{metric.comparison}</p>
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {repDetail.improvements.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <AlertCircle className="w-6 h-6 text-warning" />
                <h2 className="text-2xl font-bold">What Can Be Different</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {repDetail.improvements.map((insight) => (
                  <Card key={insight.id} className="border-l-4 border-l-warning">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-2">
                        <CardTitle className="text-base">{insight.title}</CardTitle>
                        <Badge variant="outline" className="text-xs">
                          {insight.dataSource}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{insight.description}</p>
                      {insight.metrics.map((metric, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">{metric.label}</span>
                            {metric.trend && getTrendIcon(metric.trend)}
                          </div>
                          <p className="text-lg font-bold text-warning">{metric.value}</p>
                          {metric.comparison && (
                            <p className="text-xs text-muted-foreground">{metric.comparison}</p>
                          )}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          <section>
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-6 h-6 text-info" />
              <h2 className="text-2xl font-bold">Suggestions</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {repDetail.suggestions.map((suggestion) => (
                <Card key={suggestion.id} className="border-l-4 border-l-info">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{suggestion.title}</CardTitle>
                      <Badge className={getPriorityColor(suggestion.priority)}>
                        {suggestion.priority.toUpperCase()}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div>
                      <p className="text-sm font-medium mb-1">Action:</p>
                      <p className="text-sm text-muted-foreground">{suggestion.action}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Expected Outcome:</p>
                      <p className="text-sm text-muted-foreground">{suggestion.expectedOutcome}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium mb-1">Rationale:</p>
                      <p className="text-sm text-muted-foreground">{suggestion.rationale}</p>
                    </div>
                    {suggestion.timeframe && (
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="font-medium">Timeline:</span>
                        <span>{suggestion.timeframe}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Detailed Data</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="activity">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="sales">Sales</TabsTrigger>
                <TabsTrigger value="crm">CRM</TabsTrigger>
              </TabsList>
              
              <TabsContent value="activity" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Call Frequency</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{repDetail.activityData.callFrequency}</p>
                      <p className="text-xs text-muted-foreground">calls per month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Territory Coverage</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{repDetail.activityData.territoryCoverage}%</p>
                      <p className="text-xs text-muted-foreground">of assigned accounts</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Meeting Types</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {repDetail.activityData.meetingTypes.map((type) => (
                        <div key={type.type} className="flex justify-between text-sm">
                          <span>{type.type}</span>
                          <span className="font-semibold">{type.count}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="sales" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Product Performance</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {repDetail.salesData.productPerformance.map((product) => (
                        <div key={product.product} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{product.product}</span>
                            <span className="font-semibold">{product.achievement}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="h-2 rounded-full bg-primary"
                              style={{ width: `${Math.min(product.achievement, 100)}%` }}
                            />
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Account Trends (Last 4 Months)</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      {repDetail.salesData.accountTrends.map((trend) => (
                        <div key={trend.month} className="flex justify-between text-sm">
                          <span>{trend.month}</span>
                          <span className="font-semibold">
                            ${(trend.revenue / 1000).toFixed(0)}K
                          </span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="crm" className="space-y-4 mt-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Completeness Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{repDetail.crmData.completenessScore}%</p>
                      <p className="text-xs text-muted-foreground">data quality</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Interactions Logged</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{repDetail.crmData.interactionCount}</p>
                      <p className="text-xs text-muted-foreground">this quarter</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-sm">Opportunity Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-2xl font-bold">{repDetail.crmData.opportunityPipeline}</p>
                      <p className="text-xs text-muted-foreground">active opportunities</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Manager Notes</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Textarea
              placeholder="Add your coaching observations and notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={5}
            />
            <div className="flex gap-2">
              <Button onClick={() => setNotes('')} variant="outline">
                Clear
              </Button>
              <Button>Save Notes</Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default RepresentativeDetail;
