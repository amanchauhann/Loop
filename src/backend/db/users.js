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
    password: "russia",
    bio: "President",
    website: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi3hYXym8P_AhXt8zgGHTthD4QQFnoECDYQAQ&url=http%3A%2F%2Fen.kremlin.ru%2F&usg=AOvVaw0KeRAKNfm-JtIvxrWbFSOI",
    displayImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Vladimir_Putin_17-11-2021_%28cropped%29.jpg/1200px-Vladimir_Putin_17-11-2021_%28cropped%29.jpg",
    followers: [],
    following: [],
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
    website: "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjTjonInMP_AhW74TgGHWNQBVIQFnoECDQQAQ&url=https%3A%2F%2Fwww.forbes.com%2Fprofile%2Fdonald-trump%2F&usg=AOvVaw37ofZPIWeHiuNvDXzlIDd6",
    displayImg:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/1200px-Donald_Trump_official_portrait.jpg",
    followers: [],
    following: [],
    createdAt: "2023-06-10T22:44:17+05:30",
    updatedAt: "2023-06-10T22:44:17+05:30",
    bookmarks: [],
    id: "2",
  },
];
