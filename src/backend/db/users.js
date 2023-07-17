import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  // {
  //   _id: uuid(),
  //   firstName: "Adarsh",
  //   lastName: "Balika",
  //   username: "adarshbalika",
  //   password: "adarshBalika123",
  //   createdAt: formatDate(),
  //   updatedAt: formatDate(),
  // },
  {
    _id: "220d9389-fee1-4635-8cd7-686af3a23f36",
    firstName: "Vladamir",
    lastName: "Putin",
    username: "putin",
    password: "russia123",
    bio: "President",
    website: "putin.com",
    displayImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/1200px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg",
    followers: [],
    following: [
      {
        _id: "431c4f9e-8be1-4fe0-bca5-9753c8e7120f",
        firstName: "Donald",
        lastName: "Trump",
        username: "trump_empire",
        password: "vodka",
        bio: "President(part-time)",
        website: "trump.com",
        displayImg:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
        followers: [],
        following: [],
        createdAt: "2023-06-10T22:44:17+05:30",
        updatedAt: "2023-06-10T22:44:17+05:30",
        bookmarks: [],
        id: "2",
      },
    ],
    createdAt: "2023-06-10T22:44:17+05:30",
    updatedAt: "2023-06-10T22:44:17+05:30",
    bookmarks: [],
    id: "1",
  },
  {
    _id: "431c4f9e-8be1-4fe0-bca5-9753c8e7120f",
    firstName: "Donald",
    lastName: "Trump",
    username: "trump_empire",
    password: "vodka",
    bio: "President(part-time)",
    website: "trump.com",
    displayImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
    followers: [],
    following: [
      {
        _id: "220d9389-fee1-4635-8cd7-686af3a23f36",
        firstName: "Vladamir",
        lastName: "Putin",
        username: "putin",
        password: "russia123",
        bio: "President",
        website: "putin.com",
        displayImg:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/1200px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg",
        followers: [],
        following: [
          {
            _id: "431c4f9e-8be1-4fe0-bca5-9753c8e7120f",
            firstName: "Donald",
            lastName: "Trump",
            username: "trump_empire",
            password: "vodka",
            bio: "President(part-time)",
            website: "trump.com",
            displayImg:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
            followers: [],
            following: [],
            createdAt: "2023-06-10T22:44:17+05:30",
            updatedAt: "2023-06-10T22:44:17+05:30",
            bookmarks: [],
            id: "2",
          },
        ],
        createdAt: "2023-06-10T22:44:17+05:30",
        updatedAt: "2023-06-10T22:44:17+05:30",
        bookmarks: [],
        id: "1",
      },
      {
        _id: "b8a8cefa-6926-4b92-b693-846fb38d4a11",
        firstName: "Angela",
        lastName: "Merkel",
        username: "merkel",
        password: "germany123",
        bio: "Chancellor",
        website: "merkel.com",
        displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/644px-Angela_Merkel_2019_cropped.jpg",
        followers: [],
        following: [],
        createdAt: "2023-06-10T22:44:17+05:30",
        updatedAt: "2023-06-10T22:44:17+05:30",
        bookmarks: [],
        id: "3"
      }
    ],
    createdAt: "2023-06-10T22:44:17+05:30",
    updatedAt: "2023-06-10T22:44:17+05:30",
    bookmarks: [],
    id: "2",
  },
  {
    _id: "b8a8cefa-6926-4b92-b693-846fb38d4a11",
    firstName: "Angela",
    lastName: "Merkel",
    username: "merkel",
    password: "germany123",
    bio: "Chancellor",
    website: "merkel.com",
    displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/644px-Angela_Merkel_2019_cropped.jpg",
    followers: [],
    following: [
      {
        _id: "431c4f9e-8be1-4fe0-bca5-9753c8e7120f",
        firstName: "Donald",
        lastName: "Trump",
        username: "trump_empire",
        password: "vodka",
        bio: "President(part-time)",
        website: "trump.com",
        displayImg:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
        followers: [],
        following: [
          {
            _id: "220d9389-fee1-4635-8cd7-686af3a23f36",
            firstName: "Vladamir",
            lastName: "Putin",
            username: "putin",
            password: "russia123",
            bio: "President",
            website: "putin.com",
            displayImg:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/1200px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg",
            followers: [],
            following: [
              {
                _id: "431c4f9e-8be1-4fe0-bca5-9753c8e7120f",
                firstName: "Donald",
                lastName: "Trump",
                username: "trump_empire",
                password: "vodka",
                bio: "President(part-time)",
                website: "trump.com",
                displayImg:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
                followers: [],
                following: [],
                createdAt: "2023-06-10T22:44:17+05:30",
                updatedAt: "2023-06-10T22:44:17+05:30",
                bookmarks: [],
                id: "2",
              },
            ],
            createdAt: "2023-06-10T22:44:17+05:30",
            updatedAt: "2023-06-10T22:44:17+05:30",
            bookmarks: [],
            id: "1",
          },
          {
            _id: "b8a8cefa-6926-4b92-b693-846fb38d4a11",
            firstName: "Angela",
            lastName: "Merkel",
            username: "merkel",
            password: "germany123",
            bio: "Chancellor",
            website: "merkel.com",
            displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Angela_Merkel_2019_cropped.jpg/644px-Angela_Merkel_2019_cropped.jpg",
            followers: [],
            following: [],
            createdAt: "2023-06-10T22:44:17+05:30",
            updatedAt: "2023-06-10T22:44:17+05:30",
            bookmarks: [],
            id: "3"
          }
        ],
        createdAt: "2023-06-10T22:44:17+05:30",
        updatedAt: "2023-06-10T22:44:17+05:30",
        bookmarks: [],
        id: "2",
      },
      {
        _id: "f67ae675-7ce3-49e5-bb1e-80568810c7f1",
        firstName: "Xi",
        lastName: "Jinping",
        username: "xijinping",
        password: "china123",
        bio: "General Secretary",
        website: "jinping.com",
        displayImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Xi_Jinping_2023.jpg/330px-Xi_Jinping_2023.jpg",
        followers: [],
        following: [],
        createdAt: "2023-06-10T22:44:17+05:30",
        updatedAt: "2023-06-10T22:44:17+05:30",
        bookmarks: [],
        id: "4"
      }
    ],
    createdAt: "2023-06-10T22:44:17+05:30",
    updatedAt: "2023-06-10T22:44:17+05:30",
    bookmarks: [],
    id: "3"
  },
  {
    _id: "f67ae675-7ce3-49e5-bb1e-80568810c7f1",
    firstName: "Xi",
    lastName: "Jinping",
    username: "xijinping",
    password: "china123",
    bio: "General Secretary",
    website: "jinping.com",
    displayImg: "https://res.cloudinary.com/dojsq93dk/image/upload/f_auto,q_auto/kmpbp7i1qztt0fnouxrm",
    followers: [],
    following: [],
    createdAt: "2023-06-10T22:44:17+05:30",
    updatedAt: "2023-06-10T22:44:17+05:30",
    bookmarks: [],
    id: "4"
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
  },
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

];
