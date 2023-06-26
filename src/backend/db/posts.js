import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  // {
  //   _id: uuid(),
  //   content:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "adarshbalika",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  // {
  //   _id: uuid(),
  //   content:
  //     "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
  //   likes: {
  //     likeCount: 0,
  //     likedBy: [],
  //     dislikedBy: [],
  //   },
  //   username: "shubhamsoni",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  {
    _id: uuid(),
    content:
      "my mother cried the day I was born because she knew she would never be better than me.",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "trump_empire",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "putin",
    createdAt: "2023-02-10T22:44:17+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "I must confess, my mornings usually begin with a rigorous workout routine of riding a unicorn and bench-pressing tanks. Keeps me in shape to rule the world, you know.",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "9e76db3c-88re-6f0d-80dd-4wd0a38f6899",
          firstName: "Boris",
          lastName: "Johnson",
          username: "johnson",
          password: "britain123",
          bio: "Prime Minister(sometimes)",
          website: "johnson.com",
          displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/330px-Boris_Johnson_official_portrait_%28cropped%29.jpg",
          followers: [],
          following: [
            {
              _id: "7e86db6c-88ff-4f0d-89dd-4ad0a38f6879",
              firstName: "Jacinda",
              lastName: "Ardern",
              username: "jacinda",
              password: "newzealand123",
              bio: "Prime Minister",
              website: "jacinda.com",
              displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/330px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg",
              followers: [],
              following: [
                {
                  _id: "9e76db3c-88re-6f0d-80dd-4wd0a38f6899",
                  firstName: "Boris",
                  lastName: "Johnson",
                  username: "johnson",
                  password: "britain123",
                  bio: "Prime Minister(sometimes)",
                  website: "johnson.com",
                  displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/330px-Boris_Johnson_official_portrait_%28cropped%29.jpg",
                  followers: [],
                  following: [],
                  createdAt: "2023-06-10T22:44:17+05:30",
                  updatedAt: "2023-06-10T22:44:17+05:30",
                  bookmarks: [],
                  id: "6"
                }
              ],
              createdAt: "2023-06-10T22:44:17+05:30",
              updatedAt: "2023-06-10T22:44:17+05:30",
              bookmarks: [],
              id: "5"
            }
          ],
          createdAt: "2023-06-10T22:44:17+05:30",
          updatedAt: "2023-06-10T22:44:17+05:30",
          bookmarks: [],
          id: "6"
        },
        {
          _id: "7e86db6c-88ff-4f0d-89dd-4ad0a38f6879",
          firstName: "Jacinda",
          lastName: "Ardern",
          username: "jacinda",
          password: "newzealand123",
          bio: "Prime Minister",
          website: "jacinda.com",
          displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg/330px-New_Zealand_Prime_Minister_Jacinda_Ardern_in_2018.jpg",
          followers: [],
          following: [
            {
              _id: "9e76db3c-88re-6f0d-80dd-4wd0a38f6899",
              firstName: "Boris",
              lastName: "Johnson",
              username: "johnson",
              password: "britain123",
              bio: "Prime Minister(sometimes)",
              website: "johnson.com",
              displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Boris_Johnson_official_portrait_%28cropped%29.jpg/330px-Boris_Johnson_official_portrait_%28cropped%29.jpg",
              followers: [],
              following: [],
              createdAt: "2023-06-10T22:44:17+05:30",
              updatedAt: "2023-06-10T22:44:17+05:30",
              bookmarks: [],
              id: "6"
            }
          ],
          createdAt: "2023-06-10T22:44:17+05:30",
          updatedAt: "2023-06-10T22:44:17+05:30",
          bookmarks: [],
          id: "5"
        }
      ],
      dislikedBy: []
    },
    comments: [],
    username: "putin",
    createdAt: "2021-06-26T16:30:00+00:00",
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "I single-handedly brought world peace... in my dreams.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: []
    },
    comments: [
      {
        _id: "tzwuqp",
        username: "johnson",
        text: "Oh Putin, your imagination knows no bounds!",
        votes: {
          upvotedBy: [],
          downvotedBy: []
        }
      }
    ],
    username: "putin",
    createdAt: "2023-01-02T09:15:00+00:00",
    updatedAt: formatDate()
  },
  {
    _id: uuid(),
    content: "In my spare time, I enjoy playing chess against myself, with each move resulting in a geopolitical crisis. It's a highly stimulating mental exercise, and it keeps my advisors on their toes.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: []
    },
    comments: [],
    username: "putin",
    createdAt: "2023-04-26T15:45:00+00:00",
    updatedAt: formatDate()
  },


  {
    _id: uuid(),
    content:
      "Just ate a bag of glitter so my insides can shine just as bright as my outside😎",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "trump_empire",
    createdAt: "2020-06-10T22:44:17+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Tried to build a tower taller than any other, but ended up with a fancy hairdo instead! 💁‍♂️🗼",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "hdhnff_z",
        username: "johnson",
        text: "Trump, your architectural endeavors never fail to amaze!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "abcgok_8",
        username: "jacinda",
        text: "Haha, I can't help but admire your unique sense of style!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "gyt_okay9",
        username: "merkel",
        text: "Oh Trump, your hair is truly a work of art!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "trump_empire",
    createdAt: "2023-05-26T17:45:00+00:00",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content: "I've discovered the secret to eternal youth: endless negotiations and bureaucracy! 🕰️📝. Live life like there is always like it's endless. Lmao",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "abcd_xxyz1",
        username: "johnson",
        text: "I love bureacracy and you.",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
    username: "merkel",
    createdAt: "2022-03-11T22:44:17+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: uuid(),
    content:
      "Can we have party tonight?",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jacinda",
    createdAt: "2022-06-22T22:44:17+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Life is a delightful rollercoaster ride, full of unexpected twists and turns. It's like trying to assemble a puzzle without the picture on the box – confusing, challenging, and sometimes downright hilarious. So, buckle up, embrace the chaos, and let laughter be your compass in this wild adventure called existence.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "jacinda",
    createdAt: "2022-06-01T22:44:17+05:30",
    updatedAt: formatDate(),
  },


  {
    _id: uuid(),
    content: "They say life is short, but my to-do list keeps getting longer! It's like I'm caught in a time warp where the hours vanish and the tasks multiply. Maybe I should invent a time machine to keep up with it all. Time management: a puzzle I have yet to solve!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "amen_34",
        username: "trump_empire",
        text: "Johnson, you need a 'Make Time Great Again' campaign!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "johnson",
    createdAt: "2022-02-28T10:12:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Life is a series of plot twists and unexpected endings. It's like reading a novel written by an author who loves surprises. Just when you think you've figured out the story, a new chapter begins, and everything changes. So, embrace the unpredictable, flip the pages with anticipation, and enjoy the adventure!",
    likes: {
      likeCount: 13,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "yutes_008",
        username: "xijinping",
        text: "Johnson, may our chapters intertwine in the book of history!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "johnson",
    createdAt: "2019-08-10T09:00:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Life is like a jigsaw puzzle, but someone keeps hiding the pieces. Just when I think I've got it figured out, the picture changes. It's a constant challenge, but hey, at least it keeps things interesting. I'm starting to think that puzzles are meant to be enjoyed, not solved!",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "james_776",
        username: "merkel",
        text: "Johnson, maybe we should collaborate on a puzzle-solving summit!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "johnson",
    createdAt: "2023-06-02T16:30:00+05:30",
    updatedAt: formatDate(),
  }
];
