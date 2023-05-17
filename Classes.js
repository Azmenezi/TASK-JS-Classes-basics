/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 *
 * 2. Add the constructor that initializes all properties
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 *
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021),
 *   and returns the age of the person
 *
 * after you are done with the class, create at least 3 objects of type Person.
 * print every person's name using the method printName of each object
 * print out the sum of their ages using calculateAge() method
 */
class Person {
  firstName = "";
  lastName = "";
  gender = "";
  birthYear = 0;

  constructor(firstName, lastName, gender, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
  }

  printName = () => {
    console.log(this.firstName + " " + this.lastName);
  };

  calculateAge = (currentYear) => currentYear - this.birthYear;
}

const person1 = new Person("Aziz", "Alenezi", "male", 2001);
const person2 = new Person("Nancy", "Alnancy", "female", 1995);
const person3 = new Person("Yousef", "Alyousef", "male", 1990);
person1.printName();
person2.printName();
person3.printName();
console.log(
  person1.calculateAge(2023) +
    person2.calculateAge(2023) +
    person3.calculateAge(2023)
);

/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * - duration (in minutes)
 * - genre
 * - [rating]
 *
 * 2. Add the constructor that initializes all properties except the rating array, you should not pass it in the constructor method,
 * and just initialize it with empty array.
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  title = "";
  duration = 0;
  genre = "";
  rating = [];

  constructor(title, duration, genre) {
    this.title = title;
    this.duration = duration;
    this.genre = genre;
  }
  rate = (rating) =>
    rating > 0 && rating < 10 ? this.rating.push(rating) : undefined;

  averageRating = () =>
    this.rating.reduce((a, b) => a + b, 0) / this.rating.length;
}

const movie1 = new Movie("Panther", 120, "Horror");
movie1.rate(3);
movie1.rate(4);
movie1.rate(8);
movie1.rate(7);
console.log(movie1);
console.log(movie1.averageRating());
/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person {
  movies = [];
  constructor(firstName, lastName, gender, birthYear) {
    super(firstName, lastName, gender, birthYear);
  }

  addMovie = (movie) => this.movies.push(movie);
}
