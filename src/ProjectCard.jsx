function ProjectCard(props) {
  return (
    <div className="w-52 rounded-xl bg-white p-4 text-gray-800 shadow-md transition hover:shadow-xl">
      <h3 className="mb-2 text-lg font-bold text-blue-600">{props.title}</h3>
      <p className="text-sm">{props.description}</p>
    </div>
  );
}

export default ProjectCard;