import ProjectCard from "./ProjectCard";

const projects = [
  { title: "آلة حاسبة", description: "جمع رقمين بـ JavaScript." },
  { title: "قائمة المهام", description: "إضافة ومسح مهام، وبتتحفظ في المتصفح." },
  { title: "مولّد اقتباسات", description: "اقتباس عشوائي في كل ضغطة." },
  { title: "الطقس", description: "بيانات حقيقية من API." },
];

function App() {
  return (
    <div>
      <h1>مشاريعي</h1>
      <div className="cards">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;