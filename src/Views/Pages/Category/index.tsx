import PageLayout from "Views/Components/Common/PageLayout";
import { useParams } from "react-router-dom";

const CategoryPage: React.FunctionComponent = () => {
  const { category } = useParams<{ category: string }>();

  return <PageLayout></PageLayout>;
};

export default CategoryPage;
