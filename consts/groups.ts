import { NewGroupInterface, TodoGroupInterface } from "types/todos";
import {
  faBaseballBatBall,
  faBasketball,
  faCalendarDay,
  faCar,
  faCartShopping,
  faCat,
  faClock,
  faCoins,
  faDog,
  faDumbbell,
  faFish,
  faFootball,
  faGift,
  faGraduationCap,
  faHeart,
  faHouse,
  faList,
  faMusic,
  faPaw,
  faPeopleGroup,
  faPersonRunning,
  faPersonSwimming,
  faPills,
  faSailboat,
  faScissors,
  faSoccerBall,
  faStar,
  faSun,
  faTableTennisPaddleBall,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

export enum StaticGroups {
  Today = "today",
  Scheduled = "scheduled",
}

export const todayGroup: TodoGroupInterface = {
  id: "1",
  name: StaticGroups.Today,
  icon: "calendarDay",
};

export const scheduledGroup: TodoGroupInterface = {
  id: "2",
  name: StaticGroups.Scheduled,
  icon: "clock",
};

export const staticGroups: TodoGroupInterface[] = [todayGroup, scheduledGroup];

export const defaultGroup: NewGroupInterface = {
  name: "",
  icon: "list",
};

export const groupInputs: Array<keyof NewGroupInterface> = ["name", "icon"];

export const groupIcons = {
  list: faList,
  dumbbell: faDumbbell,
  cartShopping: faCartShopping,
  graduationCap: faGraduationCap,
  house: faHouse,
  peopleGroup: faPeopleGroup,
  personSwimming: faPersonSwimming,
  personRunning: faPersonRunning,
  car: faCar,
  music: faMusic,
  fish: faFish,
  dog: faDog,
  cat: faCat,
  paw: faPaw,
  pills: faPills,
  coins: faCoins,
  sun: faSun,
  heart: faHeart,
  star: faStar,
  scissors: faScissors,
  sailboat: faSailboat,
  soccerBall: faSoccerBall,
  football: faFootball,
  basketball: faBasketball,
  baseballBatBall: faBaseballBatBall,
  tableTennisPaddleBall: faTableTennisPaddleBall,
  utensils: faUtensils,
  gift: faGift,
  calendarDay: faCalendarDay,
  clock: faClock,
};
