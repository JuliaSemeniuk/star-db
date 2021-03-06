export default class SwapiService {
  _apiBase = "https://swapi.dev/api"; //_ - show that it's a private part of a class, tell other devs you shoul not change it
  async getResourse(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}. Received ${res.status}`);
    }

    return await res.json();
  }

  async getAllPeople() {
    const res = await this.getResourse(`/people/`);
    return res.results;
  }

  getPerson(id) {
    return this.getResourse(`/people/${id}`);
  }

  async getAllPlanets() {
    const res = await this.getResourse(`/planets/`);
    return res.results;
  }

  getPlanet(id) {
    return this.getResourse(`/planets/${id}`);
  }

  async getAllStarships() {
    const res = await this.getResourse(`/starships/`);
    return res.results;
  }

  getStarship(id) {
    return this.getResourse(`/starships/${id}`);
  }
}

export const swapi = new SwapiService();

// swapi.getAllPeople().then((people) => {
//   people.forEach((person) => {
//     console.log(person.name);
//   });
// });

// swapi.getPerson(3).then((person) => {
//   console.log(`I am number 3 ${person.name}`);
// });
