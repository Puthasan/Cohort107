function getLearnerData(courseInfo, assignmentGroup, learnerSubmissions) {
  const result = [];

  // Create a map to store scores and possible scores for each assignment
  const assignmentInfo = new Map();
  assignmentGroup.assignments.forEach((assignment) => {
    assignmentInfo.set(assignment.id, {
      points_possible: assignment.points_possible,
      due_at: new Date(assignment.due_at).getTime(),
    });
  });

  // Process learner submissions
  const learnerData = new Map();
  learnerSubmissions.forEach((submission) => {
    const { learner_id, assignment_id, submission: { score, submitted_at } } = submission;

    if (!learnerData.has(learner_id)) {
      learnerData.set(learner_id, {
        id: learner_id,
        totalScore: 0,
        totalPossibleScore: 0,
        scores: {},
      });
    }

    const learner = learnerData.get(learner_id);
    const assignment = assignmentInfo.get(assignment_id);
    const assignmentKey = assignment_id.toString();

    // Calculate late penalty (if submission is late)
    const submittedTime = new Date(submitted_at).getTime();
    const dueTime = assignment.due_at;
    const isLate = submittedTime > dueTime;
    const latePenalty = isLate ? (submittedTime - dueTime) / (24 * 60 * 60 * 1000) * 15 : 0;

    // Update learner data
    learner.totalScore += score - latePenalty;
    learner.totalPossibleScore += assignment.points_possible;
    learner.scores[assignmentKey] = score / assignment.points_possible;

    // Update late key
    if (isLate) {
      learner[assignmentKey + '_late'] = (score - latePenalty) / assignment.points_possible;
    }
  });

  // Calculate averages and format the result
  learnerData.forEach((learner) => {
    const avg = learner.totalScore / learner.totalPossibleScore;
    const formattedLearner = {
      id: learner.id,
      avg: (Math.round(avg * 100) / 100) * 100 + '%', 
    };

    // Add individual assignment scores
    for (const [assignmentKey, assignmentScore] of Object.entries(learner.scores)) {
      formattedLearner[assignmentKey] = Math.round(assignmentScore * 1000) / 1000; // Round to 3 decimal places
    }

    // Add late scores
    for (const [assignmentKey, lateScore] of Object.entries(learner).filter(([key]) => key.endsWith('_late'))) {
      formattedLearner[assignmentKey] = Math.round(lateScore * 1000) / 1000; // Round to 3 decimal places
    }

    result.push(formattedLearner);
  });

  return result;
}
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};

// The provided assignment group.
const AssignmentGroup = {
  id: 12345,
  name: "Fundamentals of JavaScript",
  course_id: 451,
  group_weight: 25,
  assignments: [
    {
      id: 1,
      name: "Declare a Variable",
      due_at: "2023-01-25",
      points_possible: 50
    },
    {
      id: 2,
      name: "Write a Function",
      due_at: "2023-02-27",
      points_possible: 150
    },
    {
      id: 3,
      name: "Code the World",
      due_at: "3156-11-15",
      points_possible: 500
    }
  ]
};

// The provided learner submission data.
const LearnerSubmissions = [
  {
    learner_id: 125,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-25",
      score: 47
    }
  },
  {
    learner_id: 125,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-02-12",
      score: 150
    }
  },
  {
    learner_id: 125,
    assignment_id: 3,
    submission: {
      submitted_at: "2023-01-25",
      score: 400
    }
  },
  {
    learner_id: 132,
    assignment_id: 1,
    submission: {
      submitted_at: "2023-01-24",
      score: 39
    }
  },
  {
    learner_id: 132,
    assignment_id: 2,
    submission: {
      submitted_at: "2023-03-07",
      score: 140
    }
  }
];

const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
