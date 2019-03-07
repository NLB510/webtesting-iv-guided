// const request = require("supertest");
const db = require("../data/dbConfig.js");

const Hobbits = require("./hobbitsModel.js");

describe("hobbits model", () => {
  describe("insert()", () => {
    
    // run so that it cleans the database after each test 
    // for the next test to run and do it's thing
    afterEach(async () => {
      await db("hobbits").truncate();
    });

    it("should insert the provided hobbit into the db", async () => {
      let hobbit = await Hobbits.insert({ name: "sam" });
      

      expect(hobbit.name).toBe("sam");
    });

    it("should insert the provided hobbit into the db", async () => {
      await Hobbits.insert({ name: "sam" });
      await Hobbits.insert({ name: "gaffer" });
      

      const hobbits = await db('hobbits');
      expect(hobbits).toHaveLength(2);
    });


    it("should insert the provided hobbit into the db", async () => {
      let hobbit = await Hobbits.insert({ name: "gaffer" });
      console.log(hobbit);
      expect(hobbit.name).toBe("gaffer");

      hobbit = await Hobbits.insert({name: 'sam'})
      
      expect(hobbit.name).toBe('sam')


    });


  });
});
