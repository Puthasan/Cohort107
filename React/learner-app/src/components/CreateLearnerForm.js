import { useState } from 'react';
import Button from './Button';

function CreateLearnerForm({ setLearners, learners }) { 

  const [newLearner, setNewLearner] = useState({
    name: "",
    bio: "",
    scores: []
  });

  const handleChange = (e) => {
    setNewLearner({
      ...newLearner,
      [e.target.name]: e.target.value
    })
  }

  // be call by submitting the form
  const handleSubmit = (e) => {
    e.preventDefault();

    // Add the new learner to the learners array
    setLearners([newLearner, ...learners]);

    // Reset the local new learner object
    setNewLearner({
      name: "",
      bio: "",
      scores: [],
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label htmlFor="name">Name: </label>
        <input 
          type="text" 
          name="name" 
          id="name" 
          value={newLearner.name} 
          onChange={handleChange}
        />
        
        <label htmlFor="bio">Bio: </label>
        <textarea 
          name="bio" 
          id="bio"
          value={newLearner.bio}
          onChange={handleChange}
        ></textarea>

        <Button type="submit">
          Create new Learner
        </Button>

        {/* <button type="submit">Create New Learner</button> */}
      </form>
    </div>
  );
}

export default CreateLearnerForm
