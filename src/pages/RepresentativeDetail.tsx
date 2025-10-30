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
              <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                <img src="https://cdn4.iconfinder.com/data/icons/superhero/400/superman.png" className="w-15 h-15 text-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Super Coach</h1>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-medium">{managerName}</p>
                <p className="text-xs text-muted-foreground">West (S1100)</p>
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
                  <p>{repDetail.territory}            (S110{repDetail.id})</p>
                  {/* <p>Tenure: {repDetail.tenure} years</p> */}
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 ml-1">
                <div className="text-center">
                  <p className="text-2xl font-bold"></p>
                  <p className="text-xs text-muted-foreground mt-1"></p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold"></p>
                  <p className="text-xs text-muted-foreground mt-1"></p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary">{repDetail.salesAchievement}</p>
                  <p className="text-xs text-muted-foreground mt-1">Sales Achievement</p>
                </div>
                {/* <div className="text-center">
                  <p className="text-2xl font-bold">{repDetail.crmQualityScore}%</p>
                  <p className="text-xs text-muted-foreground mt-1">CRM Quality</p>
                </div> */}
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
              <h2 className="text-2xl font-bold">Your Coaching Notes</h2>
            </div>
            <div className="w-full">
              {repDetail.strengths.map((insight) => (
                <Card key={insight.id} className="border-l-4 border-l-success">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{insight.title_1}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-0 space-y-3">
                    <p className="text-sm text-muted-foreground">{insight.description_1}</p>
                    {/* {insight.metrics.map((metric, idx) => (
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
                    ))} */}
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{insight.title_2}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="pb-0 space-y-3">
                    <p className="text-sm text-muted-foreground">{insight.description_2}</p>
                    {/* {insight.metrics.map((metric, idx) => (
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
                    ))} */}
                  </CardContent>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-base">{insight.title_3}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">{insight.description_3}</p>
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
              <TabsList className="w-full">
                <TabsTrigger value="activity" className="w-full">Activity</TabsTrigger>
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
                      <CardTitle className="text-sm">Coverage</CardTitle>
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
