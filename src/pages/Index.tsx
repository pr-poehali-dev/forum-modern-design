import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Профиль', icon: 'User', href: '#profile' },
    { name: 'Новости', icon: 'Newspaper', href: '#news' },
    { name: 'Обсуждения', icon: 'MessageSquare', href: '#discussions' },
    { name: 'Гайды', icon: 'BookOpen', href: '#guides' },
    { name: 'События', icon: 'Calendar', href: '#events' },
    { name: 'Контакты', icon: 'Mail', href: '#contacts' },
  ];

  const userRanks = [
    { name: 'Новичок', level: 1, color: 'bg-gray-500' },
    { name: 'Боец', level: 2, color: 'bg-blue-500' },
    { name: 'Ветеран', level: 3, color: 'bg-primary' },
    { name: 'Легенда', level: 4, color: 'bg-secondary' },
  ];

  const achievements = [
    { id: 1, title: 'Первые шаги', description: 'Создайте первый пост', icon: 'Footprints', earned: true },
    { id: 2, title: 'Стратег', description: 'Напишите 10 гайдов', icon: 'Target', earned: true },
    { id: 3, title: 'Командир', description: 'Организуйте событие', icon: 'Shield', earned: false },
    { id: 4, title: 'Ветеран', description: 'Проведите 100 часов на форуме', icon: 'Trophy', earned: false },
  ];

  const discussions = [
    { id: 1, title: 'Лучшие тактики для захвата баз', author: 'Soldier_Alpha', replies: 24, views: 342, time: '2 часа назад' },
    { id: 2, title: 'Новое обновление: что изменилось?', author: 'CommanderX', replies: 67, views: 892, time: '5 часов назад' },
    { id: 3, title: 'Гайд по оружию для новичков', author: 'VeteranPro', replies: 45, views: 621, time: '1 день назад' },
  ];

  const events = [
    { id: 1, title: 'Турнир "Захват флага"', date: '15 декабря, 20:00', participants: 32 },
    { id: 2, title: 'Совместная миссия', date: '18 декабря, 19:00', participants: 18 },
  ];

  const currentUser = {
    name: 'Soldier_Delta',
    rank: userRanks[2],
    progress: 65,
    posts: 156,
    reputation: 892,
  };

  return (
    <div className="min-h-screen bg-background dark">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-3">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="hover:bg-primary/10">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80 bg-sidebar border-sidebar-border">
                <div className="flex flex-col h-full py-6">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold text-sidebar-foreground mb-2">Arma Reforger</h2>
                    <p className="text-sm text-sidebar-foreground/70">Сообщество игроков</p>
                  </div>
                  
                  <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all duration-200 group"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <Icon name={item.icon} size={20} className="group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    ))}
                  </nav>

                  <div className="mt-auto pt-6 border-t border-sidebar-border">
                    <div className="flex items-center gap-3 px-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">SD</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-sidebar-foreground">{currentUser.name}</p>
                        <p className="text-xs text-sidebar-foreground/70">{currentUser.rank.name}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <h1 className="text-2xl font-bold tracking-tight">Arma Reforger Forum</h1>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" size={20} />
            </Button>
            <Button variant="default" className="bg-secondary hover:bg-secondary/90">
              <Icon name="Plus" size={18} className="mr-2" />
              Создать пост
            </Button>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <section id="news" className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-6">Последние новости</h2>
              <Card className="overflow-hidden border-primary/20 hover:border-primary/40 transition-colors">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Newspaper" size={64} className="text-primary/40" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Обновление 1.2: Новые карты и режимы</CardTitle>
                  <CardDescription>Опубликовано 28 ноября 2025</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed mb-4">
                    Разработчики анонсировали крупное обновление, которое добавит три новые карты,
                    улучшенную систему физики транспорта и новый режим "Операция". Ожидайте релиз в начале декабря!
                  </p>
                  <Button variant="outline" className="group">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section id="discussions" className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h2 className="text-3xl font-bold mb-6">Активные обсуждения</h2>
              <div className="space-y-4">
                {discussions.map((discussion) => (
                  <Card key={discussion.id} className="hover:border-primary/40 transition-all hover:shadow-lg group cursor-pointer">
                    <CardHeader>
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <CardTitle className="text-xl group-hover:text-primary transition-colors">
                            {discussion.title}
                          </CardTitle>
                          <CardDescription className="mt-2">
                            Автор: <span className="text-primary">{discussion.author}</span> • {discussion.time}
                          </CardDescription>
                        </div>
                        <Icon name="MessageSquare" size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Icon name="MessageCircle" size={16} />
                          <span>{discussion.replies} ответов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="Eye" size={16} />
                          <span>{discussion.views} просмотров</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section id="events" className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold mb-6">Предстоящие события</h2>
              <div className="space-y-4">
                {events.map((event) => (
                  <Card key={event.id} className="border-secondary/20 hover:border-secondary/40 transition-colors">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="h-16 w-16 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                          <Icon name="Calendar" size={32} className="text-secondary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="flex items-center gap-4 mt-2">
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {event.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Users" size={14} />
                              {event.participants} участников
                            </span>
                          </CardDescription>
                        </div>
                        <Button variant="secondary" size="sm">
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
            <section id="profile" className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="border-primary/20">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Avatar className="h-24 w-24 border-4 border-primary">
                      <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                        {currentUser.name.slice(0, 2)}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <CardTitle className="text-2xl">{currentUser.name}</CardTitle>
                  <CardDescription className="flex items-center justify-center gap-2 mt-2">
                    <div className={`w-3 h-3 rounded-full ${currentUser.rank.color}`}></div>
                    <span className="text-lg font-medium text-foreground">{currentUser.rank.name}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Прогресс до следующего ранга</span>
                      <span className="font-bold text-primary">{currentUser.progress}%</span>
                    </div>
                    <Progress value={currentUser.progress} className="h-2" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-primary">{currentUser.posts}</div>
                      <div className="text-xs text-muted-foreground mt-1">Постов</div>
                    </div>
                    <div className="text-center p-4 rounded-lg bg-muted">
                      <div className="text-3xl font-bold text-secondary">{currentUser.reputation}</div>
                      <div className="text-xs text-muted-foreground mt-1">Репутация</div>
                    </div>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90" size="lg">
                    Мой профиль
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Award" size={24} className="text-secondary" />
                    Система рангов
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {userRanks.map((rank) => (
                    <div
                      key={rank.level}
                      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                        rank.level === currentUser.rank.level
                          ? 'bg-primary/10 border border-primary/30'
                          : 'bg-muted/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-full ${rank.color} flex items-center justify-center text-white font-bold`}>
                        {rank.level}
                      </div>
                      <span className="font-medium">{rank.name}</span>
                      {rank.level === currentUser.rank.level && (
                        <Badge variant="secondary" className="ml-auto">Текущий</Badge>
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>

            <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Trophy" size={24} className="text-secondary" />
                    Достижения
                  </CardTitle>
                  <CardDescription>
                    {achievements.filter(a => a.earned).length} из {achievements.length} получено
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`flex items-start gap-3 p-3 rounded-lg transition-all ${
                        achievement.earned
                          ? 'bg-secondary/10 border border-secondary/30'
                          : 'bg-muted/30 opacity-50'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        achievement.earned ? 'bg-secondary/20' : 'bg-muted'
                      }`}>
                        <Icon
                          name={achievement.icon}
                          size={20}
                          className={achievement.earned ? 'text-secondary' : 'text-muted-foreground'}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm">{achievement.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </section>
          </div>
        </div>
      </main>

      <footer className="border-t border-border/40 mt-16 py-8 bg-muted/30">
        <div className="container px-4 text-center">
          <h3 className="text-lg font-bold mb-2">Arma Reforger Community Forum</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Официальное сообщество игроков • Новости, гайды, события
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="icon">
              <Icon name="MessageCircle" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Twitter" size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" size={20} />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
