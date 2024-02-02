import Score from "./Score";
import Button from "./Button";

function Learner({ learner, learners, setLearners }) {

  const { name, bio, scores } = learner;

  const handleDelete = (e) => {
  const results = learners.filter(l => l.name !== name);
  console.log(results);

  setLearners(results);
}

  return (
    <div>
      {/* Display name  */}
      <p>
        <b>Name: </b>
        {name}
        <Button onClick={handleDelete}>DELETE</Button>
      </p>

      {/* Display Bio  */}
      <p>
        <b>Bio: </b>
        {bio}
      </p>

      {/* Display Scores  */}
      <div>
        {scores.map((score) => (
          <Score score={score} />
        ))}
      </div>
      <hr />
    </div>
  );
}

export default Learner;