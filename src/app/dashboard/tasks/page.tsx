const Task = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete Project Report",
      description:
        "Finish the final report for the client project and submit it.",
      status: "In Progress",
      dueDate: "2025-03-10",
    },
    {
      id: 2,
      title: "Update Dashboard UI",
      description:
        "Revamp the dashboard design for better usability and aesthetics.",
      status: "Pending",
      dueDate: "2025-03-12",
    },
    {
      id: 3,
      title: "Fix API Bugs",
      description:
        "Resolve issues in the authentication and data fetching APIs.",
      status: "Completed",
      dueDate: "2025-03-05",
    },
    {
      id: 4,
      title: "Plan Marketing Campaign",
      description:
        "Outline the social media marketing strategy for product launch.",
      status: "In Progress",
      dueDate: "2025-03-15",
    },
    {
      id: 5,
      title: "Team Meeting",
      description:
        "Discuss project milestones and address blockers with the team.",
      status: "Pending",
      dueDate: "2025-03-08",
    },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Tasks</h1>
        {/* Task List section */}
        <section className="space-y-6">
          {tasks.map((task) => (
            <div
              key={task.id}
              className={`flex items-center justify-between bg-white rounded-lg shadow-md p-6 border-l-4 ${
                task.status === "Completed"
                  ? "border-green-500 "
                  : task.status === "In Progress"
                  ? "border-yellow-500"
                  : "border-red-500"
              }`}
            >
              <div className="flex flex-col">
                <h2 className="text-xl font-semibold text-gray-800">
                  {task.title}
                </h2>
                <p className="text-sm text-green-600 mt-2">
                  {task.description}
                </p>
                <p className="text-sm text-green-600 mt-2">
                  Due date: {task.dueDate}
                </p>
              </div>
              <section className="flex space-x-4">
                <span
                  className={`px-4 py-3 text-center rounded-full  cursor-pointer${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100  text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {task.status}
                </span>
                <button
                  className={`px-4 py-3 text-center rounded-full cursor-pointer ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100  text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  Edit ✏️
                </button>

                <button
                  className={`px-4 py-3 text-center rounded-full cursor-pointer ${
                    task.status === "Completed"
                      ? "bg-green-100 text-green-600"
                      : task.status === "In Progress"
                      ? "bg-yellow-100  text-yellow-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  Delete 🗑️
                </button>
              </section>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Task;
