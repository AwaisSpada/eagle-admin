import  { useState } from "react";
import SearchableSelect from "../common/SearchableSelect";

const Actors = () => {
  const [actor, setActor] = useState(null);
  const [director, setDirector] = useState(null);

  const actors = [
    { label: "Leonardo DiCaprio", value: "leonardo_dicaprio" },
    { label: "Robert Downey Jr.", value: "robert_downey_jr" },
    { label: "Scarlett Johansson", value: "scarlett_johansson" },
    { label: "Tom Cruise", value: "tom_cruise" },
    { label: "Johnny Depp", value: "johnny_depp" },
    { label: "Brad Pitt", value: "brad_pitt" },
    { label: "Angelina Jolie", value: "angelina_jolie" },
    { label: "Chris Hemsworth", value: "chris_hemsworth" },
    { label: "Emma Watson", value: "emma_watson" },
    { label: "Dwayne Johnson", value: "dwayne_johnson" },
  ];

  const directors = [
    { label: "Christopher Nolan", value: "christopher_nolan" },
    { label: "Steven Spielberg", value: "steven_spielberg" },
    { label: "Martin Scorsese", value: "martin_scorsese" },
    { label: "Quentin Tarantino", value: "quentin_tarantino" },
    { label: "James Cameron", value: "james_cameron" },
    { label: "Ridley Scott", value: "ridley_scott" },
    { label: "Denis Villeneuve", value: "denis_villeneuve" },
    { label: "Francis Ford Coppola", value: "francis_ford_coppola" },
    { label: "Peter Jackson", value: "peter_jackson" },
    { label: "Guillermo del Toro", value: "guillermo_del_toro" },
  ];

  return (
    <div>
      <div className=" flex justify-center items-center my-6">
        <div className="w-full bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">
            Actors & Directors
          </h2>
          <div className="flex gap-6">
            <div className="w-1/2 ">
              <SearchableSelect
                options={actors}
                value={actor}
                onChange={setActor}
                label="Actors"
                asterisk={true}
              />
            </div>
            <div className="w-1/2 ">
              <SearchableSelect
                options={directors}
                value={director}
                onChange={setDirector}
                label="Directors"
                asterisk={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actors;
