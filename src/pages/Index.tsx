import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const menuItems = [
    { name: 'Профиль', icon: 'User', href: '#profile' },
    { name: 'Новости', icon: 'Newspaper', href: '#news' },
    { name: 'Обсуждения', icon: 'MessageSquare', href: '#discussions' },
    { name: 'Гайды', icon: 'BookOpen', href: '#guides' },
    { name: 'События', icon: 'Calendar', href: '#events' },
    { name: 'Контакты', icon: 'Mail', href: '#contacts' },
  ];

  const userRanks = [
    { name: 'Новичок', level: 1, color: 'bg-gradient-to-br from-gray-400 to-gray-600', minPosts: 0 },
    { name: 'Боец', level: 2, color: 'bg-gradient-to-br from-blue-400 to-blue-600', minPosts: 50 },
    { name: 'Ветеран', level: 3, color: 'bg-gradient-to-br from-primary to-green-600', minPosts: 150 },
    { name: 'Легенда', level: 4, color: 'bg-gradient-to-br from-secondary to-orange-600', minPosts: 300 },
  ];

  const achievements = [
    { id: 1, title: 'Первые шаги', description: 'Создайте первый пост', icon: 'Footprints', earned: true, rarity: 'common' },
    { id: 2, title: 'Стратег', description: 'Напишите 10 гайдов', icon: 'Target', earned: true, rarity: 'rare' },
    { id: 3, title: 'Командир', description: 'Организуйте событие', icon: 'Shield', earned: false, rarity: 'epic' },
    { id: 4, title: 'Ветеран', description: 'Проведите 100 часов на форуме', icon: 'Trophy', earned: false, rarity: 'legendary' },
    { id: 5, title: 'Легенда форума', description: 'Получите 1000 репутации', icon: 'Crown', earned: false, rarity: 'legendary' },
    { id: 6, title: 'Помощник', description: 'Ответьте на 50 вопросов', icon: 'Heart', earned: true, rarity: 'rare' },
  ];

  const discussions = [
    { id: 1, title: 'Лучшие тактики для захвата баз', author: 'Soldier_Alpha', replies: 24, views: 342, time: '2 часа назад', category: 'tactics', hot: true },
    { id: 2, title: 'Новое обновление: что изменилось?', author: 'CommanderX', replies: 67, views: 892, time: '5 часов назад', category: 'news', hot: true },
    { id: 3, title: 'Гайд по оружию для новичков', author: 'VeteranPro', replies: 45, views: 621, time: '1 день назад', category: 'guides', hot: false },
    { id: 4, title: 'Поиск команды для кооператива', author: 'Player_Mike', replies: 12, views: 156, time: '3 часа назад', category: 'team', hot: false },
  ];

  const events = [
    { id: 1, title: 'Турнир "Захват флага"', date: '15 декабря, 20:00', participants: 32, maxParticipants: 64, status: 'open' },
    { id: 2, title: 'Совместная миссия', date: '18 декабря, 19:00', participants: 18, maxParticipants: 24, status: 'open' },
    { id: 3, title: 'Тренировочный день', date: '20 декабря, 18:00', participants: 45, maxParticipants: 50, status: 'filling' },
  ];

  const currentUser = {
    name: 'Soldier_Delta',
    rank: userRanks[2],
    progress: 65,
    posts: 156,
    reputation: 892,
    level: 24,
  };

  const rarityColors = {
    common: 'border-gray-400 bg-gray-400/10',
    rare: 'border-blue-400 bg-blue-400/10',
    epic: 'border-purple-400 bg-purple-400/10',
    legendary: 'border-secondary bg-secondary/10',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 dark">
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgxMjQsMTU2LDEwNywwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40 pointer-events-none"></div>

      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60 shadow-lg">
        <div className="container flex h-20 items-center justify-between px-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-4 animate-slide-in-left">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all duration-300 relative group">
                  <Icon name="Menu" size={24} className="group-hover:rotate-90 transition-transform duration-300" />
                  <span className="absolute inset-0 rounded-md bg-primary/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-gradient-to-b from-sidebar to-sidebar/95 border-sidebar-border backdrop-blur-xl">
                <div className="flex flex-col h-full py-6">
                  <div className="mb-8 animate-fade-in-up">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-glow">
                        <Icon name="Crosshair" size={24} className="text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-sidebar-foreground">Arma Reforger</h2>
                        <p className="text-xs text-sidebar-foreground/70">Сообщество игроков</p>
                      </div>
                    </div>
                  </div>
                  
                  <nav className="flex-1 space-y-2">
                    {menuItems.map((item, index) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-300 group relative overflow-hidden animate-slide-in-left"
                        style={{ animationDelay: `${index * 0.05}s` }}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                        <Icon name={item.icon} size={20} className="group-hover:scale-125 transition-transform duration-300 relative z-10" />
                        <span className="font-medium relative z-10">{item.name}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t border-sidebar-border animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    <div className="flex items-center gap-3 px-4 py-3 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors cursor-pointer">
                      <Avatar className="h-12 w-12 border-2 border-primary ring-2 ring-primary/20 animate-glow">
                        <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white font-bold">SD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-bold text-sidebar-foreground">{currentUser.name}</p>
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-sidebar-foreground/70">{currentUser.rank.name}</span>
                          <Badge variant="secondary" className="text-[10px] px-1.5 py-0">LVL {currentUser.level}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
                <Icon name="Crosshair" size={20} className="text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">Arma Reforger</h1>
                <p className="text-xs text-muted-foreground">Community Forum</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 animate-slide-in-left" style={{ animationDelay: '0.1s' }}>
            <Button variant="ghost" size="icon" className="relative hover:scale-110 transition-transform">
              <Icon name="Bell" size={20} />
              <span className="absolute -top-1 -right-1 h-5 w-5 bg-secondary rounded-full flex items-center justify-center text-[10px] font-bold animate-bounce-in">3</span>
            </Button>
            <Button className="bg-gradient-to-r from-secondary to-orange-600 hover:from-secondary/90 hover:to-orange-700 text-white shadow-lg hover:shadow-secondary/50 hover:scale-105 transition-all duration-300 relative group overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
              <Icon name="Plus" size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">Создать пост</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-8">
            <section id="news" className="animate-fade-in-up">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Последние новости</h2>
              <Card className="overflow-hidden border-primary/30 hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="h-64 bg-gradient-to-br from-primary/30 via-primary/10 to-secondary/30 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZDIiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZDIpIi8+PC9zdmc+')] opacity-50"></div>
                  <Icon name="Newspaper" size={80} className="text-primary/40 animate-float relative z-10" />
                </div>
                <CardHeader className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-3xl mb-2 group-hover:text-primary transition-colors">Обновление 1.2: Новые карты и режимы</CardTitle>
                      <CardDescription className="flex items-center gap-3">
                        <span className="flex items-center gap-1">
                          <Icon name="Calendar" size={14} />
                          28 ноября 2025
                        </span>
                        <Badge variant="secondary" className="animate-pulse-slow">Горячее</Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative z-10">
                  <p className="text-foreground/80 leading-relaxed mb-6 text-lg">
                    Разработчики анонсировали крупное обновление, которое добавит три новые карты,
                    улучшенную систему физики транспорта и новый режим "Операция". Ожидайте релиз в начале декабря!
                  </p>
                  <Button variant="outline" className="group/btn border-primary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover/btn:translate-x-2 transition-transform duration-300" />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section id="discussions" className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">Обсуждения</h2>
              </div>
              
              <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-6">
                <TabsList className="grid grid-cols-4 bg-muted/50 backdrop-blur-sm p-1">
                  <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                    Все
                  </TabsTrigger>
                  <TabsTrigger value="hot" className="data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground transition-all duration-300">
                    Горячее
                  </TabsTrigger>
                  <TabsTrigger value="guides" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                    Гайды
                  </TabsTrigger>
                  <TabsTrigger value="team" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300">
                    Команды
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4 mt-6">
                  {discussions.map((discussion, index) => (
                    <Card key={discussion.id} className="hover:border-primary/60 transition-all duration-500 hover:shadow-xl hover:shadow-primary/10 group cursor-pointer overflow-hidden relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <CardHeader className="relative z-10">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                                {discussion.title}
                              </CardTitle>
                              {discussion.hot && (
                                <Badge variant="secondary" className="animate-pulse-slow">
                                  <Icon name="Flame" size={12} className="mr-1" />
                                  Hot
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="flex items-center gap-3">
                              <span className="flex items-center gap-1">
                                <Icon name="User" size={12} />
                                <span className="text-primary font-medium">{discussion.author}</span>
                              </span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Icon name="Clock" size={12} />
                                {discussion.time}
                              </span>
                            </CardDescription>
                          </div>
                          <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                            <Icon name="MessageSquare" size={24} className="text-primary" />
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="relative z-10">
                        <div className="flex items-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <Icon name="MessageCircle" size={16} className="text-primary" />
                            <span className="font-medium">{discussion.replies}</span>
                          </div>
                          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted group-hover:bg-muted/70 transition-colors">
                            <Icon name="Eye" size={16} />
                            <span className="font-medium">{discussion.views}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="hot" className="space-y-4 mt-6">
                  {discussions.filter(d => d.hot).map((discussion, index) => (
                    <Card key={discussion.id} className="border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20 group cursor-pointer animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardHeader>
                        <CardTitle className="text-xl group-hover:text-secondary transition-colors flex items-center gap-2">
                          <Icon name="Flame" size={20} className="text-secondary animate-pulse-slow" />
                          {discussion.title}
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="guides" className="mt-6">
                  <Card className="border-primary/30 p-8 text-center animate-fade-in">
                    <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-primary opacity-50" />
                    <p className="text-muted-foreground">Раздел гайдов в разработке</p>
                  </Card>
                </TabsContent>

                <TabsContent value="team" className="mt-6">
                  <Card className="border-primary/30 p-8 text-center animate-fade-in">
                    <Icon name="Users" size={48} className="mx-auto mb-4 text-primary opacity-50" />
                    <p className="text-muted-foreground">Раздел поиска команд в разработке</p>
                  </Card>
                </TabsContent>
              </Tabs>
            </section>

            <section id="events" className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-foreground to-secondary bg-clip-text text-transparent">Предстоящие события</h2>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <Card key={event.id} className="border-secondary/30 hover:border-secondary/60 transition-all duration-500 hover:shadow-xl hover:shadow-secondary/20 group overflow-hidden relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/5 to-secondary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <CardHeader className="relative z-10">
                      <div className="flex items-center gap-4">
                        <div className="h-20 w-20 rounded-xl bg-gradient-to-br from-secondary/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative">
                          <div className="absolute inset-0 rounded-xl bg-secondary/20 blur-lg animate-pulse-slow"></div>
                          <Icon name="Calendar" size={36} className="text-secondary relative z-10 animate-float" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-2 group-hover:text-secondary transition-colors">{event.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 text-base">
                            <span className="flex items-center gap-2">
                              <Icon name="Clock" size={16} />
                              {event.date}
                            </span>
                          </CardDescription>
                          <div className="mt-3">
                            <div className="flex items-center justify-between text-sm mb-2">
                              <span className="text-muted-foreground">Участники</span>
                              <span className="font-bold text-secondary">{event.participants}/{event.maxParticipants}</span>
                            </div>
                            <Progress value={(event.participants / event.maxParticipants) * 100} className="h-2" />
                          </div>
                        </div>
                        <Button variant="default" className="bg-gradient-to-r from-secondary to-orange-600 hover:from-secondary/90 hover:to-orange-700 text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-secondary/50">
                          <Icon name="UserPlus" size={18} className="mr-2" />
                          Участвовать
                        </Button>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <section id="profile" className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Card className="border-primary/30 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10"></div>
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-primary to-secondary opacity-80"></div>
                <CardHeader className="text-center relative z-10 pt-8">
                  <div className="flex justify-center mb-4">
                    <div className="relative animate-bounce-in">
                      <Avatar className="h-28 w-28 border-4 border-white shadow-2xl ring-4 ring-primary/30">
                        <AvatarFallback className="bg-gradient-to-br from-primary via-green-500 to-secondary text-white text-3xl font-bold">
                          {currentUser.name.slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-gradient-to-br from-secondary to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-sm border-4 border-background animate-pulse">
                        {currentUser.level}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-2">{currentUser.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2">
                    <div className={`w-4 h-4 rounded-full ${currentUser.rank.color} animate-glow`}></div>
                    <span className="text-lg font-bold text-foreground">{currentUser.rank.name}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6 relative z-10">
                  <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-4">
                    <div className="flex justify-between text-sm mb-3">
                      <span className="text-muted-foreground font-medium">До следующего ранга</span>
                      <span className="font-bold text-primary text-lg">{currentUser.progress}%</span>
                    </div>
                    <Progress value={currentUser.progress} className="h-3 animate-shimmer" style={{ backgroundSize: '200% 100%' }} />
                    <p className="text-xs text-muted-foreground mt-2 text-center">Ещё {userRanks[3].minPosts - currentUser.posts} постов до "Легенда"</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 hover:scale-105 transition-transform duration-300 cursor-pointer group/stat">
                      <Icon name="FileText" size={24} className="mx-auto mb-2 text-primary group-hover/stat:scale-125 transition-transform" />
                      <div className="text-4xl font-bold text-primary mb-1">{currentUser.posts}</div>
                      <div className="text-xs text-muted-foreground">Постов</div>
                    </div>
                    <div className="text-center p-6 rounded-xl bg-gradient-to-br from-secondary/20 to-orange-500/10 border border-secondary/30 hover:scale-105 transition-transform duration-300 cursor-pointer group/stat">
                      <Icon name="Star" size={24} className="mx-auto mb-2 text-secondary group-hover/stat:scale-125 transition-transform" />
                      <div className="text-4xl font-bold text-secondary mb-1">{currentUser.reputation}</div>
                      <div className="text-xs text-muted-foreground">Репутация</div>
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-700 text-white shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all duration-300 h-12 text-lg group/btn" size="lg">
                    <span>Мой профиль</span>
                    <Icon name="ArrowRight" size={20} className="ml-2 group-hover/btn:translate-x-2 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <Card className="border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center animate-float">
                      <Icon name="Award" size={20} className="text-white" />
                    </div>
                    Система рангов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {userRanks.map((rank, index) => (
                    <div
                      key={rank.level}
                      className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer animate-slide-in-left ${
                        rank.level === currentUser.rank.level
                          ? 'bg-primary/20 border-2 border-primary shadow-lg shadow-primary/20'
                          : 'bg-muted/50 border-2 border-transparent hover:border-muted'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-12 h-12 rounded-xl ${rank.color} flex items-center justify-center text-white font-bold text-lg shadow-lg ${rank.level === currentUser.rank.level ? 'animate-glow' : ''}`}>
                        {rank.level}
                      </div>
                      <div className="flex-1">
                        <span className="font-bold text-lg">{rank.name}</span>
                        <p className="text-xs text-muted-foreground">от {rank.minPosts} постов</p>
                      </div>
                      {rank.level === currentUser.rank.level && (
                        <Badge variant="secondary" className="animate-pulse-slow shadow-lg">Текущий</Badge>
                      )}
                      {rank.level < currentUser.rank.level && (
                        <Icon name="Check" size={20} className="text-primary" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Card className="border-secondary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-2xl">
                    <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-secondary to-orange-600 flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                      <Icon name="Trophy" size={20} className="text-white" />
                    </div>
                    Достижения
                  </CardTitle>
                  <CardDescription className="text-base">
                    {achievements.filter(a => a.earned).length} из {achievements.length} получено
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.id}
                      className={`flex items-start gap-4 p-4 rounded-xl transition-all duration-500 hover:scale-105 cursor-pointer border-2 animate-scale-in ${
                        achievement.earned
                          ? `${rarityColors[achievement.rarity]} shadow-lg`
                          : 'bg-muted/20 opacity-50 border-transparent hover:opacity-70'
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        achievement.earned ? `bg-gradient-to-br ${achievement.rarity === 'legendary' ? 'from-secondary to-orange-600 animate-glow' : achievement.rarity === 'epic' ? 'from-purple-400 to-purple-600' : 'from-blue-400 to-blue-600'}` : 'bg-muted'
                      }`}>
                        <Icon
                          name={achievement.icon}
                          size={24}
                          className={achievement.earned ? 'text-white' : 'text-muted-foreground'}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-base mb-1">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                        {achievement.earned && (
                          <Badge variant="outline" className="mt-2 text-xs capitalize">{achievement.rarity}</Badge>
                        )}
                      </div>
                      {achievement.earned && (
                        <Icon name="Check" size={24} className="text-primary animate-bounce-in" />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 mt-16 py-12 bg-gradient-to-b from-muted/30 to-muted/50 backdrop-blur-sm relative z-10">
        <div className="container px-4 text-center max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center animate-float">
              <Icon name="Crosshair" size={24} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold">Arma Reforger Community</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Официальное сообщество игроков • Новости, гайды, события
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 hover:scale-110 transition-all">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-8">© 2025 Arma Reforger Community Forum</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
