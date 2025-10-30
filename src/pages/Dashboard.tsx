import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { mockRepresentatives } from '@/lib/mockData';
import { BarChart3, LogOut, TrendingUp, Users, Target } from 'lucide-react';
import { useEffect } from 'react';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, managerName, logout } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'green':
        return 'bg-success text-success-foreground';
      case 'yellow':
        return 'bg-warning text-warning-foreground';
      case 'red':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const teamAvgSales = Math.round(
    mockRepresentatives.reduce((sum, rep) => sum + rep.salesAchievement, 0) / mockRepresentatives.length
  );

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold">SuperCoach-M</h1>
              <p className="text-sm text-muted-foreground">My Team Overview</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">{managerName}</p>
              <p className="text-xs text-muted-foreground">Field Manager</p>
            </div>
            <Button variant="outline" size="sm" onClick={handleLogout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Representatives
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{mockRepresentatives.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Team Avg Sales
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{teamAvgSales}%</div>
              <p className="text-xs text-muted-foreground mt-1">vs. Target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Current Period
              </CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Q4 2025</div>
              <p className="text-xs text-muted-foreground mt-1">October</p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Team Members</h2>
          <p className="text-muted-foreground">Click on a representative to view detailed insights</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockRepresentatives.map((rep) => (
            <Card
              key={rep.id}
              className="cursor-pointer hover:shadow-lg transition-all hover:border-primary"
              onClick={() => navigate(`/representative/${rep.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{rep.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{rep.territory}</p>
                  </div>
                  <Badge className={getStatusColor(rep.status)}>
                    {rep.status.toUpperCase()}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Sales Achievement</span>
                    <span className={`text-sm font-semibold ${rep.salesAchievement >= 100 ? 'text-success' : rep.salesAchievement >= 85 ? 'text-warning' : 'text-destructive'}`}>
                      {rep.salesAchievement}%
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${rep.salesAchievement >= 100 ? 'bg-success' : rep.salesAchievement >= 85 ? 'bg-warning' : 'bg-destructive'}`}
                      style={{ width: `${Math.min(rep.salesAchievement, 100)}%` }}
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Activity Rate</span>
                  <span className="text-sm font-semibold">{rep.activityCompletion}%</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">CRM Quality</span>
                  <span className="text-sm font-semibold">{rep.crmQualityScore}%</span>
                </div>

                <Button variant="outline" className="w-full mt-2">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <footer className="mt-12 pt-6 border-t text-center text-sm text-muted-foreground">
          <p>Last updated: {new Date().toLocaleString()}</p>
          <p className="mt-1">SuperCoach-M v1.0</p>
        </footer>
      </main>
    </div>
  );
};

export default Dashboard;
