import { Button } from "@/components/ui/button";

function HomePage() {
  return (
    <div className="container">
      <h1 className="text-3xl">HomePage</h1>
      <Button variant="secondary" size="lg" className="capitalize m-8">
        Click me
      </Button>
    </div>
  );
}

export default HomePage;
