import { renderRoutes } from "../router/renderRoute";
export default function Home(props) {
  console.log(props);
  return (
    <div>
      我是home ---------------
      {renderRoutes(props.routes || [])}
    </div>
  );
}
