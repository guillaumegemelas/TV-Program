import data from "../data.json";
import Program from "./Program";

const Section = () => {
  return (
    <div>
      {data.map((prog) => {
        return (
          <Program
            time={prog.time}
            title={prog.title}
            type={prog.type}
            duration={prog.duration}
            image={prog.image}
            isUnseen={prog.isUnseen}
            direct={prog.direct}
          />
        );
      })}
    </div>
  );
};

export default Section;
