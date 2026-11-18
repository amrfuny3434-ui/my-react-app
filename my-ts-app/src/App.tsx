type ProjectCardProps = {
  title: string;
  description: string;
};

function ProjectCard({ title, description }: ProjectCardProps) {
  return (
    <div style={{ border: "1px solid #cccccc", padding: 16, borderRadius: 8, margin: 8 }}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>TypeScript</h1>
      <ProjectCard title="آلة حاسبة" description={123} />
      <ProjectCard title="الطقس" description="بيانات من API." />
    </div>
  );
}

export default App;