import { useState, useEffect } from "react";


export default function LoveStory() {
  const [meetingTime, setMeetingTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [confessionTime, setConfessionTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const meetingDate = new Date(2025, 11, 10);
      const confessionDate = new Date(2026, 1, 14);

      const calcTimeRemaining = (targetDate: Date) => {
  const diff = targetDate.getTime() - now.getTime();

        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        return {
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
        };
      };

      setMeetingTime(calcTimeRemaining(meetingDate));
      setConfessionTime(calcTimeRemaining(confessionDate));
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const memories = [
    '10 Dec — when we met for the first time and you said "tu bag mein weights laata hai kya" who knew that one random line would end up staying with me this long and mark the beginning of something so special. 💫',
    '26 Dec — the feeling when I held your hand for the first time while we were trying to find a flower shop, it was such a small thing but somehow it just felt right. 🌷',
    '29 Jan — when you came all the way to Kalyan and we sat in that park stargazing 🌌',
    'Early Feb — when our hugs started getting a little longer and warmer, they stopped feeling like just hugs and started feeling like home. 🫶',
    '14 Feb — when you kissed me for the first time on my cheek and we watched our first movie together holding hands, everything around us just faded for a while. 💞',
    '15 Mar — when we went for that match and I saw you getting into cricket just because I love it 🏏',
    '13 Apr — when we ate our home-cooked food in that little room and clicked those mirror selfies🍱',
    '15 Apr — when you showed up at my place early in the morning and I forgot everything I wanted to say then the mall, my college, and ending the day at Joggers Park that whole day just felt perfect. ☀️',
    '3 Jun — after everything that happened at the end of May, when the universe somehow made us meet again and you rested your shoulder on my arm at that restaurant, it felt like peace finally came back. 🪷',
    '9 Jun — your birthday, my favorite day from the room to buying the cake to sitting together at that café, it was all just pure warmth. 🎂',
    "24 Aug — when we finally watched that movie we'd been waiting to see for so long  🎥",
    '11–12 Sep — when you, your mom, and that patole somehow pulled me out of that empty void I was in 🌿',
  ];

  return (
    <div className="bg-white min-h-screen overflow-hidden font-serif">
      {/* Karwa Chauth Greeting */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden bg-gradient-to-br from-orange-50 via-pink-50 to-rose-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 right-20 w-40 h-40 rounded-full bg-orange-200 opacity-20 blur-3xl"></div>
          <div className="absolute bottom-32 left-10 w-48 h-48 rounded-full bg-pink-200 opacity-25 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 rounded-full bg-rose-200 opacity-15 blur-2xl"></div>

          <div className="absolute top-16 left-12 text-4xl opacity-40 animate-pulse">
            🪔
          </div>
          <div className="absolute top-32 right-16 text-3xl opacity-30 rotate-12">
            ✨
          </div>
          <div className="absolute bottom-40 left-20 text-3xl opacity-40 -rotate-12">
            🌙
          </div>
          <div className="absolute bottom-24 right-24 text-4xl opacity-30 rotate-45">
            🪔
          </div>
          <div className="absolute top-1/3 right-8 text-2xl opacity-25">💫</div>
          <div className="absolute bottom-1/3 left-8 text-2xl opacity-30 rotate-12">
            ⭐
          </div>

          <div className="absolute top-24 left-1/3 w-2 h-2 rounded-full bg-orange-400 opacity-40"></div>
          <div className="absolute top-48 right-1/4 w-2 h-2 rounded-full bg-pink-400 opacity-40"></div>
          <div className="absolute bottom-48 left-1/4 w-2 h-2 rounded-full bg-rose-400 opacity-40"></div>
          <div className="absolute bottom-32 right-1/3 w-2 h-2 rounded-full bg-orange-400 opacity-40"></div>
        </div>

        <div className="text-center space-y-6 max-w-md relative z-10">
          <div className="relative mb-8">
            <div className="text-6xl mb-4 drop-shadow-lg">🪔</div>
            <div className="absolute -top-2 -right-4 text-3xl animate-pulse">
              ✨
            </div>
            <div
              className="absolute -top-2 -left-4 text-3xl animate-pulse"
              style={{ animationDelay: '0.5s' }}
            >
              ✨
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-0 text-2xl opacity-50 rotate-12">
              🌙
            </div>
            <div className="absolute -right-8 top-0 text-2xl opacity-50 -rotate-12">
              🌙
            </div>
            <h1
              className="text-5xl font-bold text-gray-900 leading-tight font-sans"
              style={{ fontFamily: 'Georgia, serif' }}
            >
              Happy
              <br />
              Karwa Chauth
            </h1>
          </div>

          <div className="relative py-4 flex items-center justify-center gap-3">
            <div className="text-3xl">🧚‍♀️</div>
            <p className="text-4xl text-gray-800 font-light">Kanishka</p>
            <div className="text-3xl transform scale-x-[-1]">🧚‍♀️</div>
          </div>

          <div className="flex justify-center gap-6 text-4xl my-8">
            <span className="transform hover:scale-110 transition">🌙</span>
            <span className="transform hover:scale-110 transition">🪔</span>
            <span className="transform hover:scale-110 transition">✨</span>
          </div>

          <div className="relative bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200">
            <div className="absolute -top-3 -left-3 text-2xl rotate-12">🌸</div>
            <div className="absolute -top-3 -right-3 text-2xl -rotate-12">
              🌸
            </div>
            <p className="text-lg text-pink-700 italic font-light leading-relaxed">
              the first of many that I want to celebrate with you
            </p>
          </div>

          <div className="mt-12 relative">
            <div className="text-7xl animate-bounce drop-shadow-lg">💕</div>
          </div>

          <div className="flex justify-center gap-3 pt-8 opacity-60">
            <span className="text-xl">🪔</span>
            <span className="text-xl">💫</span>
            <span className="text-xl">🪔</span>
          </div>
        </div>

        <div className="absolute top-20 left-1/4 animate-pulse opacity-30">
          <div className="text-2xl">💫</div>
        </div>
        <div
          className="absolute bottom-20 right-1/4 animate-pulse opacity-30"
          style={{ animationDelay: '1s' }}
        >
          <div className="text-2xl">⭐</div>
        </div>
      </section>

      {/* Letter */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-pink-50 to-white">
        <div className="max-w-md relative">
          <div className="absolute -top-6 -left-6 text-4xl rotate-12">💌</div>
          <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-pink-200 relative">
            <p className="text-base text-gray-800 leading-7 space-y-4 font-light">
              <span className="block text-2xl font-semibold text-pink-600">
                hey 💕
              </span>

              <span className="block">
                I wish I could tell you everything that has happened... and
                everything that's happening right now. But that's not what I
                want to focus on today. For now, I just want to wish you a very
                Happy Karwa Chauth. 🌙❤️
              </span>

              <span className="block">
                When we couldn't celebrate Teej together, you had promised me
                that from now on, we'd celebrate every couple's festival
                together. I wish this Karwa Chauth could've been that day...
                that I could be there with you... and that this distance both
                physical and emotional didn't exist.
              </span>

              <span className="block">
                So to make up for all of it, I made this website a small thing
                celebrating us. 💌
              </span>

              <span className="block">
                You know when people hear about unmarried couples celebrating
                festivals like Karwa Chauth it might sound cringe to them... but
                with you none of it ever felt that way. With you, even the most
                traditional things felt so natural.
              </span>

              <span className="block">
                I still remember how we celebrated Teej even with a distance of
                1000 km between us and how you tried to follow every ritual,
                despite everything that was coming in the way. 🌸 Just like that
                I wanted even this festival of Karwa Chauth to be special for
                us.
              </span>

              <span className="block">
                Traditionally on this day women wake up before sunrise and are
                given a fulfilling meal by their mother in law called sargi to
                help them through their fast. They then keep a waterless fast
                all day breaking it only after moonrise when they see the moon
                and their husband through a chalni and he makes her drink water
                and feeds her something sweet.
              </span>

              <span className="block">
                But now even husbands have started keeping the fast alongside
                their wives. 💞
              </span>

              <span className="block">
                So today I did the same. I kept the fast for both of us. 🌙💫
              </span>

              <span className="block">
                I didn't send you this earlier because I remember your periods
                usually come around the 5th and 10th... and I didn't want to
                take that chance because I knew you'd try to keep it even then.
                And that I wouldn't have wanted.
              </span>

              <span className="block">
                So I kept it for both of us and I'll break it tonight at 10 PM,
                when the moon properly rises. 🌕
              </span>

              <span className="block">
                We may not be together in person right now but I know when I
                look at the moon tonight it'll feel like we are. And I'm sure
                deep down... we'll still receive the blessings meant for us. 🪷
              </span>

              <span className="block font-semibold text-pink-600 pt-4">
                With all my love,
              </span>
              <span className="block font-light text-gray-700">
                –Yours, Abhi 💌
              </span>
            </p>
          </div>
          <div className="absolute -bottom-4 -right-4 text-3xl transform -rotate-12">
            🌸
          </div>
        </div>
      </section>

      {/* Our Moments */}
      <section className="min-h-screen py-20 px-6 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
            our moments that I keep on replaying
          </h2>
          <p className="text-center text-pink-600 mb-12 text-lg italic">
            like a favorite film on repeat
          </p>

          <div className="space-y-4">
            {memories.map((moment, idx) => (
              <div
                key={idx}
                className="bg-pink-50 rounded-xl p-5 border-l-4 border-red-400 hover:shadow-md transition"
              >
                <p className="text-gray-800 font-light">{moment}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Anniversary */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-white to-pink-50 relative">
        <div className="absolute top-10 right-10 text-4xl rotate-12">🎀</div>
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <p className="text-pink-600 text-lg mb-2 italic">
              ✨ one year of us meeting for the first time ✨
            </p>
            <h2 className="text-4xl font-bold text-gray-900">
              December 10, 2025
            </h2>
          </div>

          <div className="bg-gradient-to-br from-pink-100 to-rose-100 rounded-3xl p-8 shadow-lg border-3 border-pink-300">
            <div className="grid grid-cols-4 gap-3 mb-8">
              {[
                { val: meetingTime.days, label: 'days' },
                { val: meetingTime.hours, label: 'hours' },
                { val: meetingTime.minutes, label: 'mins' },
                { val: meetingTime.seconds, label: 'secs' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center bg-white rounded-xl p-3 shadow-sm"
                >
                  <p className="text-3xl font-bold text-red-500">{item.val}</p>
                  <p className="text-xs text-gray-700 font-semibold mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-800 font-light italic">
              till we celebrate a year of us
            </p>
          </div>
        </div>
      </section>

      {/* Confession Day */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-red-50 to-pink-50 relative">
        <div className="absolute bottom-10 left-10 text-5xl -rotate-12">🌹</div>
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <p className="text-red-600 text-lg mb-2 italic">
              💕 one year since we confessed our feelings 💕
            </p>
            <h2 className="text-3xl font-bold text-gray-900">
              Valentine's Day
            </h2>
            <p className="text-gray-700 mt-1">February 14, 2026</p>
          </div>

          <div className="bg-gradient-to-br from-red-100 to-pink-100 rounded-3xl p-8 shadow-lg border-3 border-red-300">
            <div className="grid grid-cols-4 gap-3 mb-8">
              {[
                { val: confessionTime.days, label: 'days' },
                { val: confessionTime.hours, label: 'hours' },
                { val: confessionTime.minutes, label: 'mins' },
                { val: confessionTime.seconds, label: 'secs' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="text-center bg-white rounded-xl p-3 shadow-sm"
                >
                  <p className="text-3xl font-bold text-red-500">{item.val}</p>
                  <p className="text-xs text-gray-700 font-semibold mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-800 font-light italic">
              our first valentine together
            </p>
          </div>
        </div>
      </section>

      {/* Future Dreams Video */}
      <section className="min-h-screen py-20 px-6 bg-white flex items-center justify-center">
        <div className="max-w-md mx-auto w-full">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
            dreaming of forever
          </h2>
          <p className="text-center text-pink-600 mb-12 text-lg italic">
            all the beautiful things I want to do with you
          </p>

          <div className="relative bg-gradient-to-br from-pink-100 to-rose-100 rounded-2xl p-4 shadow-xl border-2 border-pink-300">
            <div className="aspect-video rounded-lg overflow-hidden bg-gradient-to-br from-red-100 to-pink-100">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/SIc0DZObrls?rel=0"
                title="Our Future Dreams Video"
                frameBorder="0"
                sandbox="allow-same-origin allow-scripts allow-presentation allow-popups"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Final Message with Ring */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-b from-pink-50 to-white relative">
        <div className="absolute top-20 left-10 text-3xl rotate-45">✨</div>
        <div className="absolute bottom-20 right-10 text-3xl -rotate-45">
          ✨
        </div>

        <div className="max-w-md text-center space-y-6 relative z-10">
          <div className="relative">
            <div className="absolute -inset-6 bg-pink-100 rounded-full opacity-30 blur-lg"></div>
            <p className="relative text-3xl font-light text-gray-900 leading-relaxed italic mb-6">
              "in this lifetime and every other, you're my forever."
            </p>
          </div>

          <p className="text-2xl font-light text-pink-700 italic">
            now open the box ❤️
          </p>

          <div className="text-8xl animate-bounce mt-8">💍</div>
        </div>
      </section>
    </div>
  );
}
