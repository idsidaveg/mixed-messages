var quotes = [
    "Aging seems to be the only available way to live a long life. - Kitty O'Neil Collins",
    "You can live to be a hundred if you give up all things that make you want to live be a hundred. - Woody Allen",
    "It's paradoxical that the idea of living a long life appeals to everyone, but the idea of getting old doesn't appeal to anyone. - Andy Rooney",
    "You know you're getting old when you stoop to tie your shoelaces and wonder what else you could do while you're down there. - George Burns",
    "There is a fountain of youth: it is your mind, your talents, the creativity you bring to your life and the lives of people you love. When you learn to tap this source, you will truly have defeated age. - Sophia Loren",
    "You don't stop laughing when you grow old, you grow old when you stop laughing. - George Bernard Shaw",
    "By the time you're 80 years old you've learned everything. You only have to remember it. - George Burns",
    "The really frightening thing about middle age is that you know you'll grow out of it. - Doris Day",
    "How old would you be if you didn't know how old you was? - Satchel Paige",
    "People ask me what I'd most appreciate getting for my eighty-seventh birthday. I tell them a paternity suit. - George Burns",
    "Those who think they have no time for bodily exercise will sooner or later have to find time for illness. - Edward Stanley",
    "I'm very pleased to be here. Let's face it, at my age I'm very pleased to be anywhere. - George Burns",
    "If I had known I was going to live this long, I'd have taken better care of myself. - Anonymous",
    "Some guy said to me: 'Don't you think you're tool old to sing rock-n-roll?' I said: 'You'd better check with Mick Jagger. - Cher",
    "I don't feel old. I don't feel anything until noon. Then it's my time for my nap. - Bob Hope",
    "Birthdays are good for you. Statistics show that the people who have the most live the longest. - Larry Lorenzoni",
    "At age 20, we worry about what others think about us. At age 40, we don't care what they think of us. At age 60, we discover they haven't been thinking of us at all. - Ann Landers",
    "You are only young once, but you can stay immature indefinitely. - Ogden Nash",
    "Old age is an excellent time for outrage. My goal is to say or do at least one outrageous thing every week. - Maggie Kuhn",
    "You can't help getting older, but you don't have to get old. - George Burns",
    "I feel about aging the way William Saroyan said he felt about death: 'Everybody has to do it; but I always believed an exception would be made in my case. - Martha Beck",
    "Today is the oldest you've ever been, and the youngest you'll ever be. - Eleanor Roosevelt",
    "Old age is always fifteen years older than I am. - Oliver Wendell Holmes",
    "Old age is like everything else. To make a success of it, you've got to start young. - Theodore Roosevelt"
];

const getQuote = () => quotes[Math.floor(Math.random() * (quotes.length + 1))];
console.log(getQuote());